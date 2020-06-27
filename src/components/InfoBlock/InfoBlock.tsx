import React from "react";
import Heading from "../Heading/Heading";
import Message from "../Message/Message";
import Button from "../Button/Button";

export interface Props {
  infoClasses: string;
  headingLabel: string;
  headingSize: number;
  handleClick?: () => void;
  btnLabel?: string;
  msg: string[];
  imageSrc?: string;
}

export default function InfoBlock(props: Props) {
  const {
    infoClasses,
    headingLabel,
    headingSize,
    msg,
    handleClick,
    btnLabel = "",
    imageSrc,
  } = props;
  return (
    <div className={infoClasses}>
      <Heading label={headingLabel} size={headingSize} />
      {imageSrc && <img src={imageSrc} />}
      {msg.map((message, index) => (
        <Message key={index} msg={message} />
      ))}
      {handleClick && (
        <Button
          type="button"
          label={btnLabel}
          buttonClasses={"info-block-button"}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}
