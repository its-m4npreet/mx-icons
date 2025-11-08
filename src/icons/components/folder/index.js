import FolderBold from "./FolderBold";
import FolderBroken from "./FolderBroken";
import FolderBulk from "./FolderBulk";
import FolderLinear from "./FolderLinear";
import FolderOutline from "./FolderOutline";
import FolderTwotone from "./FolderTwotone";

export { FolderBold, FolderBroken, FolderBulk, FolderLinear, FolderOutline, FolderTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "folder-bold",
    Component: FolderBold,
    componentName: "FolderBold",
  },
  {
    variant: "broken",
    slug: "folder-broken",
    Component: FolderBroken,
    componentName: "FolderBroken",
  },
  {
    variant: "bulk",
    slug: "folder-bulk",
    Component: FolderBulk,
    componentName: "FolderBulk",
  },
  {
    variant: "linear",
    slug: "folder-linear",
    Component: FolderLinear,
    componentName: "FolderLinear",
  },
  {
    variant: "outline",
    slug: "folder-outline",
    Component: FolderOutline,
    componentName: "FolderOutline",
  },
  {
    variant: "twotone",
    slug: "folder-twotone",
    Component: FolderTwotone,
    componentName: "FolderTwotone",
  }
];

export default { FolderBold, FolderBroken, FolderBulk, FolderLinear, FolderOutline, FolderTwotone };
