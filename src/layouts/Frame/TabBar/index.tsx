import style from "./style.module.css";
import { FileImport } from "~/components/atoms/icon/FileImportIcon";
import { useRenderDownloadButton } from "~/components/features/dragAndDrop/useRenderDownloadButton";
import { useOnFileInputChange } from "~/hooks/useOnFileInputChange";
import { ContentType } from "~/types";
import { AddSection } from "~/components/atoms/icon/AddSectionIcon";
import { Dispatch, DispatchWithoutAction } from "react";
import { LanguageKey } from "~/types/figurative/LanguageType";
import { TemplateSection } from "~/components/atoms/icon/TemplateIcon";
import { ClearIcon } from "~/components/atoms/icon/ClearIcon";

type TabBarProps = {
  contents: ContentType[];
  handleAddSection: DispatchWithoutAction;
  handleChangeTemplateLanguage: Dispatch<LanguageKey>;
};

export const TabBar = ({
  contents,
  handleAddSection,
  handleChangeTemplateLanguage,
}: TabBarProps): JSX.Element => {
  const { DownloadButton } = useRenderDownloadButton({ contents });
  const { onFileInputChange } = useOnFileInputChange();
  return (
    <div className={style.tabBarContainer}>
      <div className={style.startContent}>
        <AddSection handleAddSection={handleAddSection} />
        <TemplateSection
          handleChangeTemplateLanguage={handleChangeTemplateLanguage}
        />
        <FileImport handleClick={onFileInputChange} />
        <DownloadButton />
        <ClearIcon />
      </div>

      <div className={style.endContent}></div>
    </div>
  );
};
