import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

const ROUTES = [
  "",
  "/ecosystems",
  "/identity",
  "/discovery",
  "/use-cases",
  "/software",
  "/build",
  "/governance",
  "/brand",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
