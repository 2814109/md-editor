import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DispatchWithoutAction } from "react";
import { IconContainer } from "../../iconContainer";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

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
      <FontAwesomeIcon icon={faPenToSquare} />
    </i>
  </IconContainer>
);
