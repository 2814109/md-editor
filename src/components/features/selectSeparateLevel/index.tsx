import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { H1Icon, H2Icon, H3Icon } from "./level";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import style from "./index.module.css";
export const SelectSeparateLevel: FC = () => {
  return (
    <div className={style.wrapper}>
      <FontAwesomeIcon className={style.icon} icon={faArrowLeft} />
      <H1Icon />
      <H2Icon />
      <H3Icon />
      <FontAwesomeIcon className={style.icon} icon={faArrowRight} />
    </div>
  );
};
