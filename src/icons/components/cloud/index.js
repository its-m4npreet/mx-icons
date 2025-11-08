import CloudBold from "./CloudBold";
import CloudBroken from "./CloudBroken";
import CloudBulk from "./CloudBulk";
import CloudLinear from "./CloudLinear";
import CloudOutline from "./CloudOutline";
import CloudTwotone from "./CloudTwotone";

export { CloudBold, CloudBroken, CloudBulk, CloudLinear, CloudOutline, CloudTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cloud-bold",
    Component: CloudBold,
    componentName: "CloudBold",
  },
  {
    variant: "broken",
    slug: "cloud-broken",
    Component: CloudBroken,
    componentName: "CloudBroken",
  },
  {
    variant: "bulk",
    slug: "cloud-bulk",
    Component: CloudBulk,
    componentName: "CloudBulk",
  },
  {
    variant: "linear",
    slug: "cloud-linear",
    Component: CloudLinear,
    componentName: "CloudLinear",
  },
  {
    variant: "outline",
    slug: "cloud-outline",
    Component: CloudOutline,
    componentName: "CloudOutline",
  },
  {
    variant: "twotone",
    slug: "cloud-twotone",
    Component: CloudTwotone,
    componentName: "CloudTwotone",
  }
];

export default { CloudBold, CloudBroken, CloudBulk, CloudLinear, CloudOutline, CloudTwotone };
