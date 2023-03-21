import style from "./style.module.css";
import { FileImport } from "~/components/atoms/icon/FileImportIcon";
import { useRenderDownloadButton } from "~/components/features/dragAndDrop/useRenderDownloadButton";
import { useOnFileInputChange } from "~/hooks/useOnFileInputChange";
import { ContentType } from "~/types";

type TabBarProps = {
  contents: ContentType[];
};

export const TabBar = ({ contents }: TabBarProps): JSX.Element => {
  const { DownloadButton } = useRenderDownloadButton({ contents });
  const { onFileInputChange } = useOnFileInputChange();
  return (
    <div className={style.tabBarContainer}>
      <FileImport handleClick={onFileInputChange} />
      <DownloadButton />
    </div>
  );
};
