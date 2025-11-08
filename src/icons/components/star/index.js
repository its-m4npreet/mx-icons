import StarBold from "./StarBold";
import StarBroken from "./StarBroken";
import StarBulk from "./StarBulk";
import StarLinear from "./StarLinear";
import StarOutline from "./StarOutline";
import StarTwotone from "./StarTwotone";

export { StarBold, StarBroken, StarBulk, StarLinear, StarOutline, StarTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "star-bold",
    Component: StarBold,
    componentName: "StarBold",
  },
  {
    variant: "broken",
    slug: "star-broken",
    Component: StarBroken,
    componentName: "StarBroken",
  },
  {
    variant: "bulk",
    slug: "star-bulk",
    Component: StarBulk,
    componentName: "StarBulk",
  },
  {
    variant: "linear",
    slug: "star-linear",
    Component: StarLinear,
    componentName: "StarLinear",
  },
  {
    variant: "outline",
    slug: "star-outline",
    Component: StarOutline,
    componentName: "StarOutline",
  },
  {
    variant: "twotone",
    slug: "star-twotone",
    Component: StarTwotone,
    componentName: "StarTwotone",
  }
];

export default { StarBold, StarBroken, StarBulk, StarLinear, StarOutline, StarTwotone };
