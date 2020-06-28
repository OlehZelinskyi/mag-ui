import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Navigation, { LinkType } from "../Navigation/Navigation";
import NavLogo from "../NavLogo/NavLogo";
import Button from "../Button/Button";

export interface Props {
  headerClass: string;
  headerLinks: LinkType[];
  headerWrapperClasses: string;
  headerLogoLabel: string;
  headerButtonLabel: string;
  buttonWrapperClasses: string;
  mobileMenuHandler?: () => void;
  isMobileMenuOpen?: boolean;
}
export default function Header(props: Props) {
  const {
    headerClass,
    headerLinks,
    headerWrapperClasses,
    headerLogoLabel,
    headerButtonLabel,
    buttonWrapperClasses,
    mobileMenuHandler,
    isMobileMenuOpen,
  } = props;

  return (
    <header className={headerClass}>
      <Router>
        <div className={headerWrapperClasses}>
          <NavLogo
            label={<Link to={"/"}>{headerLogoLabel}</Link>}
            logoClasses={"nav-logo"}
          />
          <Navigation
            links={headerLinks}
            navClasses={`navigation ${
              isMobileMenuOpen ? "navigation-open" : ""
            }`}
            navListClasses={"header-nav-list"}
          />
          <div className={"hamburger-menu"} onClick={mobileMenuHandler}>
            <span></span>
          </div>
          <div className={buttonWrapperClasses}>
            <Button
              label={<Link to={"/getInTouch"}>{headerButtonLabel}</Link>}
              buttonClasses={"header-button"}
            />
          </div>
        </div>
      </Router>
    </header>
  );
}
