import React from "react";
import { Link } from "react-router-dom";

export interface Props {
  destination: string;
  label: string;
}
export default (props: Props) => {
  const { destination = "/unknown", label = "noLabel" } = props;
  return (
    <li>
      <Link to={destination}>{label}</Link>
    </li>
  );
};
