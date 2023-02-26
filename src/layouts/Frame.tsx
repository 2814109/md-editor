import { FC, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImport } from "@fortawesome/free-solid-svg-icons";
import { markdownSelector } from "../recoil/selectors/markdown/markdownSelector";
import { useSetRecoilState } from "recoil";
type Props = {
  children: ReactNode;
};

export const FrameComponent: FC<Props> = ({ children }) => {
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
    <>
      <i>
        <input type="file" accept=".md" onChange={onFileInputChange} />
        <FontAwesomeIcon icon={faFileImport} />
      </i>
      {children}
    </>
  );
};
