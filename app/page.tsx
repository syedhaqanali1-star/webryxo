"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Code2,
  ExternalLink,
  Gauge,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  MonitorSmartphone,
  MousePointer2,
  Palette,
  PawPrint,
  Rocket,
  Scissors,
  Search,
  Send,
  Smartphone,
  Sparkles,
  UsersRound,
  Wrench,
  X,
  Zap,
} from "lucide-react";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Float, OrbitControls, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

/* -------------------------------------------------------------------------- */
/*                       PHOTOREALISTIC 3D LAPTOP (MACBOOK PRO STYLE)         */
/* -------------------------------------------------------------------------- */

/**
 * Generates a high-DPI 2048x1280 Retina canvas texture featuring a stunning,
 * modern Webryxo agency site with glowing gradients, clean UI cards, and macOS browser chrome.
 */
function useScreenTexture() {
  return useMemo(() => {
    if (typeof document === "undefined") return null;

    const canvas = document.createElement("canvas");
    canvas.width = 2048;
    canvas.height = 1280;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    const W = canvas.width;
    const H = canvas.height;

    // 1. Dark ambient background
    const bgGrad = ctx.createLinearGradient(0, 0, W, H);
    bgGrad.addColorStop(0, "#08060f");
    bgGrad.addColorStop(0.4, "#0e091c");
    bgGrad.addColorStop(0.8, "#07050d");
    bgGrad.addColorStop(1, "#030206");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // 2. Ambient glow orbs
    const drawGlow = (x: number, y: number, r: number, color: string) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, color);
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    };

    drawGlow(420, 360, 600, "rgba(124, 58, 237, 0.45)");
    drawGlow(1600, 280, 520, "rgba(217, 70, 239, 0.32)");
    drawGlow(1400, 950, 580, "rgba(59, 130, 246, 0.28)");
    drawGlow(300, 1050, 480, "rgba(139, 92, 246, 0.22)");

    // 3. macOS Browser Top Chrome Bar
    ctx.fillStyle = "rgba(15, 13, 24, 0.88)";
    ctx.fillRect(0, 0, W, 96);

    // Bottom border of chrome
    ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
    ctx.fillRect(0, 94, W, 2);

    // Window traffic lights
    const drawDot = (x: number, y: number, r: number, color: string) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    };
    drawDot(48, 48, 12, "#ff5f56");
    drawDot(82, 48, 12, "#ffbd2e");
    drawDot(116, 48, 12, "#27c93f");

    // URL Search Pill
    ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
    ctx.beginPath();
    ctx.roundRect(W / 2 - 320, 24, 640, 48, 24);
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Lock icon & URL text
    ctx.fillStyle = "#a78bfa";
    ctx.font = "bold 20px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("🔒  webryxo.com", W / 2 - 80, 55);

    // Top Nav Links
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 24px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("Webryxo.", 210, 56);

    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
    ctx.font = "500 18px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("Work", 1480, 55);
    ctx.fillText("Services", 1570, 55);
    ctx.fillText("Pricing", 1680, 55);

    // Mini CTA in Nav
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.roundRect(1780, 28, 190, 40, 20);
    ctx.fill();
    ctx.fillStyle = "#000000";
    ctx.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("Start Project ↗", 1820, 53);

    // 4. Hero Content Section
    // Pill Badge
    ctx.fillStyle = "rgba(124, 58, 237, 0.2)";
    ctx.beginPath();
    ctx.roundRect(120, 160, 360, 44, 22);
    ctx.fill();
    ctx.strokeStyle = "rgba(167, 139, 250, 0.4)";
    ctx.stroke();

    ctx.fillStyle = "#c4b5fd";
    ctx.font = "600 16px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("✦  WEB DESIGN & DIGITAL GROWTH", 150, 188);

    // Massive Main Heading
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 82px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("We build websites", 120, 290);
    ctx.fillStyle = "rgba(255, 255, 255, 0.38)";
    ctx.fillText("people", 120, 380);

    // Gradient word: "remember."
    const textGrad = ctx.createLinearGradient(420, 300, 850, 380);
    textGrad.addColorStop(0, "#ffffff");
    textGrad.addColorStop(0.5, "#c4b5fd");
    textGrad.addColorStop(1, "#f472b6");
    ctx.fillStyle = textGrad;
    ctx.fillText("remember.", 430, 380);

    // Subparagraph
    ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
    ctx.font = "400 24px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("Fast, conversion-focused websites engineered to turn curious", 120, 450);
    ctx.fillText("visitors into long-term paying customers.", 120, 485);

    // Hero CTA Buttons
    // Button 1 (Solid White)
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.roundRect(120, 540, 240, 64, 32);
    ctx.fill();
    ctx.fillStyle = "#09090b";
    ctx.font = "bold 20px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("Explore Work →", 160, 580);

    // Button 2 (Glass Outline)
    ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
    ctx.beginPath();
    ctx.roundRect(380, 540, 220, 64, 32);
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 20px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("Book a Call", 435, 580);

    // 5. Right-Side Interactive Dashboard & Showcase Visual
    // Glass Card Container
    ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
    ctx.beginPath();
    ctx.roundRect(1140, 160, 780, 560, 36);
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Inner Glow Banner in Card
    const cardGlow = ctx.createLinearGradient(1140, 160, 1920, 400);
    cardGlow.addColorStop(0, "rgba(124, 58, 237, 0.3)");
    cardGlow.addColorStop(1, "rgba(217, 70, 239, 0.15)");
    ctx.fillStyle = cardGlow;
    ctx.beginPath();
    ctx.roundRect(1170, 190, 720, 230, 24);
    ctx.fill();

    // Project Thumbnail Preview in Card
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 28px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("Apex Auto Works — Next.js", 1210, 260);

    ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    ctx.font = "400 18px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("Interactive quote builder • 100/100 Lighthouse Performance", 1210, 300);

    // Mini metric pills inside card
    const drawPill = (x: number, y: number, text: string, bg: string, textColor: string) => {
      ctx.fillStyle = bg;
      ctx.beginPath();
      ctx.roundRect(x, y, 190, 48, 24);
      ctx.fill();
      ctx.fillStyle = textColor;
      ctx.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
      ctx.fillText(text, x + 24, y + 30);
    };

    drawPill(1210, 340, "⚡  0.4s Load Time", "rgba(0,0,0,0.4)", "#4ade80");
    drawPill(1420, 340, "📈  +340% Leads", "rgba(0,0,0,0.4)", "#60a5fa");
    drawPill(1630, 340, "★  5.0 Rating", "rgba(0,0,0,0.4)", "#facc15");

    // Live Analytics Chart in Bottom Half of Right Card
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.beginPath();
    ctx.roundRect(1170, 450, 720, 230, 24);
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.stroke();

    ctx.fillStyle = "#ffffff";
    ctx.font = "600 20px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("Organic Traffic & Client Conversion Velocity", 1210, 495);

    // Chart Line Glow
    ctx.strokeStyle = "#a855f7";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(1210, 620);
    ctx.bezierCurveTo(1350, 610, 1450, 550, 1550, 560);
    ctx.bezierCurveTo(1650, 570, 1720, 510, 1840, 520);
    ctx.stroke();

    // Glow under chart line
    const chartFill = ctx.createLinearGradient(1210, 520, 1210, 650);
    chartFill.addColorStop(0, "rgba(168, 85, 247, 0.35)");
    chartFill.addColorStop(1, "rgba(168, 85, 247, 0)");
    ctx.fillStyle = chartFill;
    ctx.beginPath();
    ctx.moveTo(1210, 620);
    ctx.bezierCurveTo(1350, 610, 1450, 550, 1550, 560);
    ctx.bezierCurveTo(1650, 570, 1720, 510, 1840, 520);
    ctx.lineTo(1840, 650);
    ctx.lineTo(1210, 650);
    ctx.closePath();
    ctx.fill();

    // 6. Three Bottom Feature Badges
    const features = [
      { title: "Custom Architecture", desc: "Built with React & Next.js", color: "#818cf8" },
      { title: "SEO Supercharged", desc: "Top organic ranking structure", color: "#c084fc" },
      { title: "Conversion Focused", desc: "Optimized user journey flows", color: "#f472b6" },
    ];

    features.forEach((feat, idx) => {
      const fx = 120 + idx * 320;
      ctx.fillStyle = "rgba(255, 255, 255, 0.035)";
      ctx.beginPath();
      ctx.roundRect(fx, 780, 290, 140, 24);
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.stroke();

      ctx.fillStyle = feat.color;
      ctx.font = "bold 20px -apple-system, BlinkMacSystemFont, sans-serif";
      ctx.fillText(feat.title, fx + 24, 830);

      ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
      ctx.font = "400 16px -apple-system, BlinkMacSystemFont, sans-serif";
      ctx.fillText(feat.desc, fx + 24, 870);
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.needsUpdate = true;
    return texture;
  }, []);
}

/**
 * Generates an ultra-detailed, crisp MacBook Magic Keyboard texture with
 * precision key legends, functional labels, backlit underglow, and glass trackpad outline.
 */
