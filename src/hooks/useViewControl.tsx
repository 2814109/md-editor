import { useRef } from "react";
import { scrollIntoViewCurrentRef } from "~/libs/common/scrollIntoViewCurrentRef";

export const useViewControl = () => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => scrollIntoViewCurrentRef(topRef);
  const scrollToBottom = () => scrollIntoViewCurrentRef(bottomRef);

  const TopAnchor = (): JSX.Element => <div ref={topRef} />;
  const BottomAnchor = (): JSX.Element => <div ref={bottomRef} />;
  return { TopAnchor, BottomAnchor, scrollToTop, scrollToBottom };
};
