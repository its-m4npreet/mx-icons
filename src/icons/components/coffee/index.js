import CoffeeBold from "./CoffeeBold";
import CoffeeBroken from "./CoffeeBroken";
import CoffeeBulk from "./CoffeeBulk";
import CoffeeLinear from "./CoffeeLinear";
import CoffeeOutline from "./CoffeeOutline";
import CoffeeTwotone from "./CoffeeTwotone";

export { CoffeeBold, CoffeeBroken, CoffeeBulk, CoffeeLinear, CoffeeOutline, CoffeeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "coffee-bold",
    Component: CoffeeBold,
    componentName: "CoffeeBold",
  },
  {
    variant: "broken",
    slug: "coffee-broken",
    Component: CoffeeBroken,
    componentName: "CoffeeBroken",
  },
  {
    variant: "bulk",
    slug: "coffee-bulk",
    Component: CoffeeBulk,
    componentName: "CoffeeBulk",
  },
  {
    variant: "linear",
    slug: "coffee-linear",
    Component: CoffeeLinear,
    componentName: "CoffeeLinear",
  },
  {
    variant: "outline",
    slug: "coffee-outline",
    Component: CoffeeOutline,
    componentName: "CoffeeOutline",
  },
  {
    variant: "twotone",
    slug: "coffee-twotone",
    Component: CoffeeTwotone,
    componentName: "CoffeeTwotone",
  }
];

export default { CoffeeBold, CoffeeBroken, CoffeeBulk, CoffeeLinear, CoffeeOutline, CoffeeTwotone };
