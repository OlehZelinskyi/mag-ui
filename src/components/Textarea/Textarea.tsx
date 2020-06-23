import React, { ChangeEvent } from "react";

export interface Props {
  value: string | number;
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

export default (props: Props): JSX.Element => {
  const { value, handleChange, placeholder = "" } = props;
  return (
    <textarea onChange={handleChange} value={value} placeholder={placeholder} />
  );
};
