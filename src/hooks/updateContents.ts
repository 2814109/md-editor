import { useRecoilState, useSetRecoilState } from "recoil";
import { markdownContentTypeSelector } from "~/recoil/selectors/markdown/markdownContentTypeSelector";
import { splitByTag } from "~/libs/reducer/contentReducer/splitByTag";
import { ContentType } from "~/types";

export const useUpdateContent = () => {
  const [markdown, set] = useRecoilState(markdownContentTypeSelector);

  const updateContents = (content: ContentType) => {
    const cloneContent = [...markdown];
    cloneContent[content.id] = content;
    const markdwonAsString = cloneContent
      .map(({ content }) => content)
      .join("\n");

    const origin = splitByTag(markdwonAsString ?? "");

    const makedContents = origin?.map((content, index) => {
      return { id: index, content: content };
    }, []);
    set(makedContents);
  };

  return { updateContents };
};
