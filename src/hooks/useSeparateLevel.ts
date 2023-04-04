import { useRecoilState, useSetRecoilState } from "recoil";
import { SeparateLevelType } from "~/recoil/atoms/separateLevel";
import { separateLevelSelector } from "~/recoil/selectors/markdown/separateLevelSelector";

export const useSeparateLevel = () => {
  const [separateLevel, set] = useRecoilState(separateLevelSelector);

  const onClickByLevel = (level: SeparateLevelType) => {
    set(level);
  };
  const onClickIncrement = () => {
    const pattern = /h(.)/;
    const level = separateLevel.match(pattern);
    const numberOfLevel = level && level[1];
    Number(numberOfLevel) < 3 &&
      set(`h${Number(numberOfLevel) + 1}` as SeparateLevelType);
  };
  const onClickDecrement = () => {
    const pattern = /h(.)/;
    const level = separateLevel.match(pattern);
    const numberOfLevel = level && level[1];
    Number(numberOfLevel) > 1 &&
      set(`h${Number(numberOfLevel) - 1}` as SeparateLevelType);
  };

  return { separateLevel, onClickByLevel, onClickIncrement, onClickDecrement };
};
