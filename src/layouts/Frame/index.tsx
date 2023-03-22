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
  handleInitialize: DispatchWithoutAction;
};

export const Frame: FC<Props> = (props) => {
  return (
    <>
      <Header />
      <div className={style.stickyContainer}>
        <TabBar {...props} />
      </div>
      <div className={style.contentContainer}>{props.children}</div>
    </>
  );
};
