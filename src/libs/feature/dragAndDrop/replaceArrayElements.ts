import { ContentType } from "../../../types";

export const replaceArrayElements = (
  array: ContentType[],
  replaceIndex: number,
  beReplacedIndex: number
) => {
  const result = array.reduce(
    (resultArray: ContentType[], element, index, originalArray) => [
      ...resultArray,
      index === replaceIndex
        ? originalArray[beReplacedIndex]
        : index === beReplacedIndex
        ? originalArray[replaceIndex]
        : element,
    ],
    []
  );
  console.log(result);

  const reNumberingList: ContentType[] = result.map((content, index) => ({
    id: index,
    content: content.content,
  }));
  return reNumberingList;
};
