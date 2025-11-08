import MenuBold from "./MenuBold";
import MenuBroken from "./MenuBroken";
import MenuBulk from "./MenuBulk";
import MenuLinear from "./MenuLinear";
import MenuOutline from "./MenuOutline";
import MenuTwotone from "./MenuTwotone";

export { MenuBold, MenuBroken, MenuBulk, MenuLinear, MenuOutline, MenuTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "menu-bold",
    Component: MenuBold,
    componentName: "MenuBold",
  },
  {
    variant: "broken",
    slug: "menu-broken",
    Component: MenuBroken,
    componentName: "MenuBroken",
  },
  {
    variant: "bulk",
    slug: "menu-bulk",
    Component: MenuBulk,
    componentName: "MenuBulk",
  },
  {
    variant: "linear",
    slug: "menu-linear",
    Component: MenuLinear,
    componentName: "MenuLinear",
  },
  {
    variant: "outline",
    slug: "menu-outline",
    Component: MenuOutline,
    componentName: "MenuOutline",
  },
  {
    variant: "twotone",
    slug: "menu-twotone",
    Component: MenuTwotone,
    componentName: "MenuTwotone",
  }
];

export default { MenuBold, MenuBroken, MenuBulk, MenuLinear, MenuOutline, MenuTwotone };
