import { selector } from "recoil";
import { SeparateLevel } from "~/recoil/atoms/separateLevel";

export const separateLevelSelector = selector({
  key: "separateLevelSelector",
  get: ({ get }) => {
    return get(SeparateLevel);
  },
  set: ({ set }, newValue) => {
    set(SeparateLevel, newValue);
  },
});
