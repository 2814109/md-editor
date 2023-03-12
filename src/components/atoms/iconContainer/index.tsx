import { ReactNode } from "react";
import style from "./style.module.css";
type IconContainerProps = {
  children: ReactNode;
};
export const IconContainer = ({
  children,
}: IconContainerProps): JSX.Element => (
  <div className={style.iconContainer}>{children}</div>
);
