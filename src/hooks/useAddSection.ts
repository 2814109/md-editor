import { useSetRecoilState } from "recoil";
import { useViewControll } from "~/hooks/useViewControll";
import { markdownContentTypeSelector } from "~/recoil/selectors/markdown/markdownContentTypeSelector";
import { splitByTag } from "~/libs/reducer/contentReducer/splitByTag";

export const useAddSection = () => {
  const set = useSetRecoilState(markdownContentTypeSelector);
  const { scrollToBottom } = useViewControll();
  const handleAddSection = () => {
    set((currentValue) => {
      const contents = currentValue.map(({ content }) => content).join("\n");
      const origin = splitByTag(contents);
      const addOrigin = [...origin, "# "];
      return addOrigin?.map((content, index) => ({
        id: index,
        content: content,
      }));
    });
    scrollToBottom();
  };

  return { handleAddSection };
};
