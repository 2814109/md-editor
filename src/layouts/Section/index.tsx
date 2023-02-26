import { ReactNode, FC } from "react";
import style from "./style.module.css";
type Props = {
  children: ReactNode;
};
export const Section: FC<Props> = ({ children }) => (
  <div className={style.section}>{children}</div>
);
