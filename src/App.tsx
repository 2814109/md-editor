import "github-markdown-css/github-markdown-dark.css";
import { useReducer, useRef } from "react";
import { useRecoilState } from "recoil";
import { useDragComponents } from "./components/features/dragAndDrop";
import { Frame } from "./layouts/Frame";
import { MainContent } from "./layouts/MainContent";
import { MarkdownState } from "./recoil/atoms/markdown";
import { contentReducer } from "./libs/reducer/contentReducer";
import style from "./index.module.css";
import { Section } from "./layouts/Section";
import { Spacer } from "./components/atoms/Spacer";
import { PreviewSection } from "./components/features/previewSection";
import { BottomAddSection } from "./components/atoms/icon/BottomAddSectionIcon";
import { makeContents } from "./libs/reducer/contentReducer/makeContents";
import { LanguageKey } from "./types/figurative/LanguageType";

export const App = () => {
  const [markdown] = useRecoilState(MarkdownState);
  const initializeReducer = makeContents(markdown);
  const [contents, dispatch] = useReducer(contentReducer, initializeReducer);
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
    bottomRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleChangeLanguage = (languageKey: LanguageKey) => {
    console.log(languageKey);
    dispatch({ type: "change_language", languageKey: languageKey });

    topRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
              <BottomAddSection handleAddSection={handleAddSection} />
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
