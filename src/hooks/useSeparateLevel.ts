import { useSetRecoilState } from "recoil";
import { separateLevelSelector } from "~/recoil/selectors/markdown/separateLevelSelector";

export const useSeparateLevel = () => {
  const set = useSetRecoilState(separateLevelSelector);

  const onClick = () => {
    set("h3");
  };

  return { onClick };
};
