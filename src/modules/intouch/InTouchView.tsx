import React from "react";
import Header from "../../components/Header/Header";
import { HEADER_LINKS, FOOTER_LINKS } from "../constants/links";
import Footer from "../../components/Footer/Footer";

export default () => {
  return (
    <div>
      <Header headerClass={"intouch-header"} headerLinks={HEADER_LINKS} />
      <Footer
        footerClass={"intouch-footer"}
        footerLinks={FOOTER_LINKS}
        footerInfoMsg={"&copy; MadAppGang Pty Ltd, 2018"}
      />
    </div>
  );
};
