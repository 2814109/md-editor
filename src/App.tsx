import "github-markdown-css/github-markdown-dark.css";
import { useEffect, useReducer, useRef } from "react";
import { useRecoilValue } from "recoil";
import { useDragComponents } from "./components/features/dragAndDrop";
import { Frame } from "./layouts/Frame";
import { MainContent } from "./layouts/MainContent";
import { markdownSelector } from "./recoil/selectors/markdown/markdownSelector";
import { contentReducer } from "./libs/reducer/contentReducer";
import style from "./index.module.css";
import { Section } from "./layouts/Section";
import { Spacer } from "./components/atoms/Spacer";
import { PreviewSection } from "./components/features/previewSection";
import { BottomAddSection } from "./components/atoms/icon/BottomAddSectionIcon";
import { makeContents } from "./libs/reducer/contentReducer/makeContents";
import { LanguageKey } from "./types/figurative/LanguageType";
import { scrollIntoViewCurrentRef } from "~/libs/common/scrollIntoViewCurrentRef";
export const App = () => {
  const markdown = useRecoilValue(markdownSelector);
  const initializeReducer = makeContents(markdown);

  const [contents, dispatch] = useReducer(contentReducer, initializeReducer);

  useEffect(() => {
    dispatch({
      type: "set_state",
      payload: markdown,
    });
  }, [markdown]);
  const bottomRef = useRef<HTMLDivElement>(null);

  const topRef = useRef<HTMLDivElement>(null);

  const { DragAndDropArea } = useDragComponents({
    contents,
    dispatch,
  });
  const handleAddSection = async () => {
    await dispatch({
      type: "add_state",
    });
    scrollIntoViewCurrentRef(bottomRef);
  };

  const handleChangeLanguage = (languageKey: LanguageKey) => {
    dispatch({ type: "change_language", languageKey: languageKey });

    scrollIntoViewCurrentRef(topRef);
  };

  return (
    <>
      <div ref={topRef} />
      <div className={style.root}>
        <Frame
          contents={contents}
          handleAddSection={handleAddSection}
          handleChangeLanguage={handleChangeLanguage}
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
      <div ref={bottomRef} />
    </>
  );
};
