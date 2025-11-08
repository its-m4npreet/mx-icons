import CarBold from "./CarBold";
import CarBroken from "./CarBroken";
import CarBulk from "./CarBulk";
import CarLinear from "./CarLinear";
import CarOutline from "./CarOutline";
import CarTwotone from "./CarTwotone";

export { CarBold, CarBroken, CarBulk, CarLinear, CarOutline, CarTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "car-bold",
    Component: CarBold,
    componentName: "CarBold",
  },
  {
    variant: "broken",
    slug: "car-broken",
    Component: CarBroken,
    componentName: "CarBroken",
  },
  {
    variant: "bulk",
    slug: "car-bulk",
    Component: CarBulk,
    componentName: "CarBulk",
  },
  {
    variant: "linear",
    slug: "car-linear",
    Component: CarLinear,
    componentName: "CarLinear",
  },
  {
    variant: "outline",
    slug: "car-outline",
    Component: CarOutline,
    componentName: "CarOutline",
  },
  {
    variant: "twotone",
    slug: "car-twotone",
    Component: CarTwotone,
    componentName: "CarTwotone",
  }
];

export default { CarBold, CarBroken, CarBulk, CarLinear, CarOutline, CarTwotone };
