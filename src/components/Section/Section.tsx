import React from "react";

export interface Props {
  sectionClasses: string;
  children: any;
}

export default (props: Props) => {
  const { children, sectionClasses } = props;
  return <section className={sectionClasses}>{children}</section>;
};
