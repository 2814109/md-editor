import { ContentType } from "~/types";

export const getElementIndex = (
  contentsList: ContentType[],
  elementPrimaryKey: string | null
) => {
  const elementIndex: number = contentsList.findIndex(
    (contentObject: ContentType) => {
      return contentObject.id == Number(elementPrimaryKey);
    }
  );

  return elementIndex;
};
