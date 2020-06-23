import { LinkType } from "../../components/Navigation/Navigation";
import React from "react";
import { ExternalLinkType } from "../../components/SocialMedia/SocialMedia";

export const HEADER_LINKS: LinkType[] = [
  {
    destination: "/",
    label: "MadAppGang",
    component: <></>,
  },
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
  {
    destination: "/getintouch",
    label: "Get In Touch",
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
    label: "FB",
    openMode: "_blank",
  },
  {
    href: "https://twitter.com/madappgang",
    label: "TW",
    openMode: "_blank",
  },
  {
    href: "https://www.instagram.com/madappgang",
    label: "INST",
    openMode: "_blank",
  },
  {
    href: "https://medium.com/@i_49105",
    label: "MD",
    openMode: "_blank",
  },
];
