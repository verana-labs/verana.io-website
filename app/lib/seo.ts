import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, OG_IMAGE } from "./site";

/**
 * Per-page metadata: canonical URL plus Open Graph and Twitter cards that
 * carry the page's own title/description (Next's title template does not
 * propagate into og/twitter automatically).
 */
export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = path === "/" ? title : `${title} · ${SITE_NAME}`;
  return {
    // the layout's "%s · Verana" template must not double-suffix the home title
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      site: "@Verana_io",
      images: [OG_IMAGE],
    },
  };
}
