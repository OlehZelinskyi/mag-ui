import React, { ChangeEvent } from "react";

export interface Props {
  value: string | number;
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  name: string;
  required: boolean;
}

export default function Textarea(props: Props): JSX.Element {
  const { value, handleChange, placeholder = "", name, required } = props;
  return (
    <textarea
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
      name={name}
      required={required}
    />
  );
}
