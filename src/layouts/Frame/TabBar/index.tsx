import style from "./style.module.css";
import { FileImport } from "~/components/atoms/icon/FileImportIcon";
import { useRenderDownloadButton } from "~/components/features/dragAndDrop/useRenderDownloadButton";
import { useOnFileInputChange } from "~/hooks/useOnFileInputChange";
import { ContentType } from "~/types";
import { AddSection } from "~/components/atoms/icon/AddSectionIcon";
import { DispatchWithoutAction } from "react";

type TabBarProps = {
  contents: ContentType[];
  handleAddSection: DispatchWithoutAction;
};

export const TabBar = ({
  contents,
  handleAddSection,
}: TabBarProps): JSX.Element => {
  const { DownloadButton } = useRenderDownloadButton({ contents });
  const { onFileInputChange } = useOnFileInputChange();
  return (
    <div className={style.tabBarContainer}>
      <AddSection handleAddSection={handleAddSection} />
      <FileImport handleClick={onFileInputChange} />
      <DownloadButton />
    </div>
  );
};
