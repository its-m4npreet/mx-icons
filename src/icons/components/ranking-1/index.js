import Ranking1Bold from "./Ranking1Bold";
import Ranking1Broken from "./Ranking1Broken";
import Ranking1Bulk from "./Ranking1Bulk";
import Ranking1Linear from "./Ranking1Linear";
import Ranking1Outline from "./Ranking1Outline";
import Ranking1Twotone from "./Ranking1Twotone";

export { Ranking1Bold, Ranking1Broken, Ranking1Bulk, Ranking1Linear, Ranking1Outline, Ranking1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "ranking-1-bold",
    Component: Ranking1Bold,
    componentName: "Ranking1Bold",
  },
  {
    variant: "broken",
    slug: "ranking-1-broken",
    Component: Ranking1Broken,
    componentName: "Ranking1Broken",
  },
  {
    variant: "bulk",
    slug: "ranking-1-bulk",
    Component: Ranking1Bulk,
    componentName: "Ranking1Bulk",
  },
  {
    variant: "linear",
    slug: "ranking-1-linear",
    Component: Ranking1Linear,
    componentName: "Ranking1Linear",
  },
  {
    variant: "outline",
    slug: "ranking-1-outline",
    Component: Ranking1Outline,
    componentName: "Ranking1Outline",
  },
  {
    variant: "twotone",
    slug: "ranking-1-twotone",
    Component: Ranking1Twotone,
    componentName: "Ranking1Twotone",
  }
];

export default { Ranking1Bold, Ranking1Broken, Ranking1Bulk, Ranking1Linear, Ranking1Outline, Ranking1Twotone };
