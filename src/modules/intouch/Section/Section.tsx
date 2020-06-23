import React from "react";
import Message from "../../../components/Message/Message";
import SocialMedia from "../../../components/SocialMedia/SocialMedia";
import { SOCIAL_MEDIA_LINKS } from "../../constants/links";

export interface Props {
  messages: string[];
}

export default (props: Props) => {
  const { messages } = props;
  return (
    <section>
      {messages.map((msg) => (
        <Message msg={msg} />
      ))}
      <SocialMedia label={"Follow Us"} links={SOCIAL_MEDIA_LINKS} />
    </section>
  );
};
