import React from "react";

export interface Props {
  label: string;
  size?: number;
  little?: boolean;
}

export default (props: Props) => {
  const { label, size = 1, little = false } = props;

  return little ? (
    <span>{label}</span>
  ) : (
    React.createElement(`h${size}`, null, label)
  );
};
