import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    watchForFileChanges: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
