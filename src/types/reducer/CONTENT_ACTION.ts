import { LanguageKey } from "../figurative/LanguageType";
export type CONTENT_ACTION = {
  type: "set_state" | "add_state" | "change_language" | "initialize_state";
  payload?: string;
  languageKey?: LanguageKey;
};