function useKeyboardTexture() {
  return useMemo(() => {
    if (typeof document === "undefined") return null;

    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    const W = canvas.width;
    const H = canvas.height;

    // Aluminum keyboard well background
    ctx.fillStyle = "#0d0d11";
    ctx.fillRect(0, 0, W, H);

    // Keyboard well subtle chamfer border
    ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
    ctx.lineWidth = 2;
    ctx.strokeRect(10, 10, W - 20, H - 20);

    // Draw individual keycap with backlit underglow & crisp font
    const drawKey = (
      x: number,
      y: number,
      w: number,
      h: number,
      label: string,
      isWide = false
    ) => {
      // Soft backlit underglow
      ctx.fillStyle = "rgba(167, 139, 250, 0.14)";
      ctx.beginPath();
      ctx.roundRect(x - 2, y - 2, w + 4, h + 4, 8);
      ctx.fill();

      // Keycap surface
      const keyGrad = ctx.createLinearGradient(x, y, x, y + h);
      keyGrad.addColorStop(0, "#1f1f24");
      keyGrad.addColorStop(1, "#141418");
      ctx.fillStyle = keyGrad;
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, 6);
      ctx.fill();

      // Top bevel highlight
      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Legend
      ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
      ctx.font = isWide
        ? "500 13px -apple-system, BlinkMacSystemFont, sans-serif"
        : "600 15px -apple-system, BlinkMacSystemFont, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(label, x + w / 2, y + h / 2);
    };

    // Row 0: Function Row (Esc, F1-F12, TouchID)
    const fnLabels = ["esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "⏻"];
    const fnWidth = (W - 56 - (fnLabels.length - 1) * 6) / fnLabels.length;
    fnLabels.forEach((lbl, i) => {
      const kx = 28 + i * (fnWidth + 6);
      drawKey(kx, 22, fnWidth, 36, lbl, true);
    });

    // Row 1: Number Row
    const row1 = ["~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete"];
    const r1Width = (W - 56 - 13 * 6 - 36) / 13;
    let currX = 28;
    row1.forEach((lbl) => {
      const kw = lbl === "delete" ? r1Width + 36 : r1Width;
      drawKey(currX, 68, kw, 60, lbl, lbl === "delete");
      currX += kw + 6;
    });

    // Row 2: QWERTY
    const row2 = ["tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"];
    currX = 28;
    row2.forEach((lbl) => {
      const kw = lbl === "tab" || lbl === "\\" ? r1Width + 18 : r1Width;
      drawKey(currX, 136, kw, 60, lbl, lbl === "tab");
      currX += kw + 6;
    });

    // Row 3: ASDF
    const row3 = ["caps lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "return"];
    currX = 28;
    row3.forEach((lbl) => {
      const kw = lbl === "caps lock" || lbl === "return" ? r1Width + 28 : r1Width;
      drawKey(currX, 204, kw, 60, lbl, lbl === "caps lock" || lbl === "return");
      currX += kw + 6;
    });

    // Row 4: ZXCV
    const row4 = ["shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "shift"];
    currX = 28;
    row4.forEach((lbl, i) => {
      const kw = lbl === "shift" ? (i === 0 ? r1Width + 48 : r1Width + 56) : r1Width;
      drawKey(currX, 272, kw, 60, lbl, lbl === "shift");
      currX += kw + 6;
    });

    // Row 5: Modifiers & Spacebar
    const bY = 340;
    const bH = 68;
    drawKey(28, bY, 70, bH, "fn", true);
    drawKey(104, bY, 70, bH, "control", true);
    drawKey(180, bY, 78, bH, "option", true);
    drawKey(264, bY, 96, bH, "command", true);

    // Spacebar
    drawKey(366, bY, 320, bH, "");

    drawKey(692, bY, 96, bH, "command", true);
    drawKey(794, bY, 78, bH, "option", true);

    // Arrow keys
    drawKey(878, bY + 34, 44, 34, "◀", true);
    drawKey(926, bY, 44, 32, "▲", true);
    drawKey(926, bY + 34, 44, 34, "▼", true);
    drawKey(974, bY + 34, 44, 34, "▶", true);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }, []);
}

function LaptopModel() {
  const group = useRef<THREE.Group>(null);
  const screenGlow = useRef<THREE.MeshStandardMaterial>(null);
  const { pointer } = useThree();

  const screenMap = useScreenTexture();
  const keyboardMap = useKeyboardTexture();

  useFrame((state, delta) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;

    // Smooth responsive tilt with dampening
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      -0.34 + pointer.x * 0.28 + Math.sin(t * 0.4) * 0.02,
      4.0,
      delta
    );
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      -0.08 - pointer.y * 0.14,
      4.0,
      delta
    );
    group.current.position.x = THREE.MathUtils.damp(
      group.current.position.x,
      pointer.x * 0.12,
      3.0,
      delta
    );
    group.current.position.y = THREE.MathUtils.damp(
      group.current.position.y,
      Math.sin(t * 1.1) * 0.05 + pointer.y * 0.05,
      3.0,
      delta
    );

    if (screenGlow.current) {
      screenGlow.current.emissiveIntensity = 0.42 + Math.sin(t * 1.6) * 0.06;
    }
  });

  return (
    <group ref={group} position={[0, -0.15, 0]}>
      {/* ══════════════════════════════════════════════════════════════
          1. LOWER UNIBODY CHASSIS (CNC Precision Milled Space Black Aluminum)
          ══════════════════════════════════════════════════════════════ */}

      {/* Main Base Body */}
      <RoundedBox
        args={[3.42, 0.075, 2.28]}
        radius={0.032}
        smoothness={5}
        position={[0, -0.62, 0.12]}
      >
        <meshStandardMaterial
          color="#1c1c22"
          metalness={0.94}
          roughness={0.16}
          envMapIntensity={1.2}
        />
      </RoundedBox>

      {/* Front edge chamfer highlight */}
      <mesh position={[0, -0.582, 1.25]} rotation={[0.1, 0, 0]}>
        <boxGeometry args={[3.38, 0.003, 0.04]} />
        <meshStandardMaterial color="#4a4a58" metalness={1.0} roughness={0.05} />
      </mesh>

      {/* Front Display Notch Cutout (Thumb groove to open lid) */}
      <RoundedBox
        args={[0.42, 0.016, 0.03]}
        radius={0.008}
        smoothness={3}
        position={[0, -0.585, 1.258]}
      >
        <meshStandardMaterial color="#101014" metalness={0.5} roughness={0.5} />
      </RoundedBox>

      {/* ── Side Ports ── */}
      {/* Left Ports: MagSafe + 2x Thunderbolt 4 USB-C + 3.5mm Headphone Jack */}
      <group position={[-1.712, -0.62, 0.12]}>
        {/* MagSafe */}
        <mesh position={[0, 0, -0.52]} rotation={[0, Math.PI / 2, 0]}>
          <capsuleGeometry args={[0.014, 0.04, 8, 8]} />
          <meshBasicMaterial color="#08080a" />
        </mesh>
        {/* USB-C #1 */}
        <mesh position={[0, 0, -0.32]} rotation={[0, Math.PI / 2, 0]}>
          <capsuleGeometry args={[0.009, 0.032, 8, 8]} />
          <meshBasicMaterial color="#08080a" />
        </mesh>
        {/* USB-C #2 */}
        <mesh position={[0, 0, -0.16]} rotation={[0, Math.PI / 2, 0]}>
          <capsuleGeometry args={[0.009, 0.032, 8, 8]} />
          <meshBasicMaterial color="#08080a" />
        </mesh>
        {/* Audio Jack */}
        <mesh position={[0, 0, 0.04]} rotation={[0, Math.PI / 2, 0]}>
          <circleGeometry args={[0.012, 16]} />
          <meshBasicMaterial color="#08080a" />
        </mesh>
      </group>

      {/* Right Ports: HDMI + USB-C + SD Card Slot */}
      <group position={[1.712, -0.62, 0.12]}>
        {/* HDMI */}
        <mesh position={[0, 0, -0.42]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[0.038, 0.018]} />
          <meshBasicMaterial color="#08080a" />
        </mesh>
        {/* USB-C */}
        <mesh position={[0, 0, -0.24]} rotation={[0, -Math.PI / 2, 0]}>
          <capsuleGeometry args={[0.009, 0.032, 8, 8]} />
          <meshBasicMaterial color="#08080a" />
        </mesh>
        {/* SD Card Slot */}
        <mesh position={[0, 0, -0.06]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[0.065, 0.008]} />
          <meshBasicMaterial color="#08080a" />
        </mesh>
      </group>

      {/* ── Recessed Keyboard Deck with Backlit Magic Keyboard ── */}
      <RoundedBox
        args={[2.72, 0.006, 1.28]}
        radius={0.018}
        smoothness={3}
        position={[0, -0.581, -0.18]}
      >
        <meshStandardMaterial color="#0b0b0e" metalness={0.6} roughness={0.4} />
      </RoundedBox>

      {/* High-res Keyboard Face Plane with Backlit Underglow */}
      <mesh position={[0, -0.577, -0.18]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.68, 1.24]} />
        <meshStandardMaterial
          map={keyboardMap ?? undefined}
          color="#ffffff"
          roughness={0.35}
          metalness={0.3}
          emissive="#8b5cf6"
          emissiveIntensity={0.18}
        />
      </mesh>

      {/* Precision Micro-Drilled Left Speaker Grille */}
      <mesh position={[-1.48, -0.581, -0.18]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.16, 1.15]} />
        <meshStandardMaterial color="#121216" roughness={0.9} metalness={0.1} />
      </mesh>

      {/* Precision Micro-Drilled Right Speaker Grille */}
      <mesh position={[1.48, -0.581, -0.18]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.16, 1.15]} />
        <meshStandardMaterial color="#121216" roughness={0.9} metalness={0.1} />
      </mesh>

      {/* ── Precision Force Touch Glass Trackpad ── */}
      {/* Outer hairline border */}
      <RoundedBox
        args={[1.36, 0.004, 0.76]}
        radius={0.035}
        smoothness={4}
        position={[0, -0.581, 0.64]}
      >
        <meshStandardMaterial color="#353540" metalness={0.8} roughness={0.25} />
      </RoundedBox>

      {/* Glass Trackpad Surface */}
      <RoundedBox
        args={[1.34, 0.006, 0.74]}
        radius={0.032}
        smoothness={4}
        position={[0, -0.578, 0.64]}
      >
        <meshStandardMaterial
          color="#1e1e24"
          metalness={0.85}
          roughness={0.12}
          envMapIntensity={1.5}
        />
      </RoundedBox>

      {/* ── Bottom Silicone Feet ── */}
      {(
        [
          [-1.38, -0.66, -0.85],
          [1.38, -0.66, -0.85],
          [-1.38, -0.66, 0.95],
          [1.38, -0.66, 0.95],
        ] as [number, number, number][]
      ).map(([x, y, z], i) => (
        <mesh key={`foot-${i}`} position={[x, y, z]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.052, 24]} />
          <meshStandardMaterial color="#08080a" roughness={0.95} metalness={0.02} />
        </mesh>
      ))}

      {/* ══════════════════════════════════════════════════════════════
          2. SOLID STEEL DUAL-CAM HINGE
          ══════════════════════════════════════════════════════════════ */}
      <mesh position={[0, -0.54, -0.98]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.034, 0.034, 2.92, 32]} />
        <meshStandardMaterial color="#141418" metalness={0.98} roughness={0.1} />
      </mesh>

      {/* ══════════════════════════════════════════════════════════════
          3. RETINA DISPLAY LID (Slim MacBook Pro Edge-to-Edge Screen)
          ══════════════════════════════════════════════════════════════ */}
      <group position={[0, 0.42, -0.96]} rotation={[-0.14, 0, 0]}>
        {/* Back Lid Enclosure */}
        <RoundedBox
          args={[3.38, 2.14, 0.042]}
          radius={0.032}
          smoothness={5}
        >
          <meshStandardMaterial
            color="#18181e"
            metalness={0.96}
            roughness={0.14}
            envMapIntensity={1.3}
          />
        </RoundedBox>

        {/* Minimalist Embossed Logo on the back */}
        <mesh position={[0, 0, -0.023]} rotation={[0, Math.PI, 0]}>
          <circleGeometry args={[0.09, 32]} />
          <meshStandardMaterial color="#2d2d38" metalness={1.0} roughness={0.05} />
        </mesh>

        {/* Glossy Black Bezel Frame */}
        <mesh position={[0, 0, 0.022]}>
          <planeGeometry args={[3.26, 2.02]} />
          <meshStandardMaterial color="#040406" roughness={0.2} metalness={0.1} />
        </mesh>

        {/* High-Resolution Live Retina Display */}
        <mesh position={[0, -0.015, 0.024]}>
          <planeGeometry args={[3.18, 1.90]} />
          <meshStandardMaterial
            ref={screenGlow}
            map={screenMap ?? undefined}
            color={screenMap ? "#ffffff" : "#0a0714"}
            emissive="#0e0724"
            emissiveIntensity={0.42}
            metalness={0.02}
            roughness={0.15}
            toneMapped={false}
          />
        </mesh>

        {/* Front Glass Specular Reflection Layer */}
        <mesh position={[0, -0.015, 0.026]}>
          <planeGeometry args={[3.18, 1.90]} />
          <meshPhysicalMaterial
            transparent
            opacity={0.08}
            roughness={0.05}
            metalness={0.95}
            reflectivity={0.9}
            color="#a78bfa"
          />
        </mesh>

        {/* Camera Notch Housing */}
        <RoundedBox
          args={[0.24, 0.065, 0.012]}
          radius={0.014}
          smoothness={3}
          position={[0, 0.945, 0.026]}
        >
          <meshStandardMaterial color="#040406" roughness={0.6} metalness={0.1} />
        </RoundedBox>

        {/* 1080p FaceTime Camera Lens (Iridescent Sapphire Reflection) */}
        <mesh position={[0, 0.945, 0.034]}>
          <circleGeometry args={[0.016, 24]} />
          <meshStandardMaterial
            color="#0b132b"
            emissive="#1d4ed8"
            emissiveIntensity={0.3}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        <mesh position={[0, 0.945, 0.036]}>
          <circleGeometry args={[0.008, 16]} />
          <meshBasicMaterial color="#000000" />
        </mesh>

        {/* Active Green Camera Indicator LED */}
        <mesh position={[0.038, 0.945, 0.035]}>
          <circleGeometry args={[0.004, 12]} />
          <meshBasicMaterial color="#22c55e" />
        </mesh>
      </group>
    </group>
  );
}

