import { patternTitle, patternSection } from "~/libs/common/patterns";

export const isIncludeTag = (content: string) => {
  const splitCotent = content.split("\n");

  return Boolean(
    splitCotent[0].match(patternTitle) || splitCotent[0].match(patternSection)
  );
};
