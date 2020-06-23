import React from "react";
import Heading from "../Heading/Heading";
import ExternalLink from "../ExternalLink/ExternalLink";

export interface ExternalLinkType {
  href: string;
  label: string | JSX.Element;
  openMode?: string;
}

export interface Props {
  label: string;
  links: ExternalLinkType[];
}

export default (props: Props) => {
  const { label, links } = props;

  return (
    <div>
      <Heading label={label} little={true} />
      {links.map(({ href, label, openMode }) => (
        <ExternalLink href={href} label={label} openMode={openMode} />
      ))}
    </div>
  );
};
