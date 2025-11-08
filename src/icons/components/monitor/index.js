import MonitorBold from "./MonitorBold";
import MonitorBroken from "./MonitorBroken";
import MonitorBulk from "./MonitorBulk";
import MonitorLinear from "./MonitorLinear";
import MonitorOutline from "./MonitorOutline";
import MonitorTwotone from "./MonitorTwotone";

export { MonitorBold, MonitorBroken, MonitorBulk, MonitorLinear, MonitorOutline, MonitorTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "monitor-bold",
    Component: MonitorBold,
    componentName: "MonitorBold",
  },
  {
    variant: "broken",
    slug: "monitor-broken",
    Component: MonitorBroken,
    componentName: "MonitorBroken",
  },
  {
    variant: "bulk",
    slug: "monitor-bulk",
    Component: MonitorBulk,
    componentName: "MonitorBulk",
  },
  {
    variant: "linear",
    slug: "monitor-linear",
    Component: MonitorLinear,
    componentName: "MonitorLinear",
  },
  {
    variant: "outline",
    slug: "monitor-outline",
    Component: MonitorOutline,
    componentName: "MonitorOutline",
  },
  {
    variant: "twotone",
    slug: "monitor-twotone",
    Component: MonitorTwotone,
    componentName: "MonitorTwotone",
  }
];

export default { MonitorBold, MonitorBroken, MonitorBulk, MonitorLinear, MonitorOutline, MonitorTwotone };
