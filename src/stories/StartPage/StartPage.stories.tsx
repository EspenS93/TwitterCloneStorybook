import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StartPage } from "../../composites/StartPage/StartPage";

export default {
  title: "components/StartPage",
  component: StartPage,
} as ComponentMeta<typeof StartPage>;

const Template: ComponentStory<typeof StartPage> = (args) => (
  <StartPage {...args} />
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
