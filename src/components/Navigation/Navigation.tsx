import React from "react";
import Link from "../Link/Link";

import { Switch, Route } from "react-router-dom";

export interface LinkType {
  destination: string;
  label: string;
  component: JSX.Element;
}

export interface Props {
  links: LinkType[];
  navClasses: string;
  navListClasses: string;
}

export default (props: Props) => {
  const { links, navClasses, navListClasses } = props;
  return (
    <div className={navClasses}>
      <nav className={"w-100"}>
        <ul className={navListClasses}>
          {links.map(({ destination, label }, index) => (
            <Link key={index} destination={destination} label={label} />
          ))}
        </ul>
      </nav>

      <Switch>
        {links.map(({ destination, component }, index) => (
          <Route key={index} path={destination} children={component} />
        ))}
      </Switch>
    </div>
  );
};
