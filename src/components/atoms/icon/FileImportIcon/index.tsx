import { FC, Dispatch, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImport } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.css";
type Props = {
  handleClick: Dispatch<ChangeEvent<HTMLInputElement>>;
};
export const FileImport: FC<Props> = ({ handleClick }) => (
  <div style={style}>
    <label>
      <input type="file" accept=".md" onChange={handleClick} />
      <i>
        <FontAwesomeIcon className={style.fileImportIcon} icon={faFileImport} />
      </i>
    </label>
  </div>
);
