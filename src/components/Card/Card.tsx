import { ReactNode } from "react";
import { DefaultProps } from "../../interfaces/DefaultProps";
import "./card.scss";

interface CardProps extends DefaultProps {
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Card = ({ header, body, footer, ...props }: CardProps) => {
  const classNames = props.className;
  const groupName = props.groupName ? props.groupName + "-card" : "card";
  const id = props.id ? groupName + "-" + props.id : undefined;

  return (
    <div id={id} className={classNames + " w3-card-4"}>
      {header && <header className="w3-container w3-blue">{header}</header>}

      <div className="w3-container">{body}</div>

      <footer className="w3-container w3-blue">{footer}</footer>
    </div>
  );
};
