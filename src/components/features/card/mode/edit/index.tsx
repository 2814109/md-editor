import { Dispatch, DispatchWithoutAction, FC, useState } from "react";
import { ContentType } from "~/types";
import style from "./style.module.css";
import { SaveCardIcon } from "~/components/atoms/icon/SaveCardIcon";
import { isIncludeTag } from "~/libs/reducer/presentation/isIncludeTag";

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

  const handleUpdateContents = () => {
    isIncludeTag(editContent)
      ? updateContents({ id: content.id, content: editContent })
      : window.alert("The first line must have one to two # symbols");
  };
  return (
    <div className={style.wrapper}>
      <div className={style.iconPosition}>
        <SaveCardIcon
          updateContents={handleUpdateContents}
          toggleIsEdit={toggleIsEdit}
        />
      </div>
      <textarea
        className={style.textArea}
        value={editContent}
        onChange={(event) => {
          setEditContent(event.target.value);
        }}
      />
    </div>
  );
};
