import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Page } from "../../components/Page/Page";

export default {
  title: "components/Page",
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
