import CheckBold from "./CheckBold";
import CheckBroken from "./CheckBroken";
import CheckBulk from "./CheckBulk";
import CheckLinear from "./CheckLinear";
import CheckOutline from "./CheckOutline";
import CheckTwotone from "./CheckTwotone";

export { CheckBold, CheckBroken, CheckBulk, CheckLinear, CheckOutline, CheckTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "check-bold",
    Component: CheckBold,
    componentName: "CheckBold",
  },
  {
    variant: "broken",
    slug: "check-broken",
    Component: CheckBroken,
    componentName: "CheckBroken",
  },
  {
    variant: "bulk",
    slug: "check-bulk",
    Component: CheckBulk,
    componentName: "CheckBulk",
  },
  {
    variant: "linear",
    slug: "check-linear",
    Component: CheckLinear,
    componentName: "CheckLinear",
  },
  {
    variant: "outline",
    slug: "check-outline",
    Component: CheckOutline,
    componentName: "CheckOutline",
  },
  {
    variant: "twotone",
    slug: "check-twotone",
    Component: CheckTwotone,
    componentName: "CheckTwotone",
  }
];

export default { CheckBold, CheckBroken, CheckBulk, CheckLinear, CheckOutline, CheckTwotone };
