import React, { PureComponent, ChangeEvent } from "react";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button/Button";
import { sendMessage } from "../../modules/intouch/actions";
import { UserData } from "../../modules/intouch/typings";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { errors$ } from "./selectors";

export interface Props {
  formWrapperClasses: string;
  formClasses: string;
  sendMessage?: (userData: UserData) => { type: string; payload: UserData };
}

export interface State {
  [index: string]: any;
  name: string;
  email: string;
  phone: string;
  msg: string;
  submitted: boolean;
}

class Form extends PureComponent<Props, State> {
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
            placeholder={"E-mail"}
            handleChange={this.formChange}
            value={email}
            name={"email"}
            required={true}
          />
          <Input
            type={"text"}
            placeholder={"Phone number"}
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
    const { sendMessage } = this.props;
    if (typeof sendMessage === "function") {
      sendMessage(userdata);
    }
  };
}

const mapStateToProps = (state: {
  [key: string]: any;
}): { [key: string]: any } => {
  return {
    errors: errors$(state),
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    sendMessage: (userData: UserData) => dispatch(sendMessage(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
