import React, { PureComponent, ChangeEvent } from "react";
import Heading from "../Heading/Heading";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";

export interface Props {
  formWrapperClasses: string;
  formClasses: string;
}

export interface State {
  [index: string]: any;
  name: string;
  email: string;
  phone: string;
  msg: string;
  submitted: boolean;
}

export default class Form extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      msg: "",
      submitted: false,
    };
  }

  render() {
    const { name, email, phone, msg } = this.state;

    const { formWrapperClasses, formClasses } = this.props;

    return (
      <div className={formWrapperClasses}>
        <form className={formClasses} onSubmit={this.formSubmit}>
          <Input
            type={"text"}
            placeholder={"Name"}
            handleChange={this.formChange}
            value={name}
            name={"name"}
            required={true}
          />
          <Input
            type={"email"}
            placeholder={"Email"}
            handleChange={this.formChange}
            value={email}
            name={"email"}
            required={true}
          />
          <Input
            type={"text"}
            placeholder={"Phone"}
            handleChange={this.formChange}
            value={phone}
            name={"phone"}
            required={true}
            title={"Phone format digit XXX-XXX-XXXX!"}
            pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"}
          />
          <Textarea
            placeholder={"Message"}
            value={msg}
            handleChange={this.formChange}
            name={"msg"}
            required={true}
          />
          <div>
            <Button
              type={"submit"}
              label={"SEND"}
              buttonClasses={"form-button"}
            />
          </div>
        </form>
      </div>
    );
  }

  private formChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const {
      target: { name: keyName, value },
    } = event;

    this.setState({ [keyName]: value });
  };

  private formSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { submitted, ...userdata } = this.state;

    console.warn(userdata);
  };
}
