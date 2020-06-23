import React from "react";

export interface Props {
  msg: string;
}

export default (props: Props) => {
  const { msg } = props;
  return <p>{msg}</p>;
};
