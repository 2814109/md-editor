import React, { FC, useRef, useState } from "react";
import { Card } from "../card/index";
import { makeSplitByTagList } from "../../libs/feature/dragAndDrop/makeBeNamedList";
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

  const downloadRef = useRef();

  const splitByTagList = makeSplitByTagList(contents);
  const [dragList, setDragList] = useState<ContentType[]>(splitByTagList);

  const setItems = (contents: string) => {
    const splitByTagList = makeSplitByTagList(contents);
    setDragList(splitByTagList);
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

  const handleMarkdownDownload = () => {
    console.log("#");
    console.log();
    const blob = new Blob([dragList.map(({ content }) => content).join("\n")], {
      type: "text/plain",
    });
    const link = document.createElement("a");
    link.download = "remake.md";
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
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
      <button onClick={handleMarkdownDownload} type="button">
        Export
      </button>
    </>
  );

  return { DragAndDropArea, setItems };
};
