import React from "react";

export interface Props {
  label: string | JSX.Element;
  size?: number;
  little?: boolean;
}

export default (props: Props) => {
  const { label, size = 1, little = false } = props;

  return little ? (
    <div>{label}</div>
  ) : (
    React.createElement(`h${size}`, null, label)
  );
};
