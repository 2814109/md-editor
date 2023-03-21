import { RefObject } from "react";

export const scrollIntoViewCurrentRef = (
  currentRef: RefObject<HTMLDivElement>
) =>
  currentRef?.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
