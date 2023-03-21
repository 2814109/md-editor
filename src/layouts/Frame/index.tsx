import { DispatchWithoutAction, FC, ReactNode } from "react";

import { ContentType } from "~/types";
import style from "./style.module.css";
import { Spacer } from "~/components/atoms/Spacer/index";
import { Header } from "./Header";
import { TabBar } from "./TabBar";
type Props = {
  children: ReactNode;
  contents: ContentType[];
  handleAddSection: DispatchWithoutAction;
};

export const Frame: FC<Props> = ({ children, contents, handleAddSection }) => {
  return (
    <>
      <Header />
      <div className={style.stickyContainer}>
        <TabBar contents={contents} handleAddSection={handleAddSection} />
      </div>
      <Spacer size={24} />
      <div className={style.contentContainer}>{children}</div>
      <Spacer size={24} />
    </>
  );
};
