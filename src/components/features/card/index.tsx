import { Dispatch, FC, useReducer } from "react";
import { EditMode } from "./mode/edit";
import { DisplayMode } from "./mode/display";
import { ContentType } from "~/types";
import { Card } from "~/components/atoms/card";
type Props = {
  content: ContentType;
  updateContents: Dispatch<ContentType>;
};

export const CardSection: FC<Props> = ({ content, updateContents }) => {
  const [isEdit, toggleIsEdit] = useReducer((state) => {
    return !state;
  }, false);

  return (
    <Card>
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
    </Card>
  );
};
