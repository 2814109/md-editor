import { DispatchWithoutAction, FC, ReactNode, Dispatch } from "react";

import { ContentType } from "~/types";
import style from "./style.module.css";
import { Header } from "./Header";
import { TabBar } from "./TabBar";
import { LanguageKey } from "~/types/figurative/LanguageType";
type Props = {
  children: ReactNode;
  contents: ContentType[];
  handleAddSection: DispatchWithoutAction;
  handleChangeTemplateLanguage: Dispatch<LanguageKey>;
};

export const Frame: FC<Props> = ({
  children,
  contents,
  handleAddSection,
  handleChangeTemplateLanguage,
}) => {
  return (
    <>
      <Header />
      <div className={style.stickyContainer}>
        <TabBar
          contents={contents}
          handleAddSection={handleAddSection}
          handleChangeTemplateLanguage={handleChangeTemplateLanguage}
        />
      </div>
      <div className={style.contentContainer}>{children}</div>
    </>
  );
};