function HeroLaptop() {
  return (
    <Canvas
      camera={{ position: [0, 0.25, 5.0], fov: 38 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
    >
      {/* Studio Lighting Setup */}
      <ambientLight intensity={1.4} />
      <directionalLight position={[6, 8, 6]} intensity={2.8} />
      <directionalLight position={[-6, 4, -3]} intensity={1.5} color="#8b5cf6" />
      
      {/* Dynamic Colored Rim Lights matching Webryxo branding */}
      <pointLight position={[-4, 2.5, 3]} intensity={22} color="#7c3aed" />
      <pointLight position={[4, -1.5, 2.5]} intensity={16} color="#c026d3" />
      <pointLight position={[0, 3.5, 2]} intensity={12} color="#60a5fa" />

      {/* Floating 3D Laptop */}
      <Float speed={1.6} rotationIntensity={0.05} floatIntensity={0.22}>
        <LaptopModel />
      </Float>

      {/* Ultra-soft Contact Ground Shadow */}
      <ContactShadows
        position={[0, -1.05, 0]}
        opacity={0.65}
        scale={8}
        blur={2.0}
        far={3.5}
        color="#000000"
      />

      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
}

/* -------------------------------------------------------------------------- */
/*                        3D — SERVICES ORBIT (services section)              */
/* -------------------------------------------------------------------------- */

function OrbitSatellite({
  radius,
  speed,
  offset,
  color,
  size = 0.24,
}: {
  radius: number;
  speed: number;
  offset: number;
  color: string;
  size?: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t * 0.6) * 0.65,
      Math.sin(t) * radius
    );
    ref.current.rotation.y = t;
    ref.current.rotation.x = t * 0.4;
  });

  return (
    <group ref={ref}>
      <RoundedBox args={[size, size, size * 0.28]} radius={0.045} smoothness={4}>
        <meshStandardMaterial
          color={color}
          metalness={0.55}
          roughness={0.28}
          emissive={color}
          emissiveIntensity={0.22}
        />
      </RoundedBox>
    </group>
  );
}

function ServicesOrbitScene() {
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!coreRef.current) return;
    coreRef.current.rotation.y += delta * 0.22;
    coreRef.current.rotation.x += delta * 0.07;
  });

  const satellites = [
    { color: "#a78bfa", radius: 1.7, speed: 0.34, offset: 0 },
    { color: "#f0abfc", radius: 1.7, speed: 0.34, offset: 1.05 },
    { color: "#818cf8", radius: 1.7, speed: 0.34, offset: 2.1 },
    { color: "#c4b5fd", radius: 2.2, speed: -0.27, offset: 0.6 },
    { color: "#e879f9", radius: 2.2, speed: -0.27, offset: 1.6 },
    { color: "#a5b4fc", radius: 2.2, speed: -0.27, offset: 2.6 },
  ];

  return (
    <>
      <ambientLight intensity={1.1} />
      <pointLight position={[3, 2, 3]} intensity={14} color="#7c3aed" />
      <pointLight position={[-3, -2, 2]} intensity={10} color="#c026d3" />

      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.85, 1]} />
        <meshStandardMaterial
          color="#0d0d12"
          emissive="#4c1d95"
          emissiveIntensity={0.4}
          wireframe
        />
      </mesh>

      {satellites.map((s, i) => (
        <OrbitSatellite key={i} {...s} />
      ))}
    </>
  );
}

function ServicesOrbit3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.6, 5.2], fov: 40 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <ServicesOrbitScene />
    </Canvas>
  );
}

/* -------------------------------------------------------------------------- */
/*                     3D — PORTFOLIO DEVICES (work section)                  */
/* -------------------------------------------------------------------------- */

