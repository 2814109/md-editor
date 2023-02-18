import React, { FC, useRef, useState } from "react";
import { Card } from "../card/index";
import { makeBeNamedList } from "../../libs/feature/dragAndDrop/makeBeNamedList";
import { getElementIndex } from "../../libs/feature/dragAndDrop/getElementIndex";
import { PositionType, ContentType } from "../../types";
import { handleDrag } from "../../libs/feature/dragAndDrop/handleDrag";
import { replaceArrayElements } from "../../libs/feature/dragAndDrop/replaceArrayElements";
type Props = {
  contents: string;
};

export const useDragComponents = ({ contents }: Props) => {
  const draggingObjectState = useRef<PositionType>({
    point: null,
  });
  const beDraggedObjectState = useRef<PositionType>({
    point: null,
  });

  const beNamedList = makeBeNamedList(contents);
  const [dragList, setDragList] = useState<ContentType[]>(beNamedList);
  const setItems = (contents: string) => {
    const beNamedList = makeBeNamedList(contents);
    setDragList(beNamedList);
  };
  const updateDragList = (content: ContentType) => {
    dragList[content.id] = content;
    setDragList([...dragList]);
  };

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

  return { DragAndDropArea, setItems };
};
