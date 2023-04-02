import { useRecoilState, useSetRecoilState } from "recoil";
import { markdownContentTypeSelector } from "~/recoil/selectors/markdown/markdownContentTypeSelector";
// import { useSplitByTag } from "~/hooks/useSplitByTag";
import { ContentType } from "~/types";

export const useUpdateContent = () => {
  const [markdown, set] = useRecoilState(markdownContentTypeSelector);
  const updateContents = (content: ContentType) => {
    const cloneContent = [...markdown];
    cloneContent[content.id] = content;
    set(cloneContent);
  };
  return { updateContents };
};
