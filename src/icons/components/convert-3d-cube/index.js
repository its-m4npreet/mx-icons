import Convert3dDCubeBold from "./Convert3dDCubeBold";
import Convert3dDCubeBroken from "./Convert3dDCubeBroken";
import Convert3dDCubeBulk from "./Convert3dDCubeBulk";
import Convert3dDCubeLinear from "./Convert3dDCubeLinear";
import Convert3dDCubeOutline from "./Convert3dDCubeOutline";
import Convert3dDCubeTwotone from "./Convert3dDCubeTwotone";

export { Convert3dDCubeBold, Convert3dDCubeBroken, Convert3dDCubeBulk, Convert3dDCubeLinear, Convert3dDCubeOutline, Convert3dDCubeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "convert-3d-cube-bold",
    Component: Convert3dDCubeBold,
    componentName: "Convert3dDCubeBold",
  },
  {
    variant: "broken",
    slug: "convert-3d-cube-broken",
    Component: Convert3dDCubeBroken,
    componentName: "Convert3dDCubeBroken",
  },
  {
    variant: "bulk",
    slug: "convert-3d-cube-bulk",
    Component: Convert3dDCubeBulk,
    componentName: "Convert3dDCubeBulk",
  },
  {
    variant: "linear",
    slug: "convert-3d-cube-linear",
    Component: Convert3dDCubeLinear,
    componentName: "Convert3dDCubeLinear",
  },
  {
    variant: "outline",
    slug: "convert-3d-cube-outline",
    Component: Convert3dDCubeOutline,
    componentName: "Convert3dDCubeOutline",
  },
  {
    variant: "twotone",
    slug: "convert-3d-cube-twotone",
    Component: Convert3dDCubeTwotone,
    componentName: "Convert3dDCubeTwotone",
  }
];

export default { Convert3dDCubeBold, Convert3dDCubeBroken, Convert3dDCubeBulk, Convert3dDCubeLinear, Convert3dDCubeOutline, Convert3dDCubeTwotone };
