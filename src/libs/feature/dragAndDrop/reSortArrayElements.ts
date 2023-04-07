import { ContentType } from "~/types";

export const reSortArrayElements = (
  array: ContentType[],
  hoveredIndex: number,
  draggingIndex: number
) => {
  const stringArray = array.map(({ content }) => content);
  const element = stringArray.splice(draggingIndex, 1)[0];
  stringArray.splice(hoveredIndex, 0, element);

  const reNumberingList: ContentType[] = stringArray.map((content, index) => ({
    id: index,
    content,
  }));
  return reNumberingList;
};
