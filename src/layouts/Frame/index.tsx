import { FC, ReactNode } from "react";
import { markdownSelector } from "~/recoil/selectors/markdown/markdownSelector";
import { useSetRecoilState } from "recoil";
import { FileImport } from "~/components/atoms/button/FileImport";
import { useRenderDownloadButton } from "~/components/features/dragAndDrop/useRenderDownloadButton";
import { ContentType } from "~/types";
import style from "./style.module.css";
type Props = {
  children: ReactNode;
  contents: ContentType[];
};

export const Frame: FC<Props> = ({ children, contents }) => {
  const set = useSetRecoilState(markdownSelector);

  const { DownloadButton } = useRenderDownloadButton({ contents });

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
    <>
      <div className={style.layoutContainer}>
        <FileImport handleClick={onFileInputChange} />
      </div>
      <div className={style.contentContainer}>{children}</div>
      <div className={style.layoutContainer}>
        <DownloadButton />
      </div>
    </>
  );
};
