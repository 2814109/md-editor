import { DispatchWithoutAction, FC } from "react";
import ReactMarkdown from "react-markdown";
import { EditCardIcon } from "~/components/atoms/icon/EditCardIcon";
import remarkGfm from "remark-gfm";
import style from "./style.module.css";

type DisplayCardProps = {
  toggleIsEdit: DispatchWithoutAction;
  contentMarkdown: string;
};
export const DisplayMode: FC<DisplayCardProps> = ({
  toggleIsEdit,
  contentMarkdown,
}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.iconPosition}>
        <EditCardIcon toggleIsEdit={toggleIsEdit} />
      </div>
      <ReactMarkdown children={contentMarkdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
};
