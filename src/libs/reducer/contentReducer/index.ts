import { CONTENT_ACTION, ContentType } from "~/types";
import { makeContents } from "./makeContents";
import { addContents } from "./addContents";
import { Reducer } from "react";
import { changeDefaultLanguage } from "./changeDefalutLanguage";

export const contentReducer: Reducer<ContentType[], CONTENT_ACTION> = (
  state,
  action
) => {
  switch (action.type) {
    case "set_state":
      return makeContents(action?.payload);

    case "add_state":
      return addContents(state.map(({ content }) => content).join("\n"));

    case "change_language":
      return changeDefaultLanguage(action?.languageKey);
  }
};
