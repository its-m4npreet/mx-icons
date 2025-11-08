import Group1Bulk from "./Group1Bulk";
import Group1Linear from "./Group1Linear";

export { Group1Bulk, Group1Linear };

export const variants = [
  {
    variant: "bulk",
    slug: "group-1-bulk",
    Component: Group1Bulk,
    componentName: "Group1Bulk",
  },
  {
    variant: "linear",
    slug: "group-1-linear",
    Component: Group1Linear,
    componentName: "Group1Linear",
  }
];

export default { Group1Bulk, Group1Linear };
