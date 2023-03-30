import { FC } from "react";
import { CardSection } from "../card/index";

import style from "./style.module.css";
import { useUpdateContent } from "~/hooks/updateContents";
import { useDeleteContent } from "~/hooks/deleteContents";
import { useDragAndDrop } from "~/hooks/useDragAndDrop";
import { useRecoilState } from "recoil";
import { markdownContentTypeSelector } from "~/recoil/selectors/markdown/markdownContentTypeSelector";

export const useDragComponents = () => {
  const [markdown] = useRecoilState(markdownContentTypeSelector);
  const { dragOver, dragStart, handleDrop } = useDragAndDrop();
  const { updateContents } = useUpdateContent();
  const { deleteContents } = useDeleteContent();

  const DragAndDropArea: FC = () => (
    <div className={style.ContentAreaContainer}>
      {markdown?.map((contentObject) => {
        return (
          <CardSection
            content={contentObject}
            updateContents={updateContents}
            deleteContents={deleteContents}
            dragOver={dragOver}
            dragStart={dragStart}
            handleDrop={handleDrop}
          />
        );
      })}
    </div>
  );

  return { DragAndDropArea };
};
