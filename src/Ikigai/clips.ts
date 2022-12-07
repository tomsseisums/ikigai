import { average } from "chroma-js";

import { Segment, colors as segmentColors } from "./segments";

export enum Clip {
  MISSION = "mission",
  VOCATION = "vocation",
  PROFESSION = "profession",
  PASSION = "passion",
  EXCITEMENT = "excitement",
  COMFORT = "comfort",
  SATISFACTION = "satisfaction",
  DELIGHT = "delight",
  IKIGAI = "ikigai"
}

export interface ClipValues<T> {
  [Clip.MISSION]: T;
  [Clip.VOCATION]: T;
  [Clip.PROFESSION]: T;
  [Clip.PASSION]: T;
  [Clip.EXCITEMENT]: T;
  [Clip.COMFORT]: T;
  [Clip.SATISFACTION]: T;
  [Clip.DELIGHT]: T;
  [Clip.IKIGAI]: T;
}

export interface ClipTemplate {
  keys: Segment[];
  label: string;
  color: chroma.Color;
}

const missionKeys = [Segment.LOVE, Segment.WORLD];
const missionClip = {
  keys: missionKeys,
  label: "Mission",
  color: average(missionKeys.map(k => segmentColors[k]), "rgb")
};

const vocationKeys = [Segment.WORLD, Segment.WEALTH];
const vocationClip = {
  keys: vocationKeys,
  label: "Vocation",
  color: average(vocationKeys.map(k => segmentColors[k]), "rgb")
};

const professionKeys = [Segment.WEALTH, Segment.TALENT];
const professionClip = {
  keys: professionKeys,
  label: "Profession",
  color: average(professionKeys.map(k => segmentColors[k]), "rgb")
};

const passionKeys = [Segment.TALENT, Segment.LOVE];
const passionClip = {
  keys: passionKeys,
  label: "Passion",
  color: average(passionKeys.map(k => segmentColors[k]), "rgb")
};

const excitementKeys = [Segment.LOVE, Segment.WORLD, Segment.WEALTH];
const excitementClip = {
  keys: excitementKeys,
  label: "Excitement",
  color: average([missionClip.color, vocationClip.color], "rgb")
};

const comfortKeys = [Segment.WORLD, Segment.WEALTH, Segment.TALENT];
const comfortClip = {
  keys: comfortKeys,
  label: "Comfort",
  color: average([vocationClip.color, professionClip.color], "rgb")
};

const satisfactionKeys = [Segment.WEALTH, Segment.TALENT, Segment.LOVE];
const satisfactionClip = {
  keys: satisfactionKeys,
  label: "Satisfaction",
  color: average([professionClip.color, passionClip.color], "rgb")
};

const delightKeys = [Segment.TALENT, Segment.LOVE, Segment.WORLD];
const delightClip = {
  keys: delightKeys,
  label: "Delight",
  color: average([passionClip.color, missionClip.color], "rgb")
};

const ikigaiKeys = [
  Segment.LOVE,
  Segment.WORLD,
  Segment.WEALTH,
  Segment.TALENT
];
const ikigaiClip = {
  keys: ikigaiKeys,
  label: "Ikigai",
  color: average(
    [
      excitementClip.color,
      comfortClip.color,
      satisfactionClip.color,
      delightClip.color
    ],
    "rgb"
  )
};

export type ClipDefinition = ClipTemplate & { id: string };

const clips: ClipDefinition[] = [
  {
    ...missionClip,
    id: Clip.MISSION
  },
  {
    ...vocationClip,
    id: Clip.VOCATION
  },
  {
    ...professionClip,
    id: Clip.PROFESSION
  },
  {
    ...passionClip,
    id: Clip.PASSION
  },
  {
    ...excitementClip,
    id: Clip.EXCITEMENT
  },
  {
    ...comfortClip,
    id: Clip.COMFORT
  },
  {
    ...satisfactionClip,
    id: Clip.SATISFACTION
  },
  {
    ...delightClip,
    id: Clip.DELIGHT
  },
  {
    ...ikigaiClip,
    id: Clip.IKIGAI
  }
];

export default clips;
