import { ContentType } from "../../../types";

export const replaceArrayElements = (
  array: ContentType[],
  replaceIndex: number,
  beReplacedIndex: number
) => {
  return array.reduce(
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
};
