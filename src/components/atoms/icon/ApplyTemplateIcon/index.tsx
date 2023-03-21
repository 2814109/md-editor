import { DispatchWithoutAction, FC } from "react";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";
import { IncludeIconButton } from "~/styles/IncludeIconButton";
type Props = {
  handleApply: DispatchWithoutAction;
};
export const ApplyTemplateIcon: FC<Props> = ({ handleApply }) => (
  <IncludeIconButton>
    <label className={style.container}>
      <i>
        <FontAwesomeIcon className={style.icon} icon={faFileArrowUp} />
      </i>
      <Spacer horizontal size={4} />
      <div>Apply the template</div>
      <button onClick={handleApply} type="button" />
    </label>
  </IncludeIconButton>
);
