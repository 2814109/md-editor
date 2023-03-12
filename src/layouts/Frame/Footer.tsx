import style from "./style.module.css";
import { useRenderDownloadButton } from "~/components/features/dragAndDrop/useRenderDownloadButton";
import { ContentType } from "~/types";

type FooterProps = {
  contents: ContentType[];
};
export const Footer = ({ contents }: FooterProps): JSX.Element => {
  const { DownloadButton } = useRenderDownloadButton({ contents });

  return (
    <div className={style.layoutContainer}>
      <DownloadButton />
    </div>
  );
};
