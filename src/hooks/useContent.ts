import { useEffect, useReducer } from "react";
import { useRecoilValue } from "recoil";
import { contentReducer } from "~/libs/reducer/contentReducer";
import { makeContents } from "~/libs/reducer/contentReducer/makeContents";
import { markdownSelector } from "~/recoil/selectors/markdown/markdownSelector";

export const useContents = () => {
  const markdown = useRecoilValue(markdownSelector);
  const initializeReducer = makeContents(markdown);

  const [contents, dispatch] = useReducer(contentReducer, initializeReducer);

  useEffect(() => {
    markdown.length > 0
      ? dispatch({
          type: "set_state",
          payload: markdown,
        })
      : dispatch({
          type: "initialize_state",
        });
  }, [markdown]);

  return { contents, dispatch };
};
