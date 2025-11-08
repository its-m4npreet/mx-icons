import SecurityBold from "./SecurityBold";
import SecurityBroken from "./SecurityBroken";
import SecurityBulk from "./SecurityBulk";
import SecurityLinear from "./SecurityLinear";
import SecurityOutline from "./SecurityOutline";
import SecurityTwotone from "./SecurityTwotone";

export { SecurityBold, SecurityBroken, SecurityBulk, SecurityLinear, SecurityOutline, SecurityTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "security-bold",
    Component: SecurityBold,
    componentName: "SecurityBold",
  },
  {
    variant: "broken",
    slug: "security-broken",
    Component: SecurityBroken,
    componentName: "SecurityBroken",
  },
  {
    variant: "bulk",
    slug: "security-bulk",
    Component: SecurityBulk,
    componentName: "SecurityBulk",
  },
  {
    variant: "linear",
    slug: "security-linear",
    Component: SecurityLinear,
    componentName: "SecurityLinear",
  },
  {
    variant: "outline",
    slug: "security-outline",
    Component: SecurityOutline,
    componentName: "SecurityOutline",
  },
  {
    variant: "twotone",
    slug: "security-twotone",
    Component: SecurityTwotone,
    componentName: "SecurityTwotone",
  }
];

export default { SecurityBold, SecurityBroken, SecurityBulk, SecurityLinear, SecurityOutline, SecurityTwotone };
