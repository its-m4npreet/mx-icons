import Coin1Bold from "./Coin1Bold";
import Coin1Broken from "./Coin1Broken";
import Coin1Bulk from "./Coin1Bulk";
import Coin1Linear from "./Coin1Linear";
import Coin1Outline from "./Coin1Outline";
import Coin1Twotone from "./Coin1Twotone";

export { Coin1Bold, Coin1Broken, Coin1Bulk, Coin1Linear, Coin1Outline, Coin1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "coin-1-bold",
    Component: Coin1Bold,
    componentName: "Coin1Bold",
  },
  {
    variant: "broken",
    slug: "coin-1-broken",
    Component: Coin1Broken,
    componentName: "Coin1Broken",
  },
  {
    variant: "bulk",
    slug: "coin-1-bulk",
    Component: Coin1Bulk,
    componentName: "Coin1Bulk",
  },
  {
    variant: "linear",
    slug: "coin-1-linear",
    Component: Coin1Linear,
    componentName: "Coin1Linear",
  },
  {
    variant: "outline",
    slug: "coin-1-outline",
    Component: Coin1Outline,
    componentName: "Coin1Outline",
  },
  {
    variant: "twotone",
    slug: "coin-1-twotone",
    Component: Coin1Twotone,
    componentName: "Coin1Twotone",
  }
];

export default { Coin1Bold, Coin1Broken, Coin1Bulk, Coin1Linear, Coin1Outline, Coin1Twotone };
