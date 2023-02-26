import { Dispatch, DispatchWithoutAction, FC, useState } from "react";
import { ContentType } from "~/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";

type EditCardProps = {
  content: ContentType;
  toggleIsEdit: DispatchWithoutAction;
  updateContents: Dispatch<ContentType>;
};
export const EditMode: FC<EditCardProps> = ({
  toggleIsEdit,
  updateContents,
  content,
}) => {
  const [editContent, setEditContent] = useState<string>(content.content);

  return (
    <div>
      <label>
        <button
          type="button"
          onClick={() => {
            updateContents({ id: content.id, content: editContent });
            toggleIsEdit();
          }}
        />
        <i>
          <FontAwesomeIcon icon={faFloppyDisk} />
        </i>
      </label>

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
