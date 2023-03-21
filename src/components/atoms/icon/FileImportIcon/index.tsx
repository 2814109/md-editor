import { FC, Dispatch, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImport } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";
type Props = {
  handleClick: Dispatch<ChangeEvent<HTMLInputElement>>;
};
export const FileImport: FC<Props> = ({ handleClick }) => (
  <label className={style.container}>
    <div>Import</div>
    <input type="file" accept=".md" onChange={handleClick} />
    <Spacer horizontal size={4} />
    <i>
      <FontAwesomeIcon className={style.fileImportIcon} icon={faFileImport} />
    </i>
  </label>
);
