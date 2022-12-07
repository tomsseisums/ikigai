import { Displacement, Origin } from "./types";

interface CirclePositionInformation {
  center: Origin;
  radius: number;
}

export default function getTextPosition(
  circle: CirclePositionInformation,
  displacement: Displacement
) {
  const center = {
    x: circle.center.x,
    y: circle.center.y
  };

  if (displacement.x) {
    center.x += circle.radius * displacement.x;
  }

  if (displacement.y) {
    center.y += circle.radius * displacement.y;
  }

  return center;
}
