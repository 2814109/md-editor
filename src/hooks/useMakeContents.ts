import { useSplitByTag } from "./useSplitByTag";
export const useMakeContents = () => {
  const { splitByTag } = useSplitByTag();

  const makeContents = (contents?: string) => {
    const origin = splitByTag(contents ?? "");

    const makedContents = origin?.map((content, index) => {
      return { id: index, content: content };
    }, []);

    return makedContents;
  };
  return { makeContents };
};
