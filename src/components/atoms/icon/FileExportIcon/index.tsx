import { DispatchWithoutAction, FC } from "react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";
type Props = {
  handleMarkdownDownload: DispatchWithoutAction;
};
export const FileExport: FC<Props> = ({ handleMarkdownDownload }) => (
  <label className={style.container}>
    <div>Export</div>
    <button onClick={handleMarkdownDownload} type="button" />
    <Spacer horizontal size={4} />
    <i>
      <FontAwesomeIcon className={style.fileExportIcon} icon={faDownload} />
    </i>
  </label>
);
