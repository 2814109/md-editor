import { useEffect, useReducer } from "react";
import { useRecoilState } from "recoil";
import { useDragComponents } from "./components/dragAndDrop";
import { useRenderDownloadButton } from "./components/dragAndDrop/useRenderDownloadButton";
import { FrameComponent } from "./layouts/Frame";
import { MarkdownState } from "./recoil/atoms/markdown";
import { contentReducer } from "./libs/reducer/contentReducer";
function App() {
  const [markdown] = useRecoilState(MarkdownState);
  const [contents, dispatch] = useReducer(contentReducer, []);

  useEffect(() => {
    dispatch({ type: "set_state", payload: markdown });
  }, [markdown]);

  const { DownloadButton } = useRenderDownloadButton({ contents });
  const { DragAndDropArea } = useDragComponents({
    contents,
    dispatch,
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
