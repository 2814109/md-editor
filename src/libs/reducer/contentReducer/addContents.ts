import { splitByTag } from "./splitByTag";

export const addContents = (contents: string) => {
  const origin = splitByTag(contents);
  const addOrigin = [...origin, ""];
  const makedContents = addOrigin?.map((content, index) => {
    return { id: index, content: content };
  });

  return makedContents;
};
