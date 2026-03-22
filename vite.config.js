import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
/** GitHub Pages project URL: https://<user>.github.io/<repo>/ — must match repo name. */
const repoBase = "/harbor-task/";
export default defineConfig(({ mode }) => ({
    plugins: [react(), tailwindcss()],
    base: mode === "production" ? repoBase : "/",
}));
