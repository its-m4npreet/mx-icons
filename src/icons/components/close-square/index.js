import CloseSquareBold from "./CloseSquareBold";
import CloseSquareBroken from "./CloseSquareBroken";
import CloseSquareBulk from "./CloseSquareBulk";
import CloseSquareLinear from "./CloseSquareLinear";
import CloseSquareOutline from "./CloseSquareOutline";
import CloseSquareTwotone from "./CloseSquareTwotone";

export { CloseSquareBold, CloseSquareBroken, CloseSquareBulk, CloseSquareLinear, CloseSquareOutline, CloseSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "close-square-bold",
    Component: CloseSquareBold,
    componentName: "CloseSquareBold",
  },
  {
    variant: "broken",
    slug: "close-square-broken",
    Component: CloseSquareBroken,
    componentName: "CloseSquareBroken",
  },
  {
    variant: "bulk",
    slug: "close-square-bulk",
    Component: CloseSquareBulk,
    componentName: "CloseSquareBulk",
  },
  {
    variant: "linear",
    slug: "close-square-linear",
    Component: CloseSquareLinear,
    componentName: "CloseSquareLinear",
  },
  {
    variant: "outline",
    slug: "close-square-outline",
    Component: CloseSquareOutline,
    componentName: "CloseSquareOutline",
  },
  {
    variant: "twotone",
    slug: "close-square-twotone",
    Component: CloseSquareTwotone,
    componentName: "CloseSquareTwotone",
  }
];

export default { CloseSquareBold, CloseSquareBroken, CloseSquareBulk, CloseSquareLinear, CloseSquareOutline, CloseSquareTwotone };
