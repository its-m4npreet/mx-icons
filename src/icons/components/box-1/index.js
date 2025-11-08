import Box1Bold from "./Box1Bold";
import Box1Broken from "./Box1Broken";
import Box1Bulk from "./Box1Bulk";
import Box1Linear from "./Box1Linear";
import Box1Outline from "./Box1Outline";
import Box1Twotone from "./Box1Twotone";

export { Box1Bold, Box1Broken, Box1Bulk, Box1Linear, Box1Outline, Box1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "box-1-bold",
    Component: Box1Bold,
    componentName: "Box1Bold",
  },
  {
    variant: "broken",
    slug: "box-1-broken",
    Component: Box1Broken,
    componentName: "Box1Broken",
  },
  {
    variant: "bulk",
    slug: "box-1-bulk",
    Component: Box1Bulk,
    componentName: "Box1Bulk",
  },
  {
    variant: "linear",
    slug: "box-1-linear",
    Component: Box1Linear,
    componentName: "Box1Linear",
  },
  {
    variant: "outline",
    slug: "box-1-outline",
    Component: Box1Outline,
    componentName: "Box1Outline",
  },
  {
    variant: "twotone",
    slug: "box-1-twotone",
    Component: Box1Twotone,
    componentName: "Box1Twotone",
  }
];

export default { Box1Bold, Box1Broken, Box1Bulk, Box1Linear, Box1Outline, Box1Twotone };
