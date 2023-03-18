import { FC, ReactNode } from "react";

import { ContentType } from "~/types";
import style from "./style.module.css";
import { Spacer } from "~/components/atoms/Spacer/index";
import { Header } from "./Header";
type Props = {
  children: ReactNode;
  contents: ContentType[];
};

export const Frame: FC<Props> = ({ children, contents }) => {
  return (
    <>
      <Header contents={contents} />
      <Spacer size={24} />
      <div className={style.contentContainer}>{children}</div>
      <Spacer size={24} />
    </>
  );
};
