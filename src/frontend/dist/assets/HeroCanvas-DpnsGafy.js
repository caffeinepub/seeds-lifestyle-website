import { j as jsxRuntimeExports, r as reactExports } from "./index-RZ2GuKI2.js";
import { C as Canvas, u as useFrame } from "./react-three-fiber.esm-BeWh2NQJ.js";
import { F as Float, M as MeshDistortMaterial } from "./Float-C7KGDH6S.js";
function FloatingShape({
  position,
  geometry,
  color,
  size,
  speed,
  distort
}) {
  const meshRef = reactExports.useRef(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
  });
  const geo = reactExports.useMemo(() => {
    switch (geometry) {
      case "icosahedron":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("icosahedronGeometry", { args: [size, 1] });
      case "torus":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("torusGeometry", { args: [size, size * 0.35, 12, 24] });
      case "sphere":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [size, 16, 16] });
      case "octahedron":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("octahedronGeometry", { args: [size, 0] });
      case "dodecahedron":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("dodecahedronGeometry", { args: [size, 0] });
    }
  }, [geometry, size]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed, rotationIntensity: 0.4, floatIntensity: 0.6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref: meshRef, position, children: [
    geo,
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      MeshDistortMaterial,
      {
        color,
        distort,
        speed,
        roughness: 0.4,
        metalness: 0.1,
        transparent: true,
        opacity: 0.7
      }
    )
  ] }) });
}
const shapes = [
  {
    id: "s0",
    position: [-4.5, 2, -3],
    geometry: "icosahedron",
    color: "#2F4A2E",
    size: 0.9,
    speed: 0.8,
    distort: 0.3
  },
  {
    id: "s1",
    position: [4.2, 1.5, -4],
    geometry: "torus",
    color: "#4E6B3A",
    size: 0.7,
    speed: 0.6,
    distort: 0.2
  },
  {
    id: "s2",
    position: [-2, -2.5, -2],
    geometry: "sphere",
    color: "#6B8F5B",
    size: 0.6,
    speed: 1,
    distort: 0.4
  },
  {
    id: "s3",
    position: [3, -1.5, -3],
    geometry: "octahedron",
    color: "#8B6B4A",
    size: 0.75,
    speed: 0.7,
    distort: 0.25
  },
  {
    id: "s4",
    position: [0.5, 3, -5],
    geometry: "dodecahedron",
    color: "#C4A882",
    size: 0.8,
    speed: 0.5,
    distort: 0.15
  },
  {
    id: "s5",
    position: [-3.5, -1, -4],
    geometry: "icosahedron",
    color: "#3D6B3A",
    size: 0.55,
    speed: 0.9,
    distort: 0.35
  },
  {
    id: "s6",
    position: [5, 3.5, -5],
    geometry: "sphere",
    color: "#A0855C",
    size: 0.5,
    speed: 1.1,
    distort: 0.3
  },
  {
    id: "s7",
    position: [-5, 0.5, -5],
    geometry: "torus",
    color: "#2F4A2E",
    size: 0.65,
    speed: 0.65,
    distort: 0.2
  },
  {
    id: "s8",
    position: [2.5, -3, -4],
    geometry: "octahedron",
    color: "#5A7A4A",
    size: 0.45,
    speed: 1.2,
    distort: 0.4
  },
  {
    id: "s9",
    position: [-1, 1, -6],
    geometry: "dodecahedron",
    color: "#E7D6BF",
    size: 1.1,
    speed: 0.4,
    distort: 0.1
  }
];
function HeroCanvas() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Canvas,
    {
      camera: { position: [0, 0, 8], fov: 50 },
      style: { background: "transparent" },
      gl: { alpha: true, antialias: true },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.6 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [5, 5, 5], intensity: 1.2, color: "#FFF5E0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "directionalLight",
          {
            position: [-5, -3, 2],
            intensity: 0.4,
            color: "#C4E8B0"
          }
        ),
        shapes.map((shape) => /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingShape, { ...shape }, shape.id))
      ]
    }
  );
}
export {
  HeroCanvas as default
};
