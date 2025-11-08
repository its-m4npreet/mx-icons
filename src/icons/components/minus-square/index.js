import MinusSquareBold from "./MinusSquareBold";
import MinusSquareBroken from "./MinusSquareBroken";
import MinusSquareBulk from "./MinusSquareBulk";
import MinusSquareLinear from "./MinusSquareLinear";
import MinusSquareOutline from "./MinusSquareOutline";
import MinusSquareTwotone from "./MinusSquareTwotone";

export { MinusSquareBold, MinusSquareBroken, MinusSquareBulk, MinusSquareLinear, MinusSquareOutline, MinusSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "minus-square-bold",
    Component: MinusSquareBold,
    componentName: "MinusSquareBold",
  },
  {
    variant: "broken",
    slug: "minus-square-broken",
    Component: MinusSquareBroken,
    componentName: "MinusSquareBroken",
  },
  {
    variant: "bulk",
    slug: "minus-square-bulk",
    Component: MinusSquareBulk,
    componentName: "MinusSquareBulk",
  },
  {
    variant: "linear",
    slug: "minus-square-linear",
    Component: MinusSquareLinear,
    componentName: "MinusSquareLinear",
  },
  {
    variant: "outline",
    slug: "minus-square-outline",
    Component: MinusSquareOutline,
    componentName: "MinusSquareOutline",
  },
  {
    variant: "twotone",
    slug: "minus-square-twotone",
    Component: MinusSquareTwotone,
    componentName: "MinusSquareTwotone",
  }
];

export default { MinusSquareBold, MinusSquareBroken, MinusSquareBulk, MinusSquareLinear, MinusSquareOutline, MinusSquareTwotone };
