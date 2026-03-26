import { j as jsxRuntimeExports, r as reactExports } from "./index-RZ2GuKI2.js";
import { C as Canvas, u as useFrame } from "./react-three-fiber.esm-BeWh2NQJ.js";
import { F as Float, M as MeshDistortMaterial } from "./Float-C7KGDH6S.js";
function OrganicShape() {
  const meshRef = reactExports.useRef(null);
  const mesh2Ref = reactExports.useRef(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.y = -state.clock.elapsedTime * 0.2;
      mesh2Ref.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 1.5, floatIntensity: 0.5, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref: meshRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("icosahedronGeometry", { args: [1, 2] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        MeshDistortMaterial,
        {
          color: "#2F4A2E",
          distort: 0.35,
          speed: 2,
          roughness: 0.3,
          metalness: 0.2,
          transparent: true,
          opacity: 0.85
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 2, floatIntensity: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref: mesh2Ref, position: [1.2, 0.8, -0.5], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("octahedronGeometry", { args: [0.5, 0] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meshStandardMaterial",
        {
          color: "#C4A882",
          roughness: 0.5,
          metalness: 0.1,
          transparent: true,
          opacity: 0.7
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 1.8, floatIntensity: 0.4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [-0.8, -0.6, 0.3], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("torusGeometry", { args: [0.4, 0.12, 8, 20] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meshStandardMaterial",
        {
          color: "#4E6B3A",
          roughness: 0.4,
          transparent: true,
          opacity: 0.6
        }
      )
    ] }) })
  ] });
}
function AboutCanvas() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Canvas,
    {
      camera: { position: [0, 0, 4], fov: 45 },
      style: { background: "transparent" },
      gl: { alpha: true, antialias: true },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.8 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [3, 3, 3], intensity: 1, color: "#FFF5E0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(OrganicShape, {})
      ]
    }
  );
}
export {
  AboutCanvas as default
};
