import { FC } from "react";
import { ContentType } from "~/types";
import { FileExport } from "~/components/atoms/icon/FileExportIcon/index";
type Props = {
  contents: ContentType[];
};

export const useRenderDownloadButton = ({ contents }: Props) => {
  const joinContents = contents?.map(({ content }) => content).join("\n");
  const handleMarkdownDownload = () => {
    const blob = new Blob([joinContents], {
      type: "text/plain",
    });
    const link = document.createElement("a");
    link.download = "README.md";
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const DownloadButton: FC = () => (
    <FileExport handleMarkdownDownload={handleMarkdownDownload} />
  );

  return { DownloadButton, handleMarkdownDownload };
};
