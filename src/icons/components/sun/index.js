import SunBold from "./SunBold";
import SunBroken from "./SunBroken";
import SunBulk from "./SunBulk";
import SunLinear from "./SunLinear";
import SunOutline from "./SunOutline";
import SunTwotone from "./SunTwotone";

export { SunBold, SunBroken, SunBulk, SunLinear, SunOutline, SunTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sun-bold",
    Component: SunBold,
    componentName: "SunBold",
  },
  {
    variant: "broken",
    slug: "sun-broken",
    Component: SunBroken,
    componentName: "SunBroken",
  },
  {
    variant: "bulk",
    slug: "sun-bulk",
    Component: SunBulk,
    componentName: "SunBulk",
  },
  {
    variant: "linear",
    slug: "sun-linear",
    Component: SunLinear,
    componentName: "SunLinear",
  },
  {
    variant: "outline",
    slug: "sun-outline",
    Component: SunOutline,
    componentName: "SunOutline",
  },
  {
    variant: "twotone",
    slug: "sun-twotone",
    Component: SunTwotone,
    componentName: "SunTwotone",
  }
];

export default { SunBold, SunBroken, SunBulk, SunLinear, SunOutline, SunTwotone };
