import { ReactNode } from "react";
import { DefaultProps } from "../../interfaces/DefaultProps";

interface PageChildProps extends DefaultProps {
  children: ReactNode;
}

export const PageChild = ({ children, ...props }: PageChildProps) => {
  let classNames = props.className ?? "";
  const groupName = props.groupName
    ? props.groupName + "-page-child"
    : "page-child";
  const id = props.id ? groupName + "-" + props.id : undefined;
  return (
    <div id={id} className={classNames}>
      {children}
    </div>
  );
};
