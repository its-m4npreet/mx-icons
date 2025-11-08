import DocumentBold from "./DocumentBold";
import DocumentBroken from "./DocumentBroken";
import DocumentBulk from "./DocumentBulk";
import DocumentLinear from "./DocumentLinear";
import DocumentOutline from "./DocumentOutline";
import DocumentTwotone from "./DocumentTwotone";

export { DocumentBold, DocumentBroken, DocumentBulk, DocumentLinear, DocumentOutline, DocumentTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "document-bold",
    Component: DocumentBold,
    componentName: "DocumentBold",
  },
  {
    variant: "broken",
    slug: "document-broken",
    Component: DocumentBroken,
    componentName: "DocumentBroken",
  },
  {
    variant: "bulk",
    slug: "document-bulk",
    Component: DocumentBulk,
    componentName: "DocumentBulk",
  },
  {
    variant: "linear",
    slug: "document-linear",
    Component: DocumentLinear,
    componentName: "DocumentLinear",
  },
  {
    variant: "outline",
    slug: "document-outline",
    Component: DocumentOutline,
    componentName: "DocumentOutline",
  },
  {
    variant: "twotone",
    slug: "document-twotone",
    Component: DocumentTwotone,
    componentName: "DocumentTwotone",
  }
];

export default { DocumentBold, DocumentBroken, DocumentBulk, DocumentLinear, DocumentOutline, DocumentTwotone };
