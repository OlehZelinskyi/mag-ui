import { LinkType } from "../../components/Navigation/Navigation";
import React from "react";
import { ExternalLinkType } from "../../components/SocialMedia/SocialMedia";

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
    label: (
      <span
        className="iconify"
        data-icon="entypo-social:facebook-with-circle"
        data-inline="false"
      ></span>
    ),
    openMode: "_blank",
  },
  {
    href: "https://twitter.com/madappgang",
    label: (
      <span
        className="iconify"
        data-icon="ant-design:twitter-circle-filled"
        data-inline="false"
      ></span>
    ),
    openMode: "_blank",
  },
  {
    href: "https://www.instagram.com/madappgang",
    label: (
      <span
        className="iconify"
        data-icon="entypo-social:instagram-with-circle"
        data-inline="false"
      ></span>
    ),
    openMode: "_blank",
  },
  {
    href: "https://medium.com/@i_49105",
    label: (
      <span
        className="iconify"
        data-icon="ant-design:medium-circle-filled"
        data-inline="false"
      ></span>
    ),
    openMode: "_blank",
  },
];
