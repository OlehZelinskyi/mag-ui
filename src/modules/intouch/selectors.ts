import { PREFIX, RESPONSE, ERRORS } from "./constants";

export const response$ = (state: { [key: string]: any }) =>
  state[PREFIX][RESPONSE];

export const errors$ = (state: { [key: string]: any }) => state[PREFIX][ERRORS];
