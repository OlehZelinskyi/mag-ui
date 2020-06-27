import { PREFIX, RESPONSE, ERRORS, MODAL } from "./constants";

export const response$ = (state: { [key: string]: any }) =>
  state[PREFIX][RESPONSE];

export const errors$ = (state: { [key: string]: any }) => state[PREFIX][ERRORS];

export const modal$ = (state: { [key: string]: any }, modalType: string) =>
  state[PREFIX][MODAL][modalType];
