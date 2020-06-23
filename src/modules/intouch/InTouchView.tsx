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
            <Form
              title={"Get in touch"}
              subTitle={"Let us know how we can help"}
              handleSubmit={this.formSubmit}
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
              <Button
                type={"submit"}
                label={"SEND"}
                buttonClasses={"form-button"}
              />
            </Form>
            <InfoBlock
              infoClasses={"contact-form-info"}
              headingLabel={""}
              headingSize={2}
              msg={CONTACT_FORM_INFO_MESSAGES}
            />
          </div>
        </Section>

        <Section sectionClasses={"visit-us-section"}>
          <div className={"visit-us-wrapper"}>
            <SVG />
            <InfoBlock
              infoClasses={"visit-us"}
              headingLabel={""}
              headingSize={2}
              msg={VISIT_US_MESSAGES}
            />
          </div>
        </Section>

        <Section sectionClasses={"about-section"}>
          <div className={"about-wrapper"}>
            {ABOUT_SECTION_MESSAGES.map((msg, index) => (
              <Message key={index} msg={msg} />
            ))}
            <SocialMedia label={"Follow Us"} links={SOCIAL_MEDIA_LINKS} />
            <SVG />
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
