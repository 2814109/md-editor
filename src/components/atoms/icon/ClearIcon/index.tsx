import { DispatchWithoutAction, FC } from "react";
import { faBroom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";
import { TabItem } from "../../../../styles/tabItem";
import { useResetRecoilState } from "recoil";
import { markdownContentTypeSelector } from "~/recoil/selectors/markdown/markdownContentTypeSelector";

export const ClearIcon: FC = () => {
  const reset = useResetRecoilState(markdownContentTypeSelector);

  return (
    <TabItem>
      <label className={style.container}>
        <i>
          <FontAwesomeIcon className={style.icon} icon={faBroom} />
        </i>
        <Spacer horizontal size={4} />
        <div>Clear</div>
        <button onClick={reset} type="button" />
      </label>
    </TabItem>
  );
};
