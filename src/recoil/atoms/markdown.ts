import { atom } from "recoil";
import { readmeEnglish } from "~/constants/defaultMarkdown/english";
export const MarkdownState = atom({
  key: "MarkdownState",
  default: readmeEnglish,
});
