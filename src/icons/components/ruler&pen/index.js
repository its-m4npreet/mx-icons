import Ruler&penBold from "./Ruler&penBold";
import Ruler&penBroken from "./Ruler&penBroken";
import Ruler&penBulk from "./Ruler&penBulk";
import Ruler&penLinear from "./Ruler&penLinear";
import Ruler&penOutline from "./Ruler&penOutline";
import Ruler&penTwotone from "./Ruler&penTwotone";

export { Ruler&penBold, Ruler&penBroken, Ruler&penBulk, Ruler&penLinear, Ruler&penOutline, Ruler&penTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ruler&pen-bold",
    Component: Ruler&penBold,
    componentName: "Ruler&penBold",
  },
  {
    variant: "broken",
    slug: "ruler&pen-broken",
    Component: Ruler&penBroken,
    componentName: "Ruler&penBroken",
  },
  {
    variant: "bulk",
    slug: "ruler&pen-bulk",
    Component: Ruler&penBulk,
    componentName: "Ruler&penBulk",
  },
  {
    variant: "linear",
    slug: "ruler&pen-linear",
    Component: Ruler&penLinear,
    componentName: "Ruler&penLinear",
  },
  {
    variant: "outline",
    slug: "ruler&pen-outline",
    Component: Ruler&penOutline,
    componentName: "Ruler&penOutline",
  },
  {
    variant: "twotone",
    slug: "ruler&pen-twotone",
    Component: Ruler&penTwotone,
    componentName: "Ruler&penTwotone",
  }
];

export default { Ruler&penBold, Ruler&penBroken, Ruler&penBulk, Ruler&penLinear, Ruler&penOutline, Ruler&penTwotone };
