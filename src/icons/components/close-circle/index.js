import CloseCircleBold from "./CloseCircleBold";
import CloseCircleBroken from "./CloseCircleBroken";
import CloseCircleBulk from "./CloseCircleBulk";
import CloseCircleLinear from "./CloseCircleLinear";
import CloseCircleOutline from "./CloseCircleOutline";
import CloseCircleTwotone from "./CloseCircleTwotone";

export { CloseCircleBold, CloseCircleBroken, CloseCircleBulk, CloseCircleLinear, CloseCircleOutline, CloseCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "close-circle-bold",
    Component: CloseCircleBold,
    componentName: "CloseCircleBold",
  },
  {
    variant: "broken",
    slug: "close-circle-broken",
    Component: CloseCircleBroken,
    componentName: "CloseCircleBroken",
  },
  {
    variant: "bulk",
    slug: "close-circle-bulk",
    Component: CloseCircleBulk,
    componentName: "CloseCircleBulk",
  },
  {
    variant: "linear",
    slug: "close-circle-linear",
    Component: CloseCircleLinear,
    componentName: "CloseCircleLinear",
  },
  {
    variant: "outline",
    slug: "close-circle-outline",
    Component: CloseCircleOutline,
    componentName: "CloseCircleOutline",
  },
  {
    variant: "twotone",
    slug: "close-circle-twotone",
    Component: CloseCircleTwotone,
    componentName: "CloseCircleTwotone",
  }
];

export default { CloseCircleBold, CloseCircleBroken, CloseCircleBulk, CloseCircleLinear, CloseCircleOutline, CloseCircleTwotone };
