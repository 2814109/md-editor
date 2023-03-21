import { Dispatch, FC, useReducer, DragEvent } from "react";
import { EditMode } from "./mode/edit/index";
import { DisplayMode } from "./mode/display";
import { ContentType } from "~/types";
import { Card } from "~/components/atoms/card";
type Props = {
  content: ContentType;
  updateContents: Dispatch<ContentType>;
  dragOver: Dispatch<DragEvent>;
  dragStart: Dispatch<DragEvent>;
  handleDrop: Dispatch<DragEvent>;
};

export const CardSection: FC<Props> = ({
  content,
  updateContents,
  handleDrop,
  dragStart,
  dragOver,
}) => {
  const [isEdit, toggleIsEdit] = useReducer((state) => {
    return !state;
  }, false);

  return (
    <Card>
      {isEdit || content.content.length === 0 ? (
        //   Edit Mode
        <EditMode
          updateContents={updateContents}
          toggleIsEdit={toggleIsEdit}
          content={content}
        />
      ) : (
        <div
          primary-key={content.id}
          className="DragItem"
          key={content.id}
          draggable={true}
          onDrop={handleDrop}
          onDragStart={dragStart}
          onDragOver={dragOver}
        >
          <DisplayMode
            toggleIsEdit={toggleIsEdit}
            contentMarkdown={content.content}
          />
        </div>
      )}
    </Card>
  );
};
