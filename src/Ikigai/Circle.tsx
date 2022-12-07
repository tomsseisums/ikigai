/** @jsx jsx */
import { jsx } from "@emotion/core";
import CircleShape from "./CircleShape";
import CircleLabel from "./CircleLabel";
import { Displacement, Origin } from "./types";
import getCirclePosition from "./getCirclePosition";
import getTextPosition from "./getTextPosition";

export interface CircleDefinition {
  circle: {
    displacement: Displacement;
    color: string;
    radius: number;
  };
  text: {
    displacement: Displacement;
    color?: string;
    size: number;
  };
  center: Origin;
}

type CircleDefinitionWithSVGProps = CircleDefinition & {
  circle: {
    props?: React.SVGProps<SVGCircleElement>;
  };
  text: {
    props?: React.SVGProps<SVGCircleElement>;
  };
};

interface CircleProps extends CircleDefinitionWithSVGProps {
  id: string;
  children: string;
}

export default function Circle({
  id,
  circle,
  text,
  center,
  children
}: CircleProps) {
  const cc = getCirclePosition(center, circle.displacement, circle.radius);
  const tc = getTextPosition(
    { center: cc, radius: circle.radius },
    text.displacement
  );

  return (
    <g id={id}>
      <CircleShape center={cc} {...circle} />
      <CircleLabel center={tc} {...text} label={children} />
    </g>
  );
}
