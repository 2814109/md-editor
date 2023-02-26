import { useEffect, useReducer } from "react";
import { useRecoilState } from "recoil";
import { useDragComponents } from "./components/features/dragAndDrop";
import { Frame } from "./layouts/Frame";
import { MainContent } from "./layouts/MainContent";
import { MarkdownState } from "./recoil/atoms/markdown";
import { contentReducer } from "./libs/reducer/contentReducer";
import "./index.module.css";
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
    <div>
      <Frame contents={contents}>
        <MainContent>
          <Section>
            <DragAndDropArea />
          </Section>
          <Section>
            <ReactMarkdown
              children={contents.map(({ content }) => content).join("\n")}
            />
          </Section>
        </MainContent>
      </Frame>
    </div>
  );
}

export default App;
