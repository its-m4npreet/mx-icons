import MapBold from "./MapBold";
import MapBroken from "./MapBroken";
import MapBulk from "./MapBulk";
import MapLinear from "./MapLinear";
import MapOutline from "./MapOutline";
import MapTwotone from "./MapTwotone";

export { MapBold, MapBroken, MapBulk, MapLinear, MapOutline, MapTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "map-bold",
    Component: MapBold,
    componentName: "MapBold",
  },
  {
    variant: "broken",
    slug: "map-broken",
    Component: MapBroken,
    componentName: "MapBroken",
  },
  {
    variant: "bulk",
    slug: "map-bulk",
    Component: MapBulk,
    componentName: "MapBulk",
  },
  {
    variant: "linear",
    slug: "map-linear",
    Component: MapLinear,
    componentName: "MapLinear",
  },
  {
    variant: "outline",
    slug: "map-outline",
    Component: MapOutline,
    componentName: "MapOutline",
  },
  {
    variant: "twotone",
    slug: "map-twotone",
    Component: MapTwotone,
    componentName: "MapTwotone",
  }
];

export default { MapBold, MapBroken, MapBulk, MapLinear, MapOutline, MapTwotone };
