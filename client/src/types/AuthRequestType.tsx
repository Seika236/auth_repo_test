import type {
  LoginFormShema,
  RegistrationFromShema,
} from "../shemas/RegistrationFormShema.ts";

export type RegistrationType = LoginFormShema | RegistrationFromShema;
