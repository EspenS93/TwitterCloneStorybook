import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tweet } from "../../components/Tweet/Tweet";

export default {
  title: "components/Tweet",
  component: Tweet,
} as ComponentMeta<typeof Tweet>;

const Template: ComponentStory<typeof Tweet> = (args) => <Tweet {...args} />;
export const Default = Template.bind({});
Default.args = {
  body: "Body",
  header: "Header",
};
