import "github-markdown-css/github-markdown-dark.css";
import { useDragComponents } from "./components/features/dragAndDrop";
import { Frame } from "./layouts/Frame";
import { MainContent } from "./layouts/MainContent";
import style from "./index.module.css";
import { Section } from "./layouts/Section";
import { Spacer } from "./components/atoms/Spacer";
import { PreviewSection } from "./components/features/previewSection";
import { BottomAddSection } from "./components/atoms/icon/BottomAddSectionIcon";
import { useViewControl } from "./hooks/useViewControl";
import { useRecoilValue } from "recoil";
import { markdownContentTypeSelector } from "./recoil/selectors/markdown/markdownContentTypeSelector";
import { SelectSeparateLevel } from "./components/features/selectSeparateLevel";
import { SubContent } from "./layouts/SubContent";

export const App = () => {
  const contents = useRecoilValue(markdownContentTypeSelector);
  const { TopAnchor, BottomAnchor } = useViewControl();

  const { DragAndDropArea } = useDragComponents();

  return (
    <>
      <TopAnchor />
      <div className={style.root}>
        <Frame>
          <Spacer size={24} />
          <SubContent>
            <SelectSeparateLevel />
          </SubContent>
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
