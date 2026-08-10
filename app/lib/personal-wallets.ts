// The Verana Playground's personal-wallet registry, read from the playground
// repo so the list on /infrastructure stays in sync with the wallets actually
// integrated there. Icons resolve to raw GitHub URLs; the list refreshes with
// the page's ISR window.

import { load as loadYaml } from "js-yaml";
import { z } from "zod";
import { LINKS } from "./site";

const PLAYGROUND_RAW =
  "https://raw.githubusercontent.com/verana-labs/playground/refs/heads/main";

export const PERSONAL_WALLETS_URL = `${PLAYGROUND_RAW}/personal-wallets.yaml`;

// Only the fields this site renders; unknown fields in the upstream file are
// stripped, so playground-side schema additions never break this page.
const WalletSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  vendor: z.string().min(1),
  icon: z.string().optional(),
  formats: z.array(z.string()).optional(),
  browser: z.boolean().optional(),
  recommended: z.boolean().optional(),
  hidden: z.boolean().optional(),
});

const FileSchema = z.object({ wallets: z.array(WalletSchema) });

export type PersonalWallet = {
  id: string;
  name: string;
  vendor: string;
  icon?: string;
  /** Display labels of the credential formats the wallet passed the loop with. */
  formats: string[];
  browser: boolean;
  recommended: boolean;
  /** Deep link to this wallet's demo on the playground. */
  playgroundUrl: string;
};

const FORMAT_LABELS: Record<string, string> = {
  anoncreds: "AnonCreds",
  "openid4vc-sdjwt": "SD-JWT VC",
};

function iconUrl(ref: string | undefined): string | undefined {
  if (!ref) return undefined;
  if (/^https?:\/\//.test(ref)) return ref;
  return `${PLAYGROUND_RAW}/wallets/${ref.replace(/^\.\//, "")}`;
}

/** Fetch and parse the playground's wallet registry (recommended first, as on
 *  the playground home). Throws on network or schema failure; callers render
 *  a fallback in that case. */
export async function listPersonalWallets(): Promise<PersonalWallet[]> {
  const res = await fetch(PERSONAL_WALLETS_URL, {
    next: { revalidate: 3600 },
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) {
    throw new Error(`personal-wallets.yaml fetch failed: ${res.status}`);
  }
  const parsed = FileSchema.parse(loadYaml(await res.text()));
  const wallets: PersonalWallet[] = parsed.wallets
    .filter((w) => !w.hidden)
    .map((w) => ({
      id: w.id,
      name: w.name,
      vendor: w.vendor,
      icon: iconUrl(w.icon),
      formats: (w.formats ?? []).map((f) => FORMAT_LABELS[f] ?? f),
      browser: w.browser ?? false,
      recommended: w.recommended ?? false,
      playgroundUrl: `${LINKS.playground}/personal-wallets?wallet=${encodeURIComponent(w.id)}`,
    }));
  return [
    ...wallets.filter((w) => w.recommended),
    ...wallets.filter((w) => !w.recommended),
  ];
}
