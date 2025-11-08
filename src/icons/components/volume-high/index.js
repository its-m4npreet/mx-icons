import VolumeHighBold from "./VolumeHighBold";
import VolumeHighBroken from "./VolumeHighBroken";
import VolumeHighBulk from "./VolumeHighBulk";
import VolumeHighLinear from "./VolumeHighLinear";
import VolumeHighOutline from "./VolumeHighOutline";
import VolumeHighTwotone from "./VolumeHighTwotone";

export { VolumeHighBold, VolumeHighBroken, VolumeHighBulk, VolumeHighLinear, VolumeHighOutline, VolumeHighTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "volume-high-bold",
    Component: VolumeHighBold,
    componentName: "VolumeHighBold",
  },
  {
    variant: "broken",
    slug: "volume-high-broken",
    Component: VolumeHighBroken,
    componentName: "VolumeHighBroken",
  },
  {
    variant: "bulk",
    slug: "volume-high-bulk",
    Component: VolumeHighBulk,
    componentName: "VolumeHighBulk",
  },
  {
    variant: "linear",
    slug: "volume-high-linear",
    Component: VolumeHighLinear,
    componentName: "VolumeHighLinear",
  },
  {
    variant: "outline",
    slug: "volume-high-outline",
    Component: VolumeHighOutline,
    componentName: "VolumeHighOutline",
  },
  {
    variant: "twotone",
    slug: "volume-high-twotone",
    Component: VolumeHighTwotone,
    componentName: "VolumeHighTwotone",
  }
];

export default { VolumeHighBold, VolumeHighBroken, VolumeHighBulk, VolumeHighLinear, VolumeHighOutline, VolumeHighTwotone };
