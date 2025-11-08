import Element4Bold from "./Element4Bold";
import Element4Broken from "./Element4Broken";
import Element4Bulk from "./Element4Bulk";
import Element4Linear from "./Element4Linear";
import Element4Outline from "./Element4Outline";
import Element4Twotone from "./Element4Twotone";

export { Element4Bold, Element4Broken, Element4Bulk, Element4Linear, Element4Outline, Element4Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "element-4-bold",
    Component: Element4Bold,
    componentName: "Element4Bold",
  },
  {
    variant: "broken",
    slug: "element-4-broken",
    Component: Element4Broken,
    componentName: "Element4Broken",
  },
  {
    variant: "bulk",
    slug: "element-4-bulk",
    Component: Element4Bulk,
    componentName: "Element4Bulk",
  },
  {
    variant: "linear",
    slug: "element-4-linear",
    Component: Element4Linear,
    componentName: "Element4Linear",
  },
  {
    variant: "outline",
    slug: "element-4-outline",
    Component: Element4Outline,
    componentName: "Element4Outline",
  },
  {
    variant: "twotone",
    slug: "element-4-twotone",
    Component: Element4Twotone,
    componentName: "Element4Twotone",
  }
];

export default { Element4Bold, Element4Broken, Element4Bulk, Element4Linear, Element4Outline, Element4Twotone };
