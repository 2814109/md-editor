import { selector } from "recoil";
import { MarkdownState } from "~/recoil/atoms/markdown";

export const markdownSelector = selector({
  key: "markdownSelector",
  get: ({ get }) => get(MarkdownState),
  set: ({ set }, newValue) => set(MarkdownState, newValue),
});
