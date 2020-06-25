import React, { PureComponent, ChangeEvent } from "react";
import Header from "../../components/Header/Header";
import {
  HEADER_LINKS,
  FOOTER_LINKS,
  SOCIAL_MEDIA_LINKS,
} from "../constants/links";
import Footer from "../../components/Footer/Footer";
import Section from "../../components/Section/Section";
import {
  ABOUT_SECTION_MESSAGES,
  CONTACT_FORM_INFO_MESSAGES,
  VISIT_US_MESSAGES,
} from "../constants/messages";
import Message from "../../components/Message/Message";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import SVG from "../../components/SVG/SVG";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button/Button";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import MailBox from "../../assets/mailbox";
import Heading from "../../components/Heading/Heading";
import Laptop from "../../assets/laptop";

export interface State {
  form: {
    [index: string]: any;
    name: string;
    email: string;
    phone: string;
    msg: string;
  };
}

export default class InTouchView extends PureComponent<{}, State> {
  constructor() {
    super(undefined);
    this.state = {
      form: {
        name: null,
        email: null,
        phone: null,
        msg: null,
      },
    };
  }

  render() {
    const {
      form: { name, email, phone, msg },
    } = this.state;
    return (
      <div className={"intouch-view"}>
        <Header
          headerClass={"intouch-header"}
          headerLinks={HEADER_LINKS}
          headerWrapperClasses={"header-wrapper"}
          headerLogoLabel={"MADAPPGANG"}
          headerButtonLabel={"GET IN TOUCH"}
          buttonWrapperClasses={"header-button-wrapper"}
        />

        <Section sectionClasses={"contact-form-section"}>
          <div className={"contact-form-wrapper"}>
            <div className={"headers-wrapper"}>
              <Heading label={"Get in touch"} size={1} />
              <Heading
                label={
                  <>
                    Let us know
                    <br /> how we can help
                  </>
                }
                size={3}
              />
            </div>
            <div className={"form-section-content"}>
              <Form
                handleSubmit={this.formSubmit}
                formWrapperClasses={"form-wrapper"}
                formClasses={"contact-form"}
              >
                <Input
                  type={"text"}
                  placeholder={"Name"}
                  handleChange={this.formChange}
                  value={name ?? ""}
                />
                <Input
                  type={"email"}
                  placeholder={"Email"}
                  handleChange={this.formChange}
                  value={email ?? ""}
                />
                <Input
                  type={"tel"}
                  placeholder={"Phone"}
                  handleChange={this.formChange}
                  value={phone ?? ""}
                />
                <Textarea
                  placeholder={"Message"}
                  value={msg ?? ""}
                  handleChange={this.formChange}
                />
                <div>
                  <Button
                    type={"submit"}
                    label={"SEND"}
                    buttonClasses={"form-button"}
                  />
                </div>
              </Form>
              <InfoBlock
                infoClasses={"contact-form-info"}
                headingLabel={"What's next"}
                headingSize={2}
                msg={CONTACT_FORM_INFO_MESSAGES}
              />
            </div>
            <div className={"visit-us-wrapper"}>
              <Laptop svgClasses={"laptop-svg"} />
              <InfoBlock
                infoClasses={"visit-us"}
                headingLabel={"Visit Us"}
                headingSize={2}
                msg={VISIT_US_MESSAGES}
              />
            </div>
          </div>
        </Section>

        <Section sectionClasses={"about-section"}>
          <div className={"about-wrapper"}>
            <div className="about-messages-wrapper">
              {ABOUT_SECTION_MESSAGES.map((msg, index) => (
                <Message key={index} msg={msg} />
              ))}
            </div>
            <div className="about-links-wrapper">
              <SocialMedia
                label={"Follow Us"}
                links={SOCIAL_MEDIA_LINKS}
                socialMediaLinksWrapperClasses={"social-media-links-wrapper"}
              />
              <MailBox svgClasses={"mailbox-svg"} />
            </div>
          </div>
        </Section>

        <Footer
          footerClass={"intouch-footer"}
          footerLinks={FOOTER_LINKS}
          footerInfoMsg={"© MadAppGang Pty Ltd, 2018"}
          footerWrapperClasses={"footer-wrapper"}
        />
      </div>
    );
  }

  private formChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const {
      target: { name: keyName, value },
    } = event;
    const { form } = this.state;

    form[keyName as string] = value;

    this.setState({ form });
  };

  private formSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.warn("Submitted");
  };
}
