import React from "react";

export interface Props {
  label: string;
  size?: number;
  little?: boolean;
}

export default (props: Props) => {
  const { label, size = 1, little = false } = props;
  const HeadingTag = `h${size}`;
  return little ? <span>{label}</span> : <HeadingTag>{label}</HeadingTag>;
};
