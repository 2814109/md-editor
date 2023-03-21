import { ChangeEvent, Dispatch } from "react";
import { LanguageKey } from "~/types/figurative/LanguageType";
import style from "./style.module.css";

type LanguageSelectedProps = {
  handleChangeLanguage: Dispatch<LanguageKey>;
};
export const LanguageSelected = ({
  handleChangeLanguage,
}: LanguageSelectedProps): JSX.Element => (
  <div className={style.languageSelector}>
    <select
      defaultValue={"english"}
      onChange={(event: ChangeEvent<HTMLSelectElement>) => {
        handleChangeLanguage(event.currentTarget.value as LanguageKey);
      }}
    >
      <option value={"japanese"}>Japanese</option>
      <option value={"english"}>English</option>
      <option value={"chinese"}>Chinese</option>
    </select>
  </div>
);
