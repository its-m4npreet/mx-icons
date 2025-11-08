import Strongbox2Bold from "./Strongbox2Bold";
import Strongbox2Broken from "./Strongbox2Broken";
import Strongbox2Bulk from "./Strongbox2Bulk";
import Strongbox2Linear from "./Strongbox2Linear";
import Strongbox2Outline from "./Strongbox2Outline";
import Strongbox2Twotone from "./Strongbox2Twotone";

export { Strongbox2Bold, Strongbox2Broken, Strongbox2Bulk, Strongbox2Linear, Strongbox2Outline, Strongbox2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "strongbox-2-bold",
    Component: Strongbox2Bold,
    componentName: "Strongbox2Bold",
  },
  {
    variant: "broken",
    slug: "strongbox-2-broken",
    Component: Strongbox2Broken,
    componentName: "Strongbox2Broken",
  },
  {
    variant: "bulk",
    slug: "strongbox-2-bulk",
    Component: Strongbox2Bulk,
    componentName: "Strongbox2Bulk",
  },
  {
    variant: "linear",
    slug: "strongbox-2-linear",
    Component: Strongbox2Linear,
    componentName: "Strongbox2Linear",
  },
  {
    variant: "outline",
    slug: "strongbox-2-outline",
    Component: Strongbox2Outline,
    componentName: "Strongbox2Outline",
  },
  {
    variant: "twotone",
    slug: "strongbox-2-twotone",
    Component: Strongbox2Twotone,
    componentName: "Strongbox2Twotone",
  }
];

export default { Strongbox2Bold, Strongbox2Broken, Strongbox2Bulk, Strongbox2Linear, Strongbox2Outline, Strongbox2Twotone };
