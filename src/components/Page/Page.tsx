import "./page.scss";
import { ReactNode } from "react";
import { DefaultProps } from "../../interfaces/DefaultProps";

interface PageProps extends DefaultProps {
  user?: {};
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
  children: ReactNode;
}

export const Page = ({ children, ...props }: PageProps) => {
  let classNames = props.className ?? "";
  const groupName = props.groupName ? props.groupName + "-page" : "page";
  const id = props.id ? groupName + "-" + props.id : undefined;
  return (
    <div id={id} className={classNames}>
      {children}
    </div>
  );
};
