import Notification1Bold from "./Notification1Bold";
import Notification1Broken from "./Notification1Broken";
import Notification1Bulk from "./Notification1Bulk";
import Notification1Linear from "./Notification1Linear";
import Notification1Outline from "./Notification1Outline";
import Notification1Twotone from "./Notification1Twotone";

export { Notification1Bold, Notification1Broken, Notification1Bulk, Notification1Linear, Notification1Outline, Notification1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "notification-1-bold",
    Component: Notification1Bold,
    componentName: "Notification1Bold",
  },
  {
    variant: "broken",
    slug: "notification-1-broken",
    Component: Notification1Broken,
    componentName: "Notification1Broken",
  },
  {
    variant: "bulk",
    slug: "notification-1-bulk",
    Component: Notification1Bulk,
    componentName: "Notification1Bulk",
  },
  {
    variant: "linear",
    slug: "notification-1-linear",
    Component: Notification1Linear,
    componentName: "Notification1Linear",
  },
  {
    variant: "outline",
    slug: "notification-1-outline",
    Component: Notification1Outline,
    componentName: "Notification1Outline",
  },
  {
    variant: "twotone",
    slug: "notification-1-twotone",
    Component: Notification1Twotone,
    componentName: "Notification1Twotone",
  }
];

export default { Notification1Bold, Notification1Broken, Notification1Bulk, Notification1Linear, Notification1Outline, Notification1Twotone };
