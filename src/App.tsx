import "github-markdown-css/github-markdown-dark.css";
import { useDragComponents } from "./components/features/dragAndDrop";
import { Frame } from "./layouts/Frame";
import { MainContent } from "./layouts/MainContent";
import style from "./index.module.css";
import { Section } from "./layouts/Section";
import { Spacer } from "./components/atoms/Spacer";
import { PreviewSection } from "./components/features/previewSection";
import { BottomAddSection } from "./components/atoms/icon/BottomAddSectionIcon";
import { LanguageKey } from "./types/figurative/LanguageType";
import { useViewControll } from "./hooks/useViewControll";
import { useContents } from "./hooks/useContent";

export const App = () => {
  const { contents, dispatch } = useContents();

  const { TopAnchor, BottomAnchor, scrollToTop, scrollToBottom } =
    useViewControll();

  const { DragAndDropArea } = useDragComponents({
    contents,
    dispatch,
  });

  const handleAddSection = async () => {
    await dispatch({
      type: "add_state",
    });
    scrollToBottom();
  };
  const handleInitialize = () => {
    dispatch({
      type: "initialize_state",
    });
  };

  const handleChangeTemplateLanguage = (languageKey: LanguageKey) => {
    dispatch({ type: "change_template_language", languageKey: languageKey });
    scrollToTop();
  };

  return (
    <>
      <TopAnchor />
      <div className={style.root}>
        <Frame
          contents={contents}
          handleAddSection={handleAddSection}
          handleChangeTemplateLanguage={handleChangeTemplateLanguage}
          handleInitialize={handleInitialize}
        >
          <Spacer size={24} />
          <MainContent>
            <Section>
              <h2 className={style.sectionTitle}>Edit</h2>
              <DragAndDropArea />
              <Spacer size={24} />
              {contents.length > 0 && (
                <BottomAddSection handleAddSection={handleAddSection} />
              )}
            </Section>
            <Section>
              <h2 className={style.sectionTitle}>Preview</h2>
              <PreviewSection contents={contents} />
              <Spacer size={16} />
            </Section>
          </MainContent>
          <Spacer size={36} />
        </Frame>
      </div>
      <BottomAnchor />
    </>
  );
};
