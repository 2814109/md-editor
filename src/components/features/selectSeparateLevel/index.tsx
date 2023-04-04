import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { H1Icon, H2Icon, H3Icon } from "./level";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import style from "./index.module.css";
import { useSeparateLevel } from "~/hooks/useSeparateLevel";
export const SelectSeparateLevel: FC = () => {
  const { separateLevel, onClickByLevel, onClickDecrement, onClickIncrement } =
    useSeparateLevel();

  return (
    <div className={style.wrapper}>
      <span>Current Level: {separateLevel}</span>
      <i onClick={() => onClickDecrement()}>
        <FontAwesomeIcon className={style.icon} icon={faArrowLeft} />
      </i>
      <i onClick={() => onClickByLevel("h1")}>
        <H1Icon />
      </i>
      <i onClick={() => onClickByLevel("h2")}>
        <H2Icon />
      </i>
      <i onClick={() => onClickByLevel("h3")}>
        <H3Icon />
      </i>

      <i onClick={() => onClickIncrement()}>
        <FontAwesomeIcon className={style.icon} icon={faArrowRight} />
      </i>
    </div>
  );
};
