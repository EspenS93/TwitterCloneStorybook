import { Tweet } from "./Tweet";

export const TweetLoader = () => {
  return (
    <>
      <Tweet body={"First tweet"} header={"User1"} />
      <Tweet body={"Second tweet"} header={"User2"} />
      <Tweet body={"Third tweet"} header={"User3"} />
      <Tweet body={"Fourth tweet"} header={"User4"} />
      <Tweet body={"Fifth tweet"} header={"User5"} />
    </>
  );
};
