import Messages1Bold from "./Messages1Bold";
import Messages1Broken from "./Messages1Broken";
import Messages1Bulk from "./Messages1Bulk";
import Messages1Linear from "./Messages1Linear";
import Messages1Outline from "./Messages1Outline";
import Messages1Twotone from "./Messages1Twotone";

export { Messages1Bold, Messages1Broken, Messages1Bulk, Messages1Linear, Messages1Outline, Messages1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "messages-1-bold",
    Component: Messages1Bold,
    componentName: "Messages1Bold",
  },
  {
    variant: "broken",
    slug: "messages-1-broken",
    Component: Messages1Broken,
    componentName: "Messages1Broken",
  },
  {
    variant: "bulk",
    slug: "messages-1-bulk",
    Component: Messages1Bulk,
    componentName: "Messages1Bulk",
  },
  {
    variant: "linear",
    slug: "messages-1-linear",
    Component: Messages1Linear,
    componentName: "Messages1Linear",
  },
  {
    variant: "outline",
    slug: "messages-1-outline",
    Component: Messages1Outline,
    componentName: "Messages1Outline",
  },
  {
    variant: "twotone",
    slug: "messages-1-twotone",
    Component: Messages1Twotone,
    componentName: "Messages1Twotone",
  }
];

export default { Messages1Bold, Messages1Broken, Messages1Bulk, Messages1Linear, Messages1Outline, Messages1Twotone };
