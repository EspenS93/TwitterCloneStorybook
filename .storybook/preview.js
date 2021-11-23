import "../src/assets/styles/w3.scss";
import "../src/assets/styles/themes/w3-theme-black.scss";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
