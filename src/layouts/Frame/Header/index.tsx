import style from "./style.module.css";
import { headerTitle } from "./constants";

export const Header = (): JSX.Element => {
  return (
    <header>
      <div className={style.headerWrapper}>
        <h1>{headerTitle}</h1>
      </div>
    </header>
  );
};
