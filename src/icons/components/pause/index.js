import PauseBold from "./PauseBold";
import PauseBroken from "./PauseBroken";
import PauseBulk from "./PauseBulk";
import PauseLinear from "./PauseLinear";
import PauseOutline from "./PauseOutline";
import PauseTwotone from "./PauseTwotone";

export { PauseBold, PauseBroken, PauseBulk, PauseLinear, PauseOutline, PauseTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "pause-bold",
    Component: PauseBold,
    componentName: "PauseBold",
  },
  {
    variant: "broken",
    slug: "pause-broken",
    Component: PauseBroken,
    componentName: "PauseBroken",
  },
  {
    variant: "bulk",
    slug: "pause-bulk",
    Component: PauseBulk,
    componentName: "PauseBulk",
  },
  {
    variant: "linear",
    slug: "pause-linear",
    Component: PauseLinear,
    componentName: "PauseLinear",
  },
  {
    variant: "outline",
    slug: "pause-outline",
    Component: PauseOutline,
    componentName: "PauseOutline",
  },
  {
    variant: "twotone",
    slug: "pause-twotone",
    Component: PauseTwotone,
    componentName: "PauseTwotone",
  }
];

export default { PauseBold, PauseBroken, PauseBulk, PauseLinear, PauseOutline, PauseTwotone };
