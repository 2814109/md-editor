import { Dispatch, FC } from "react";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";
import { TabItem } from "../../tabItem";
import { LanguageKey } from "~/types/figurative/LanguageType";
type Props = {
  handleChangeLanguage: Dispatch<LanguageKey>;
};
export const TemplateSection: FC<Props> = ({ handleChangeLanguage }) => (
  <TabItem>
    <label className={style.container}>
      <i>
        <FontAwesomeIcon className={style.icon} icon={faFileLines} />
      </i>
      <Spacer horizontal size={4} />
      <div>Use Template</div>
      {/* <button onClick={handleChangeLanguage} type="button" /> */}
    </label>
  </TabItem>
);
