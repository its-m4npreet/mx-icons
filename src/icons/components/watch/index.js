import WatchBold from "./WatchBold";
import WatchBroken from "./WatchBroken";
import WatchBulk from "./WatchBulk";
import WatchLinear from "./WatchLinear";
import WatchOutline from "./WatchOutline";
import WatchTwotone from "./WatchTwotone";

export { WatchBold, WatchBroken, WatchBulk, WatchLinear, WatchOutline, WatchTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "watch-bold",
    Component: WatchBold,
    componentName: "WatchBold",
  },
  {
    variant: "broken",
    slug: "watch-broken",
    Component: WatchBroken,
    componentName: "WatchBroken",
  },
  {
    variant: "bulk",
    slug: "watch-bulk",
    Component: WatchBulk,
    componentName: "WatchBulk",
  },
  {
    variant: "linear",
    slug: "watch-linear",
    Component: WatchLinear,
    componentName: "WatchLinear",
  },
  {
    variant: "outline",
    slug: "watch-outline",
    Component: WatchOutline,
    componentName: "WatchOutline",
  },
  {
    variant: "twotone",
    slug: "watch-twotone",
    Component: WatchTwotone,
    componentName: "WatchTwotone",
  }
];

export default { WatchBold, WatchBroken, WatchBulk, WatchLinear, WatchOutline, WatchTwotone };
