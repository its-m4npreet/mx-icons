import Forward5SSecondsBold from "./Forward5SSecondsBold";
import Forward5SSecondsBroken from "./Forward5SSecondsBroken";
import Forward5SSecondsBulk from "./Forward5SSecondsBulk";
import Forward5SSecondsLinear from "./Forward5SSecondsLinear";
import Forward5SSecondsOutline from "./Forward5SSecondsOutline";
import Forward5SSecondsTwotone from "./Forward5SSecondsTwotone";

export { Forward5SSecondsBold, Forward5SSecondsBroken, Forward5SSecondsBulk, Forward5SSecondsLinear, Forward5SSecondsOutline, Forward5SSecondsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "forward-5-seconds-bold",
    Component: Forward5SSecondsBold,
    componentName: "Forward5SSecondsBold",
  },
  {
    variant: "broken",
    slug: "forward-5-seconds-broken",
    Component: Forward5SSecondsBroken,
    componentName: "Forward5SSecondsBroken",
  },
  {
    variant: "bulk",
    slug: "forward-5-seconds-bulk",
    Component: Forward5SSecondsBulk,
    componentName: "Forward5SSecondsBulk",
  },
  {
    variant: "linear",
    slug: "forward-5-seconds-linear",
    Component: Forward5SSecondsLinear,
    componentName: "Forward5SSecondsLinear",
  },
  {
    variant: "outline",
    slug: "forward-5-seconds-outline",
    Component: Forward5SSecondsOutline,
    componentName: "Forward5SSecondsOutline",
  },
  {
    variant: "twotone",
    slug: "forward-5-seconds-twotone",
    Component: Forward5SSecondsTwotone,
    componentName: "Forward5SSecondsTwotone",
  }
];

export default { Forward5SSecondsBold, Forward5SSecondsBroken, Forward5SSecondsBulk, Forward5SSecondsLinear, Forward5SSecondsOutline, Forward5SSecondsTwotone };
