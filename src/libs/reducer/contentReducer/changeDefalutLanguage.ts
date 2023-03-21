import { splitByTag } from "./splitByTag";
import { LanguageKey } from "~/types/figurative/LanguageType";
import { languageAndReadmeMap } from "~/constants/languageAndReadmeMap";

export const changeDefaultLanguage = (languageKey?: LanguageKey) => {
  if (languageKey === undefined) {
    throw new Error("language key is undefined");
  }
  const defaultReadme = languageAndReadmeMap[languageKey];
  const origin = splitByTag(defaultReadme);
  const makedContents = origin?.map((content, index) => {
    return { id: index, content: content };
  });

  return makedContents;
};
