import { FC, ReactNode } from "react";
import style from "./style.module.css";
type Props = {
  children: ReactNode;
};
export const Card: FC<Props> = ({ children }) => (
  <div className={style.cardContainer}>{children}</div>
);
