import style from "./style.module.css";
import { ContentType } from "~/types";
import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";
import { Spacer } from "~/components/atoms/Spacer";

type PreviewSectionProps = {
  contents: ContentType[];
};
export const PreviewSection = ({
  contents,
}: PreviewSectionProps): JSX.Element => (
  <>
    {contents?.length > 0 && (
      <div className={`markdown-body ${style.previewContent}`}>
        <ReactMarkdown
          children={contents.map(({ content }) => content).join("\n")}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    )}
  </>
);
