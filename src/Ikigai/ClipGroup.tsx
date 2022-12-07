/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import { ClipDefinition } from "./clips";

export default function ClipGroup({
  group: { keys, ...group }
}: {
  group: ClipDefinition;
}) {
  const [next, ...remaining] = keys;

  const nextGroup = {
    ...group,
    keys: remaining
  };

  if (remaining.length === 0) {
    return (
      <g
        clipPath={`url(#${next})`}
        css={css`
          stroke: black;
          stroke-width: 5px;
        `}
      >
        <rect
          css={css`
            fill: ${group.color.hex()};
          `}
          width={window.innerWidth}
          height={window.innerHeight}
        />
      </g>
    );
  }

  return (
    <g clipPath={`url(#${next})`}>
      <ClipGroup group={nextGroup} />
    </g>
  );
}
