import { FC } from "react";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";
import { TabItem } from "../../../../styles/tabItem";
import { useAddSection } from "~/hooks/useAddSection";

export const BottomAddSection: FC = () => {
  const { handleAddSection } = useAddSection();
  return (
    <div className={style.bottomAddContentSection}>
      <div>
        <Spacer horizontal size={30} />
      </div>
      <div className={style.wrapper}>
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
      </div>
    </div>
  );
};
