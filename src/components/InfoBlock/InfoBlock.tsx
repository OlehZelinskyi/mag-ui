import React from "react";
import Heading from "../Heading/Heading";
import Message from "../Message/Message";

export interface Props {
  infoClasses: string;
  headingLabel: string;
  headingSize: number;
  msg: string[];
}

export default (props: Props) => {
  const { infoClasses, headingLabel, headingSize, msg } = props;
  return (
    <div className={infoClasses}>
      <Heading label={headingLabel} size={headingSize} />
      {msg.map((message, index) => (
        <Message key={index} msg={message} />
      ))}
    </div>
  );
};
