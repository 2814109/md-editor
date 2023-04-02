import { markdownContentTypeSelector } from "~/recoil/selectors/markdown/markdownContentTypeSelector";
import { useSetRecoilState } from "recoil";
import { useMakeContents } from "~/hooks/useMakeContents";

export const useOnFileInputChange = () => {
  const { makeContents } = useMakeContents();
  const set = useSetRecoilState(markdownContentTypeSelector);
  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file: FileList | null = event.target.files;

    if (file instanceof FileList) {
      reader.readAsText(file[0]);
      reader.onload = (e: ProgressEvent<FileReader>) => {
        set(makeContents(String(e?.target?.result)));
      };
    }
  };

  return { onFileInputChange };
};
