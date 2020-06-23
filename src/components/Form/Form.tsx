import React from "react";
import Heading from "../Heading/Heading";

export interface Props {
  children: any;
  title?: string;
  subTitle?: string;
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  formClasses: string;
}

export default (props: Props) => {
  const { title, subTitle, children, handleSubmit, formClasses } = props;

  return (
    <div className={formClasses}>
      {title && renderTitle(title, 1)}
      {subTitle && renderTitle(subTitle, 2)}
      <form onSubmit={handleSubmit}>{children}</form>
    </div>
  );
};

export const renderTitle = (title: string, size: number): JSX.Element => {
  return <Heading label={title} size={size} />;
};
