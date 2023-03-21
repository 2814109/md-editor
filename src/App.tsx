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
// import { useContents } from "./hooks/useContent";
import { useViewControll } from "./hooks/useViewControll";

import { useEffect, useReducer } from "react";
import { useRecoilValue } from "recoil";
import { contentReducer } from "~/libs/reducer/contentReducer";
import { makeContents } from "~/libs/reducer/contentReducer/makeContents";
import { markdownSelector } from "~/recoil/selectors/markdown/markdownSelector";

export const App = () => {
  // const { contents, dispatch } = useContents();

  const markdown = useRecoilValue(markdownSelector);
  const initializeReducer = makeContents(markdown);

  const [contents, dispatch] = useReducer(contentReducer, initializeReducer);
  useEffect(() => {
    markdown.length > 0
      ? dispatch({
          type: "set_state",
          payload: markdown,
        })
      : dispatch({
          type: "initialize_state",
        });
  }, [markdown]);
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
        >
          <Spacer size={24} />
          <MainContent>
            <Section>
              <DragAndDropArea />
              <Spacer size={24} />
              {contents.length > 0 && (
                <BottomAddSection handleAddSection={handleAddSection} />
              )}
            </Section>
            <Section>
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
