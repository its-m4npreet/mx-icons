import VolumeLowBold from "./VolumeLowBold";
import VolumeLowBroken from "./VolumeLowBroken";
import VolumeLowBulk from "./VolumeLowBulk";
import VolumeLowLinear from "./VolumeLowLinear";
import VolumeLowOutline from "./VolumeLowOutline";
import VolumeLowTwotone from "./VolumeLowTwotone";

export { VolumeLowBold, VolumeLowBroken, VolumeLowBulk, VolumeLowLinear, VolumeLowOutline, VolumeLowTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "volume-low-bold",
    Component: VolumeLowBold,
    componentName: "VolumeLowBold",
  },
  {
    variant: "broken",
    slug: "volume-low-broken",
    Component: VolumeLowBroken,
    componentName: "VolumeLowBroken",
  },
  {
    variant: "bulk",
    slug: "volume-low-bulk",
    Component: VolumeLowBulk,
    componentName: "VolumeLowBulk",
  },
  {
    variant: "linear",
    slug: "volume-low-linear",
    Component: VolumeLowLinear,
    componentName: "VolumeLowLinear",
  },
  {
    variant: "outline",
    slug: "volume-low-outline",
    Component: VolumeLowOutline,
    componentName: "VolumeLowOutline",
  },
  {
    variant: "twotone",
    slug: "volume-low-twotone",
    Component: VolumeLowTwotone,
    componentName: "VolumeLowTwotone",
  }
];

export default { VolumeLowBold, VolumeLowBroken, VolumeLowBulk, VolumeLowLinear, VolumeLowOutline, VolumeLowTwotone };
