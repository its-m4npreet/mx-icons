import Wallet2Bold from "./Wallet2Bold";
import Wallet2Broken from "./Wallet2Broken";
import Wallet2Bulk from "./Wallet2Bulk";
import Wallet2Linear from "./Wallet2Linear";
import Wallet2Outline from "./Wallet2Outline";
import Wallet2Twotone from "./Wallet2Twotone";

export { Wallet2Bold, Wallet2Broken, Wallet2Bulk, Wallet2Linear, Wallet2Outline, Wallet2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "wallet-2-bold",
    Component: Wallet2Bold,
    componentName: "Wallet2Bold",
  },
  {
    variant: "broken",
    slug: "wallet-2-broken",
    Component: Wallet2Broken,
    componentName: "Wallet2Broken",
  },
  {
    variant: "bulk",
    slug: "wallet-2-bulk",
    Component: Wallet2Bulk,
    componentName: "Wallet2Bulk",
  },
  {
    variant: "linear",
    slug: "wallet-2-linear",
    Component: Wallet2Linear,
    componentName: "Wallet2Linear",
  },
  {
    variant: "outline",
    slug: "wallet-2-outline",
    Component: Wallet2Outline,
    componentName: "Wallet2Outline",
  },
  {
    variant: "twotone",
    slug: "wallet-2-twotone",
    Component: Wallet2Twotone,
    componentName: "Wallet2Twotone",
  }
];

export default { Wallet2Bold, Wallet2Broken, Wallet2Bulk, Wallet2Linear, Wallet2Outline, Wallet2Twotone };
