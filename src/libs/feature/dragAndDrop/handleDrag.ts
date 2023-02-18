import { MutableRefObject } from "react";
import { PositionType } from "../../../types/PositionType";

type PatternOfDragType = 'start' | 'over'

export const handleDrag = (event: React.DragEvent, position: MutableRefObject<PositionType>, patternOfDrag: PatternOfDragType) => {
  if (patternOfDrag === 'over') event.preventDefault();
  position.current.point =
    event.currentTarget.getAttribute("primary-key");
}