function BrowserPanel({
  position,
  baseRotationY,
  color,
  index,
  hovered,
}: {
  position: [number, number, number];
  baseRotationY: number;
  color: string;
  index: number;
  hovered: number | null;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const isHovered = hovered === index;

    ref.current.position.y =
      position[1] + Math.sin(t * 0.6 + index * 1.4) * 0.12 + (isHovered ? 0.08 : 0);

    ref.current.rotation.y = THREE.MathUtils.damp(
      ref.current.rotation.y,
      baseRotationY + (isHovered ? 0.4 : 0),
      4,
      delta
    );

    const targetScale = isHovered ? 1.08 : 1;
    ref.current.scale.setScalar(
      THREE.MathUtils.damp(ref.current.scale.x, targetScale, 5, delta)
    );
  });

  return (
    <group ref={ref} position={position}>
      {/* device shell */}
      <mesh>
        <boxGeometry args={[1.55, 1.0, 0.06]} />
        <meshStandardMaterial color="#0b0b10" metalness={0.65} roughness={0.32} />
      </mesh>

      {/* screen */}
      <mesh position={[0, 0.02, 0.033]}>
        <planeGeometry args={[1.4, 0.78]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered === index ? 0.4 : 0.22}
        />
      </mesh>

      {/* browser chrome bar */}
      <mesh position={[0, 0.44, 0.034]}>
        <planeGeometry args={[1.4, 0.1]} />
        <meshBasicMaterial color="#050508" />
      </mesh>
      <mesh position={[-0.6, 0.44, 0.036]}>
        <circleGeometry args={[0.018, 12]} />
        <meshBasicMaterial color="#ffffff" opacity={0.3} transparent />
      </mesh>
    </group>
  );
}

function PortfolioDevicesScene({ hovered }: { hovered: number | null }) {
  return (
    <>
      <ambientLight intensity={1.2} />
      <pointLight position={[3, 3, 4]} intensity={16} color="#7c3aed" />
      <pointLight position={[-3, -1, 3]} intensity={11} color="#c026d3" />

      <BrowserPanel
        position={[-1.55, 0.28, 0]}
        baseRotationY={0.32}
        color="#7c3aed"
        index={0}
        hovered={hovered}
      />
      <BrowserPanel
        position={[0, -0.12, 0.45]}
        baseRotationY={0}
        color="#2563eb"
        index={1}
        hovered={hovered}
      />
      <BrowserPanel
        position={[1.55, 0.28, 0]}
        baseRotationY={-0.32}
        color="#c026d3"
        index={2}
        hovered={hovered}
      />
    </>
  );
}

function PortfolioDevices3D({ hovered }: { hovered: number | null }) {
  return (
    <Canvas
      camera={{ position: [0, 0.35, 4.6], fov: 38 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <PortfolioDevicesScene hovered={hovered} />
    </Canvas>
  );
}

/* -------------------------------------------------------------------------- */
/*                 3D — TRANSFORM ORB (before/after section)                  */
/* -------------------------------------------------------------------------- */

function TransformOrbScene() {
  const leftRef = useRef<THREE.Mesh>(null);
  const rightRef = useRef<THREE.Mesh>(null);
  const beamRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (leftRef.current) {
      leftRef.current.rotation.y += delta * 0.3;
      leftRef.current.rotation.x += delta * 0.1;
    }

    if (rightRef.current) {
      rightRef.current.rotation.y -= delta * 0.4;
      rightRef.current.rotation.x -= delta * 0.15;
      rightRef.current.scale.setScalar(1 + Math.sin(t * 1.4) * 0.06);
    }

    if (beamRef.current) {
      const mat = beamRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.22 + Math.sin(t * 2) * 0.14;
    }
  });

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[3, 2, 3]} intensity={12} color="#7c3aed" />
      <pointLight position={[-3, -1, 2]} intensity={7} color="#9ca3af" />

      <mesh ref={leftRef} position={[-1.6, 0, 0]}>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial color="#3f3f46" roughness={0.85} metalness={0.08} />
      </mesh>

      <mesh ref={beamRef} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.012, 0.012, 2.35, 8]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.28} />
      </mesh>

      <mesh ref={rightRef} position={[1.6, 0, 0]}>
        <icosahedronGeometry args={[0.6, 1]} />
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#a78bfa"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>
    </>
  );
}

function TransformOrb3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 4.2], fov: 40 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <TransformOrbScene />
    </Canvas>
  );
}

/* -------------------------------------------------------------------------- */
/*                        BEFORE / AFTER COMPARISON SLIDER                    */
/* -------------------------------------------------------------------------- */

