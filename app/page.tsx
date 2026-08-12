"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
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
  Wrench,
  X,
  Zap,
} from "lucide-react";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/* -------------------------------------------------------------------------- */
/*                                  3D LAPTOP                                 */
/* -------------------------------------------------------------------------- */

function LaptopModel() {
  const group = useRef<THREE.Group>(null);
  const screenGlow = useRef<THREE.MeshStandardMaterial>(null);
  const { pointer } = useThree();

  useFrame((state, delta) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;

    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      -0.38 + pointer.x * 0.24 + Math.sin(t * 0.32) * 0.018,
      4.2,
      delta
    );
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      -0.10 - pointer.y * 0.13,
      4.2,
      delta
    );
    group.current.position.x = THREE.MathUtils.damp(
      group.current.position.x,
      pointer.x * 0.1,
      3.2,
      delta
    );
    group.current.position.y = THREE.MathUtils.damp(
      group.current.position.y,
      Math.sin(t * 1.05) * 0.055 + pointer.y * 0.045,
      3.2,
      delta
    );

    if (screenGlow.current) {
      screenGlow.current.emissiveIntensity = 0.62 + Math.sin(t * 1.45) * 0.08;
    }
  });

  const keys = [];
  for (let row = 0; row < 5; row++) {
    const count = row === 4 ? 8 : 12;
    const startX = -1.08 + (row === 4 ? 0.34 : 0);
    for (let i = 0; i < count; i++) {
      keys.push(
        <mesh
          key={`${row}-${i}`}
          position={[startX + i * 0.195, -0.505, -0.46 + row * 0.19]}
        >
          <boxGeometry args={[0.145, 0.026, 0.115]} />
          <meshStandardMaterial color="#242428" metalness={0.28} roughness={0.48} />
        </mesh>
      );
    }
  }

  return (
    <group ref={group}>
      {/* lower aluminum body */}
      <mesh position={[0, -0.65, 0.13]}>
        <boxGeometry args={[3.15, 0.13, 1.95]} />
        <meshStandardMaterial color="#1b1b1f" metalness={0.88} roughness={0.18} />
      </mesh>

      {/* tapered front lip */}
      <mesh position={[0, -0.705, 1.08]} rotation={[0.08, 0, 0]}>
        <boxGeometry args={[2.75, 0.055, 0.16]} />
        <meshStandardMaterial color="#25252a" metalness={0.9} roughness={0.18} />
      </mesh>

      {/* keyboard deck */}
      <mesh position={[0, -0.57, 0.02]}>
        <boxGeometry args={[2.88, 0.035, 1.68]} />
        <meshStandardMaterial color="#111114" metalness={0.38} roughness={0.5} />
      </mesh>

      {keys}

      {/* trackpad */}
      <mesh position={[0, -0.515, 0.67]}>
        <boxGeometry args={[1.12, 0.018, 0.47]} />
        <meshStandardMaterial color="#29292e" metalness={0.72} roughness={0.22} />
      </mesh>

      {/* hinge */}
      <mesh position={[0, -0.49, -0.86]}>
        <cylinderGeometry args={[0.075, 0.075, 2.55, 24]} />
        <meshStandardMaterial color="#111114" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* display assembly */}
      <group position={[0, 0.29, -0.84]} rotation={[-0.04, 0, 0]}>
        <mesh>
          <boxGeometry args={[2.96, 1.86, 0.095]} />
          <meshStandardMaterial color="#151519" metalness={0.9} roughness={0.16} />
        </mesh>

        {/* black glass */}
        <mesh position={[0, 0, 0.052]}>
          <planeGeometry args={[2.74, 1.64]} />
          <meshStandardMaterial
            ref={screenGlow}
            color="#050508"
            emissive="#12082b"
            emissiveIntensity={0.65}
            metalness={0.15}
            roughness={0.3}
          />
        </mesh>

        {/* webcam */}
        <mesh position={[0, 0.855, 0.06]}>
          <circleGeometry args={[0.025, 18]} />
          <meshBasicMaterial color="#08080a" />
        </mesh>

        {/* animated-looking Webryxo mini site */}
        <group position={[0, 0, 0.064]}>
          {/* browser/nav bar */}
          <mesh position={[0, 0.68, 0]}>
            <planeGeometry args={[2.58, 0.16]} />
            <meshBasicMaterial color="#0b0b10" />
          </mesh>
          <mesh position={[-1.05, 0.68, 0.003]}>
            <planeGeometry args={[0.28, 0.055]} />
            <meshBasicMaterial color="#a78bfa" />
          </mesh>
          <mesh position={[0.55, 0.68, 0.003]}>
            <planeGeometry args={[0.18, 0.025]} />
            <meshBasicMaterial color="#71717a" />
          </mesh>
          <mesh position={[0.82, 0.68, 0.003]}>
            <planeGeometry args={[0.18, 0.025]} />
            <meshBasicMaterial color="#71717a" />
          </mesh>
          <mesh position={[1.08, 0.68, 0.003]}>
            <planeGeometry args={[0.28, 0.07]} />
            <meshBasicMaterial color="#fafafa" />
          </mesh>

          {/* hero copy */}
          <mesh position={[-0.63, 0.34, 0.003]}>
            <planeGeometry args={[0.92, 0.075]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          <mesh position={[-0.72, 0.20, 0.003]}>
            <planeGeometry args={[0.74, 0.075]} />
            <meshBasicMaterial color="#c4b5fd" />
          </mesh>
          <mesh position={[-0.77, 0.03, 0.003]}>
            <planeGeometry args={[0.64, 0.025]} />
            <meshBasicMaterial color="#52525b" />
          </mesh>
          <mesh position={[-0.82, -0.05, 0.003]}>
            <planeGeometry args={[0.54, 0.025]} />
            <meshBasicMaterial color="#3f3f46" />
          </mesh>
          <mesh position={[-0.92, -0.20, 0.003]}>
            <planeGeometry args={[0.34, 0.09]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>

          {/* visual card */}
          <mesh position={[0.72, 0.10, 0.003]}>
            <planeGeometry args={[0.86, 0.82]} />
            <meshBasicMaterial color="#17121f" />
          </mesh>
          <mesh position={[0.72, 0.10, 0.006]}>
            <circleGeometry args={[0.28, 48]} />
            <meshBasicMaterial color="#6d28d9" />
          </mesh>
          <mesh position={[0.72, 0.10, 0.009]}>
            <circleGeometry args={[0.16, 48]} />
            <meshBasicMaterial color="#d8b4fe" />
          </mesh>

          {/* lower project cards */}
          <mesh position={[-0.77, -0.55, 0.003]}>
            <planeGeometry args={[0.68, 0.20]} />
            <meshBasicMaterial color="#18181b" />
          </mesh>
          <mesh position={[0, -0.55, 0.003]}>
            <planeGeometry args={[0.68, 0.20]} />
            <meshBasicMaterial color="#21162e" />
          </mesh>
          <mesh position={[0.77, -0.55, 0.003]}>
            <planeGeometry args={[0.68, 0.20]} />
            <meshBasicMaterial color="#18181b" />
          </mesh>
        </group>
      </group>
    </group>
  );
}

