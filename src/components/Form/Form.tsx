import React from "react";
import Heading from "../Heading/Heading";

export interface Props {
  children: any;
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  formWrapperClasses: string;
  formClasses: string;
}

export default (props: Props) => {
  const { children, handleSubmit, formWrapperClasses, formClasses } = props;

  return (
    <div className={formWrapperClasses}>
      <form className={formClasses} onSubmit={handleSubmit}>
        {children}
      </form>
    </div>
  );
};
