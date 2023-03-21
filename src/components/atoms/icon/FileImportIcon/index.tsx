import { FC, Dispatch, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImport } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";
import { TabItem } from "../../tabItem";
type Props = {
  handleClick: Dispatch<ChangeEvent<HTMLInputElement>>;
};
export const FileImport: FC<Props> = ({ handleClick }) => (
  <TabItem>
    <label className={style.container}>
      <i>
        <FontAwesomeIcon className={style.icon} icon={faFileImport} />
      </i>
      <Spacer horizontal size={4} />
      <div>Import</div>
      <input type="file" accept=".md" onChange={handleClick} />
    </label>
  </TabItem>
);
