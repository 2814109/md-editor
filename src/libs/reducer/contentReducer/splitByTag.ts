import { patternTitle, patternSection } from "~/libs/common/patterns";

export const splitByTag = (content: string) => {
  const splitCotent = content.split("\n");

  const result: string[][] = [];
  for (let row of splitCotent) {
    row.match(patternTitle) || row.match(patternSection)
      ? result?.push([row])
      : result[result.length - 1]?.push(row);
  }
  return result?.map((element) => element.join("\n"));
};
