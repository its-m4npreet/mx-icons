import HomeBold from "./HomeBold";
import HomeBroken from "./HomeBroken";
import HomeBulk from "./HomeBulk";
import HomeLinear from "./HomeLinear";
import HomeOutline from "./HomeOutline";
import HomeTwotone from "./HomeTwotone";

export { HomeBold, HomeBroken, HomeBulk, HomeLinear, HomeOutline, HomeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "home-bold",
    Component: HomeBold,
    componentName: "HomeBold",
  },
  {
    variant: "broken",
    slug: "home-broken",
    Component: HomeBroken,
    componentName: "HomeBroken",
  },
  {
    variant: "bulk",
    slug: "home-bulk",
    Component: HomeBulk,
    componentName: "HomeBulk",
  },
  {
    variant: "linear",
    slug: "home-linear",
    Component: HomeLinear,
    componentName: "HomeLinear",
  },
  {
    variant: "outline",
    slug: "home-outline",
    Component: HomeOutline,
    componentName: "HomeOutline",
  },
  {
    variant: "twotone",
    slug: "home-twotone",
    Component: HomeTwotone,
    componentName: "HomeTwotone",
  }
];

export default { HomeBold, HomeBroken, HomeBulk, HomeLinear, HomeOutline, HomeTwotone };
