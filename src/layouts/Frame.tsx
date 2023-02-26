import { FC, ReactNode } from "react";
import { markdownSelector } from "~/recoil/selectors/markdown/markdownSelector";
import { useSetRecoilState } from "recoil";
import { FileImport } from "~/components/atoms/button/FileImport";
import { useRenderDownloadButton } from "~/components/features/dragAndDrop/useRenderDownloadButton";
import { ContentType } from "~/types";
type Props = {
  children: ReactNode;
  contents: ContentType[];
};

export const FrameComponent: FC<Props> = ({ children, contents }) => {
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
      <FileImport handleClick={onFileInputChange} />
      {children}
      <DownloadButton />
    </>
  );
};
