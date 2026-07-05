import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

const ROUTES = [
  "",
  "/ecosystems",
  "/identity",
  "/discovery",
  "/use-cases",
  "/infrastructure",
  "/about",
  "/integrations",
  "/brand",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
