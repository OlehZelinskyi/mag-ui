import React from "react";
import { Link } from "react-router-dom";

export interface Props {
  label: string | JSX.Element;
  logoClasses: string;
}

export default function NavLogo(props: Props) {
  const { label, logoClasses } = props;

  return <div className={logoClasses}>{label}</div>;
}
