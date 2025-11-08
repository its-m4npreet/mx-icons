import TextBold from "./TextBold";
import TextBroken from "./TextBroken";
import TextBulk from "./TextBulk";
import TextLinear from "./TextLinear";
import TextOutline from "./TextOutline";
import TextTwotone from "./TextTwotone";

export { TextBold, TextBroken, TextBulk, TextLinear, TextOutline, TextTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "text-bold",
    Component: TextBold,
    componentName: "TextBold",
  },
  {
    variant: "broken",
    slug: "text-broken",
    Component: TextBroken,
    componentName: "TextBroken",
  },
  {
    variant: "bulk",
    slug: "text-bulk",
    Component: TextBulk,
    componentName: "TextBulk",
  },
  {
    variant: "linear",
    slug: "text-linear",
    Component: TextLinear,
    componentName: "TextLinear",
  },
  {
    variant: "outline",
    slug: "text-outline",
    Component: TextOutline,
    componentName: "TextOutline",
  },
  {
    variant: "twotone",
    slug: "text-twotone",
    Component: TextTwotone,
    componentName: "TextTwotone",
  }
];

export default { TextBold, TextBroken, TextBulk, TextLinear, TextOutline, TextTwotone };
