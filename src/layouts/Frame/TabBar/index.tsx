import style from "./style.module.css";
import { FileImport } from "~/components/atoms/icon/FileImportIcon";
import { useRenderDownloadButton } from "~/components/features/dragAndDrop/useRenderDownloadButton";
import { useOnFileInputChange } from "~/hooks/useOnFileInputChange";
import { AddSection } from "~/components/atoms/icon/AddSectionIcon";
import { TemplateSection } from "~/components/atoms/icon/TemplateIcon";
import { ClearIcon } from "~/components/atoms/icon/ClearIcon";
import { useAddSection } from "~/hooks/useAddSection";

export const TabBar = (): JSX.Element => {
  const { handleAddSection } = useAddSection();

  const { DownloadButton } = useRenderDownloadButton();
  const { onFileInputChange } = useOnFileInputChange();
  return (
    <div className={style.tabBarContainer}>
      <div className={style.startContent}>
        <AddSection handleAddSection={handleAddSection} />
        <TemplateSection />
        <ClearIcon />
      </div>

      <div className={style.endContent}>
        <FileImport handleClick={onFileInputChange} />
        <DownloadButton />
      </div>
    </div>
  );
};
