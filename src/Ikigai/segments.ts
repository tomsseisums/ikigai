export enum Segment {
  LOVE = "love",
  WORLD = "world",
  WEALTH = "wealth",
  TALENT = "talent"
}

export interface SegmentValues<T> {
  [Segment.LOVE]: T;
  [Segment.WORLD]: T;
  [Segment.WEALTH]: T;
  [Segment.TALENT]: T;
}

export const colors: SegmentValues<string> = {
  [Segment.LOVE]: "#fef07a",
  [Segment.WORLD]: "#feb5a9",
  [Segment.WEALTH]: "#a2ffe7",
  [Segment.TALENT]: "#d8fe92"
};
