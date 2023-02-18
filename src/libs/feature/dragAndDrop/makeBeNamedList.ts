import { splitByTag } from "../../splitByTag";

export const makeBeNamedList = (contents: string) => {
  const origin = splitByTag(contents);

  const beNamedList = origin?.map((content, index) => {
    return { id: index, content: content };
  });

  return beNamedList
}