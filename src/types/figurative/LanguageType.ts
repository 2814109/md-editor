import { languageAndReadmeMap } from "~/constants/languageAndReadmeMap";
type LanguageKeyType = typeof languageAndReadmeMap;
export type LanguageKey = keyof LanguageKeyType;
