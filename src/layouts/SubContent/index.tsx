import { Composition } from "~/types";
import style from "./index.module.css";
export const SubContent = ({ children }: Composition): JSX.Element => (
  <div className={style.wrapper}>{children}</div>
);
