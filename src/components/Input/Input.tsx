import React, { ChangeEvent } from "react";

export interface Props {
  type?: string;
  placeholder?: string;
  value: string | number;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default (props: Props) => {
  const { type = "text", placeholder = "", value, handleChange } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};
