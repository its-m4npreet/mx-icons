import FolderMinusBold from "./FolderMinusBold";
import FolderMinusBroken from "./FolderMinusBroken";
import FolderMinusBulk from "./FolderMinusBulk";
import FolderMinusLinear from "./FolderMinusLinear";
import FolderMinusOutline from "./FolderMinusOutline";
import FolderMinusTwotone from "./FolderMinusTwotone";

export { FolderMinusBold, FolderMinusBroken, FolderMinusBulk, FolderMinusLinear, FolderMinusOutline, FolderMinusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "folder-minus-bold",
    Component: FolderMinusBold,
    componentName: "FolderMinusBold",
  },
  {
    variant: "broken",
    slug: "folder-minus-broken",
    Component: FolderMinusBroken,
    componentName: "FolderMinusBroken",
  },
  {
    variant: "bulk",
    slug: "folder-minus-bulk",
    Component: FolderMinusBulk,
    componentName: "FolderMinusBulk",
  },
  {
    variant: "linear",
    slug: "folder-minus-linear",
    Component: FolderMinusLinear,
    componentName: "FolderMinusLinear",
  },
  {
    variant: "outline",
    slug: "folder-minus-outline",
    Component: FolderMinusOutline,
    componentName: "FolderMinusOutline",
  },
  {
    variant: "twotone",
    slug: "folder-minus-twotone",
    Component: FolderMinusTwotone,
    componentName: "FolderMinusTwotone",
  }
];

export default { FolderMinusBold, FolderMinusBroken, FolderMinusBulk, FolderMinusLinear, FolderMinusOutline, FolderMinusTwotone };
