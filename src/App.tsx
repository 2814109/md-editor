import "github-markdown-css/github-markdown-dark.css";
import { useDragComponents } from "./components/features/dragAndDrop";
import { Frame } from "./layouts/Frame";
import { MainContent } from "./layouts/MainContent";
import style from "./index.module.css";
import { Section } from "./layouts/Section";
import { Spacer } from "./components/atoms/Spacer";
import { PreviewSection } from "./components/features/previewSection";
import { BottomAddSection } from "./components/atoms/icon/BottomAddSectionIcon";
import { useViewControll } from "./hooks/useViewControll";
import { useRecoilValue } from "recoil";
import { markdownContentTypeSelector } from "./recoil/selectors/markdown/markdownContentTypeSelector";
import { useSeparateLevel } from "./hooks/useSeparateLevel";

export const App = () => {
  const contents = useRecoilValue(markdownContentTypeSelector);
  const { onClick } = useSeparateLevel();
  const { TopAnchor, BottomAnchor } = useViewControll();

  const { DragAndDropArea } = useDragComponents();

  return (
    <>
      <TopAnchor />
      <div className={style.root}>
        {/* <button onClick={() => onClick()}>test</button> */}
        <Frame>
          <Spacer size={24} />
          <MainContent>
            <Section>
              <h2 className={style.sectionTitle}>Edit</h2>
              <DragAndDropArea />
              <Spacer size={24} />
              {contents.length > 0 && <BottomAddSection />}
            </Section>
            <Section>
              <h2 className={style.sectionTitle}>Preview</h2>
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
