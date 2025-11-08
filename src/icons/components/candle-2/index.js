import Candle2Bold from "./Candle2Bold";
import Candle2Broken from "./Candle2Broken";
import Candle2Bulk from "./Candle2Bulk";
import Candle2Linear from "./Candle2Linear";
import Candle2Outline from "./Candle2Outline";
import Candle2Twotone from "./Candle2Twotone";

export { Candle2Bold, Candle2Broken, Candle2Bulk, Candle2Linear, Candle2Outline, Candle2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "candle-2-bold",
    Component: Candle2Bold,
    componentName: "Candle2Bold",
  },
  {
    variant: "broken",
    slug: "candle-2-broken",
    Component: Candle2Broken,
    componentName: "Candle2Broken",
  },
  {
    variant: "bulk",
    slug: "candle-2-bulk",
    Component: Candle2Bulk,
    componentName: "Candle2Bulk",
  },
  {
    variant: "linear",
    slug: "candle-2-linear",
    Component: Candle2Linear,
    componentName: "Candle2Linear",
  },
  {
    variant: "outline",
    slug: "candle-2-outline",
    Component: Candle2Outline,
    componentName: "Candle2Outline",
  },
  {
    variant: "twotone",
    slug: "candle-2-twotone",
    Component: Candle2Twotone,
    componentName: "Candle2Twotone",
  }
];

export default { Candle2Bold, Candle2Broken, Candle2Bulk, Candle2Linear, Candle2Outline, Candle2Twotone };
