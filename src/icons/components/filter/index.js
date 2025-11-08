import FilterBold from "./FilterBold";
import FilterBroken from "./FilterBroken";
import FilterBulk from "./FilterBulk";
import FilterLinear from "./FilterLinear";
import FilterOutline from "./FilterOutline";
import FilterTwotone from "./FilterTwotone";

export { FilterBold, FilterBroken, FilterBulk, FilterLinear, FilterOutline, FilterTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "filter-bold",
    Component: FilterBold,
    componentName: "FilterBold",
  },
  {
    variant: "broken",
    slug: "filter-broken",
    Component: FilterBroken,
    componentName: "FilterBroken",
  },
  {
    variant: "bulk",
    slug: "filter-bulk",
    Component: FilterBulk,
    componentName: "FilterBulk",
  },
  {
    variant: "linear",
    slug: "filter-linear",
    Component: FilterLinear,
    componentName: "FilterLinear",
  },
  {
    variant: "outline",
    slug: "filter-outline",
    Component: FilterOutline,
    componentName: "FilterOutline",
  },
  {
    variant: "twotone",
    slug: "filter-twotone",
    Component: FilterTwotone,
    componentName: "FilterTwotone",
  }
];

export default { FilterBold, FilterBroken, FilterBulk, FilterLinear, FilterOutline, FilterTwotone };
