import Grid3Bold from "./Grid3Bold";
import Grid3Broken from "./Grid3Broken";
import Grid3Bulk from "./Grid3Bulk";
import Grid3Linear from "./Grid3Linear";
import Grid3Outline from "./Grid3Outline";
import Grid3Twotone from "./Grid3Twotone";

export { Grid3Bold, Grid3Broken, Grid3Bulk, Grid3Linear, Grid3Outline, Grid3Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "grid-3-bold",
    Component: Grid3Bold,
    componentName: "Grid3Bold",
  },
  {
    variant: "broken",
    slug: "grid-3-broken",
    Component: Grid3Broken,
    componentName: "Grid3Broken",
  },
  {
    variant: "bulk",
    slug: "grid-3-bulk",
    Component: Grid3Bulk,
    componentName: "Grid3Bulk",
  },
  {
    variant: "linear",
    slug: "grid-3-linear",
    Component: Grid3Linear,
    componentName: "Grid3Linear",
  },
  {
    variant: "outline",
    slug: "grid-3-outline",
    Component: Grid3Outline,
    componentName: "Grid3Outline",
  },
  {
    variant: "twotone",
    slug: "grid-3-twotone",
    Component: Grid3Twotone,
    componentName: "Grid3Twotone",
  }
];

export default { Grid3Bold, Grid3Broken, Grid3Bulk, Grid3Linear, Grid3Outline, Grid3Twotone };
