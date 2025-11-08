import Lock1Bold from "./Lock1Bold";
import Lock1Broken from "./Lock1Broken";
import Lock1Bulk from "./Lock1Bulk";
import Lock1Linear from "./Lock1Linear";
import Lock1Outline from "./Lock1Outline";
import Lock1Twotone from "./Lock1Twotone";

export { Lock1Bold, Lock1Broken, Lock1Bulk, Lock1Linear, Lock1Outline, Lock1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "lock-1-bold",
    Component: Lock1Bold,
    componentName: "Lock1Bold",
  },
  {
    variant: "broken",
    slug: "lock-1-broken",
    Component: Lock1Broken,
    componentName: "Lock1Broken",
  },
  {
    variant: "bulk",
    slug: "lock-1-bulk",
    Component: Lock1Bulk,
    componentName: "Lock1Bulk",
  },
  {
    variant: "linear",
    slug: "lock-1-linear",
    Component: Lock1Linear,
    componentName: "Lock1Linear",
  },
  {
    variant: "outline",
    slug: "lock-1-outline",
    Component: Lock1Outline,
    componentName: "Lock1Outline",
  },
  {
    variant: "twotone",
    slug: "lock-1-twotone",
    Component: Lock1Twotone,
    componentName: "Lock1Twotone",
  }
];

export default { Lock1Bold, Lock1Broken, Lock1Bulk, Lock1Linear, Lock1Outline, Lock1Twotone };
