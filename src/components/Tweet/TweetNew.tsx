import { ReactNode } from "react";
import { DefaultProps } from "../../interfaces/DefaultProps";
import { Tweet } from "./Tweet";

interface TweetNewProps extends DefaultProps {
  isRetweeted?: boolean;
  user?: any;
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const TweetNew = ({ ...props }: TweetNewProps) => {
  const groupName = props.groupName
    ? props.groupName + "-new-tweet"
    : "new-tweet";
  const id = props.id ? groupName + "-" + props.id : undefined;
  const body = (
    <div
      aria-activedescendant="typeaheadFocus-0.8704526431654801"
      aria-autocomplete="list"
      aria-controls="typeaheadDropdownWrapped-0"
      aria-describedby="placeholder-btp3t"
      aria-label="Tweet text"
      aria-multiline="true"
      className={"notranslate public-DraftEditor-content"}
      role="textbox"
      spellCheck="true"
      style={{
        outline: "currentcolor none medium",
        userSelect: "text",
        whiteSpace: "pre-wrap",
        overflowWrap: "break-word",
      }}
      tabIndex={0}
      no-focuscontainer-refocus="true"
      contentEditable="true"
      placeholder={"skriv her inne"}
    ></div>
  );
  return (
    <Tweet
      id={id}
      groupName={groupName}
      className={props.className}
      body={body}
    ></Tweet>
  );
};
