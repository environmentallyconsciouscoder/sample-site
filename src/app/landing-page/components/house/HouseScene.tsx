"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { BRAND } from "../constants";
import type { MeasureId } from "./houseData";

interface Props {
  active: MeasureId | null;
  onSelect: (id: MeasureId | null) => void;
}

const INSULATION = "#f5b942";
const TILE = "#5b4a45";
const UPVC = "#ffffff";

// 1990s UK house: two-storey red brick, pitched concrete-tile roof, uPVC windows, integral garage.
const MAIN_X = 0.7;
const MAIN_W = 3.4;
const MAIN_D = 3;
const GARAGE_X = -1.8;
const GARAGE_W = 1.6;
const GARAGE_H = 1.35;
const WALL_H = 2.5;
const WALL_Y = 0.25 + WALL_H / 2;
const RIDGE_H = 1.2;
const ROOF_ANGLE = Math.atan(RIDGE_H / (MAIN_D / 2));
const FRONT_Z = MAIN_D / 2;

function useBrick(w: number, h: number) {
  return useMemo(() => {
    const c = document.createElement("canvas");
    c.width = c.height = 128;
    const g = c.getContext("2d")!;
    g.fillStyle = "#cbc3b4";
    g.fillRect(0, 0, 128, 128);
    for (let r = 0; r < 8; r++) {
      for (let i = -1; i < 5; i++) {
        const l = 38 + Math.random() * 8;
        g.fillStyle = `hsl(12, 45%, ${l}%)`;
        g.fillRect(i * 32 + (r % 2 ? 16 : 0) + 1, r * 16 + 1, 30, 14);
      }
    }
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(w / 0.86, h / 0.6);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, [w, h]);
}

function Mat({ on, base, glow = BRAND, ...rest }: { on: boolean; base: string; glow?: string } & Partial<THREE.MeshStandardMaterialParameters>) {
  return <meshStandardMaterial color={on ? glow : base} emissive={on ? glow : "#000000"} emissiveIntensity={on ? 0.45 : 0} {...rest} />;
}

function Hotspot({ id, position, active, onSelect, label }: { id: MeasureId; position: [number, number, number]; active: MeasureId | null; onSelect: Props["onSelect"]; label: string }) {
  const isActive = active === id;
  return (
    <Html position={position} center zIndexRange={[20, 0]}>
      <button
        type="button"
        aria-label={label}
        aria-pressed={isActive}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(isActive ? null : id);
        }}
        className="relative flex h-9 w-9 items-center justify-center"
      >
        {!isActive && <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-50" style={{ background: BRAND }} />}
        <span
          className="relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-white text-sm font-bold leading-none shadow-lg"
          style={isActive ? { background: "#fff", color: BRAND } : { background: BRAND, color: "#fff" }}
        >
          {isActive ? "×" : "+"}
        </span>
      </button>
    </Html>
  );
}

function Window({ position, w = 0.85, h = 0.85, on }: { position: [number, number, number]; w?: number; h?: number; on: boolean }) {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[w + 0.14, h + 0.14, 0.08]} />
        <Mat on={on} base={UPVC} />
      </mesh>
      {[0.045, 0.065].map((z) => (
        <mesh key={z} position={[0, 0, z]}>
          <boxGeometry args={[w, h, 0.01]} />
          <meshStandardMaterial color={on ? "#a5b4fc" : "#8fc1e8"} transparent opacity={0.75} />
        </mesh>
      ))}
      <mesh position={[0, 0, 0.075]}>
        <boxGeometry args={[0.04, h, 0.01]} />
        <meshStandardMaterial color={UPVC} />
      </mesh>
      <mesh position={[0, h * 0.2, 0.075]}>
        <boxGeometry args={[w, 0.04, 0.01]} />
        <meshStandardMaterial color={UPVC} />
      </mesh>
    </group>
  );
}

