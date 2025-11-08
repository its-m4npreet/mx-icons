import PlayBold from "./PlayBold";
import PlayBroken from "./PlayBroken";
import PlayBulk from "./PlayBulk";
import PlayLinear from "./PlayLinear";
import PlayOutline from "./PlayOutline";
import PlayTwotone from "./PlayTwotone";

export { PlayBold, PlayBroken, PlayBulk, PlayLinear, PlayOutline, PlayTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "play-bold",
    Component: PlayBold,
    componentName: "PlayBold",
  },
  {
    variant: "broken",
    slug: "play-broken",
    Component: PlayBroken,
    componentName: "PlayBroken",
  },
  {
    variant: "bulk",
    slug: "play-bulk",
    Component: PlayBulk,
    componentName: "PlayBulk",
  },
  {
    variant: "linear",
    slug: "play-linear",
    Component: PlayLinear,
    componentName: "PlayLinear",
  },
  {
    variant: "outline",
    slug: "play-outline",
    Component: PlayOutline,
    componentName: "PlayOutline",
  },
  {
    variant: "twotone",
    slug: "play-twotone",
    Component: PlayTwotone,
    componentName: "PlayTwotone",
  }
];

export default { PlayBold, PlayBroken, PlayBulk, PlayLinear, PlayOutline, PlayTwotone };
