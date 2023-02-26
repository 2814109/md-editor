import { useEffect, useReducer } from "react";
import { useRecoilState } from "recoil";
import { useDragComponents } from "./components/features/dragAndDrop";
import { FrameComponent } from "./layouts/Frame";
import { MarkdownState } from "./recoil/atoms/markdown";
import { contentReducer } from "./libs/reducer/contentReducer";
import "./index.module.css";

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
    <div className="App">
      <FrameComponent contents={contents}>
        <DragAndDropArea />
      </FrameComponent>
    </div>
  );
}

export default App;
