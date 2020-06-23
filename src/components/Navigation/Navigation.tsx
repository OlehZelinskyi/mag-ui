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
}

export default (props: Props) => {
  const { links } = props;
  return (
    <div>
      <nav>
        <ul>
          {links.map(({ destination, label }) => (
            <Link destination={destination} label={label} />
          ))}
        </ul>
      </nav>

      <Switch>
        {links.map(({ destination, component }) => (
          <Route path={destination} children={component} />
        ))}
      </Switch>
    </div>
  );
};
