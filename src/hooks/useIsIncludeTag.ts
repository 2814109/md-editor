import { useSwitchPatternBySeparateLevel } from "~/hooks/useSwitchPatternBySeparateLevel";
export const useIsIncludeTag = () => {
  const { switchPatternBySeparateLevel } = useSwitchPatternBySeparateLevel();

  const isIncludeTag = (content: string) => {
    return Boolean(switchPatternBySeparateLevel(content));
  };
  return { isIncludeTag };
};
