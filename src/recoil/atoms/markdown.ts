import { atom } from "recoil";
import { defaultREADMEEnglish } from "~/constants/defaultMarkdown";
export const MarkdownState = atom({
  key: "MarkdownState",
  default: defaultREADMEEnglish,
});
