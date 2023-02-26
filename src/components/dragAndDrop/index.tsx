import React, { Dispatch, FC, useRef } from "react";
import { Card } from "../card/index";
import { getElementIndex } from "../../libs/feature/dragAndDrop/getElementIndex";
import { PositionType, ContentType } from "../../types";
import { handleDrag } from "../../libs/feature/dragAndDrop/handleDrag";
import { replaceArrayElements } from "../../libs/feature/dragAndDrop/replaceArrayElements";

type Props = {
  dragList: ContentType[];
  contents: string;
  setDragList: Dispatch<ContentType[]>;
  updateDragList: Dispatch<ContentType>;
};

export const useDragComponents = ({
  contents,
  dragList,
  setDragList,
  updateDragList,
}: Props) => {
  const draggingObjectState = useRef<PositionType>({
    point: null,
  });
  const beDraggedObjectState = useRef<PositionType>({
    point: null,
  });

  const handleDragOver = (event: React.DragEvent) => {
    handleDrag(event, beDraggedObjectState, "over");
  };

  const handleDragStart = (event: React.DragEvent) => {
    handleDrag(event, draggingObjectState, "start");
  };

  const handleDrop = (event: React.DragEvent) => {
    const hoveredElementPrimaryKey: string | null =
      event.currentTarget.getAttribute("primary-key");
    const draggingElementPrimaryKey: string | null =
      draggingObjectState.current.point;
    const hoveredElementIndex: number = getElementIndex(
      dragList,
      hoveredElementPrimaryKey
    );
    const draggingElementIndex = getElementIndex(
      dragList,
      draggingElementPrimaryKey
    );
    const replaceList = replaceArrayElements(
      dragList,
      hoveredElementIndex,
      draggingElementIndex
    );
    setDragList(replaceList);
  };

  const DragAndDropArea: FC = () => (
    <>
      {dragList?.map((contentObject) => {
        return (
          <div
            primary-key={contentObject.id}
            className="DragItem"
            key={contentObject.id}
            draggable={true}
            onDrop={handleDrop}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
          >
            <Card content={contentObject} updateDragList={updateDragList} />
          </div>
        );
      })}
    </>
  );

  return { DragAndDropArea };
};
