import React from "react";

export interface Props {
  message: string;
}

export default function SiteInfo(props: Props) {
  const { message } = props;
  return <span>{message}</span>;
}
