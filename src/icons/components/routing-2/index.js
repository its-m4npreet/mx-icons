import Routing2Bold from "./Routing2Bold";
import Routing2Broken from "./Routing2Broken";
import Routing2Bulk from "./Routing2Bulk";
import Routing2Linear from "./Routing2Linear";
import Routing2Outline from "./Routing2Outline";
import Routing2Twotone from "./Routing2Twotone";

export { Routing2Bold, Routing2Broken, Routing2Bulk, Routing2Linear, Routing2Outline, Routing2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "routing-2-bold",
    Component: Routing2Bold,
    componentName: "Routing2Bold",
  },
  {
    variant: "broken",
    slug: "routing-2-broken",
    Component: Routing2Broken,
    componentName: "Routing2Broken",
  },
  {
    variant: "bulk",
    slug: "routing-2-bulk",
    Component: Routing2Bulk,
    componentName: "Routing2Bulk",
  },
  {
    variant: "linear",
    slug: "routing-2-linear",
    Component: Routing2Linear,
    componentName: "Routing2Linear",
  },
  {
    variant: "outline",
    slug: "routing-2-outline",
    Component: Routing2Outline,
    componentName: "Routing2Outline",
  },
  {
    variant: "twotone",
    slug: "routing-2-twotone",
    Component: Routing2Twotone,
    componentName: "Routing2Twotone",
  }
];

export default { Routing2Bold, Routing2Broken, Routing2Bulk, Routing2Linear, Routing2Outline, Routing2Twotone };
