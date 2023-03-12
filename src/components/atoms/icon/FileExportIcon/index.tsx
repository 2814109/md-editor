import { DispatchWithoutAction, FC } from "react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";
type Props = {
  handleMarkdownDownload: DispatchWithoutAction;
};
export const FileExport: FC<Props> = ({ handleMarkdownDownload }) => (
  <label style={style}>
    <button onClick={handleMarkdownDownload} type="button" />
    <i>
      <FontAwesomeIcon className={style.fileExportIcon} icon={faDownload} />
    </i>
  </label>
);
