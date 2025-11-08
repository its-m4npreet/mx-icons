import Driver2Bold from "./Driver2Bold";
import Driver2Broken from "./Driver2Broken";
import Driver2Bulk from "./Driver2Bulk";
import Driver2Linear from "./Driver2Linear";
import Driver2Outline from "./Driver2Outline";
import Driver2Twotone from "./Driver2Twotone";

export { Driver2Bold, Driver2Broken, Driver2Bulk, Driver2Linear, Driver2Outline, Driver2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "driver-2-bold",
    Component: Driver2Bold,
    componentName: "Driver2Bold",
  },
  {
    variant: "broken",
    slug: "driver-2-broken",
    Component: Driver2Broken,
    componentName: "Driver2Broken",
  },
  {
    variant: "bulk",
    slug: "driver-2-bulk",
    Component: Driver2Bulk,
    componentName: "Driver2Bulk",
  },
  {
    variant: "linear",
    slug: "driver-2-linear",
    Component: Driver2Linear,
    componentName: "Driver2Linear",
  },
  {
    variant: "outline",
    slug: "driver-2-outline",
    Component: Driver2Outline,
    componentName: "Driver2Outline",
  },
  {
    variant: "twotone",
    slug: "driver-2-twotone",
    Component: Driver2Twotone,
    componentName: "Driver2Twotone",
  }
];

export default { Driver2Bold, Driver2Broken, Driver2Bulk, Driver2Linear, Driver2Outline, Driver2Twotone };
