import { j as jsxRuntimeExports, r as reactExports } from "./index-RZ2GuKI2.js";
import { C as Canvas, u as useFrame } from "./react-three-fiber.esm-BeWh2NQJ.js";
function Particles({ count = 120 }) {
  const meshRef = reactExports.useRef(null);
  const positions = reactExports.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, [count]);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.015;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("points", { ref: meshRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("bufferGeometry", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("bufferAttribute", { attach: "attributes-position", args: [positions, 3] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "pointsMaterial",
      {
        color: "#6B8F5B",
        size: 0.08,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true
      }
    )
  ] });
}
const GEOMS = [
  {
    pos: [-5, 2, -3],
    color: "#2F4A2E",
    s: 0.5,
    id: "g0"
  },
  {
    pos: [5, -2, -4],
    color: "#4E6B3A",
    s: 0.4,
    id: "g1"
  },
  {
    pos: [0, 3, -5],
    color: "#6B8F5B",
    s: 0.3,
    id: "g2"
  },
  {
    pos: [-3, -3, -2],
    color: "#2F4A2E",
    s: 0.45,
    id: "g3"
  },
  {
    pos: [4, 2, -2],
    color: "#4E6B3A",
    s: 0.35,
    id: "g4"
  }
];
function FloatingGeoms() {
  const refs = reactExports.useRef([]);
  useFrame((state) => {
    refs.current.forEach((mesh, i) => {
      if (!mesh) return;
      mesh.rotation.x = state.clock.elapsedTime * (0.2 + i * 0.05);
      mesh.rotation.y = state.clock.elapsedTime * (0.15 + i * 0.03);
      mesh.position.y = GEOMS[i].pos[1] + Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.3;
    });
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: GEOMS.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "mesh",
    {
      ref: (el) => {
        refs.current[i] = el;
      },
      position: g.pos,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("icosahedronGeometry", { args: [g.s, 0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "meshStandardMaterial",
          {
            color: g.color,
            roughness: 0.4,
            metalness: 0.1,
            transparent: true,
            opacity: 0.4
          }
        )
      ]
    },
    g.id
  )) });
}
function ContactCanvas() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Canvas,
    {
      camera: { position: [0, 0, 8], fov: 60 },
      style: { background: "transparent" },
      gl: { alpha: true, antialias: true },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.5 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [5, 5, 5], intensity: 0.8, color: "#C4E8B0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, { count: 100 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingGeoms, {})
      ]
    }
  );
}
export {
  ContactCanvas as default
};
