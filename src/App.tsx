import { useEffect, useReducer } from "react";
import { useRecoilState } from "recoil";
import { useDragComponents } from "./components/dragAndDrop";
import { useRenderDownloadButton } from "./components/dragAndDrop/useRenderDownloadButton";
import { FrameComponent } from "./layouts/Frame";
import { MarkdownState } from "./recoil/atoms/markdown";
import { ContentType } from "./types";
import { contentReducer } from "./libs/reducer/contentReducer";
function App() {
  const [markdown] = useRecoilState(MarkdownState);

  const [contents, dispatch] = useReducer(contentReducer, []);

  console.log(contents);
  useEffect(() => {
    dispatch({ type: "set_state", payload: markdown });
  }, [markdown]);

  const { DownloadButton } = useRenderDownloadButton({ contents });

  const updateDragList = (content: ContentType) => {
    contents[content.id] = content;
    dispatch({
      type: "set_state",
      payload: contents.map(({ content }) => content).join("\n"),
    });
  };

  const { DragAndDropArea } = useDragComponents({
    contents,
    dispatch,
    updateDragList,
  });

  return (
    <div className="App">
      <FrameComponent>
        <DragAndDropArea />
        <DownloadButton />
      </FrameComponent>
    </div>
  );
}

export default App;
