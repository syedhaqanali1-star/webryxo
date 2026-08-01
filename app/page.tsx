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
  const { pointer } = useThree();

  useFrame((state) => {
    if (!group.current) return;

    const targetRotationY = -0.42 + pointer.x * 0.2;
    const targetRotationX = -0.08 - pointer.y * 0.1;

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetRotationY,
      0.05
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetRotationX,
      0.05
    );

    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 1.25) * 0.08;
  });

  const keyboardRows = [
    { count: 10, y: 0.27, startX: -0.92 },
    { count: 9, y: 0.05, startX: -0.82 },
    { count: 8, y: -0.17, startX: -0.72 },
  ];

  return (
    <group ref={group}>
      <mesh position={[0, -0.65, 0.15]}>
        <boxGeometry args={[3, 0.16, 1.85]} />
        <meshStandardMaterial
          color="#18181b"
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      <mesh position={[0, -0.555, 0]}>
        <boxGeometry args={[2.7, 0.025, 1.5]} />
        <meshStandardMaterial
          color="#0b0b0d"
          metalness={0.25}
          roughness={0.65}
        />
      </mesh>

      {keyboardRows.map((row, rowIndex) =>
        Array.from({ length: row.count }).map((_, index) => (
          <mesh
            key={`${rowIndex}-${index}`}
            position={[
              row.startX + index * 0.205,
              -0.525,
              row.y,
            ]}
          >
            <boxGeometry args={[0.15, 0.025, 0.12]} />
            <meshStandardMaterial
              color="#27272a"
              roughness={0.55}
              metalness={0.25}
            />
          </mesh>
        ))
      )}

      <mesh position={[0, -0.51, 0.62]}>
        <boxGeometry args={[1.05, 0.02, 0.5]} />
        <meshStandardMaterial
          color="#222225"
          roughness={0.35}
          metalness={0.5}
        />
      </mesh>

      <group position={[0, 0.26, -0.79]}>
        <mesh>
          <boxGeometry args={[2.82, 1.78, 0.11]} />
          <meshStandardMaterial
            color="#151518"
            metalness={0.7}
            roughness={0.22}
          />
        </mesh>

        <mesh position={[0, 0, 0.062]}>
          <planeGeometry args={[2.58, 1.53]} />
          <meshStandardMaterial
            color="#07070a"
            emissive="#12082c"
            emissiveIntensity={0.65}
          />
        </mesh>

        <group position={[0, 0, 0.075]}>
          <mesh position={[-0.9, 0.58, 0]}>
            <planeGeometry args={[0.18, 0.09]} />
            <meshBasicMaterial color="#a78bfa" />
          </mesh>

          <mesh position={[-0.63, 0.58, 0]}>
            <planeGeometry args={[0.26, 0.045]} />
            <meshBasicMaterial color="#fafafa" />
          </mesh>

          <mesh position={[0.48, 0.58, 0]}>
            <planeGeometry args={[0.22, 0.028]} />
            <meshBasicMaterial color="#52525b" />
          </mesh>

          <mesh position={[0.79, 0.58, 0]}>
            <planeGeometry args={[0.22, 0.028]} />
            <meshBasicMaterial color="#52525b" />
          </mesh>

          <mesh position={[1.06, 0.58, 0]}>
            <planeGeometry args={[0.27, 0.11]} />
            <meshBasicMaterial color="#fafafa" />
          </mesh>

          <mesh position={[-0.67, 0.29, 0]}>
            <planeGeometry args={[0.56, 0.08]} />
            <meshBasicMaterial color="#24163f" />
          </mesh>

          <mesh position={[-0.38, 0.04, 0]}>
            <planeGeometry args={[1.18, 0.12]} />
            <meshBasicMaterial color="#f4f4f5" />
          </mesh>

          <mesh position={[-0.52, -0.14, 0]}>
            <planeGeometry args={[0.9, 0.12]} />
            <meshBasicMaterial color="#a78bfa" />
          </mesh>

          <mesh position={[-0.52, -0.34, 0]}>
            <planeGeometry args={[0.9, 0.045]} />
            <meshBasicMaterial color="#52525b" />
          </mesh>

          <mesh position={[-0.66, -0.44, 0]}>
            <planeGeometry args={[0.62, 0.045]} />
            <meshBasicMaterial color="#3f3f46" />
          </mesh>

          <mesh position={[-0.72, -0.62, 0]}>
            <planeGeometry args={[0.5, 0.12]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>

          <mesh position={[0.72, -0.08, 0]}>
            <circleGeometry args={[0.42, 32]} />
            <meshBasicMaterial color="#6d28d9" />
          </mesh>

          <mesh position={[0.72, -0.08, 0.005]}>
            <circleGeometry args={[0.25, 32]} />
            <meshBasicMaterial color="#a855f7" />
          </mesh>
        </group>
      </group>
    </group>
  );
}

