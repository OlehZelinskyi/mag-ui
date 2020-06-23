import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation, { LinkType } from "../Navigation/Navigation";

export interface Props {
  headerClass: string;
  headerLinks: LinkType[];
}
export default (props: Props) => {
  const { headerClass, headerLinks } = props;

  return (
    <header className={headerClass}>
      <Router>
        <Navigation links={headerLinks} />
      </Router>
    </header>
  );
};
