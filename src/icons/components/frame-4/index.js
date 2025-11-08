import Frame4Bold from "./Frame4Bold";
import Frame4Broken from "./Frame4Broken";
import Frame4Bulk from "./Frame4Bulk";
import Frame4Linear from "./Frame4Linear";
import Frame4Outline from "./Frame4Outline";
import Frame4Twotone from "./Frame4Twotone";

export { Frame4Bold, Frame4Broken, Frame4Bulk, Frame4Linear, Frame4Outline, Frame4Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "frame-4-bold",
    Component: Frame4Bold,
    componentName: "Frame4Bold",
  },
  {
    variant: "broken",
    slug: "frame-4-broken",
    Component: Frame4Broken,
    componentName: "Frame4Broken",
  },
  {
    variant: "bulk",
    slug: "frame-4-bulk",
    Component: Frame4Bulk,
    componentName: "Frame4Bulk",
  },
  {
    variant: "linear",
    slug: "frame-4-linear",
    Component: Frame4Linear,
    componentName: "Frame4Linear",
  },
  {
    variant: "outline",
    slug: "frame-4-outline",
    Component: Frame4Outline,
    componentName: "Frame4Outline",
  },
  {
    variant: "twotone",
    slug: "frame-4-twotone",
    Component: Frame4Twotone,
    componentName: "Frame4Twotone",
  }
];

export default { Frame4Bold, Frame4Broken, Frame4Bulk, Frame4Linear, Frame4Outline, Frame4Twotone };
