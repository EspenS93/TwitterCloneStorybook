import { DefaultProps } from "../../interfaces/DefaultProps";
import { Color } from "../../interfaces/Styles";
import "./button.scss";

interface ButtonProps extends DefaultProps {
  /**
   * Button contents
   */
  label: string;
  rounded?: "small" | "medium" | "large" | "xlarge" | "xxlarge";
  size?:
    | "tiny"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "xxxlarge"
    | "jumbo";
  color?: Color;
  hoverColor?: Color;
  textColor?: Color;
  hoverTextColor?: Color;
  border?: boolean;
  borderColor?: Color;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label,
  rounded,
  size,
  color,
  hoverColor,
  textColor,
  hoverTextColor,
  border,
  borderColor,
  ...props
}: ButtonProps) => {
  let classNames = props.className ?? "";
  classNames += " w3-btn ";
  classNames += color ? " w3-" + color : "";
  classNames += hoverColor ? " w3-" + hoverColor : "";
  classNames += textColor ? " w3-" + textColor : "";
  classNames += hoverTextColor ? " w3-" + hoverTextColor : "";
  classNames += borderColor ? " w3-" + borderColor : "";
  classNames += border ? " w3-border" : "";
  classNames += size ? " w3-" + size : "";
  classNames += rounded ? " w3-round-" + rounded : "";
  const groupName = props.groupName ? props.groupName + "-button" : "button";
  const id = props.id ? groupName + "-" + props.id : undefined;
  return (
    <button type="button" id={id} className={classNames} {...props}>
      {label}
    </button>
  );
};