function BeforeAfterSlider() {
  const [percent, setPercent] = useState(50);

  return (
    <div className="relative mx-auto max-w-3xl select-none overflow-hidden rounded-[30px] border border-white/10">
      <div className="relative aspect-[16/10] w-full bg-[#e8e4da]">
        <div className="absolute inset-0 flex flex-col justify-center p-8 text-black/70 sm:p-10">
          <p className="font-serif text-xl italic sm:text-2xl">~ Joe&apos;s Place ~</p>
          <div className="mt-6 h-px w-2/3 bg-black/20" />
          <div className="mt-3 h-px w-1/2 bg-black/15" />
          <div className="mt-3 h-px w-1/3 bg-black/10" />
          <span className="mt-8 inline-flex w-fit rounded-md border border-black/15 px-3 py-1.5 text-xs text-black/50">
            click
          </span>
          <p className="mt-10 text-[10px] text-black/30">© 2009 Joe&apos;s Place</p>
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
          Before
        </span>

        <div
          className="absolute inset-0 bg-[#0a0a0d]"
          style={{ clipPath: `inset(0 0 0 ${percent}%)` }}
        >
          <div className="flex h-full flex-col justify-center p-8 sm:p-10">
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/45 sm:gap-6 sm:text-sm">
              <span>Home</span>
              <span>Menu</span>
              <span>About</span>
              <span className="rounded-full bg-violet-500 px-3 py-1 text-white">Book</span>
            </div>
            <h3 className="mt-8 text-2xl font-semibold text-white sm:mt-10 sm:text-3xl">
              Welcome to Joe&apos;s Place
            </h3>
            <div className="mt-6 h-2 w-32 rounded-full bg-violet-500/60 sm:w-40" />
          </div>
          <span className="absolute right-4 top-4 rounded-full bg-violet-500 px-3 py-1 text-xs text-white">
            After
          </span>
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white/90"
          style={{ left: `${percent}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-violet-500 text-white shadow-2xl">
            <MousePointer2 size={16} />
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={percent}
          onChange={(e) => setPercent(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          aria-label="Compare before and after website design"
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */

const services = [
  {
    icon: MonitorSmartphone,
    title: "Web Design",
    description:
      "Custom, mobile-friendly business websites designed to build trust and turn visitors into inquiries.",
    href: "/web-design",
  },
  {
    icon: Search,
    title: "SEO & Search Visibility",
    description:
      "Technical SEO, on-page optimization, keyword strategy, service pages, and content planning built around real search intent.",
    href: "/seo",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Local search strategy that strengthens your website, service relevance, and online presence for nearby customers.",
    href: "/local-seo",
  },
  {
    icon: Sparkles,
    title: "Website Redesign",
    description:
      "Modern redesigns for businesses with outdated, confusing, slow, or underperforming websites.",
    href: "/website-redesign",
  },
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "Custom features, forms, booking flows, and interactive experiences built around what your business actually needs.",
    href: "/web-design",
  },
  {
    icon: Gauge,
    title: "Speed & Performance",
    description:
      "Fast-loading, responsive websites with a strong technical foundation for users and search engines.",
    href: "/web-design",
  },
];

const projects = [
  {
    icon: Scissors,
    number: "01",
    category: "Barber Shop Demo",
    title: "Northline Barbers",
    description:
      "A bold booking-focused website for a modern barber shop.",
    tags: ["Web Design", "Booking", "Mobile"],
    accent:
      "from-amber-500/20 via-orange-500/10 to-transparent",
    href: "/work/barber",
  },
  {
    icon: Wrench,
    number: "02",
    category: "Auto Repair Demo",
    title: "Apex Auto Works",
    description:
      "A professional automotive website with diagnostics, service information, and quote requests.",
    tags: ["Development", "SEO", "Performance"],
    accent:
      "from-blue-500/20 via-cyan-500/10 to-transparent",
    href: "/work/auto",
  },
  {
    icon: PawPrint,
    number: "03",
    category: "Pet Grooming Demo",
    title: "Paw & Polish",
    description:
      "A polished grooming website designed around appointments and customer trust.",
    tags: ["Branding", "Responsive", "Conversion"],
    accent:
      "from-fuchsia-500/20 via-violet-500/10 to-transparent",
    href: "/work/grooming",
  },
];

const benefits = [
  {
    icon: BadgeCheck,
    title: "Custom-built",
    description:
      "Designed around your business rather than using the exact same template as everyone else.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first",
    description:
      "Designed to work properly across phones, tablets, laptops, and desktops.",
  },
  {
    icon: Zap,
    title: "Fast experience",
    description:
      "Modern development helps keep the website responsive and quick.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    description:
      "You stay involved throughout the project and can request changes before launch.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$299",
    description:
      "A polished online presence for a small business that needs the essentials done right.",
    features: [
      "1–3 page custom website",
      "Mobile-responsive design",
      "Contact or inquiry form",
      "Basic SEO foundations",
      "Domain connection",
      "Launch support",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "$499",
    description:
      "Our best fit for local businesses that want a stronger, more complete website.",
    features: [
      "Up to 5 custom pages",
      "Premium custom design",
      "Animations and interactions",
      "Booking or quote sections",
      "Basic SEO foundations",
      "Revision round before launch",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$799",
    description:
      "For businesses that need more custom pages, visuals, motion, or advanced functionality.",
    features: [
      "Expanded custom page count",
      "Advanced animations or 3D",
      "Custom forms and features",
      "More complex booking flows",
      "Performance optimization",
      "Priority project support",
    ],
    popular: false,
  },
];

const processSteps = [
  { number: "01", title: "Tell us about your business", description: "Send us your business details, goals, and what you want your website to accomplish." },
  { number: "02", title: "We create your preview", description: "We put together a website direction so you can see what Webryxo can build for your business." },
  { number: "03", title: "You review the design", description: "You look through the preview, give feedback, and decide whether you want to move forward." },
  { number: "04", title: "We finish and launch", description: "Once you approve the project, we complete the website, connect the domain, and get it live." },
];

const faqs = [
  { question: "Do I have to pay before seeing anything?", answer: "No. You can request a free website preview first. If you like the direction and want to move forward, we can continue with the paid project." },
  { question: "Who pays for the domain?", answer: "The domain is paid separately by the client. We can help connect it to the finished website." },
  { question: "How much is hosting and maintenance?", answer: "Hosting and maintenance are $15 per month or $150 per year." },
  { question: "Can I request changes?", answer: "Yes. You can give feedback during the project. The exact revision scope depends on the package and project requirements." },
  { question: "Can you redesign an existing website?", answer: "Yes. If you already have a website, Webryxo can create a more modern design and rebuild the experience around your current business needs." },
  { question: "What if I need something more advanced?", answer: "Custom forms, booking flows, integrations, e-commerce, extra pages, and other advanced features can be quoted based on the project." },
];

const comparisonRows = [
  { feature: "Professional Design", diy: "Limited" },
  { feature: "Mobile Responsive", diy: "Depends" },
  { feature: "SEO Foundation", diy: "Limited" },
  { feature: "Performance Optimization", diy: "Depends" },
  { feature: "Custom Design", diy: "Limited" },
  { feature: "Support", diy: "Limited" },
  { feature: "Business-focused", diy: "—" },
];

const contactSteps = [
  "We review your request and learn about your business.",
  "We reach out within one business day to start the conversation.",
  "We discuss your goals, timeline, and what you need.",
  "We design and build your website — you go live.",
];

const contactFaqs = [
  { question: "How quickly will you respond?", answer: "We respond to all project requests within one business day." },
  { question: "Do I need to have everything ready before contacting?", answer: "No. A general idea of your business and goals is enough to get started — we'll help fill in the rest together." },
  { question: "Is there a consultation fee?", answer: "No. Your first conversation and website preview are free." },
  { question: "What if I'm not sure what I need?", answer: "That's completely fine. Tell us about your business and we'll help figure out the right direction." },
];

const laptopImages = [
  { image: "/images/webryxo/1.jfif", href: "/work/barber" },
  { image: "/images/webryxo/2.jfif", href: "/work/auto" },
  { image: "/images/webryxo/3.jfif", href: "/work/grooming" },
  { image: "/images/webryxo/4.jfif", href: "/work/barber" },
  { image: "/images/webryxo/5.jfif", href: "/work/auto" },
  { image: "/images/webryxo/6.jfif", href: "/work/grooming" },
];

/* -------------------------------------------------------------------------- */
/*                                    PAGE                                    */
/* -------------------------------------------------------------------------- */

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [leadCount, setLeadCount] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroCopyY = useTransform(heroScroll, [0, 1], [0, -100]);
  const heroCopyOpacity = useTransform(heroScroll, [0, 0.75], [1, 0]);
  const heroDeviceY = useTransform(heroScroll, [0, 1], [0, -170]);
  const heroDeviceScale = useTransform(heroScroll, [0, 1], [1, 0.72]);
  const heroDeviceRotate = useTransform(heroScroll, [0, 1], [0, -8]);
  const heroGlowScale = useTransform(heroScroll, [0, 1], [1, 1.55]);
  const heroGlowOpacity = useTransform(heroScroll, [0, 1], [0.16, 0]);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled && typeof data.count === "number") {
          setLeadCount(data.count);
        }
      })
      .catch(() => {
        /* fail silently — stat is a nice-to-have, not critical */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useSpring(mouseX, {
    stiffness: 70,
    damping: 20,
  });

  const glowY = useSpring(mouseY, {
    stiffness: 70,
    damping: 20,
  });

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      mouseX.set(event.clientX - 250);
      mouseY.set(event.clientY - 250);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSending(true);
    setFormError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      business: formData.get("business"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      project: formData.get("project"),
      website: formData.get("website"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Something went wrong."
        );
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error(error);

      setFormError(
        "Your message could not be sent. Please try again."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <main data-scroll-world className="min-h-screen overflow-hidden bg-[#040404] text-white">
      {/* Mouse Glow */}
      <motion.div
        className="pointer-events-none fixed z-0 hidden h-[500px] w-[500px] rounded-full bg-violet-600/[0.08] blur-[120px] lg:block"
        style={{
          x: glowX,
          y: glowY,
        }}
      />

      {/* Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-[-140px] h-[780px] w-[780px] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[190px]" />

        <div className="absolute right-[-220px] top-[700px] h-[560px] w-[560px] rounded-full bg-fuchsia-600/[0.07] blur-[170px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-black/60 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-xl">
              <Image
                src="/icon.png"
                alt="Webryxo logo"
                fill
                priority
                sizes="44px"
                className="object-cover"
              />
            </div>

            <span className="text-xl font-semibold">
              Webryxo<span className="text-violet-400">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/55 md:flex">
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="/seo" className="transition hover:text-white">SEO</a>
            <a href="#process" className="transition hover:text-white">Process</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#about" className="transition hover:text-white">About</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/book"
              className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black sm:inline-flex"
            >
              Start a Project ↗
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] md:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-black/95 px-6 py-5 backdrop-blur-2xl md:hidden">
            <div className="flex flex-col gap-4 text-sm text-white/65">
              <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
              <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="/seo" onClick={() => setMenuOpen(false)}>SEO</a>
              <a href="/local-seo" onClick={() => setMenuOpen(false)}>Local SEO</a>
              <a href="/blog" onClick={() => setMenuOpen(false)}>Blog</a>
              <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
              <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
              <a
                href="/book"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex w-fit rounded-full bg-white px-5 py-2.5 font-medium text-black"
              >
                Start a Project
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        ref={heroRef}
        id="top"
        className="relative z-10 mx-auto grid min-h-[calc(100svh-76px)] max-w-7xl items-center gap-10 px-6 py-14 lg:min-h-[135svh] lg:grid-cols-[1.02fr_0.98fr]"
      >
      <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={prefersReducedMotion ? undefined : { y: heroCopyY, opacity: heroCopyOpacity }}
          className="relative lg:sticky lg:top-[22vh]"
        >
          <div className="mb-7 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">
            <span className="h-px w-9 bg-violet-400/70" />
            Web Design • SEO • Digital Growth
          </div>

          <h1 className="max-w-[860px] text-[clamp(3.6rem,8vw,7.6rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
            We build
            <span className="block text-white/38">websites people</span>
            <span className="block bg-gradient-to-r from-white via-violet-200 to-fuchsia-400 bg-clip-text text-transparent">
              remember.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/48 md:text-xl">
            Webryxo builds fast, modern websites and search strategies that help
            businesses look professional, get found online, build trust, and
            turn more visitors into customers.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/book"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-black transition duration-300 hover:scale-[1.03]"
            >
              Start a Project
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#work"
              className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.035] px-7 py-3.5 text-white/80 transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              Explore Our Work
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/25">
            <span>Design</span>
            <span className="h-1 w-1 rounded-full bg-violet-400/60" />
            <span>Development</span>
            <span className="h-1 w-1 rounded-full bg-violet-400/60" />
            <span>Motion</span>
            <span className="h-1 w-1 rounded-full bg-violet-400/60" />
            <span>Performance</span>
          </div>

          {leadCount !== null && leadCount > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs normal-case tracking-normal text-white/50"
            >
              <UsersRound size={14} className="text-violet-300" />
              {leadCount} {leadCount === 1 ? "business has" : "businesses have"}{" "}
              requested a free website preview
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1.05,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={
            prefersReducedMotion
              ? undefined
              : { y: heroDeviceY, scale: heroDeviceScale, rotate: heroDeviceRotate }
          }
          className="relative hidden h-[680px] lg:sticky lg:top-[12vh] lg:block"
        >
          <motion.div
            style={prefersReducedMotion ? undefined : { scale: heroGlowScale, opacity: heroGlowOpacity }}
            className="absolute inset-[8%] rounded-full bg-violet-600/[0.14] blur-[120px]"
          />
          <div className="absolute inset-x-[10%] bottom-[10%] h-24 rounded-full bg-fuchsia-500/[0.1] blur-[60px]" />

          <div className="absolute inset-0">
            <HeroLaptop />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, -1, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-20 rounded-2xl border border-white/10 bg-black/50 p-4 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <Code2 className="text-violet-300" size={20} />
              <div>
                <p className="text-sm font-medium">Custom Development</p>
                <p className="text-xs text-white/35">Built around your business</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, 1, 0] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-0 rounded-2xl border border-white/10 bg-black/50 p-4 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <Layers3 className="text-fuchsia-300" size={20} />
              <div>
                <p className="text-sm font-medium">Premium Design</p>
                <p className="text-xs text-white/35">Modern. Clean. Memorable.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.a
          href="#showcase"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="absolute bottom-7 left-6 hidden items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-white/35 transition hover:text-white/70 lg:flex"
        >
          <span className="relative flex h-9 w-[1px] overflow-hidden bg-white/20">
            <motion.span
              animate={{ y: [0, 32, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute h-4 w-px bg-violet-300"
            />
          </span>
          Scroll to enter the experience
        </motion.a>
      </section>

      {/* Selected Work Showcase */}
      <section
        id="showcase"
        className="relative z-10 mx-auto max-w-7xl px-6 py-32"
      >
        <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
              <Sparkles size={15} className="text-violet-300" />
              Selected work
            </div>

            <h2 className="mt-6 text-5xl font-semibold leading-[0.96] tracking-[-0.055em] sm:text-6xl md:text-7xl">
              Built to look
              <span className="block text-white/35">different.</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-2xl text-lg leading-8 text-white/45">
              Every Webryxo project is designed around the business behind it.
              Different industries, different goals, different visual systems —
              never the same template copied over and over.
            </p>
          </div>
        </div>

        <div className="relative mt-16 space-y-8">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.07] blur-[170px]" />

          {laptopImages.slice(0, 3).map((item, index) => (
            <motion.a
              key={item.image}
              href={item.href}
              initial={{ opacity: 0, y: 55, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.8,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative block overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.025]"
            >
              <div className="grid min-h-[520px] lg:grid-cols-[0.78fr_1.22fr]">
                <div className="relative z-10 flex flex-col justify-between p-7 sm:p-9 lg:p-12">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs uppercase tracking-[0.24em] text-violet-300">
                        0{index + 1}
                      </span>
                      <span className="h-px w-10 bg-white/15" />
                      <span className="text-xs uppercase tracking-[0.18em] text-white/30">
                        Webryxo concept
                      </span>
                    </div>

                    <h3 className="mt-8 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                      {index === 0
                        ? "Northline Barbers"
                        : index === 1
                        ? "Apex Auto Works"
                        : "Paw & Polish"}
                    </h3>

                    <p className="mt-5 max-w-md leading-7 text-white/42">
                      {index === 0
                        ? "A bold booking-first experience for a modern barbershop."
                        : index === 1
                        ? "A high-trust automotive website built around services, diagnostics, and quote requests."
                        : "A friendly, polished grooming website focused on appointments and customer confidence."}
                    </p>
                  </div>

                  <div className="mt-12">
                    <div className="mb-5 flex flex-wrap gap-2">
                      {(index === 0
                        ? ["Branding", "Booking", "Mobile"]
                        : index === 1
                        ? ["Development", "SEO", "Performance"]
                        : ["Responsive", "Conversion", "UI"]
                      ).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/45"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-2 text-sm font-medium text-white">
                      View project
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1.5"
                      />
                    </span>
                  </div>
                </div>

                <div className="relative min-h-[360px] overflow-hidden border-t border-white/10 bg-black lg:min-h-full lg:border-l lg:border-t-0">
                  <motion.img
                    src={item.image}
                    alt={`Webryxo featured website project ${index + 1}`}
                    className="absolute inset-0 h-full w-full object-cover"
                    whileHover={{ scale: 1.045 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                  <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/45 backdrop-blur-xl transition duration-300 group-hover:bg-white group-hover:text-black">
                    <ExternalLink size={17} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="relative z-10 mx-auto max-w-7xl px-6 py-32"
      >
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
              <Sparkles size={15} className="text-violet-300" />
              What we do
            </div>

            <h2 className="mt-6 text-5xl font-semibold leading-[0.96] tracking-[-0.055em] sm:text-6xl md:text-7xl">
              We design.
              <span className="block text-white/35">We build.</span>
              <span className="block bg-gradient-to-r from-white via-violet-200 to-fuchsia-400 bg-clip-text text-transparent">
                We make it work.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/45">
              Webryxo combines web design, development, SEO, local search strategy,
              performance, and user experience to help businesses look better
              online and become easier to discover.
            </p>

            <a
              href="/book"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.035] px-6 py-3 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              Tell us about your project
              <ArrowRight size={16} />
            </a>

            {!prefersReducedMotion && (
              <div className="relative mt-10 hidden h-[280px] lg:block">
                <div className="absolute inset-[10%] rounded-full bg-violet-600/[0.1] blur-[90px]" />
                <ServicesOrbit3D />
              </div>
            )}
          </div>

          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.a
                  key={service.title}
                  href={service.href}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.055,
                  }}
                  whileHover={{ x: 8 }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] p-6 sm:p-7"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-violet-500/[0.08] via-transparent to-fuchsia-500/[0.04] opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative grid items-center gap-5 sm:grid-cols-[auto_1fr_auto]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/25">
                      <Icon size={21} className="text-violet-300" />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] uppercase tracking-[0.2em] text-white/20">
                          0{index + 1}
                        </span>
                        <h3 className="text-xl font-medium tracking-[-0.02em] sm:text-2xl">
                          {service.title}
                        </h3>
                      </div>

                      <p className="mt-3 max-w-2xl leading-7 text-white/40">
                        {service.description}
                      </p>
                    </div>

                    <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/35 transition duration-300 group-hover:border-white/20 group-hover:bg-white group-hover:text-black sm:flex">
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-white/[0.04] via-violet-500/[0.06] to-fuchsia-500/[0.04] p-7 sm:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-violet-300">
                Built around your business
              </p>

              <h3 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Not every business needs the same website.
              </h3>

              <p className="mt-5 max-w-2xl leading-7 text-white/45">
                A restaurant may need menus and reservations. A barbershop may
                need booking. An auto shop may need quote requests and service
                pages. We shape the experience around what your customers
                actually need to do.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                "Restaurants",
                "Barbershops",
                "Auto Repair",
                "Local Services",
                "Professional Firms",
                "Custom Projects",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white/55"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities / Work Grid */}
      <section
        id="work"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28"
      >
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
              <Layers3 size={15} className="text-violet-300" />
              More Webryxo work
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Different businesses.
              <span className="block text-white/35">
                Different experiences.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/45">
              We adapt the design, layout, tone, and functionality to the
              business instead of forcing every client into one visual style.
            </p>

            <a
              href="/book"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.03]"
            >
              Start a Project
              <ArrowRight size={16} />
            </a>

            {!prefersReducedMotion && (
              <div className="relative mt-10 hidden h-[260px] lg:block">
                <div className="absolute inset-[12%] rounded-full bg-violet-600/[0.1] blur-[90px]" />
                <PortfolioDevices3D hovered={hoveredProject} />
              </div>
            )}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.a
                  key={project.title}
                  href={project.href}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  whileHover={{ y: -8 }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] p-7 ${
                    index === 2 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-55`}
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                        {project.number}
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/25">
                        <Icon size={19} className="text-white/65" />
                      </div>
                    </div>

                    <p className="mt-12 text-xs uppercase tracking-[0.18em] text-violet-300">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-3xl font-medium tracking-[-0.025em]">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-lg leading-7 text-white/40">
                      {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-black/15 px-3 py-1.5 text-xs text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-9 inline-flex items-center gap-2 text-sm font-medium">
                      View Demo
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1.5"
                      />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before / After Transformation */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-28">
        <div className="text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
            <Sparkles size={15} className="text-violet-300" />
            The transformation
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl md:text-6xl">
            From ordinary to
            <span className="block bg-gradient-to-r from-white via-violet-200 to-fuchsia-400 bg-clip-text text-transparent">
              unforgettable.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/45">
            Drag the slider to see the difference a professionally designed website makes.
          </p>
        </div>

        {!prefersReducedMotion && (
          <div className="relative mx-auto mt-4 hidden h-[130px] max-w-md sm:block">
            <TransformOrb3D />
          </div>
        )}

        <div className="mt-8">
          <BeforeAfterSlider />
        </div>

        <p className="mt-7 text-center text-sm text-white/35">
          Every Webryxo website is rebuilt from the ground up — modern, fast, and built to convert.
        </p>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="relative z-10 mx-auto max-w-7xl px-6 py-32"
      >
        <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
              <Sparkles size={15} className="text-violet-300" />
              Simple pricing
            </div>

            <h2 className="mt-6 text-5xl font-semibold leading-[0.96] tracking-[-0.055em] sm:text-6xl md:text-7xl">
              Choose the level
              <span className="block text-white/35">
                that fits your business.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-2xl text-lg leading-8 text-white/45">
              Every project starts with a free website preview. You only move
              forward when you are happy with the direction.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -10 }}
              className={`relative overflow-hidden rounded-[32px] border p-7 sm:p-8 ${
                plan.popular
                  ? "border-violet-400/45 bg-gradient-to-br from-violet-500/[0.13] via-white/[0.035] to-fuchsia-500/[0.06]"
                  : "border-white/10 bg-white/[0.025]"
              }`}
            >
              {plan.popular && (
                <>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/[0.09] via-transparent to-fuchsia-500/[0.05]" />
                  <div className="absolute right-5 top-5 rounded-full border border-violet-300/30 bg-violet-400/15 px-3 py-1 text-xs font-medium text-violet-200">
                    Most Popular
                  </div>
                </>
              )}

              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-violet-300">
                    {plan.name}
                  </p>
                  <span className="text-xs uppercase tracking-[0.18em] text-white/20">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-6xl font-semibold tracking-[-0.055em]">
                    {plan.price}
                  </span>
                  <span className="pb-1 text-sm text-white/35">
                    one-time
                  </span>
                </div>

                <p className="mt-5 min-h-[96px] leading-7 text-white/45">
                  {plan.description}
                </p>

                <div className="my-7 h-px bg-white/10" />

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-sm text-white/65"
                    >
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-400/10">
                        <Check size={13} className="text-violet-300" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/book"
                  className={`mt-9 flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-medium transition hover:scale-[1.02] ${
                    plan.popular
                      ? "bg-white text-black"
                      : "border border-white/10 bg-white/[0.04] text-white hover:border-white/20"
                  }`}
                >
                  Get a Free Website Preview
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.025] p-7 sm:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-violet-300">
              Hosting & maintenance
            </p>

            <div className="mt-5 flex flex-wrap items-end gap-x-4 gap-y-2">
              <span className="text-4xl font-semibold tracking-[-0.04em]">
                $15
              </span>
              <span className="pb-1 text-white/35">/ month</span>

              <span className="mx-1 hidden h-7 w-px bg-white/10 sm:block" />

              <span className="text-4xl font-semibold tracking-[-0.04em]">
                $150
              </span>
              <span className="pb-1 text-white/35">/ year</span>
            </div>

            <p className="mt-5 max-w-2xl leading-7 text-white/42">
              Keep your website online, secure, monitored, and maintained after launch.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-violet-500/[0.08] via-white/[0.025] to-fuchsia-500/[0.05] p-7 sm:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-violet-300">
              No pressure
            </p>

            <h3 className="mt-4 text-2xl font-medium tracking-[-0.025em]">
              See the direction before you commit.
            </h3>

            <p className="mt-4 leading-7 text-white/42">
              Your first website preview is free. If you like the direction,
              we’ll take it from there.
            </p>
          </div>
        </div>
      </section>

      {/* About / Why Webryxo */}
      <section
        id="about"
        className="relative z-10 mx-auto max-w-7xl px-6 py-32"
      >
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
              <BadgeCheck size={15} className="text-violet-300" />
              Why Webryxo
            </div>

            <h2 className="mt-6 text-5xl font-semibold leading-[0.96] tracking-[-0.055em] sm:text-6xl md:text-7xl">
              Your website should
              <span className="block text-white/35">
                earn attention.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/45">
              A strong website should make your business look credible,
              explain what you do clearly, and make it easy for customers
              to take the next step.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-white/25">
              <span>Clarity</span>
              <span>•</span>
              <span>Trust</span>
              <span>•</span>
              <span>Performance</span>
              <span>•</span>
              <span>Conversion</span>
            </div>
          </div>

          <div className="space-y-5">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  whileHover={{ x: 8 }}
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] p-7 sm:p-8"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-violet-500/[0.08] via-transparent to-fuchsia-500/[0.04] opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative grid gap-5 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/25">
                      <Icon size={21} className="text-violet-300" />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] uppercase tracking-[0.2em] text-white/20">
                          0{index + 1}
                        </span>

                        <h3 className="text-2xl font-medium tracking-[-0.025em]">
                          {benefit.title}
                        </h3>
                      </div>

                      <p className="mt-3 max-w-2xl leading-7 text-white/42">
                        {benefit.description}
                      </p>
                    </div>

                    <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/30 transition duration-300 group-hover:bg-white group-hover:text-black sm:flex">
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 grid gap-5 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[30px] border border-white/10 bg-white/[0.025] p-7"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-violet-300">
              Designed for trust
            </p>
            <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em]">
              Look established from the first click.
            </h3>
            <p className="mt-4 leading-7 text-white/42">
              Clean layouts, strong typography, and polished visual systems help
              your business feel credible before a customer ever contacts you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-[30px] border border-white/10 bg-gradient-to-br from-violet-500/[0.10] via-white/[0.025] to-fuchsia-500/[0.05] p-7"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-violet-300">
              Built for action
            </p>
            <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em]">
              Make the next step obvious.
            </h3>
            <p className="mt-4 leading-7 text-white/42">
              Calls, bookings, quote requests, menus, service pages, and contact
              forms are structured around what customers need to do next.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="rounded-[30px] border border-white/10 bg-white/[0.025] p-7"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-violet-300">
              Built to last
            </p>
            <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em]">
              Fast, responsive, and easy to grow.
            </h3>
            <p className="mt-4 leading-7 text-white/42">
              Modern development gives your website a strong foundation for
              future pages, features, integrations, and business growth.
            </p>
          </motion.div>
        </div>

        <div className="mt-8 overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.035] via-violet-500/[0.07] to-fuchsia-500/[0.04] p-8 sm:p-11">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-violet-300">
                A better first impression
              </p>

              <h3 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Your website is often the first conversation your business has with a customer.
              </h3>

              <p className="mt-5 max-w-2xl leading-7 text-white/45">
                We make sure that conversation feels clear, modern, professional,
                and worth continuing.
              </p>
            </div>

            <a
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-black transition hover:scale-[1.03]"
            >
              Start a Project
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="relative z-10 mx-auto max-w-7xl px-6 py-32"
      >
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
              <Rocket size={15} className="text-violet-300" />
              How it works
            </div>

            <h2 className="mt-6 text-5xl font-semibold leading-[0.96] tracking-[-0.055em] sm:text-6xl md:text-7xl">
              From first idea
              <span className="block text-white/35">
                to final launch.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/45">
              A clear process designed to keep you involved, reduce surprises,
              and make sure the final website feels right for your business.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-white/25">
              <span>Strategy</span>
              <span>•</span>
              <span>Design</span>
              <span>•</span>
              <span>Build</span>
              <span>•</span>
              <span>Launch</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-[27px] top-0 hidden w-px bg-gradient-to-b from-violet-400/50 via-white/10 to-transparent sm:block" />

            <div className="space-y-5">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative sm:pl-20"
                >
                  <div className="absolute left-0 top-7 z-10 hidden h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/25 bg-[#09070f] text-sm font-semibold text-violet-300 shadow-[0_0_30px_rgba(124,58,237,0.14)] sm:flex">
                    {step.number}
                  </div>

                  <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] p-7 sm:p-9">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-violet-500/[0.08] via-transparent to-fuchsia-500/[0.035] opacity-0 transition duration-500 group-hover:opacity-100" />

                    <div className="relative">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-violet-300 sm:hidden">
                            Step {step.number}
                          </p>

                          <h3 className="text-2xl font-medium tracking-[-0.025em] sm:text-3xl">
                            {step.title}
                          </h3>
                        </div>

                        <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/30 transition duration-300 group-hover:bg-white group-hover:text-black sm:flex">
                          <ArrowRight size={16} />
                        </div>
                      </div>

                      <p className="mt-5 max-w-2xl text-base leading-8 text-white/42">
                        {step.description}
                      </p>

                      <div className="mt-7 h-px w-full bg-white/[0.06]" />

                      <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/35">
                        {index === 0 && (
                          <>
                            <span className="rounded-full border border-white/10 px-3 py-1.5">Goals</span>
                            <span className="rounded-full border border-white/10 px-3 py-1.5">Business needs</span>
                            <span className="rounded-full border border-white/10 px-3 py-1.5">Direction</span>
                          </>
                        )}

                        {index === 1 && (
                          <>
                            <span className="rounded-full border border-white/10 px-3 py-1.5">Visual concept</span>
                            <span className="rounded-full border border-white/10 px-3 py-1.5">Layout</span>
                            <span className="rounded-full border border-white/10 px-3 py-1.5">Experience</span>
                          </>
                        )}

                        {index === 2 && (
                          <>
                            <span className="rounded-full border border-white/10 px-3 py-1.5">Feedback</span>
                            <span className="rounded-full border border-white/10 px-3 py-1.5">Revisions</span>
                            <span className="rounded-full border border-white/10 px-3 py-1.5">Approval</span>
                          </>
                        )}

                        {index === 3 && (
                          <>
                            <span className="rounded-full border border-white/10 px-3 py-1.5">Development</span>
                            <span className="rounded-full border border-white/10 px-3 py-1.5">Domain</span>
                            <span className="rounded-full border border-white/10 px-3 py-1.5">Launch</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 overflow-hidden rounded-[36px] border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.11] via-white/[0.025] to-fuchsia-500/[0.07] p-8 sm:p-11">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-violet-300">
                See the direction first
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Start with a free website preview.
              </h3>

              <p className="mt-4 max-w-2xl leading-7 text-white/45">
                Tell us about your business and we’ll put together a direction
                so you can see what Webryxo can build before you decide to move forward.
              </p>
            </div>

            <a
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-black transition hover:scale-[1.03]"
            >
              Request a Free Preview
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* Comparison — Webryxo vs. Typical DIY */}
      <section id="comparison" className="relative z-10 mx-auto max-w-5xl px-6 py-28">
        <div className="text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
            <Layers3 size={15} className="text-violet-300" />
            The difference
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl md:text-6xl">
            Webryxo vs.
            <span className="block text-white/35">typical DIY website.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/45">
            See why a professionally built website outperforms a do-it-yourself builder.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025]">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] items-center gap-2 border-b border-white/10 px-6 py-4 text-xs uppercase tracking-[0.14em] sm:px-8 sm:text-sm">
            <span className="text-white/35">Feature</span>
            <span className="text-center font-medium text-violet-300">Webryxo</span>
            <span className="text-center text-white/35">Typical DIY</span>
          </div>

          {comparisonRows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1.4fr_1fr_1fr] items-center gap-2 px-6 py-4 text-sm sm:px-8 ${
                i !== comparisonRows.length - 1 ? "border-b border-white/[0.06]" : ""
              }`}
            >
              <span className="text-white/70">{row.feature}</span>
              <span className="flex justify-center">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-400/15">
                  <Check size={13} className="text-violet-300" />
                </span>
              </span>
              <span className="text-center text-white/35">{row.diy}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
              <MessageSquare size={15} className="text-violet-300" />
              Frequently asked questions
            </div>

            <h2 className="mt-6 text-5xl font-semibold leading-[0.96] tracking-[-0.055em] sm:text-6xl md:text-7xl">
              Questions before
              <span className="block text-white/35">we get started?</span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/45">
              Here are the things businesses usually want to know before
              starting a project with Webryxo.
            </p>

            <a
              href="/book"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.035] px-6 py-3 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              Ask us anything
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={faq.question}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.045 }}
                className="group overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.025]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-6 text-left sm:px-7">
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-violet-300/70">
                      0{index + 1}
                    </span>
                    <span className="text-base font-medium sm:text-lg">
                      {faq.question}
                    </span>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition group-open:rotate-180 group-open:bg-white group-open:text-black">
                    <ChevronDown size={16} />
                  </div>
                </summary>

                <div className="border-t border-white/[0.06] px-6 py-6 sm:px-7">
                  <p className="max-w-3xl leading-7 text-white/45">{faq.answer}</p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[42px] border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.14] via-white/[0.03] to-fuchsia-500/[0.09] px-7 py-16 sm:px-12 sm:py-20"
        >
          <div className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-violet-500/[0.12] blur-[100px]" />
          <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-fuchsia-500/[0.10] blur-[100px]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-400/10">
              <Sparkles className="text-violet-300" size={22} />
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.24em] text-violet-300">
              Ready when you are
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-5xl md:text-6xl">
              See what your next
              <span className="block bg-gradient-to-r from-white via-violet-200 to-fuchsia-300 bg-clip-text text-transparent">
                website could become.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/48">
              Tell us about your business and request a free website preview.
              See the direction first, then decide whether you want to move forward.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href="/book"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-black transition hover:scale-[1.03]"
              >
                Request My Free Preview
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#work"
                className="inline-flex items-center rounded-full border border-white/12 bg-black/15 px-7 py-3.5 text-white/80 transition hover:border-white/25 hover:bg-white/[0.05]"
              >
                View Our Work
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
            <Send size={15} className="text-violet-300" />
            Start a project
          </div>

          <h2 className="mt-6 text-5xl font-semibold leading-[0.96] tracking-[-0.055em] sm:text-6xl md:text-7xl">
            Tell us what
            <span className="block text-white/35">you want to build.</span>
          </h2>
        </div>

        <div className="grid gap-8 rounded-[38px] border border-white/10 bg-white/[0.025] p-6 sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:p-10">
          <div className="flex flex-col justify-between rounded-[30px] border border-white/10 bg-gradient-to-br from-violet-500/[0.09] via-black/20 to-fuchsia-500/[0.05] p-7 sm:p-9">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-violet-300">
                Let’s talk
              </p>

              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Have a business?
                <span className="block text-white/35">
                  Let’s improve how it looks online.
                </span>
              </h3>

              <p className="mt-6 max-w-lg text-lg leading-8 text-white/45">
                Share a few details about your business, what you need, and
                what you want your website to accomplish.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                  What happens next
                </p>
                <ol className="mt-3 space-y-3">
                  {contactSteps.map((step, index) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-white/60">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-400/15 text-[11px] font-medium text-violet-300">
                        {index + 1}
                      </span>
                      <span className="leading-6">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="mt-12 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                  Response
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-white/65">
                  <Clock3 size={16} className="text-violet-300" />
                  Quick response
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                  Based in
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-white/65">
                  <MapPin size={16} className="text-violet-300" />
                  Massachusetts
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                  Email
                </p>
                <a
                  href="mailto:info@webryxo.com"
                  className="mt-2 flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
                >
                  <Mail size={16} className="text-violet-300" />
                  info@webryxo.com
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-black/25 p-6 sm:p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[560px] flex-col items-center justify-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-violet-400/25 bg-violet-500/10">
                  <CheckCircle2 size={30} className="text-violet-300" />
                </div>

                <h3 className="mt-6 text-3xl font-medium">Message sent.</h3>

                <p className="mt-3 max-w-md leading-7 text-white/45">
                  Thanks for reaching out. We’ll review your project details
                  and get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.16em] text-white/30">
                      Your name
                    </span>
                    <input
                      name="name"
                      required
                      placeholder="John Smith"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-white/20 focus:border-violet-400/40"
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.16em] text-white/30">
                      Business
                    </span>
                    <input
                      name="business"
                      required
                      placeholder="Your business name"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-white/20 focus:border-violet-400/40"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.16em] text-white/30">
                      Email
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@business.com"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-white/20 focus:border-violet-400/40"
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.16em] text-white/30">
                      Phone
                    </span>
                    <input
                      name="phone"
                      placeholder="Optional"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-white/20 focus:border-violet-400/40"
                    />
                  </label>
                </div>

                <label className="block space-y-2">
                  <span className="text-xs uppercase tracking-[0.16em] text-white/30">
                    Project type
                  </span>
                  <select
                    name="project"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl border border-white/10 bg-[#101014] px-4 py-3.5 text-white outline-none transition focus:border-violet-400/40"
                  >
                    <option value="" disabled>What do you need?</option>
                    <option value="website">New Website</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="custom">Custom Project</option>
                  </select>
                </label>

                <label className="block space-y-2">
                  <span className="text-xs uppercase tracking-[0.16em] text-white/30">
                    Current website
                  </span>
                  <input
                    name="website"
                    placeholder="Optional — your current website"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-white/20 focus:border-violet-400/40"
                  />
                </label>

                <label className="block space-y-2">
                  <span className="text-xs uppercase tracking-[0.16em] text-white/30">
                    Project details
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your business, your goals, and what you want the website to do..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-white/20 focus:border-violet-400/40"
                  />
                </label>

                <button
                  type="submit"
                  disabled={sending}
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 font-medium text-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Request My Free Website Preview"}
                  {!sending && (
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  )}
                </button>

                <p className="text-center text-xs leading-6 text-white/25">
                  Free preview. No commitment required.
                </p>

                {formError && (
                  <p className="rounded-xl border border-red-400/20 bg-red-400/[0.07] p-3 text-center text-sm text-red-300">
                    {formError}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-6 text-center text-2xl font-semibold tracking-[-0.03em]">
            Contact FAQ
          </h3>

          <div className="mx-auto max-w-2xl space-y-3">
            {contactFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium sm:text-base">
                  {faq.question}
                  <ChevronDown
                    size={16}
                    className="shrink-0 text-white/40 transition group-open:rotate-180"
                  />
                </summary>
                <div className="border-t border-white/[0.06] px-5 py-4">
                  <p className="text-sm leading-6 text-white/45">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <a href="#top" className="inline-flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-xl">
                  <Image
                    src="/icon.png"
                    alt="Webryxo logo"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>

                <span className="text-xl font-semibold">
                  Webryxo<span className="text-violet-400">.</span>
                </span>
              </a>

              <p className="mt-5 max-w-sm leading-7 text-white/35">
                Modern websites and digital experiences built to help
                businesses look professional, build trust, and grow online.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                Explore
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/45">
                <a href="#work" className="transition hover:text-white">Work</a>
                <a href="#services" className="transition hover:text-white">Services</a>
                <a href="/seo" className="transition hover:text-white">SEO</a>
                <a href="/local-seo" className="transition hover:text-white">Local SEO</a>
                <a href="/blog" className="transition hover:text-white">Blog</a>
                <a href="#process" className="transition hover:text-white">Process</a>
                <a href="#pricing" className="transition hover:text-white">Pricing</a>
                <a href="#faq" className="transition hover:text-white">FAQ</a>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                Contact
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/45">
                <a
                  href="mailto:info@webryxo.com"
                  className="transition hover:text-white"
                >
                  info@webryxo.com
                </a>

                <a href="/book" className="transition hover:text-white">
                  Start a Project
                </a>

                <span>Massachusetts</span>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/[0.07] pt-7 text-xs text-white/25 sm:flex-row">
            <p>© {new Date().getFullYear()} Webryxo. All rights reserved.</p>
            <p>Designed & developed by Webryxo.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
