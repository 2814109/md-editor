import "github-markdown-css/github-markdown-dark.css";
import { useEffect, useReducer, useRef } from "react";
import { useRecoilState } from "recoil";
import { useDragComponents } from "./components/features/dragAndDrop";
import { Frame } from "./layouts/Frame";
import { MainContent } from "./layouts/MainContent";
import { MarkdownState } from "./recoil/atoms/markdown";
import { contentReducer } from "./libs/reducer/contentReducer";
import style from "./index.module.css";
import ReactMarkdown from "react-markdown";
import { Section } from "./layouts/Section";
import remarkGfm from "remark-gfm";
import { Spacer } from "./components/atoms/Spacer";

function App() {
  const [markdown] = useRecoilState(MarkdownState);
  const [contents, dispatch] = useReducer(contentReducer, []);
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    dispatch({ type: "set_state", payload: markdown });
  }, [markdown]);

  const { DragAndDropArea } = useDragComponents({
    contents,
    dispatch,
  });
  const handleAddSection = async () => {
    await dispatch({
      type: "add_state",
      payload: contents.map(({ content }) => content).join("\n"),
    });
    bottomRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className={style.root}>
        <Frame contents={contents} handleAddSection={handleAddSection}>
          <Spacer size={24} />
          <MainContent>
            <Section>
              <DragAndDropArea />
            </Section>
            <Section>
              {contents?.length > 0 && (
                <div className={`markdown-body ${style.previewContent}`}>
                  <span>Preview</span>
                  <ReactMarkdown
                    children={contents.map(({ content }) => content).join("\n")}
                    remarkPlugins={[remarkGfm]}
                  />
                  <Spacer size={16} />
                </div>
              )}
            </Section>
          </MainContent>
        </Frame>
      </div>
      <div ref={bottomRef} />
    </>
  );
}

export default App;
