import { FC } from "react";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";
import { TabItem } from "../../../../styles/tabItem";
import { LanguageKey } from "~/types/figurative/LanguageType";
import { useModal } from "react-hooks-use-modal";
import { SetTemplateModal } from "~/components/features/setTemplateModal";
import { useSetRecoilState } from "recoil";
import { markdownContentTypeSelector } from "~/recoil/selectors/markdown/markdownContentTypeSelector";
import { languageAndReadmeMap } from "~/constants/languageAndReadmeMap";
import { splitByTag } from "~/libs/reducer/contentReducer/splitByTag";

export const TemplateSection: FC = () => {
  const set = useSetRecoilState(markdownContentTypeSelector);

  const [Modal, open, close] = useModal("root", {
    preventScroll: true,
    focusTrapOptions: {
      clickOutsideDeactivates: false,
    },
  });

  const handleSetTemplate = (languageKey: LanguageKey) => {
    if (languageKey === undefined) {
      throw new Error("language key is undefined");
    }
    const defaultReadme = languageAndReadmeMap[languageKey];
    const origin = splitByTag(defaultReadme);
    const makedContents = origin?.map((content, index) => {
      return { id: index, content: content };
    });

    set(makedContents);
  };

  return (
    <>
      <Modal>
        <SetTemplateModal handleClose={close} handleApply={handleSetTemplate} />
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
