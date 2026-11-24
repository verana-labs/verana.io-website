// Works around an intermittent build failure in next/font/google on Next 15.
//
// Google Fonts sometimes answers with font URLs that have no file extension
// (fonts.gstatic.com/l/font?kit=...). The Next 15 loader reads the extension
// from the URL with a regex and crashes on those with "TypeError: Cannot read
// properties of null (reading '1')". The answer is an HTTP 200, so Next does
// not retry, and a build fails at random. Upstream fixed it in Next 16.4.3;
// Next 15 has no fix (see vercel/next.js#99132).
//
// This script patches the loader to fall back to the file's signature bytes
// when the URL has no extension. It runs before every build (npm "prebuild",
// so CI and the Docker image both get it) and is idempotent.
//
// Delete this script and the "prebuild" entry once Next is 16.4.3 or later.

import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const MARKER = "patched by scripts/patch-next-font.mjs";

const BROKEN =
  "const ext = /\\.(woff|woff2|eot|ttf|otf)$/.exec(googleFontFileUrl)[1];";
const FIXED = `const ext = /\\.(woff|woff2|eot|ttf|otf)$/.exec(googleFontFileUrl)?.[1] ?? fontExtFromBytes(fontFileBuffer); // ${MARKER}`;

// Function declarations are hoisted, so appending it at the end of the module
// makes it callable from the line above.
const HELPER = `
// ${MARKER}: file type from the font's signature bytes, for URLs without an extension.
function fontExtFromBytes(buf) {
    const magic = buf.subarray(0, 4).toString("latin1");
    if (magic === "wOF2") return "woff2";
    if (magic === "wOFF") return "woff";
    if (magic === "OTTO") return "otf";
    if (magic === "\\u0000\\u0001\\u0000\\u0000" || magic === "true") return "ttf";
    return "woff2";
}
`;

const file = require.resolve(
  "next/dist/compiled/@next/font/dist/google/loader.js",
);
const source = readFileSync(file, "utf8");

if (source.includes(MARKER)) {
  process.exit(0);
}
if (!source.includes(BROKEN)) {
  console.warn(
    "patch-next-font: the next/font loader no longer has the line this script fixes; " +
      "if Next is 16.4.3 or later, delete scripts/patch-next-font.mjs and the prebuild entry.",
  );
  process.exit(0);
}

writeFileSync(file, source.replace(BROKEN, FIXED) + HELPER);
console.log("patch-next-font: patched next/font loader for extensionless Google Fonts URLs");
