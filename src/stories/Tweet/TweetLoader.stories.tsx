import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TweetLoader } from "../../components/Tweet/TweetLoader";

export default {
  title: "components/TweetLoader",
  component: TweetLoader,
} as ComponentMeta<typeof TweetLoader>;

const Template: ComponentStory<typeof TweetLoader> = (args) => <TweetLoader />;
export const Default = Template.bind({});
