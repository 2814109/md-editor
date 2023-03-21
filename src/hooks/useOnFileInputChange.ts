import { markdownSelector } from "~/recoil/selectors/markdown/markdownSelector";
import { useSetRecoilState } from "recoil";

export const useOnFileInputChange = () => {
  const set = useSetRecoilState(markdownSelector);
  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file: FileList | null = event.target.files;

    if (file instanceof FileList) {
      reader.readAsText(file[0]);
      reader.onload = (e: ProgressEvent<FileReader>) => {
        set(String(e?.target?.result));
      };
    }
  };

  return { onFileInputChange };
};
