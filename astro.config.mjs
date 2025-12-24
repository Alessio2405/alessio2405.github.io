import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://alessio2405.github.io",
  base: "/",
  output: "static",
  integrations: [tailwind()],
});
