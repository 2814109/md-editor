import { atom } from "recoil";
import { languageAndReadmeMap } from "~/constants/languageAndReadmeMap";
export const MarkdownState = atom({
  key: "MarkdownState",
  default: languageAndReadmeMap.english,
});
