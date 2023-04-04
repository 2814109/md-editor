import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeading, fa1 } from "@fortawesome/free-solid-svg-icons";
export const H1Icon = (): JSX.Element => (
  <i>
    <FontAwesomeIcon icon={faHeading} />
    <FontAwesomeIcon icon={fa1} />
  </i>
);
