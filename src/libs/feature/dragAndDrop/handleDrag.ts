import { MutableRefObject } from "react";
import { PositionType } from "../../../types/figurative/PositionType";

export const handleDragStart = (
  event: React.DragEvent,
  position: MutableRefObject<PositionType>
) => {
  position.current.point = event.currentTarget.getAttribute("primary-key");
};

export const handleDragOver = (
  event: React.DragEvent,
  position: MutableRefObject<PositionType>
) => {
  event.preventDefault();
  position.current.point = event.currentTarget.getAttribute("primary-key");
};
