import { DispatchWithoutAction, FC } from "react";
import ReactMarkdown from "react-markdown";
import { EditCardIcon } from "~/components/atoms/icon/EditCardIcon";
import remarkGfm from "remark-gfm";

type DisplayCardProps = {
  toggleIsEdit: DispatchWithoutAction;
  contentMarkdown: string;
};
export const DisplayMode: FC<DisplayCardProps> = ({
  toggleIsEdit,
  contentMarkdown,
}) => {
  return (
    <div>
      <EditCardIcon toggleIsEdit={toggleIsEdit} />
      <ReactMarkdown children={contentMarkdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
};
