import Home1Bold from "./Home1Bold";
import Home1Broken from "./Home1Broken";
import Home1Bulk from "./Home1Bulk";
import Home1Outline from "./Home1Outline";
import Home1Twotone from "./Home1Twotone";

export { Home1Bold, Home1Broken, Home1Bulk, Home1Outline, Home1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "home-1-bold",
    Component: Home1Bold,
    componentName: "Home1Bold",
  },
  {
    variant: "broken",
    slug: "home-1-broken",
    Component: Home1Broken,
    componentName: "Home1Broken",
  },
  {
    variant: "bulk",
    slug: "home-1-bulk",
    Component: Home1Bulk,
    componentName: "Home1Bulk",
  },
  {
    variant: "outline",
    slug: "home-1-outline",
    Component: Home1Outline,
    componentName: "Home1Outline",
  },
  {
    variant: "twotone",
    slug: "home-1-twotone",
    Component: Home1Twotone,
    componentName: "Home1Twotone",
  }
];

export default { Home1Bold, Home1Broken, Home1Bulk, Home1Outline, Home1Twotone };
