import { selector, waitForAll } from "recoil";
import { makeContents } from "~/libs/reducer/contentReducer/makeContents";
// import { splitByTag } from "~/libs/reducer/contentReducer/splitByTag";
// import { ActionTypeState } from "~/recoil/atoms/actionType";
import { MarkdownState } from "~/recoil/atoms/markdown";
import { ContentType } from "~/types";

export const markdownContentTypeSelector = selector<ContentType[]>({
  key: "markdownSelector",
  get: ({ get }) => {
    const markdown = get(MarkdownState);
    const markdownToContent = markdown ? makeContents(markdown) : [];
    return markdownToContent;
  },

  set: ({ set }, newValue) => {
    // const markdown = get(MarkdownState);

    // const actionTypeState = get(waitForAll({ ActionTypeState }));

    // if (actionTypeState === "init") return reset(MarkdownState);
    // if (actionTypeState === "create") {
    //   const markdownToContent = markdown ? makeContents(markdown) : [];

    //   const addContents = markdownToContent
    //     ?.map(({ content }) => content)
    //     .join("\n# ");

    //   set(MarkdownState, addContents);
    // }

    const contentToMarkdown = Array.isArray(newValue)
      ? newValue?.map(({ content }) => content).join("\n")
      : newValue;

    set(MarkdownState, contentToMarkdown);
  },
});
