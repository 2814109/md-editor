import { FC } from "react";
import { ContentType } from "../../types";

type Props = {
  contents: ContentType[];
};
export const useRenderDownloadButton = ({ contents }: Props) => {
  const handleMarkdownDownload = () => {
    const blob = new Blob(
      [contents?.map(({ content }) => content).join("\n")],
      {
        type: "text/plain",
      }
    );
    const link = document.createElement("a");
    link.download = "remake.md";
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const DownloadButton: FC = () => (
    <button onClick={handleMarkdownDownload} type="button">
      Export
    </button>
  );

  return { DownloadButton, handleMarkdownDownload };
};
