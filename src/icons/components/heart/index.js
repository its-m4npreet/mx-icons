import HeartBold from "./HeartBold";
import HeartBroken from "./HeartBroken";
import HeartBulk from "./HeartBulk";
import HeartLinear from "./HeartLinear";
import HeartOutline from "./HeartOutline";
import HeartTwotone from "./HeartTwotone";

export { HeartBold, HeartBroken, HeartBulk, HeartLinear, HeartOutline, HeartTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "heart-bold",
    Component: HeartBold,
    componentName: "HeartBold",
  },
  {
    variant: "broken",
    slug: "heart-broken",
    Component: HeartBroken,
    componentName: "HeartBroken",
  },
  {
    variant: "bulk",
    slug: "heart-bulk",
    Component: HeartBulk,
    componentName: "HeartBulk",
  },
  {
    variant: "linear",
    slug: "heart-linear",
    Component: HeartLinear,
    componentName: "HeartLinear",
  },
  {
    variant: "outline",
    slug: "heart-outline",
    Component: HeartOutline,
    componentName: "HeartOutline",
  },
  {
    variant: "twotone",
    slug: "heart-twotone",
    Component: HeartTwotone,
    componentName: "HeartTwotone",
  }
];

export default { HeartBold, HeartBroken, HeartBulk, HeartLinear, HeartOutline, HeartTwotone };
