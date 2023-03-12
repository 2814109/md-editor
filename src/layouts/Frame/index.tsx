import { FC, ReactNode } from "react";

import { ContentType } from "~/types";
import style from "./style.module.css";
import { Spacer } from "~/components/atoms/_spacer/index";
import { Footer } from "./Footer";
import { Header } from "./Header";
type Props = {
  children: ReactNode;
  contents: ContentType[];
};

export const Frame: FC<Props> = ({ children, contents }) => {
  return (
    <>
      <Header />
      <Spacer size={24} />
      <div className={style.contentContainer}>{children}</div>
      <Spacer size={24} />
      <Footer contents={contents} />
    </>
  );
};
