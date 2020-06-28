import { LinkType } from "../../components/Navigation/Navigation";
import React from "react";
import { ExternalLinkType } from "../../components/SocialMedia/SocialMedia";
import Facebook from "../../assets/social/Facebook";
import Twitter from "../../assets/social/Twitter";
import Instagram from "../../assets/social/Instagram";
import Medium from "../../assets/social/Medium";

export const HEADER_LINKS: LinkType[] = [
  {
    destination: "/services",
    label: "Services",
    component: <></>,
  },
  {
    destination: "/experience",
    label: "Experience",
    component: <></>,
  },
  {
    destination: "/foundation",
    label: "Foundation",
    component: <></>,
  },
  {
    destination: "/team",
    label: "Team",
    component: <></>,
  },
  {
    destination: "/blog",
    label: "Blog",
    component: <></>,
  },
];

export const FOOTER_LINKS: LinkType[] = [
  {
    destination: "/services",
    label: "Services",
    component: <></>,
  },
  {
    destination: "/experience",
    label: "Experience",
    component: <></>,
  },
  {
    destination: "/foundation",
    label: "Foundation",
    component: <></>,
  },
  {
    destination: "/team",
    label: "Team",
    component: <></>,
  },
  {
    destination: "/blog",
    label: "Blog",
    component: <></>,
  },
];

export const SOCIAL_MEDIA_LINKS: ExternalLinkType[] = [
  {
    href: "https://www.facebook.com/madappgang",
    label: <Facebook svgClasses={"social-svg"} />,
    openMode: "_blank",
  },
  {
    href: "https://twitter.com/madappgang",
    label: <Twitter svgClasses={"social-svg"} />,
    openMode: "_blank",
  },
  {
    href: "https://www.instagram.com/madappgang",
    label: <Instagram svgClasses={"social-svg"} />,
    openMode: "_blank",
  },
  {
    href: "https://medium.com/@i_49105",
    label: <Medium svgClasses={"social-svg"} />,
    openMode: "_blank",
  },
];
