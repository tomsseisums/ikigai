import { Displacement, Origin } from "./types";

export default function getCirclePosition(
  origin: Origin,
  displacement: Displacement,
  radius: number
) {
  const center = {
    x: origin.x,
    y: origin.y
  };

  if (displacement.x) {
    center.x += radius * displacement.x;
  }

  if (displacement.y) {
    center.y += radius * displacement.y;
  }

  return center;
}
