import DocumentCodeBold from "./DocumentCodeBold";
import DocumentCodeBroken from "./DocumentCodeBroken";
import DocumentCodeBulk from "./DocumentCodeBulk";
import DocumentCodeLinear from "./DocumentCodeLinear";
import DocumentCodeOutline from "./DocumentCodeOutline";
import DocumentCodeTwotone from "./DocumentCodeTwotone";

export { DocumentCodeBold, DocumentCodeBroken, DocumentCodeBulk, DocumentCodeLinear, DocumentCodeOutline, DocumentCodeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "document-code-bold",
    Component: DocumentCodeBold,
    componentName: "DocumentCodeBold",
  },
  {
    variant: "broken",
    slug: "document-code-broken",
    Component: DocumentCodeBroken,
    componentName: "DocumentCodeBroken",
  },
  {
    variant: "bulk",
    slug: "document-code-bulk",
    Component: DocumentCodeBulk,
    componentName: "DocumentCodeBulk",
  },
  {
    variant: "linear",
    slug: "document-code-linear",
    Component: DocumentCodeLinear,
    componentName: "DocumentCodeLinear",
  },
  {
    variant: "outline",
    slug: "document-code-outline",
    Component: DocumentCodeOutline,
    componentName: "DocumentCodeOutline",
  },
  {
    variant: "twotone",
    slug: "document-code-twotone",
    Component: DocumentCodeTwotone,
    componentName: "DocumentCodeTwotone",
  }
];

export default { DocumentCodeBold, DocumentCodeBroken, DocumentCodeBulk, DocumentCodeLinear, DocumentCodeOutline, DocumentCodeTwotone };
