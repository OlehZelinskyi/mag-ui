import React from "react";

export interface Props {
  href: string;
  label: string | JSX.Element;
  openMode?: string;
}

export default function ExternalLink(props: Props) {
  const { href, label, openMode = "_blank" } = props;
  return (
    <a href={href} target={openMode}>
      {label}
    </a>
  );
}
