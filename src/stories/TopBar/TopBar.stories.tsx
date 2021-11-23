import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TopBar } from "../../components/TopBar/TopBar";

export default {
  title: "components/TopBar",
  component: TopBar,
} as ComponentMeta<typeof TopBar>;

const Template: ComponentStory<typeof TopBar> = (args) => <TopBar {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
