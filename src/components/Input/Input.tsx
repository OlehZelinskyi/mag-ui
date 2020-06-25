import React, { ChangeEvent } from "react";

export interface Props {
  type?: string;
  placeholder?: string;
  value: string | number;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  required: boolean;
  pattern?: string;
  title?: string;
}

export default function Input(props: Props) {
  const {
    type = "text",
    placeholder = "",
    value,
    handleChange,
    name,
    required,
    pattern,
    title,
  } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      name={name}
      required={required}
      pattern={pattern}
      title={title}
    />
  );
}
