import { useEffect, useReducer } from "react";
import { useRecoilState } from "recoil";
import { useDragComponents } from "./components/features/dragAndDrop";
import { Frame } from "./layouts/Frame";
import { MainContent } from "./layouts/MainContent";
import { MarkdownState } from "./recoil/atoms/markdown";
import { contentReducer } from "./libs/reducer/contentReducer";
import style from "./index.module.css";
import ReactMarkdown from "react-markdown";
import { Section } from "./layouts/Section";
function App() {
  const [markdown] = useRecoilState(MarkdownState);
  const [contents, dispatch] = useReducer(contentReducer, []);

  useEffect(() => {
    dispatch({ type: "set_state", payload: markdown });
  }, [markdown]);

  const { DragAndDropArea } = useDragComponents({
    contents,
    dispatch,
  });

  return (
    <div className={style.root}>
      <Frame contents={contents}>
        <MainContent>
          <Section>
            <DragAndDropArea />
          </Section>
          <Section>
            {contents.length > 0 && (
              <div className={style.outputContent}>
                <ReactMarkdown
                  children={contents.map(({ content }) => content).join("\n")}
                />
              </div>
            )}
          </Section>
        </MainContent>
      </Frame>
    </div>
  );
}

export default App;
