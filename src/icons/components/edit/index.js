import EditBold from "./EditBold";
import EditBroken from "./EditBroken";
import EditBulk from "./EditBulk";
import EditLinear from "./EditLinear";
import EditOutline from "./EditOutline";
import EditTwotone from "./EditTwotone";

export { EditBold, EditBroken, EditBulk, EditLinear, EditOutline, EditTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "edit-bold",
    Component: EditBold,
    componentName: "EditBold",
  },
  {
    variant: "broken",
    slug: "edit-broken",
    Component: EditBroken,
    componentName: "EditBroken",
  },
  {
    variant: "bulk",
    slug: "edit-bulk",
    Component: EditBulk,
    componentName: "EditBulk",
  },
  {
    variant: "linear",
    slug: "edit-linear",
    Component: EditLinear,
    componentName: "EditLinear",
  },
  {
    variant: "outline",
    slug: "edit-outline",
    Component: EditOutline,
    componentName: "EditOutline",
  },
  {
    variant: "twotone",
    slug: "edit-twotone",
    Component: EditTwotone,
    componentName: "EditTwotone",
  }
];

export default { EditBold, EditBroken, EditBulk, EditLinear, EditOutline, EditTwotone };
