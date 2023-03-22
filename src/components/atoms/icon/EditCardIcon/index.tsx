import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DispatchWithoutAction } from "react";
import { IconContainer } from "../../iconContainer";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";
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
      <FontAwesomeIcon className={style.icon} icon={faPenToSquare} />
      <Spacer horizontal size={8} />
      Edit
    </i>
  </IconContainer>
);
