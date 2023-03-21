import { DispatchWithoutAction, FC } from "react";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";
import { TabItem } from "../../../../styles/tabItem";
type Props = {
  handleAddSection: DispatchWithoutAction;
};
export const BottomAddSection: FC<Props> = ({ handleAddSection }) => (
  <TabItem>
    <label className={style.container}>
      <i>
        <FontAwesomeIcon className={style.icon} icon={faCirclePlus} />
      </i>
      <Spacer horizontal size={4} />
      <div>Add Section</div>
      <button onClick={handleAddSection} type="button" />
    </label>
  </TabItem>
);
