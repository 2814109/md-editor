import { LanguageKey } from "../figurative/LanguageType";
export type CONTENT_ACTION = {
  type: "set_state" | "add_state" | "change_language";
  payload?: string;
  languageKey?: LanguageKey;
};
