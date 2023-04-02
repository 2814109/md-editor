import { useSwitchPatternBySeparateLevel } from "~/hooks/useSwitchPatternBySeparateLevel";
export const useSplitByTag = () => {
  const { switchPatternBySeparateLevel } = useSwitchPatternBySeparateLevel();
  const splitByTag = (content: string) => {
    const splitCotent = content.split("\n");

    const result: string[][] = [];
    for (let row of splitCotent) {
      switchPatternBySeparateLevel(row)
        ? result?.push([row])
        : result[result.length - 1]?.push(row);
    }
    return result?.map((element) => element.join("\n"));
  };
  return { splitByTag };
};
