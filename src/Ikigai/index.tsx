/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import getCircleDefinitions from "./getCircleDefinitions";

import { SegmentValues } from "./segments";
import clips from "./clips";

import Circle from "./Circle";
import CircleShape from "./CircleShape";

import ClipGroup from "./ClipGroup";

type IkigaiProps = SegmentValues<string>;

export default function Ikigai(labels: IkigaiProps) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const radius = width / 4;
  const center = { x: width / 2, y: radius * 2 };
  const fontSize = (28 / 1366) * width;
  const circleDisplacement = 0.7;
  const textDisplacement = 0.55;

  const definitions = getCircleDefinitions(
    labels,
    circleDisplacement,
    textDisplacement,
    center,
    radius
  );

  return (
    <svg
      css={css`
        display: block;
      `}
      width={width}
      height={height}
    >
      <defs>
        {definitions.map(def => (
          <clipPath id={def.id} key={def.id}>
            <CircleShape center={def.shape.center} radius={radius} />
          </clipPath>
        ))}
      </defs>
      {definitions.map(def => (
        <Circle
          key={def.id}
          id={def.id}
          circle={{ ...def.circle, radius, color: def.color }}
          text={{ ...def.text, size: fontSize }}
          center={center}
        >
          {def.label}
        </Circle>
      ))}
      {clips.map(group => (
        <ClipGroup group={group} key={group.id} />
      ))}
    </svg>
  );
}
