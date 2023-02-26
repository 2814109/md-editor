import { Dispatch, FC, useReducer } from "react";
import { EditMode } from "./mode/edit";
import { DisplayMode } from "./mode/display";
import { ContentType } from "~/types";
type Props = {
  content: ContentType;
  updateContents: Dispatch<ContentType>;
};

export const Card: FC<Props> = ({ content, updateContents }) => {
  const [isEdit, toggleIsEdit] = useReducer((state) => {
    return !state;
  }, false);

  return (
    <>
      {isEdit ? (
        //   Edit Mode
        <EditMode
          updateContents={updateContents}
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
