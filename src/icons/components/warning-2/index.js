import Warning2Bold from "./Warning2Bold";
import Warning2Broken from "./Warning2Broken";
import Warning2Bulk from "./Warning2Bulk";
import Warning2Linear from "./Warning2Linear";
import Warning2Outline from "./Warning2Outline";
import Warning2Twotone from "./Warning2Twotone";

export { Warning2Bold, Warning2Broken, Warning2Bulk, Warning2Linear, Warning2Outline, Warning2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "warning-2-bold",
    Component: Warning2Bold,
    componentName: "Warning2Bold",
  },
  {
    variant: "broken",
    slug: "warning-2-broken",
    Component: Warning2Broken,
    componentName: "Warning2Broken",
  },
  {
    variant: "bulk",
    slug: "warning-2-bulk",
    Component: Warning2Bulk,
    componentName: "Warning2Bulk",
  },
  {
    variant: "linear",
    slug: "warning-2-linear",
    Component: Warning2Linear,
    componentName: "Warning2Linear",
  },
  {
    variant: "outline",
    slug: "warning-2-outline",
    Component: Warning2Outline,
    componentName: "Warning2Outline",
  },
  {
    variant: "twotone",
    slug: "warning-2-twotone",
    Component: Warning2Twotone,
    componentName: "Warning2Twotone",
  }
];

export default { Warning2Bold, Warning2Broken, Warning2Bulk, Warning2Linear, Warning2Outline, Warning2Twotone };
