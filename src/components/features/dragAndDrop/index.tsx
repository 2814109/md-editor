import React, { Dispatch, FC, useRef } from "react";
import { CardSection } from "../card/index";
import { getElementIndex } from "~/libs/feature/dragAndDrop/getElementIndex";
import { PositionType, ContentType } from "~/types";
import {
  handleDragStart,
  handleDragOver,
} from "~/libs/feature/dragAndDrop/handleDrag";
import { replaceArrayElements } from "~/libs/feature/dragAndDrop/replaceArrayElements";
import { CONTENT_ACTION } from "~/types";
import style from "./style.module.css";

type Props = {
  contents: ContentType[];
  dispatch: Dispatch<CONTENT_ACTION>;
};

export const useDragComponents = ({ contents, dispatch }: Props) => {
  const updateContents = (content: ContentType) => {
    contents[content.id] = content;
    dispatch({
      type: "set_state",
      payload: contents.map(({ content }) => content).join("\n"),
    });
  };

  const draggingObjectState = useRef<PositionType>({
    point: null,
  });
  const beDraggedObjectState = useRef<PositionType>({
    point: null,
  });

  const dragOver = (event: React.DragEvent) => {
    handleDragOver(event, beDraggedObjectState);
  };

  const dragStart = (event: React.DragEvent) => {
    handleDragStart(event, draggingObjectState);
  };

  const handleDrop = (event: React.DragEvent) => {
    const hoveredElementPrimaryKey: string | null =
      event.currentTarget.getAttribute("primary-key");
    const draggingElementPrimaryKey: string | null =
      draggingObjectState.current.point;
    const hoveredElementIndex: number = getElementIndex(
      contents,
      hoveredElementPrimaryKey
    );
    const draggingElementIndex = getElementIndex(
      contents,
      draggingElementPrimaryKey
    );
    const replaceList = replaceArrayElements(
      contents,
      hoveredElementIndex,
      draggingElementIndex
    );

    dispatch({
      type: "set_state",
      payload: replaceList.map(({ content }) => content).join("\n"),
    });
  };

  const DragAndDropArea: FC = () => (
    <div className={style.ContentAreaContainer}>
      {contents?.map((contentObject) => {
        return (
          <div
            primary-key={contentObject.id}
            className="DragItem"
            key={contentObject.id}
            draggable={true}
            onDrop={handleDrop}
            onDragStart={dragStart}
            onDragOver={dragOver}
          >
            <CardSection
              content={contentObject}
              updateContents={updateContents}
            />
          </div>
        );
      })}
    </div>
  );

  return { DragAndDropArea };
};
