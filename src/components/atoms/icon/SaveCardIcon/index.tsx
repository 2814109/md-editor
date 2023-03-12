import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DispatchWithoutAction } from "react";
import { IconContainer } from "../../iconContainer";
import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";

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
      <FontAwesomeIcon icon={faFloppyDisk} />
    </i>
  </IconContainer>
);
