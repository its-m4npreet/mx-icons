import BriefcaseBold from "./BriefcaseBold";
import BriefcaseBroken from "./BriefcaseBroken";
import BriefcaseBulk from "./BriefcaseBulk";
import BriefcaseLinear from "./BriefcaseLinear";
import BriefcaseOutline from "./BriefcaseOutline";
import BriefcaseTwotone from "./BriefcaseTwotone";

export { BriefcaseBold, BriefcaseBroken, BriefcaseBulk, BriefcaseLinear, BriefcaseOutline, BriefcaseTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "briefcase-bold",
    Component: BriefcaseBold,
    componentName: "BriefcaseBold",
  },
  {
    variant: "broken",
    slug: "briefcase-broken",
    Component: BriefcaseBroken,
    componentName: "BriefcaseBroken",
  },
  {
    variant: "bulk",
    slug: "briefcase-bulk",
    Component: BriefcaseBulk,
    componentName: "BriefcaseBulk",
  },
  {
    variant: "linear",
    slug: "briefcase-linear",
    Component: BriefcaseLinear,
    componentName: "BriefcaseLinear",
  },
  {
    variant: "outline",
    slug: "briefcase-outline",
    Component: BriefcaseOutline,
    componentName: "BriefcaseOutline",
  },
  {
    variant: "twotone",
    slug: "briefcase-twotone",
    Component: BriefcaseTwotone,
    componentName: "BriefcaseTwotone",
  }
];

export default { BriefcaseBold, BriefcaseBroken, BriefcaseBulk, BriefcaseLinear, BriefcaseOutline, BriefcaseTwotone };
