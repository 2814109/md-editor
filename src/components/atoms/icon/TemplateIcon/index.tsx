import { Dispatch, FC } from "react";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";
import { TabItem } from "../../../../styles/tabItem";
import { LanguageKey } from "~/types/figurative/LanguageType";
import { useModal } from "react-hooks-use-modal";
import { SetTemplateModal } from "~/components/features/setTemplateModal";
type Props = {
  handleChangeTemplateLanguage: Dispatch<LanguageKey>;
};
export const TemplateSection: FC<Props> = ({
  handleChangeTemplateLanguage,
}) => {
  const [Modal, open, close] = useModal("root", {
    preventScroll: true,
    focusTrapOptions: {
      clickOutsideDeactivates: false,
    },
  });

  return (
    <>
      <Modal>
        <SetTemplateModal
          handleClose={close}
          handleApply={handleChangeTemplateLanguage}
        />
      </Modal>

      <TabItem>
        <label className={style.container}>
          <i>
            <FontAwesomeIcon className={style.icon} icon={faFileLines} />
          </i>
          <Spacer horizontal size={4} />
          <div>Use Template</div>
          <button onClick={open} type="button" />
        </label>
      </TabItem>
    </>
  );
};
