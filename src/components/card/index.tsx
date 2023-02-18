import { Dispatch, FC, useReducer } from "react";
import { EditMode } from "./mode/edit";
import { DisplayMode } from "./mode/display";
import { ContentType } from "../../types/figurative/ContentType";
type Props = {
  content: ContentType;
  updateDragList: Dispatch<ContentType>;
};

export const Card: FC<Props> = ({ content, updateDragList }) => {
  const [isEdit, toggleIsEdit] = useReducer((state) => {
    return !state;
  }, false);

  return (
    <>
      {isEdit ? (
        //   Edit Mode
        <EditMode
          updateDragList={updateDragList}
          toggleIsEdit={toggleIsEdit}
          content={content}
        />
      ) : (
        // diplay Mode
        <DisplayMode
          toggleIsEdit={toggleIsEdit}
          contentMarkdown={content.content}
        />
      )}
    </>
  );
};
