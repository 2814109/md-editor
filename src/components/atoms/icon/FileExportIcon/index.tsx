import { DispatchWithoutAction, FC } from "react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";
import { TabItem } from "../../tabItem";
type Props = {
  handleMarkdownDownload: DispatchWithoutAction;
};
export const FileExport: FC<Props> = ({ handleMarkdownDownload }) => (
  <TabItem>
    <label className={style.container}>
      <i>
        <FontAwesomeIcon className={style.icon} icon={faDownload} />
      </i>
      <Spacer horizontal size={4} />
      <div>Export</div>
      <button onClick={handleMarkdownDownload} type="button" />
    </label>
  </TabItem>
);
