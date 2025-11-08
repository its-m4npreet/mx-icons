import RulerAndpenBold from "./RulerAndpenBold";
import RulerAndpenBroken from "./RulerAndpenBroken";
import RulerAndpenBulk from "./RulerAndpenBulk";
import RulerAndpenLinear from "./RulerAndpenLinear";
import RulerAndpenOutline from "./RulerAndpenOutline";
import RulerAndpenTwotone from "./RulerAndpenTwotone";

export { RulerAndpenBold, RulerAndpenBroken, RulerAndpenBulk, RulerAndpenLinear, RulerAndpenOutline, RulerAndpenTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "rulerandpen-bold",
    Component: RulerAndpenBold,
    componentName: "RulerAndpenBold",
  },
  {
    variant: "broken",
    slug: "rulerandpen-broken",
    Component: RulerAndpenBroken,
    componentName: "RulerAndpenBroken",
  },
  {
    variant: "bulk",
    slug: "rulerandpen-bulk",
    Component: RulerAndpenBulk,
    componentName: "RulerAndpenBulk",
  },
  {
    variant: "linear",
    slug: "rulerandpen-linear",
    Component: RulerAndpenLinear,
    componentName: "RulerAndpenLinear",
  },
  {
    variant: "outline",
    slug: "rulerandpen-outline",
    Component: RulerAndpenOutline,
    componentName: "RulerAndpenOutline",
  },
  {
    variant: "twotone",
    slug: "rulerandpen-twotone",
    Component: RulerAndpenTwotone,
    componentName: "RulerAndpenTwotone",
  }
];

export default { RulerAndpenBold, RulerAndpenBroken, RulerAndpenBulk, RulerAndpenLinear, RulerAndpenOutline, RulerAndpenTwotone };
