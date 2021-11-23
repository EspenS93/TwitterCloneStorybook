import { DefaultProps } from "../../interfaces/DefaultProps";
import { MenuItem, MenuItemProps } from "./MenuItem";

interface MenuProps extends DefaultProps {
  menuItems: MenuItemProps[];
}

/**
 * Primary UI component for user interaction
 */
export const Menu = ({ menuItems, ...props }: MenuProps) => {
  const classNames = props.className;
  const groupName = props.groupName ? props.groupName + "-menu" : "menu";
  const id = props.id ? groupName + "-" + props.id : undefined;

  return (
    <div id={id} className={classNames + " menu"}>
      {menuItems.map((itemProps) => {
        itemProps.groupName = groupName;
        return <MenuItem {...itemProps} />;
      })}
    </div>
  );
};
