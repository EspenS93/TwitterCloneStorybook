import { ReactNode } from "react";
import { DefaultProps } from "../../interfaces/DefaultProps";
import "./widget.scss";

interface WidgetProps extends DefaultProps {
  padded?: boolean;
  children: ReactNode;
}

export const Widget = ({ padded, children, ...props }: WidgetProps) => {
  let classNames = props.className ?? "";
  const groupName = props.groupName ? props.groupName + "-widget" : "widget";
  const id = props.id ? groupName + "-" + props.id : undefined;
  classNames += " widget w3-border w3-round-xlarge";
  classNames += padded ? " w3-padding-large" : "";

  return (
    <div id={id} className={classNames}>
      {children}
    </div>
  );
};
