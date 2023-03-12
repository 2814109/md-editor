import { markdownSelector } from "~/recoil/selectors/markdown/markdownSelector";
import { useSetRecoilState } from "recoil";
import { FileImport } from "~/components/atoms/button/FileImport";
import style from "./style.module.css";

export const Header = (): JSX.Element => {
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
    <div className={style.layoutContainer}>
      <FileImport handleClick={onFileInputChange} />
    </div>
  );
};
