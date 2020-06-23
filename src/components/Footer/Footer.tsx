import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation, { LinkType } from "../Navigation/Navigation";
import SiteInfo from "./SiteInfo";

export interface Props {
  footerClass: string;
  footerLinks: LinkType[];
  footerInfoMsg: string;
  footerWrapperClasses: string;
}
export default (props: Props) => {
  const {
    footerClass,
    footerLinks,
    footerInfoMsg,
    footerWrapperClasses,
  } = props;

  return (
    <footer className={footerClass}>
      <div className={footerWrapperClasses}>
        <Router>
          <Navigation
            links={footerLinks}
            navClasses={"navigation-footer"}
            navListClasses={"footer-nav-list"}
          />
        </Router>
        <SiteInfo message={footerInfoMsg} />
      </div>
    </footer>
  );
};
