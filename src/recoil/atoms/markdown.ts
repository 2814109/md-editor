import { atom } from "recoil";
import { defaultMarkdown } from "~/constants/defaultMarkdown";
export const MarkdownState = atom({
  key: "MarkdownState",
  default: defaultMarkdown,
});
