import style from "./style.module.css";
import { Composition } from "~/types";
export const IncludeIconButton = ({ children }: Composition): JSX.Element => (
  <div className={style.tabItem}>{children}</div>
);
