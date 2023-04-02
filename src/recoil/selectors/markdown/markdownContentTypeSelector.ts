import { selector } from "recoil";
import { MarkdownState } from "~/recoil/atoms/markdown";
import { SeparateLevel, SeparateLevelType } from "~/recoil/atoms/separateLevel";
import { ContentType } from "~/types";
import { patternH1, patternH2, patternH3 } from "~/libs/common/patterns";

export const markdownContentTypeSelector = selector<ContentType[]>({
  key: "markdownSelector",
  get: ({ get }) => {
    const separateLevel = get(SeparateLevel);

    const markdown = get(MarkdownState);
    const markdownToContent = markdown
      ? getContentConverter(markdown, separateLevel)
      : [];
    return markdownToContent;
  },

  set: ({ set }, newValue) => {
    const contentToMarkdown = Array.isArray(newValue)
      ? newValue?.map(({ content }) => content).join("\n")
      : newValue;

    set(MarkdownState, contentToMarkdown);
  },
});

const getContentConverter = (
  markdown: string,
  separateLevel: SeparateLevelType
) => {
  const splitCotent = markdown.split("\n");

  const result: string[][] = [];

  const patternBySeparateLevel = (
    contentString: string,
    separateLevel: SeparateLevelType
  ) => {
    switch (separateLevel) {
      case "h1":
        return contentString.match(patternH1);
      case "h2":
        return contentString.match(patternH1) || contentString.match(patternH2);
      case "h3":
        return (
          contentString.match(patternH1) ||
          contentString.match(patternH2) ||
          contentString.match(patternH3)
        );
      default:
        return contentString.match(patternH1);
    }
  };

  for (let row of splitCotent) {
    patternBySeparateLevel(row, separateLevel)
      ? result?.push([row])
      : result[result.length - 1]?.push(row);
  }
  const separateList = result?.map((element) => element.join("\n"));

  const toContents = separateList?.map((content, index) => {
    return { id: index, content: content };
  }, []);

  return toContents;
};