function HeroLaptop() {
  return (
    <Canvas
      camera={{
        position: [0, 0.4, 5.4],
        fov: 40,
      }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={1.6} />

      <directionalLight
        position={[4, 5, 5]}
        intensity={2.2}
      />

      <pointLight
        position={[-3, 2, 3]}
        intensity={16}
        color="#7c3aed"
      />

      <pointLight
        position={[3, -1, 2]}
        intensity={10}
        color="#c026d3"
      />

      <Float
        speed={1.5}
        rotationIntensity={0.08}
        floatIntensity={0.3}
      >
        <LaptopModel />
      </Float>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
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
    price: "$799+",
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
            <a href="#services" className="hover:text-white">
              Services
            </a>

            <a href="#showcase" className="hover:text-white">
              Showcase
            </a>

            <a href="#work" className="hover:text-white">
              Our Work
            </a>

            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>

            <a href="#process" className="hover:text-white">
              Process
            </a>

            <a href="#faq" className="hover:text-white">
              FAQ
            </a>

            <a href="#about" className="hover:text-white">
              Why Webryxo
            </a>

            <a href="/book" className="hover:text-white">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/book"
              className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black sm:inline-flex"
            >
              Start a Project
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
          <div className="border-t border-white/10 bg-black/90 px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-white/65">
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>

              <a
                href="#showcase"
                onClick={() => setMenuOpen(false)}
              >
                Showcase
              </a>

              <a
                href="#work"
                onClick={() => setMenuOpen(false)}
              >
                Our Work
              </a>

              <a
                href="#pricing"
                onClick={() => setMenuOpen(false)}
              >
                Pricing
              </a>

              <a href="#process" onClick={() => setMenuOpen(false)}>
                Process
              </a>

              <a href="#faq" onClick={() => setMenuOpen(false)}>
                FAQ
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                Why Webryxo
              </a>

              <a
                href="/book"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative z-10 mx-auto grid min-h-[90vh] max-w-7xl items-center gap-8 px-6 py-16 lg:grid-cols-[1.06fr_0.94fr]"
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/65">
            <Sparkles size={15} className="text-violet-300" />
            Premium websites built to stand out
          </div>

          <h1 className="text-5xl font-semibold leading-[1.01] tracking-[-0.045em] sm:text-6xl md:text-7xl xl:text-[88px]">
            Websites engineered

            <span className="block bg-gradient-to-r from-white via-white/60 to-violet-400 bg-clip-text text-transparent">
              to be remembered.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/50 md:text-xl">
            Webryxo designs and develops modern websites
            for businesses that want to look professional,
            build trust, and turn visitors into customers.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/book"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-black transition hover:scale-[1.03]"
            >
              Get a Free Website Preview

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="#showcase"
              className="rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5"
            >
              Explore Designs
            </a>
          </div>
        </motion.div>

        {/* 3D Laptop */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            x: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.1,
          }}
          className="relative hidden h-[620px] lg:block"
        >
          <div className="absolute inset-0 rounded-full bg-violet-600/[0.1] blur-[120px]" />

          <div className="absolute inset-0">
            <HeroLaptop />
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-24 rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <Code2 className="text-violet-300" size={20} />

              <div>
                <p className="text-sm font-medium">
                  Custom Development
                </p>

                <p className="text-xs text-white/35">
                  Built around your business
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-24 right-0 rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <Layers3
                className="text-fuchsia-300"
                size={20}
              />

              <div>
                <p className="text-sm font-medium">
                  Premium Design
                </p>

                <p className="text-xs text-white/35">
                  Modern. Clean. Memorable.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* NEW LAPTOP IMAGE SHOWCASE */}
      <section
        id="showcase"
        className="relative z-10 mx-auto max-w-7xl px-6 py-32"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
            <Sparkles
              size={15}
              className="text-violet-300"
            />

            Digital showcase
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Websites designed to
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
              look incredible.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/45">
            Modern design presented across premium digital
            experiences and devices.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.08] blur-[150px]" />

          <div className="relative grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {laptopImages.map((item, index) => (
              <motion.a
                key={item.image}
                href={item.href}
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.025,
                  rotateX: 2,
                  rotateY:
                    index % 2 === 0 ? -2 : 2,
                }}
                className="group relative block cursor-pointer overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] p-3 backdrop-blur-xl"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1200px",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.08] via-transparent to-fuchsia-500/[0.05] opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative overflow-hidden rounded-[22px] bg-black">
                  <motion.img
                    src={item.image}
                    alt={`Webryxo laptop website showcase ${index + 1}`}
                    className="h-[260px] w-full object-cover sm:h-[300px]"
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="relative flex items-center justify-between px-3 pb-3 pt-5">
                  <div>
                    <p className="text-sm font-medium">
                      Digital Experience
                    </p>

                    <p className="mt-1 text-xs text-white/35">
                      Web design inspiration
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition group-hover:bg-white group-hover:text-black">
                    <ExternalLink
                      size={15}
                      className="text-white/60 transition group-hover:text-black"
                    />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28"
      >
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
            <Sparkles
              size={15}
              className="text-violet-300"
            />
            What we do
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl md:text-6xl">
            Everything your business needs

            <span className="block text-white/35">
              to look better online.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/45">
            We combine design, development, performance,
            and user experience to create websites that
            feel modern and professional.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] p-7"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                  <Icon
                    size={22}
                    className="text-violet-300"
                  />
                </div>

                <h3 className="text-xl font-medium">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-white/40">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Portfolio */}
      <section
        id="work"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28"
      >
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
            <Layers3
              size={15}
              className="text-violet-300"
            />
            Webryxo demos
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl md:text-6xl">
            See what we
            <span className="block text-white/35">
              can build.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] p-7"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-50`}
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/25">
                      {project.number}
                    </span>

                    <Icon
                      size={21}
                      className="text-white/60"
                    />
                  </div>

                  <p className="mt-12 text-sm text-violet-300">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-medium">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-white/40">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.href}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black"
                  >
                    View Demo
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="relative z-10 mx-auto max-w-7xl px-6 py-32"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
            <Sparkles size={15} className="text-violet-300" />
            Simple pricing
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Pick the right website
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
              for your business.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/45">
            Every project starts with a free website preview. You only move
            forward when you are happy with the direction.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className={`relative overflow-hidden rounded-[30px] border p-7 ${
                plan.popular
                  ? "border-violet-400/40 bg-violet-500/[0.08]"
                  : "border-white/10 bg-white/[0.025]"
              }`}
            >
              {plan.popular && (
                <div className="absolute right-5 top-5 rounded-full border border-violet-300/30 bg-violet-400/15 px-3 py-1 text-xs font-medium text-violet-200">
                  Most Popular
                </div>
              )}

              <p className="text-sm font-medium text-violet-300">{plan.name}</p>

              <div className="mt-5 flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-[-0.04em]">
                  {plan.price}
                </span>
                <span className="pb-1 text-sm text-white/35">one-time</span>
              </div>

              <p className="mt-5 min-h-[84px] leading-7 text-white/45">
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
                className={`mt-8 flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-medium transition hover:scale-[1.02] ${
                  plan.popular
                    ? "bg-white text-black"
                    : "border border-white/10 bg-white/[0.04] text-white"
                }`}
              >
                Get a Free Website Preview
                <ArrowRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 rounded-[28px] border border-white/10 bg-white/[0.025] p-6 text-sm text-white/50 md:grid-cols-3">
          <div>
            <p className="font-medium text-white">Hosting & maintenance</p>
            <p className="mt-2">$15/month or $150/year</p>
          </div>
          <div>
            <p className="font-medium text-white">Domain</p>
            <p className="mt-2">Paid separately by the client.</p>
          </div>
          <div>
            <p className="font-medium text-white">Free preview</p>
            <p className="mt-2">$0 upfront and no commitment.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative z-10 mx-auto max-w-7xl px-6 py-32"
      >
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm text-violet-300">
              Why Webryxo
            </p>

            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Your website should work for your business.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/45">
              A strong website builds trust, explains what
              you offer, and makes it easy for customers to
              take the next step.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-[26px] border border-white/10 bg-white/[0.025] p-6"
                >
                  <Icon
                    size={21}
                    className="text-violet-300"
                  />

                  <h3 className="mt-6 text-lg font-medium">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/40">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
            <Rocket size={15} className="text-violet-300" /> How it works
          </div>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl">
            From idea to launch
            <span className="block text-white/35">without the guesswork.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/45">
            A simple process designed to let you see the direction before committing to a full website project.
          </p>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="rounded-[28px] border border-white/10 bg-white/[0.025] p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-sm font-semibold text-violet-300">{step.number}</div>
              <h3 className="mt-7 text-xl font-medium">{step.title}</h3>
              <p className="mt-4 leading-7 text-white/40">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 mx-auto max-w-4xl px-6 py-32">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
            <MessageSquare size={15} className="text-violet-300" /> Frequently asked questions
          </div>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Questions before we start?</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/45">Here are the details businesses usually want to know before starting a project with Webryxo.</p>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-[24px] border border-white/10 bg-white/[0.025] p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-medium">
                <span>{faq.question}</span>
                <ChevronDown size={18} className="shrink-0 text-violet-300 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-4 max-w-3xl leading-7 text-white/45">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-20">
        <div className="relative overflow-hidden rounded-[36px] border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.12] via-white/[0.03] to-fuchsia-500/[0.08] px-7 py-14 text-center sm:px-12 sm:py-16">
          <div className="relative">
            <Sparkles className="mx-auto text-violet-300" size={25} />
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">See your new website before you pay.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/50">Tell us about your business and request a free website preview. If you like the direction, we can take it from there.</p>
            <a href="/book" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-black transition hover:scale-[1.03]">
              Request My Free Preview <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 mx-auto max-w-7xl px-6 py-32"
      >
        <div className="grid gap-14 rounded-[36px] border border-white/10 bg-white/[0.025] p-7 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:p-14">
          <div>
            <div className="inline-flex items-center gap-2 text-sm text-violet-300">
              <Send size={15} />
              Start a project
            </div>

            <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
              Want a better website?
              <span className="block text-violet-300">
                Let's build it.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/45">
              Tell us about your business and what you're
              looking for.
            </p>

            <div className="mt-10 space-y-5 text-white/50">
              <p className="flex items-center gap-3">
                <Clock3 size={18} />
                Quick response
              </p>

              <p className="flex items-center gap-3">
                <MapPin size={18} />
                Massachusetts
              </p>

              <p className="flex items-center gap-3">
                <Mail size={18} />
                Webryxo@gmail.com
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-black/25 p-6">
            {submitted ? (
              <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
                <CheckCircle2
                  size={40}
                  className="text-violet-300"
                />

                <h3 className="mt-5 text-2xl">
                  Message sent!
                </h3>

                <p className="mt-3 text-white/40">
                  We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none"
                  />

                  <input
                    name="business"
                    required
                    placeholder="Business name"
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none"
                  />
                </div>

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none"
                />

                <input
                  name="phone"
                  placeholder="Phone number"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none"
                />

                <select
                  name="project"
                  required
                  defaultValue=""
                  className="w-full rounded-2xl border border-white/10 bg-[#111] px-4 py-3.5"
                >
                  <option value="" disabled>
                    What do you need?
                  </option>

                  <option value="website">
                    New Website
                  </option>

                  <option value="redesign">
                    Website Redesign
                  </option>

                  <option value="custom">
                    Custom Project
                  </option>
                </select>

                <input
                  name="website"
                  placeholder="Current website (optional)"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none"
                />

                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none"
                />

                <button
                  type="submit"
                  disabled={sending}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 font-medium text-black disabled:opacity-60"
                >
                  {sending
                    ? "Sending..."
                    : "Request My Free Website Preview"}

                  {!sending && <ArrowRight size={17} />}
                </button>

                {formError && (
                  <p className="text-center text-sm text-red-400">
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
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-10 text-sm text-white/30 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Webryxo.
            All rights reserved.
          </p>

          <p>Designed & developed by Webryxo.</p>
        </div>
      </footer>
    </main>
  );
}
