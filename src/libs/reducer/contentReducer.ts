import { CONTENT_ACTION, ContentType } from "~/types";
import { makeSplitByTagList } from "~/libs/feature/dragAndDrop/makeSplitByTagList";
import { Reducer } from "react";

export const contentReducer: Reducer<ContentType[], CONTENT_ACTION> = (
  _state,
  action
) => {
  switch (action.type) {
    case "set_state":
      return makeSplitByTagList(action.payload);
  }
};
