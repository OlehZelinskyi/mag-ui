import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation, { LinkType } from "../Navigation/Navigation";
import SiteInfo from "./SiteInfo";

export interface Props {
  footerClass: string;
  footerLinks: LinkType[];
  footerInfoMsg: string;
}
export default (props: Props) => {
  const { footerClass, footerLinks, footerInfoMsg } = props;

  return (
    <footer className={footerClass}>
      <Router>
        <Navigation links={footerLinks} />
      </Router>
      <SiteInfo message={footerInfoMsg} />
    </footer>
  );
};
