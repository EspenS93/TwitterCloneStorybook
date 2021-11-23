import { DefaultProps } from "../../interfaces/DefaultProps";
import { Link } from "react-router-dom";
export interface MenuItemProps extends DefaultProps {
  icon: string;
  label?: string;
  link?: string;
}

/**
 * Primary UI component for user interaction
 */
export const MenuItem = ({
  icon,
  label,
  link = "/",
  ...props
}: MenuItemProps) => {
  const classNames = props.className;
  const groupName = props.groupName
    ? props.groupName + "-menu-item"
    : "menu-item";
  const id = props.id ? groupName + "-" + props.id : undefined;
  return (
    <div id={id} className={classNames + " menu-item"}>
      <Link to={link}>
        <i className="menu-item-icon"></i>
        {label && <label className="menu-item-label">{label}</label>}
      </Link>
    </div>
  );
};
