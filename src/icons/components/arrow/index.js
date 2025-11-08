import ArrowBold from "./ArrowBold";
import ArrowBroken from "./ArrowBroken";
import ArrowBulk from "./ArrowBulk";
import ArrowLinear from "./ArrowLinear";
import ArrowOutline from "./ArrowOutline";
import ArrowTwotone from "./ArrowTwotone";

export { ArrowBold, ArrowBroken, ArrowBulk, ArrowLinear, ArrowOutline, ArrowTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "arrow-bold",
    Component: ArrowBold,
    componentName: "ArrowBold",
  },
  {
    variant: "broken",
    slug: "arrow-broken",
    Component: ArrowBroken,
    componentName: "ArrowBroken",
  },
  {
    variant: "bulk",
    slug: "arrow-bulk",
    Component: ArrowBulk,
    componentName: "ArrowBulk",
  },
  {
    variant: "linear",
    slug: "arrow-linear",
    Component: ArrowLinear,
    componentName: "ArrowLinear",
  },
  {
    variant: "outline",
    slug: "arrow-outline",
    Component: ArrowOutline,
    componentName: "ArrowOutline",
  },
  {
    variant: "twotone",
    slug: "arrow-twotone",
    Component: ArrowTwotone,
    componentName: "ArrowTwotone",
  }
];

export default { ArrowBold, ArrowBroken, ArrowBulk, ArrowLinear, ArrowOutline, ArrowTwotone };
