/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Origin } from "./types";

export interface CircleLabelDefinition {
  center: Origin;
  color?: string;
  size: number;
  label: string;
}

type CircleLabelProps = CircleLabelDefinition & {
  props?: React.SVGProps<SVGTextElement>;
};

export default function CircleLabel({
  center,
  size,
  label,
  props
}: CircleLabelProps) {
  return (
    <text
      css={css`
        text-anchor: middle;
        font-family: sans-serif;
        text-transform: uppercase;
        font-size: ${size}px;
      `}
      x={center.x}
      y={center.y}
      {...props}
    >
      {label}
    </text>
  );
}
