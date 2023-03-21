import { FC } from "react";
import { faBroom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";
import { TabItem } from "../../tabItem";
import { markdownSelector } from "~/recoil/selectors/markdown/markdownSelector";
import { useSetRecoilState } from "recoil";
export const ClearIcon: FC = () => {
  const set = useSetRecoilState(markdownSelector);

  const handleClear = () => {
    set(() => "");
  };

  return (
    <TabItem>
      <label className={style.container}>
        <i>
          <FontAwesomeIcon className={style.icon} icon={faBroom} />
        </i>
        <Spacer horizontal size={4} />
        <div>Clear</div>
        <button onClick={handleClear} type="button" />
      </label>
    </TabItem>
  );
};