function HeroLaptop() {
  return (
    <Canvas
      camera={{ position: [0, 0.35, 5.25], fov: 38 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={1.25} />
      <directionalLight position={[4, 5, 5]} intensity={2.4} />
      <pointLight position={[-3, 2, 3]} intensity={20} color="#7c3aed" />
      <pointLight position={[3, -1, 2]} intensity={13} color="#c026d3" />
      <pointLight position={[0, 2, -2]} intensity={8} color="#60a5fa" />

      <Float speed={1.25} rotationIntensity={0.04} floatIntensity={0.18}>
        <LaptopModel />
      </Float>

      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */

const services = [
  {
    icon: MonitorSmartphone,
    title: "Business Websites",
    description:
      "Premium websites designed to make your business look established, trustworthy, and easy to contact.",
  },
  {
    icon: Palette,
    title: "Custom Web Design",
    description:
      "Unique layouts, modern typography, polished visuals, and branding tailored to your business.",
  },
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "Custom features and interactive experiences built around what your business actually needs.",
  },
  {
    icon: Gauge,
    title: "Speed & Performance",
    description:
      "Fast-loading, responsive websites optimized for desktop, tablet, and mobile.",
  },
  {
    icon: Search,
    title: "SEO Foundations",
    description:
      "Clean page structure and technical foundations that help search engines understand your website.",
  },
  {
    icon: Sparkles,
    title: "Interactive Experiences",
    description:
      "Smooth motion, 3D elements, premium transitions, and effects that help your website stand out.",
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
    <main className="min-h-screen overflow-hidden bg-[#040404] text-white">
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
        id="top"
        className="relative z-10 mx-auto grid min-h-[calc(100svh-76px)] max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-[1.02fr_0.98fr]"
      >
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="mb-7 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">
            <span className="h-px w-9 bg-violet-400/70" />
            Web Design & Digital Experiences
          </div>

          <h1 className="max-w-[860px] text-[clamp(3.6rem,8vw,7.6rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
            We build
            <span className="block text-white/38">websites people</span>
            <span className="block bg-gradient-to-r from-white via-violet-200 to-fuchsia-400 bg-clip-text text-transparent">
              remember.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/48 md:text-xl">
            Webryxo designs and develops fast, modern digital experiences
            that help businesses stand out, build trust, and turn visitors
            into customers.
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1.05,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative hidden h-[650px] lg:block"
        >
          <div className="absolute inset-[8%] rounded-full bg-violet-600/[0.12] blur-[120px]" />
          <div className="absolute inset-x-[10%] bottom-[10%] h-24 rounded-full bg-fuchsia-500/[0.08] blur-[55px]" />

          <div className="absolute inset-0">
            <HeroLaptop />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, -1, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-24 rounded-2xl border border-white/10 bg-black/45 p-4 shadow-2xl backdrop-blur-xl"
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
            className="absolute bottom-24 right-0 rounded-2xl border border-white/10 bg-black/45 p-4 shadow-2xl backdrop-blur-xl"
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
              Webryxo combines strategy, design, development, motion, and
              performance to create digital experiences that feel polished
              and help businesses make a stronger first impression.
            </p>

            <a
              href="/book"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.035] px-6 py-3 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              Tell us about your project
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
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
                </motion.div>
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