function House({ active, onSelect }: Props) {
  const group = useRef<THREE.Group>(null);
  const mainBrick = useBrick(MAIN_W, WALL_H);
  const garageBrick = useBrick(GARAGE_W, GARAGE_H);
  const gableBrick = useBrick(1, 1);
  const gable = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-MAIN_D / 2, 0);
    shape.lineTo(MAIN_D / 2, 0);
    shape.lineTo(0, RIDGE_H);
    shape.closePath();
    const geo = new THREE.ExtrudeGeometry(shape, { depth: MAIN_W, bevelEnabled: false });
    geo.translate(0, 0, -MAIN_W / 2);
    geo.rotateY(Math.PI / 2);
    return geo;
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    const target = active ? 0 : Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, target, 3, delta);
  });

  const on = (id: MeasureId) => active === id;
  const roofY = 0.25 + WALL_H + RIDGE_H / 2 + 0.06;
  const slope = (side: 1 | -1) => ({ position: [MAIN_X, roofY, side * 0.75] as [number, number, number], rotation: [side * ROOF_ANGLE, 0, 0] as [number, number, number] });
  const ridgeY = 0.25 + WALL_H + RIDGE_H;

  return (
    <group ref={group}>
      {/* floor slab */}
      <mesh position={[-0.1, 0.125, 0]}>
        <boxGeometry args={[5.4, 0.25, 3.2]} />
        <Mat on={on("floor")} base="#b8b8c0" glow={INSULATION} />
      </mesh>

      {/* main house brick walls */}
      <mesh position={[MAIN_X, WALL_Y, 0]}>
        <boxGeometry args={[MAIN_W, WALL_H, MAIN_D]} />
        <meshStandardMaterial map={mainBrick} />
      </mesh>
      {/* garage brick walls */}
      <mesh position={[GARAGE_X, 0.25 + GARAGE_H / 2, 0]}>
        <boxGeometry args={[GARAGE_W, GARAGE_H, MAIN_D]} />
        <meshStandardMaterial map={garageBrick} />
      </mesh>

      {/* wall insulation shells */}
      {on("wall") && (
        <>
          <mesh position={[MAIN_X, WALL_Y, 0]}>
            <boxGeometry args={[MAIN_W + 0.25, WALL_H + 0.02, MAIN_D + 0.25]} />
            <meshStandardMaterial color={INSULATION} transparent opacity={0.55} emissive={INSULATION} emissiveIntensity={0.3} />
          </mesh>
          <mesh position={[GARAGE_X, 0.25 + GARAGE_H / 2, 0]}>
            <boxGeometry args={[GARAGE_W + 0.25, GARAGE_H + 0.02, MAIN_D + 0.25]} />
            <meshStandardMaterial color={INSULATION} transparent opacity={0.55} emissive={INSULATION} emissiveIntensity={0.3} />
          </mesh>
        </>
      )}

      {/* brick gable ends */}
      <mesh geometry={gable} position={[MAIN_X, 0.25 + WALL_H, 0]}>
        <meshStandardMaterial map={gableBrick} />
      </mesh>

      {/* roof slopes */}
      {([1, -1] as const).map((side) => (
        <group key={side} {...slope(side)}>
          <mesh>
            <boxGeometry args={[MAIN_W + 0.4, 0.12, 2.0]} />
            <Mat on={false} base={TILE} />
          </mesh>
          {on("roof") && (
            <mesh position={[0, -0.09, 0]}>
              <boxGeometry args={[MAIN_W + 0.3, 0.1, 1.9]} />
              <meshStandardMaterial color={INSULATION} emissive={INSULATION} emissiveIntensity={0.4} />
            </mesh>
          )}
        </group>
      ))}

      {/* garage roof (low pitch) */}
      <mesh position={[GARAGE_X, 0.25 + GARAGE_H + 0.08, 0]} rotation={[0.1, 0, 0]}>
        <boxGeometry args={[GARAGE_W + 0.2, 0.12, MAIN_D + 0.4]} />
        <Mat on={on("roof")} base={TILE} glow={INSULATION} />
      </mesh>

      {/* chimney */}
      <mesh position={[MAIN_X + 1.4, ridgeY + 0.05, 0]}>
        <boxGeometry args={[0.45, 0.9, 0.55]} />
        <meshStandardMaterial map={gableBrick} />
      </mesh>
      <mesh position={[MAIN_X + 1.4, ridgeY + 0.6, 0]}>
        <cylinderGeometry args={[0.1, 0.13, 0.25, 12]} />
        <meshStandardMaterial color="#c2693f" />
      </mesh>

      {/* solar panels on the front slope */}
      <group {...slope(1)}>
        {[-0.65, 0.65].flatMap((x) =>
          [-0.5, 0.5].map((z) => (
            <mesh key={`${x}-${z}`} position={[x, 0.09, z]}>
              <boxGeometry args={[1.2, 0.05, 0.85]} />
              <Mat on={on("solar")} base="#1b2340" glow="#3b82f6" metalness={0.4} roughness={0.3} />
            </mesh>
          ))
        )}
      </group>

      {/* upstairs windows */}
      <Window position={[MAIN_X - 0.7, 2.0, FRONT_Z + 0.03]} on={on("glazing")} />
      <Window position={[MAIN_X + 1.0, 2.0, FRONT_Z + 0.03]} on={on("glazing")} />

      {/* ground floor bay window */}
      <group position={[MAIN_X - 0.7, 0.95, FRONT_Z + 0.2]}>
        <mesh>
          <boxGeometry args={[1.5, 1.0, 0.4]} />
          <Mat on={on("glazing")} base={UPVC} />
        </mesh>
        {[0.21, 0.23].map((z) => (
          <mesh key={z} position={[0, 0, z]}>
            <boxGeometry args={[1.32, 0.82, 0.01]} />
            <meshStandardMaterial color={on("glazing") ? "#a5b4fc" : "#8fc1e8"} transparent opacity={0.75} />
          </mesh>
        ))}
        <mesh position={[0, 0.58, 0]}>
          <boxGeometry args={[1.7, 0.08, 0.6]} />
          <meshStandardMaterial color={TILE} />
        </mesh>
      </group>

      {/* front door with porch canopy */}
      <mesh position={[MAIN_X + 1.0, 0.85, FRONT_Z + 0.03]}>
        <boxGeometry args={[0.8, 1.2, 0.06]} />
        <meshStandardMaterial color="#2f5d50" />
      </mesh>
      <mesh position={[MAIN_X + 1.0, 1.6, FRONT_Z + 0.35]} rotation={[0.15, 0, 0]}>
        <boxGeometry args={[1.2, 0.08, 0.8]} />
        <meshStandardMaterial color={TILE} />
      </mesh>
      {[-0.55, 0.55].map((x) => (
        <mesh key={x} position={[MAIN_X + 1.0 + x, 0.9, FRONT_Z + 0.7]}>
          <boxGeometry args={[0.06, 1.3, 0.06]} />
          <meshStandardMaterial color={UPVC} />
        </mesh>
      ))}

      {/* garage door */}
      <group position={[GARAGE_X, 0.85, FRONT_Z + 0.03]}>
        <mesh>
          <boxGeometry args={[1.3, 1.1, 0.05]} />
          <meshStandardMaterial color="#e6e2d8" />
        </mesh>
        {[-0.3, 0, 0.3].map((y) => (
          <mesh key={y} position={[0, y, 0.03]}>
            <boxGeometry args={[1.3, 0.02, 0.01]} />
            <meshStandardMaterial color="#9a958a" />
          </mesh>
        ))}
      </group>

      {/* ventilation: roof vents on ridge + wall extract grille */}
      {[-0.3, 0.5].map((x) => (
        <mesh key={x} position={[MAIN_X + x, ridgeY + 0.18, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.4, 16]} />
          <Mat on={on("ventilation")} base="#c9c9d3" glow="#34d399" />
        </mesh>
      ))}
      <mesh position={[MAIN_X + 0.15, 2.0, FRONT_Z + 0.03]}>
        <boxGeometry args={[0.3, 0.3, 0.04]} />
        <Mat on={on("ventilation")} base="#d9d9e0" glow="#34d399" />
      </mesh>

      {/* air source heat pump beside the house */}
      <group position={[3.0, 0.65, 1.0]}>
        <mesh>
          <boxGeometry args={[0.8, 0.8, 0.4]} />
          <Mat on={on("heatpump")} base="#d8d8e0" glow="#34d399" />
        </mesh>
        <mesh position={[0, 0, 0.21]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.02, 32]} />
          <meshStandardMaterial color="#2a2d3d" />
        </mesh>
        {[0, Math.PI / 3, (2 * Math.PI) / 3].map((r) => (
          <mesh key={r} position={[0, 0, 0.23]} rotation={[0, 0, r]}>
            <boxGeometry args={[0.55, 0.05, 0.01]} />
            <meshStandardMaterial color="#8b8fa8" />
          </mesh>
        ))}
      </group>

      {/* hotspots */}
      <Hotspot id="solar" label="Solar panels" position={[MAIN_X, 3.75, 1.0]} active={active} onSelect={onSelect} />
      <Hotspot id="roof" label="Roof insulation" position={[MAIN_X + 1.85, 3.3, 1.0]} active={active} onSelect={onSelect} />
      <Hotspot id="ventilation" label="Ventilation" position={[MAIN_X - 0.3, ridgeY + 0.7, 0]} active={active} onSelect={onSelect} />
      <Hotspot id="glazing" label="Double glazing" position={[MAIN_X - 0.7, 2.0, FRONT_Z + 0.3]} active={active} onSelect={onSelect} />
      <Hotspot id="wall" label="Wall insulation" position={[MAIN_X + 1.55, 1.9, FRONT_Z + 0.15]} active={active} onSelect={onSelect} />
      <Hotspot id="heatpump" label="Heat pump" position={[3.0, 1.3, 1.2]} active={active} onSelect={onSelect} />
      <Hotspot id="floor" label="Floor insulation" position={[0.3, 0.13, FRONT_Z + 0.4]} active={active} onSelect={onSelect} />
    </group>
  );
}

export default function HouseScene({ active, onSelect }: Props) {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [5.5, 3.8, 9], fov: 38 }} onPointerMissed={() => onSelect(null)}>
      <hemisphereLight args={["#ffffff", "#9fb98a", 1.1]} />
      <directionalLight position={[5, 8, 6]} intensity={1.5} />
      {/* lawn and driveway */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <circleGeometry args={[6, 64]} />
        <meshStandardMaterial color="#8fb573" />
      </mesh>
      <mesh position={[GARAGE_X, 0.005, 3.0]}>
        <boxGeometry args={[1.6, 0.02, 2.6]} />
        <meshStandardMaterial color="#b9b9c0" />
      </mesh>
      <House active={active} onSelect={onSelect} />
      <ContactShadows position={[0, 0.001, 0]} opacity={0.35} scale={14} blur={2.5} far={4} />
      <OrbitControls
        target={[0.4, 1.9, 0]}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.1}
        minAzimuthAngle={-0.9}
        maxAzimuthAngle={0.9}
      />
    </Canvas>
  );
}
