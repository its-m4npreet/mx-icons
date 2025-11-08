import Hierarchy3Bold from "./Hierarchy3Bold";
import Hierarchy3Broken from "./Hierarchy3Broken";
import Hierarchy3Bulk from "./Hierarchy3Bulk";
import Hierarchy3Linear from "./Hierarchy3Linear";
import Hierarchy3Outline from "./Hierarchy3Outline";
import Hierarchy3Twotone from "./Hierarchy3Twotone";

export { Hierarchy3Bold, Hierarchy3Broken, Hierarchy3Bulk, Hierarchy3Linear, Hierarchy3Outline, Hierarchy3Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "hierarchy-3-bold",
    Component: Hierarchy3Bold,
    componentName: "Hierarchy3Bold",
  },
  {
    variant: "broken",
    slug: "hierarchy-3-broken",
    Component: Hierarchy3Broken,
    componentName: "Hierarchy3Broken",
  },
  {
    variant: "bulk",
    slug: "hierarchy-3-bulk",
    Component: Hierarchy3Bulk,
    componentName: "Hierarchy3Bulk",
  },
  {
    variant: "linear",
    slug: "hierarchy-3-linear",
    Component: Hierarchy3Linear,
    componentName: "Hierarchy3Linear",
  },
  {
    variant: "outline",
    slug: "hierarchy-3-outline",
    Component: Hierarchy3Outline,
    componentName: "Hierarchy3Outline",
  },
  {
    variant: "twotone",
    slug: "hierarchy-3-twotone",
    Component: Hierarchy3Twotone,
    componentName: "Hierarchy3Twotone",
  }
];

export default { Hierarchy3Bold, Hierarchy3Broken, Hierarchy3Bulk, Hierarchy3Linear, Hierarchy3Outline, Hierarchy3Twotone };
