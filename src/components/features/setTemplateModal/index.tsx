import { Dispatch, FC, useState } from "react";
import { DispatchWithoutAction } from "react";
import { ApplyTemplateIcon } from "~/components/atoms/icon/ApplyTemplateIcon";
import { CancelIcon } from "~/components/atoms/icon/CancelIcon";
import { Spacer } from "~/components/atoms/Spacer";
import { LanguageKey } from "~/types/figurative/LanguageType";
import { LanguageSelected } from "../language";
import style from "./style.module.css";

type Props = {
  handleClose: DispatchWithoutAction;
  handleApply: Dispatch<LanguageKey>;
};
export const SetTemplateModal: FC<Props> = ({ handleClose, handleApply }) => {
  const [languageKey, setLanguageKey] = useState<LanguageKey>("english");

  const handleOnClickApplyTemplate = () => {
    handleApply(languageKey);
    handleClose();
  };

  return (
    <div className={style.modalContainer}>
      <div className={style.modalSelectSection}>
        <h1>Please select a language.</h1>
      </div>
      <Spacer size={24} />

      <div className={style.modalSelectSection}>
        <div>
          <LanguageSelected
            defaultKey={languageKey}
            handleChangeLanguage={setLanguageKey}
          />
        </div>
      </div>

      <Spacer size={48} />
      <div className={style.modalBottomButtonSection}>
        <CancelIcon handleCancel={handleClose} />
        <ApplyTemplateIcon handleApply={handleOnClickApplyTemplate} />
      </div>
    </div>
  );
};
