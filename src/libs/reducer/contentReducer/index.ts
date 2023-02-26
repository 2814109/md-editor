import { CONTENT_ACTION, ContentType } from "~/types";
import { makeContents } from "./makeContents";
import { Reducer } from "react";

export const contentReducer: Reducer<ContentType[], CONTENT_ACTION> = (
  _state,
  action
) => {
  switch (action.type) {
    case "set_state":
      return makeContents(action.payload);
  }
};
