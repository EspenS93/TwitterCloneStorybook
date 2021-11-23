import { ReactNode } from "react";
import { DefaultProps } from "../../interfaces/DefaultProps";
import "./tweet.scss";
import { User, IUser } from "../../interfaces/User";

interface TweetProps extends DefaultProps {
  isRetweeted?: boolean;
  user?: IUser;
  header?: ReactNode;
  body?: ReactNode;
  multimediaSrc?: string;
  replies?: TweetProps[];
  isLastShownReply?: boolean;
  showThread?: boolean;
  isHead?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Tweet = ({
  header,
  body,
  isRetweeted = false,
  multimediaSrc,
  user = User,
  replies = [],
  isLastShownReply = true,
  showThread = false,
  isHead = true,
  ...props
}: TweetProps) => {
  const groupName = props.groupName ? props.groupName + "-tweet" : "tweet";
  const id = props.id ? groupName + "-" + props.id : undefined;
  const numberOfReplies = replies.length;
  if (isHead) {
    isLastShownReply = !(numberOfReplies > 0);
  }
  const repliesMoreThan5 = numberOfReplies > 5;
  if (repliesMoreThan5) {
    replies = replies.slice(0, 5);
  }
  let classNames = props.className ?? "";
  classNames += isLastShownReply ? " w3-border-bottom" : "";
  return (
    <>
      <div
        id={id}
        className={classNames + " w3-container w3-padding-large"}
        style={{ display: "flex" }}
      >
        <div className={""}>
          {!isHead && <div>strek opp til forrige tweet sin strek</div>}
          <img
            src={user.profilePicture}
            alt="Person"
            className={"w3-circle w3-image"}
            style={{ width: "48px", height: "48px" }}
          />
          {!isLastShownReply && (
            <div>lang strek ned til neste tweet sitt profilbilde</div>
          )}
        </div>
        <div className={""} style={{ flexGrow: 1 }}>
          {header && <header className="w3-container">{header}</header>}

          {body && (
            <div className="w3-container">
              <div style={{ paddingLeft: "16px", paddingRight: "16px" }}>
                <div className={"text"}>{body}</div>
                {multimediaSrc && <div className={"image"}></div>}
                <div className={"buttons"}>comment, retweet, like, share</div>
              </div>
            </div>
          )}
        </div>
        {showThread && <div>Show thread</div>}
      </div>
      {replies.map((props, index) => {
        props.isLastShownReply = index === numberOfReplies;
        props.showThread = props.isLastShownReply && repliesMoreThan5;
        props.isHead = false;
        return <Tweet key={index} {...props} />;
      })}
    </>
  );
};
