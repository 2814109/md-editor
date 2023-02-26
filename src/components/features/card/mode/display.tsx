import { DispatchWithoutAction, FC } from "react";
import ReactMarkdown from "react-markdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

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
      <i
        onClick={() => {
          toggleIsEdit();
        }}
      >
        <FontAwesomeIcon icon={faPenToSquare} />
      </i>

      <ReactMarkdown children={contentMarkdown} />
    </div>
  );
};
