import { ChangeEvent, Dispatch } from "react";
import { LanguageKey } from "~/types/figurative/LanguageType";
import style from "./style.module.css";

type LanguageSelectedProps = {
  defaultKey: LanguageKey;
  handleChangeLanguage: Dispatch<LanguageKey>;
};
export const LanguageSelected = ({
  defaultKey,
  handleChangeLanguage,
}: LanguageSelectedProps): JSX.Element => (
  <div className={style.languageSelector}>
    <select
      defaultValue={defaultKey}
      onChange={(event: ChangeEvent<HTMLSelectElement>) => {
        handleChangeLanguage(event.currentTarget.value as LanguageKey);
      }}
    >
      <option value={"english"}>English</option>
      <option value={"japanese"}>Japanese</option>
      <option value={"chinese"}>Chinese</option>
    </select>
  </div>
);
