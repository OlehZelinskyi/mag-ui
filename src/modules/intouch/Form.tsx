import React, { PureComponent, ChangeEvent } from "react";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button/Button";
import { sendMessage, toggleModal } from "../../modules/intouch/actions";
import { UserData } from "../../modules/intouch/typings";
import { connect } from "react-redux";
import { errors$, response$, modal$ } from "./selectors";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import { FORM_RESPONSE } from "../constants/messages";
import Modal from "react-modal";
import { SUCCESS, ERRORS, LOADING } from "./constants";

export const modalStyles: Modal.Styles = {
  content: {
    top: "30%",
    left: "30%",
    right: "30%",
    bottom: "auto",
    padding: "30px",
    maxWidth: "450px",
    margin: "auto",
    maxHeight: "85%",
    borderRadius: "8px",
    overflow: "auto",
    boxSizing: "border-box",
  },
};

export interface Props {
  formWrapperClasses: string;
  formClasses: string;
  sendMessage?: (userData: UserData) => { type: string; payload: UserData };
  response?: any;
  toggleModal?: (modalType: string) => { type: string; payload: string };
  successModal?: boolean;
  errorsModal?: boolean;
  loadingModal?: boolean;
  errors?: string[];
}

export interface State {
  [index: string]: any;
  name: string;
  email: string;
  phone: string;
  msg: string;
}

Modal.setAppElement("#container");

class Form extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      msg: "",
    };
  }

  render() {
    const { name, email, phone, msg } = this.state;

    const { formWrapperClasses, formClasses } = this.props;

    return (
      <>
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
        {this.renderSuccessModal()}
        {this.renderErrorsModal()}
        {this.renderLoadingModal()}
      </>
    );
  }

  private toggleModal = (modalType: string): void => {
    const { toggleModal } = this.props;
    if (typeof toggleModal === "function") {
      toggleModal(modalType);
    }
  };

  private renderSuccessModal = (): JSX.Element => {
    const { successModal } = this.props;

    return (
      <Modal
        isOpen={successModal}
        onRequestClose={() => this.toggleModal(SUCCESS)}
        style={modalStyles}
        overlayClassName="Overlay"
      >
        <InfoBlock
          infoClasses={"form-response"}
          headingLabel={"Thanks for filling out our form!"}
          headingSize={3}
          msg={FORM_RESPONSE}
          btnLabel={"OK"}
          handleClick={() => this.toggleModal(SUCCESS)}
        />
      </Modal>
    );
  };

  private renderLoadingModal = (): JSX.Element => {
    const { loadingModal } = this.props;

    return (
      <Modal
        isOpen={loadingModal}
        style={modalStyles}
        overlayClassName="Overlay"
      >
        <InfoBlock
          infoClasses={"form-response loading-img"}
          headingLabel={"Loading process.."}
          headingSize={3}
          msg={[]}
          imageSrc={"src/assets/robo.gif"}
        />
      </Modal>
    );
  };

  private renderErrorsModal = (): JSX.Element => {
    const { errorsModal, errors = [] } = this.props;

    return (
      <Modal
        isOpen={errorsModal}
        onRequestClose={() => this.toggleModal(ERRORS)}
        style={modalStyles}
        overlayClassName="Overlay"
      >
        <InfoBlock
          infoClasses={"form-response"}
          headingLabel={"Errors appears!"}
          headingSize={3}
          msg={errors}
          btnLabel={"OK"}
          handleClick={() => this.toggleModal(ERRORS)}
        />
      </Modal>
    );
  };

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

    const { sendMessage } = this.props;
    if (typeof sendMessage === "function") {
      sendMessage(this.state);
      this.setState({
        name: "",
        msg: "",
        phone: "",
        email: "",
      });
    }
  };
}

const mapStateToProps = (state: {
  [key: string]: any;
}): { [key: string]: any } => {
  return {
    errors: errors$(state),
    successModal: modal$(state, SUCCESS),
    errorsModal: modal$(state, ERRORS),
    loadingModal: modal$(state, LOADING),
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    toggleModal: (modalType: string) => dispatch(toggleModal(modalType)),
    sendMessage: (userData: UserData) => dispatch(sendMessage(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
