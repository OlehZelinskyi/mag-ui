import React from "react";

export interface Props {
  msg: string;
}

export default function Message(props: Props) {
  const { msg } = props;
  return <p>{msg}</p>;
}
