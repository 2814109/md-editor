import { splitByTag } from "./splitByTag";

export const makeContents = (contents?: string) => {
  const origin = splitByTag(contents ?? "");

  const makedContents = origin?.map((content, index) => {
    return { id: index, content: content };
  }, []);

  return makedContents;
};
