import Receipt21Bold from "./Receipt21Bold";
import Receipt21Broken from "./Receipt21Broken";
import Receipt21Bulk from "./Receipt21Bulk";
import Receipt21Linear from "./Receipt21Linear";
import Receipt21Outline from "./Receipt21Outline";
import Receipt21Twotone from "./Receipt21Twotone";

export { Receipt21Bold, Receipt21Broken, Receipt21Bulk, Receipt21Linear, Receipt21Outline, Receipt21Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "receipt-2-1-bold",
    Component: Receipt21Bold,
    componentName: "Receipt21Bold",
  },
  {
    variant: "broken",
    slug: "receipt-2-1-broken",
    Component: Receipt21Broken,
    componentName: "Receipt21Broken",
  },
  {
    variant: "bulk",
    slug: "receipt-2-1-bulk",
    Component: Receipt21Bulk,
    componentName: "Receipt21Bulk",
  },
  {
    variant: "linear",
    slug: "receipt-2-1-linear",
    Component: Receipt21Linear,
    componentName: "Receipt21Linear",
  },
  {
    variant: "outline",
    slug: "receipt-2-1-outline",
    Component: Receipt21Outline,
    componentName: "Receipt21Outline",
  },
  {
    variant: "twotone",
    slug: "receipt-2-1-twotone",
    Component: Receipt21Twotone,
    componentName: "Receipt21Twotone",
  }
];

export default { Receipt21Bold, Receipt21Broken, Receipt21Bulk, Receipt21Linear, Receipt21Outline, Receipt21Twotone };
