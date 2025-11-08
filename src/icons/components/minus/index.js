import MinusBold from "./MinusBold";
import MinusBroken from "./MinusBroken";
import MinusBulk from "./MinusBulk";
import MinusLinear from "./MinusLinear";
import MinusOutline from "./MinusOutline";
import MinusTwotone from "./MinusTwotone";

export { MinusBold, MinusBroken, MinusBulk, MinusLinear, MinusOutline, MinusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "minus-bold",
    Component: MinusBold,
    componentName: "MinusBold",
  },
  {
    variant: "broken",
    slug: "minus-broken",
    Component: MinusBroken,
    componentName: "MinusBroken",
  },
  {
    variant: "bulk",
    slug: "minus-bulk",
    Component: MinusBulk,
    componentName: "MinusBulk",
  },
  {
    variant: "linear",
    slug: "minus-linear",
    Component: MinusLinear,
    componentName: "MinusLinear",
  },
  {
    variant: "outline",
    slug: "minus-outline",
    Component: MinusOutline,
    componentName: "MinusOutline",
  },
  {
    variant: "twotone",
    slug: "minus-twotone",
    Component: MinusTwotone,
    componentName: "MinusTwotone",
  }
];

export default { MinusBold, MinusBroken, MinusBulk, MinusLinear, MinusOutline, MinusTwotone };
