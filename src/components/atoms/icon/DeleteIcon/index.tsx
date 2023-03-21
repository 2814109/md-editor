import { DispatchWithoutAction, FC } from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";

type DeleteIconProps = {
  handleDelete: DispatchWithoutAction;
};
export const DeleteIcon: FC<DeleteIconProps> = ({ handleDelete }) => (
  <label className={style.container}>
    <i
      onClick={() => {
        handleDelete();
      }}
    >
      <FontAwesomeIcon className={style.icon} icon={faCircleXmark} />
    </i>
    <Spacer horizontal size={4} />
  </label>
);
