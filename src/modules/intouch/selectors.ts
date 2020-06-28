import { PREFIX, RESPONSE, ERRORS, MODAL, MOBILE_NAV_OPEN } from "./constants";

export const response$ = (state: { [key: string]: any }) =>
  state[PREFIX][RESPONSE];

export const errors$ = (state: { [key: string]: any }) => state[PREFIX][ERRORS];

export const modal$ = (state: { [key: string]: any }, modalType: string) =>
  state[PREFIX][MODAL][modalType];

export const mobileNavOpen$ = (state: { [key: string]: any }) =>
  state[PREFIX][MOBILE_NAV_OPEN];
