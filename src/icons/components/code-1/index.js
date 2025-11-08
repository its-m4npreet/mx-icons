import Code1Bold from "./Code1Bold";
import Code1Broken from "./Code1Broken";
import Code1Bulk from "./Code1Bulk";
import Code1Linear from "./Code1Linear";
import Code1Outline from "./Code1Outline";
import Code1Twotone from "./Code1Twotone";

export { Code1Bold, Code1Broken, Code1Bulk, Code1Linear, Code1Outline, Code1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "code-1-bold",
    Component: Code1Bold,
    componentName: "Code1Bold",
  },
  {
    variant: "broken",
    slug: "code-1-broken",
    Component: Code1Broken,
    componentName: "Code1Broken",
  },
  {
    variant: "bulk",
    slug: "code-1-bulk",
    Component: Code1Bulk,
    componentName: "Code1Bulk",
  },
  {
    variant: "linear",
    slug: "code-1-linear",
    Component: Code1Linear,
    componentName: "Code1Linear",
  },
  {
    variant: "outline",
    slug: "code-1-outline",
    Component: Code1Outline,
    componentName: "Code1Outline",
  },
  {
    variant: "twotone",
    slug: "code-1-twotone",
    Component: Code1Twotone,
    componentName: "Code1Twotone",
  }
];

export default { Code1Bold, Code1Broken, Code1Bulk, Code1Linear, Code1Outline, Code1Twotone };
