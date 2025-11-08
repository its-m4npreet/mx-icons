import ClipboardBold from "./ClipboardBold";
import ClipboardBroken from "./ClipboardBroken";
import ClipboardBulk from "./ClipboardBulk";
import ClipboardLinear from "./ClipboardLinear";
import ClipboardOutline from "./ClipboardOutline";
import ClipboardTwotone from "./ClipboardTwotone";

export { ClipboardBold, ClipboardBroken, ClipboardBulk, ClipboardLinear, ClipboardOutline, ClipboardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "clipboard-bold",
    Component: ClipboardBold,
    componentName: "ClipboardBold",
  },
  {
    variant: "broken",
    slug: "clipboard-broken",
    Component: ClipboardBroken,
    componentName: "ClipboardBroken",
  },
  {
    variant: "bulk",
    slug: "clipboard-bulk",
    Component: ClipboardBulk,
    componentName: "ClipboardBulk",
  },
  {
    variant: "linear",
    slug: "clipboard-linear",
    Component: ClipboardLinear,
    componentName: "ClipboardLinear",
  },
  {
    variant: "outline",
    slug: "clipboard-outline",
    Component: ClipboardOutline,
    componentName: "ClipboardOutline",
  },
  {
    variant: "twotone",
    slug: "clipboard-twotone",
    Component: ClipboardTwotone,
    componentName: "ClipboardTwotone",
  }
];

export default { ClipboardBold, ClipboardBroken, ClipboardBulk, ClipboardLinear, ClipboardOutline, ClipboardTwotone };
