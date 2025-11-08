import Document1Bold from "./Document1Bold";
import Document1Broken from "./Document1Broken";
import Document1Bulk from "./Document1Bulk";
import Document1Linear from "./Document1Linear";
import Document1Outline from "./Document1Outline";
import Document1Twotone from "./Document1Twotone";

export { Document1Bold, Document1Broken, Document1Bulk, Document1Linear, Document1Outline, Document1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "document-1-bold",
    Component: Document1Bold,
    componentName: "Document1Bold",
  },
  {
    variant: "broken",
    slug: "document-1-broken",
    Component: Document1Broken,
    componentName: "Document1Broken",
  },
  {
    variant: "bulk",
    slug: "document-1-bulk",
    Component: Document1Bulk,
    componentName: "Document1Bulk",
  },
  {
    variant: "linear",
    slug: "document-1-linear",
    Component: Document1Linear,
    componentName: "Document1Linear",
  },
  {
    variant: "outline",
    slug: "document-1-outline",
    Component: Document1Outline,
    componentName: "Document1Outline",
  },
  {
    variant: "twotone",
    slug: "document-1-twotone",
    Component: Document1Twotone,
    componentName: "Document1Twotone",
  }
];

export default { Document1Bold, Document1Broken, Document1Bulk, Document1Linear, Document1Outline, Document1Twotone };
