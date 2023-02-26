import { useEffect, useState } from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import { useDragComponents } from "./components/dragAndDrop";
import { useRenderDownloadButton } from "./components/dragAndDrop/useRenderDownloadButton";
import { FrameComponent } from "./layouts/Frame";
import { makeSplitByTagList } from "./libs/feature/dragAndDrop/makeSplitByTagList";
import { MarkdownState } from "./recoil/atoms/markdown";
import { ContentType } from "./types";
function App() {
  const [markdown] = useRecoilState(MarkdownState);
  const splitByTagList = makeSplitByTagList(markdown);

  const [dragList, setDragList] = useState<ContentType[]>(splitByTagList);

  const setItems = (contents: string) => {
    const splitByTagList = makeSplitByTagList(contents);
    setDragList(splitByTagList);
  };

  useEffect(() => {
    setItems(markdown);
  }, [markdown]);

  const { DownloadButton } = useRenderDownloadButton({ contents: dragList });

  const updateDragList = (content: ContentType) => {
    dragList[content.id] = content;

    setDragList([...dragList]);
  };

  const { DragAndDropArea } = useDragComponents({
    contents: markdown,
    dragList,
    setDragList,
    updateDragList,
  });

  return (
    <div className="App">
      <FrameComponent>
        <DragAndDropArea />
      </FrameComponent>
      <DownloadButton />
    </div>
  );
}

export default App;
