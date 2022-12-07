import { Displacement, Origin } from "./types";
import { SegmentValues, colors as segmentColors } from "./segments";
import getCirclePosition from "./getCirclePosition";

export interface CircleDefinitionTemplate {
  circle: {
    displacement: Displacement;
  };
  label: string;
  text: {
    displacement: Displacement;
  };
}

type CircleDefinitionTemplates = SegmentValues<CircleDefinitionTemplate>;

export default function getCircleDefinitions(
  labels: SegmentValues<string>,
  circleDisplacement: number,
  textDisplacement: number,
  center: Origin,
  radius: number
) {
  const definitionTemplates: CircleDefinitionTemplates = {
    love: {
      circle: {
        displacement: { y: -circleDisplacement }
      },
      label: labels.love,
      text: {
        displacement: {
          y: -textDisplacement
        }
      }
    },
    world: {
      circle: {
        displacement: { x: circleDisplacement }
      },
      label: labels.world,
      text: {
        displacement: {
          x: textDisplacement
        }
      }
    },
    wealth: {
      circle: {
        displacement: { y: circleDisplacement }
      },
      label: labels.wealth,
      text: {
        displacement: {
          y: textDisplacement
        }
      }
    },
    talent: {
      circle: {
        displacement: { x: -circleDisplacement }
      },
      label: labels.talent,
      text: {
        displacement: {
          x: -textDisplacement
        }
      }
    }
  };

  const definitionNames = Object.keys(definitionTemplates);

  const definitions = definitionNames.map(key => {
    const template: CircleDefinitionTemplate = definitionTemplates[key];
    return {
      ...template,
      id: key,
      color: segmentColors[key],
      shape: {
        center: getCirclePosition(center, template.circle.displacement, radius)
      }
    };
  });

  return definitions;
}
