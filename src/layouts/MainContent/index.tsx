import { FC, ReactNode } from "react";
import style from "./style.module.css";
type Props = {
  children: ReactNode;
};
export const MainContent: FC<Props> = ({ children }) => (
  <div className={style.mainContainer}>{children}</div>
);
