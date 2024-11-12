import { setCompodocJson } from "@storybook/addon-docs/angular";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: "iphone5",
  },
  // https://github.com/storybookjs/storybook/issues/16916#issuecomment-988303119
  /**
   * This is a workaround that prevents crashing but breaks the component controls.
   */
  angularLegacyRendering: true,
  options: {
    storySort: {
      order: ["Atoms", "Molecules", "Organisms", "Templates", "Pages", "Utils"],
    },
  },
};
export const tags = ["autodocs"];
