import { atom } from "recoil";

export type SeparateLevelType = "h1" | "h2" | "h3";
export const SeparateLevel = atom<SeparateLevelType>({
  key: "SeparateLevel",
  default: "h2",
});
