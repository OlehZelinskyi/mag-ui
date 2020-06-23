import React from "react";

export interface Props {
  type?: "submit" | "button" | "reset";
  label: string | JSX.Element;
  handleClick?: () => void;
  buttonClasses: string;
}

export default (props: Props) => {
  const { type = "submit", label, handleClick, buttonClasses } = props;
  return (
    <button type={type} onClick={handleClick} className={buttonClasses}>
      {label}
    </button>
  );
};
