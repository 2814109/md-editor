import { markdownSelector } from "~/recoil/selectors/markdown/markdownSelector";
import { useSetRecoilState } from "recoil";
import { FileImport } from "~/components/atoms/icon/FileImportIcon";
import style from "./style.module.css";
import { useRenderDownloadButton } from "~/components/features/dragAndDrop/useRenderDownloadButton";
import { ContentType } from "~/types";
import { Spacer } from "~/components/atoms/Spacer";

type HeaderProps = {
  contents: ContentType[];
};

export const Header = ({ contents }: HeaderProps): JSX.Element => {
  const { DownloadButton } = useRenderDownloadButton({ contents });

  const set = useSetRecoilState(markdownSelector);

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file: FileList | null = e.target.files;
    if (file instanceof FileList) {
      reader.readAsText(file[0]);
      reader.onload = (e: ProgressEvent<FileReader>) => {
        set(String(e?.target?.result));
      };
    }
  };

  return (
    <header className={style.headerContainer}>
      <div className={style.headerWrapper}>
        <h1>Markdown Editor</h1>
        <div className={style.layoutContainer}>
          <FileImport handleClick={onFileInputChange} />
          <Spacer horizontal size={48} />
          <DownloadButton />
        </div>
      </div>
    </header>
  );
};
