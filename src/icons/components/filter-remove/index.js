import FilterRemoveBold from "./FilterRemoveBold";
import FilterRemoveBroken from "./FilterRemoveBroken";
import FilterRemoveBulk from "./FilterRemoveBulk";
import FilterRemoveLinear from "./FilterRemoveLinear";
import FilterRemoveOutline from "./FilterRemoveOutline";
import FilterRemoveTwotone from "./FilterRemoveTwotone";

export { FilterRemoveBold, FilterRemoveBroken, FilterRemoveBulk, FilterRemoveLinear, FilterRemoveOutline, FilterRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "filter-remove-bold",
    Component: FilterRemoveBold,
    componentName: "FilterRemoveBold",
  },
  {
    variant: "broken",
    slug: "filter-remove-broken",
    Component: FilterRemoveBroken,
    componentName: "FilterRemoveBroken",
  },
  {
    variant: "bulk",
    slug: "filter-remove-bulk",
    Component: FilterRemoveBulk,
    componentName: "FilterRemoveBulk",
  },
  {
    variant: "linear",
    slug: "filter-remove-linear",
    Component: FilterRemoveLinear,
    componentName: "FilterRemoveLinear",
  },
  {
    variant: "outline",
    slug: "filter-remove-outline",
    Component: FilterRemoveOutline,
    componentName: "FilterRemoveOutline",
  },
  {
    variant: "twotone",
    slug: "filter-remove-twotone",
    Component: FilterRemoveTwotone,
    componentName: "FilterRemoveTwotone",
  }
];

export default { FilterRemoveBold, FilterRemoveBroken, FilterRemoveBulk, FilterRemoveLinear, FilterRemoveOutline, FilterRemoveTwotone };
