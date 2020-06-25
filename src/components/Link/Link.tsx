import React from "react";
import { Link as RouterLink } from "react-router-dom";

export interface Props {
  destination: string;
  label: string;
}
export default function Link(props: Props) {
  const { destination = "/unknown", label = "noLabel" } = props;
  return (
    <li>
      <RouterLink to={destination}>{label}</RouterLink>
    </li>
  );
}
