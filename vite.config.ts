import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/iter/count.ts"),
      name: "@fightingdreamer/iter-count",
      formats: ["es", "cjs"],
      fileName: "iter-count",
    },
  },
});
