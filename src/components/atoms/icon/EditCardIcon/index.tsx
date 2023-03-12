import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DispatchWithoutAction } from "react";
import { IconContainer } from "../../iconContainer";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import style from "./style.module.css";
type EditCardIconProps = {
  toggleIsEdit: DispatchWithoutAction;
};
export const EditCardIcon = ({
  toggleIsEdit,
}: EditCardIconProps): JSX.Element => (
  <IconContainer>
    <i
      onClick={() => {
        toggleIsEdit();
      }}
    >
      <FontAwesomeIcon className={style.editCardIcon} icon={faPenToSquare} />
    </i>
  </IconContainer>
);
