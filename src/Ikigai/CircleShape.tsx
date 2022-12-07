/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Origin } from "./types";

export interface CircleShapeDefinition {
  center: Origin;
  color?: string;
  radius: number;
}

type CircleShapeProps = CircleShapeDefinition & {
  props?: React.SVGProps<SVGCircleElement>;
};

export default function CircleShape({
  center,
  color,
  radius,
  props
}: CircleShapeProps) {
  return (
    <circle
      css={
        color &&
        css`
          fill: ${color};
          fill-opacity: 0.6;
        `
      }
      cx={center.x}
      cy={center.y}
      r={radius}
      {...props}
    />
  );
}
