import { FC, ReactNode } from "react";

import style from "./style.module.css";
import { Header } from "./Header";
import { TabBar } from "./TabBar";
type Props = {
  children: ReactNode;
};

export const Frame: FC<Props> = (props) => {
  return (
    <>
      <Header />
      <div className={style.stickyContainer}>
        <TabBar />
      </div>
      <div className={style.contentContainer}>{props.children}</div>
    </>
  );
};
