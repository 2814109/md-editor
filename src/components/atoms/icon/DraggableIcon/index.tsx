import { FC } from "react";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";

export const DraggableIcon: FC = () => (
  <label className={style.container}>
    <i>
      <FontAwesomeIcon className={style.icon} icon={faGripVertical} />
    </i>
    <Spacer horizontal size={4} />
  </label>
);
