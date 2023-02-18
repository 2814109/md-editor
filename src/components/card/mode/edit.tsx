import { Dispatch, DispatchWithoutAction, FC, useState } from "react";
import { ContentType } from "../../../types/figurative/ContentType";

type EditCardProps = {
  content: ContentType;
  toggleIsEdit: DispatchWithoutAction;
  updateDragList: Dispatch<ContentType>;
};
export const EditMode: FC<EditCardProps> = ({
  toggleIsEdit,
  updateDragList,
  content,
}) => {
  const [editContent, setEditContent] = useState<string>(content.content);

  return (
    <div>
      <button
        onClick={() => {
          updateDragList({ id: content.id, content: editContent });
          toggleIsEdit();
        }}
      >
        Save
      </button>
      <div>
        <textarea
          value={editContent}
          onChange={(event) => {
            setEditContent(event.target.value);
          }}
        />
      </div>
    </div>
  );
};
