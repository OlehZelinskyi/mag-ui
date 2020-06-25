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
  socialMediaLinksWrapperClasses: string;
}

export default function SocialMedia(props: Props) {
  const { label, links, socialMediaLinksWrapperClasses } = props;

  return (
    <div>
      <Heading label={label} little={true} />
      <div className={socialMediaLinksWrapperClasses}>
        {links.map(({ href, label, openMode }, index) => (
          <ExternalLink
            key={index}
            href={href}
            label={label}
            openMode={openMode}
          />
        ))}
      </div>
    </div>
  );
}
