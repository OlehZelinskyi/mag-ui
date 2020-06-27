export const SEND_MESSAGE = "SEND_MESSAGE";
export const SEND_MESSAGE_RESPONSE = "SEND_MESSAGE_RESPONSE";
export const VALIDATION_FAILED = "VALIDATION_FAILED";
export const TOGGLE_MODAL = "TOGGLE_MODAL";

export const NAME = "name";
export const EMAIL = "email";
export const PHONE = "phone";
export const MSG = "msg";
export const PREFIX = "messageReducer";
export const RESPONSE = "response";
export const ERRORS = "errors";
export const LOADING = "loading";
export const MODAL = "modal";
export const SUCCESS = "success";

export const SEND_MESSAGE_URL = "http://127.0.0.1:5000/message";

export const FORM_VALIDATION_CONFIG = {
  [NAME]: /^\w{2,20}$/,
  [EMAIL]: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  [PHONE]: /[0-9]{3}-[0-9]{3}-[0-9]{4}/,
  [MSG]: /^.{1,300}$/g,
};

export const FORM_ERRORS_MESSAGES_CONFIG: { [key: string]: string } = {
  [NAME]: "Name must vary between 2-20 symbols without spaces (only letters).",
  [EMAIL]: "Check if email address is valid. Example: `anyemail@dog.wee`",
  [PHONE]: "Phone number must match format `XXX-XXX-XXXX`",
  [MSG]: "Message must vary between 1-300 symbols.",
};
