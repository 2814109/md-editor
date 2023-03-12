import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DispatchWithoutAction } from "react";
import { IconContainer } from "../../iconContainer";
import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";
import style from "./style.module.css";
type SaveCardIconProps = {
  updateContents: DispatchWithoutAction;
  toggleIsEdit: DispatchWithoutAction;
};
export const SaveCardIcon = ({
  updateContents,
  toggleIsEdit,
}: SaveCardIconProps): JSX.Element => (
  <IconContainer>
    <i
      onClick={() => {
        updateContents();
        toggleIsEdit();
      }}
    >
      <FontAwesomeIcon className={style.saveCardIcon} icon={faFloppyDisk} />
    </i>
  </IconContainer>
);
