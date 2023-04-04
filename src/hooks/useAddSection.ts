import { useSetRecoilState } from "recoil";
import { useViewControl } from "~/hooks/useViewControl";
import { markdownContentTypeSelector } from "~/recoil/selectors/markdown/markdownContentTypeSelector";
import { useSplitByTag } from "~/hooks/useSplitByTag";

export const useAddSection = () => {
  const { splitByTag } = useSplitByTag();
  const set = useSetRecoilState(markdownContentTypeSelector);
  const { scrollToBottom } = useViewControl();
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
