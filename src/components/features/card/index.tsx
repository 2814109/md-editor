import { Dispatch, FC, useReducer, DragEvent } from "react";
import { EditMode } from "./mode/edit/index";
import { DisplayMode } from "./mode/display";
import { ContentType } from "~/types";
import { Card } from "~/components/atoms/card";
import style from "./style.module.css";
import { DraggableIcon } from "~/components/atoms/icon/DraggableIcon";
import { Spacer } from "~/components/atoms/Spacer";
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
    <>
      {isEdit || content.content.length === 0 ? (
        <div className={style.cardSection}>
          {/* substitute DraggableIcon */}
          <Spacer horizontal size={19} />
          <Spacer horizontal size={12} />
          <Card>
            <EditMode
              updateContents={updateContents}
              toggleIsEdit={toggleIsEdit}
              content={content}
            />
          </Card>
        </div>
      ) : (
        <div
          primary-key={content.id}
          key={content.id}
          draggable={true}
          onDrop={handleDrop}
          onDragStart={dragStart}
          onDragOver={dragOver}
        >
          <div className={style.cardSection}>
            <DraggableIcon />
            <Spacer horizontal size={12} />
            <Card>
              <DisplayMode
                toggleIsEdit={toggleIsEdit}
                contentMarkdown={content.content}
              />
            </Card>
          </div>
        </div>
      )}
    </>
  );
};
