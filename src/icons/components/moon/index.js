import MoonBold from "./MoonBold";
import MoonBroken from "./MoonBroken";
import MoonBulk from "./MoonBulk";
import MoonLinear from "./MoonLinear";
import MoonOutline from "./MoonOutline";
import MoonTwotone from "./MoonTwotone";

export { MoonBold, MoonBroken, MoonBulk, MoonLinear, MoonOutline, MoonTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "moon-bold",
    Component: MoonBold,
    componentName: "MoonBold",
  },
  {
    variant: "broken",
    slug: "moon-broken",
    Component: MoonBroken,
    componentName: "MoonBroken",
  },
  {
    variant: "bulk",
    slug: "moon-bulk",
    Component: MoonBulk,
    componentName: "MoonBulk",
  },
  {
    variant: "linear",
    slug: "moon-linear",
    Component: MoonLinear,
    componentName: "MoonLinear",
  },
  {
    variant: "outline",
    slug: "moon-outline",
    Component: MoonOutline,
    componentName: "MoonOutline",
  },
  {
    variant: "twotone",
    slug: "moon-twotone",
    Component: MoonTwotone,
    componentName: "MoonTwotone",
  }
];

export default { MoonBold, MoonBroken, MoonBulk, MoonLinear, MoonOutline, MoonTwotone };
