import { useEffect, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { useLocation } from "@tanstack/react-router";
import { NetworkParticles } from "./NetworkParticles";
import showcaseVideo from "@/assets/enterprise-it-showcase.mp4";
// Using the newly updated video file below:
import companyJourneyVideo from "@/assets/company_journey_v2.mp4";
import teraitOfficeReveal from "@/assets/terait_office_reveal.mp4";
import teraitContactVideo from "@/assets/terait-contact-page-branded.mp4";

/**
 * Real 3D animated IT background: rotating wireframe icosphere
 * (network) + orbiting nodes + particle dust. Light-theme friendly.
 */
export function ThreeBackground({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100,
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Wireframe globe (network sphere)
    const globeGeo = new THREE.IcosahedronGeometry(2.2, 3);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0x003d7a,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    group.add(globe);

    // Inner red wire (smaller)
    const innerGeo = new THREE.IcosahedronGeometry(1.55, 2);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xc8102e,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    group.add(inner);

    // Glowing nodes on outer sphere
    const nodeCount = 80;
    const nodeGeo = new THREE.SphereGeometry(0.03, 12, 12);
    const nodeRed = new THREE.MeshBasicMaterial({ color: 0xc8102e });
    const nodeBlue = new THREE.MeshBasicMaterial({ color: 0x003d7a });
    const nodes: THREE.Mesh[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const r = 2.25;
      const m = new THREE.Mesh(nodeGeo, i % 2 ? nodeRed : nodeBlue);
      m.position.set(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi),
      );
      group.add(m);
      nodes.push(m);
    }

    // Particle dust
    const dustCount = 500;
    const positions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      const r = 6 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0x003d7a,
      size: 0.04,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true,
    });
    const dust = new THREE.Points(dustGeo, dustMat);
    scene.add(dust);

    // Orbit ring
    const ringGeo = new THREE.TorusGeometry(3.2, 0.005, 8, 200);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xc8102e,
      transparent: true,
      opacity: 0.35,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.3;
    scene.add(ring);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(3.6, 0.004, 8, 200),
      new THREE.MeshBasicMaterial({ color: 0x003d7a, transparent: true, opacity: 0.3 }),
    );
    ring2.rotation.x = Math.PI / 1.8;
    scene.add(ring2);

    // Mouse parallax
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: MouseEvent) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 0.6;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 0.6;
    };
    window.addEventListener("mousemove", onMove);

    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;

      group.rotation.y = t * 0.12 + mouse.x;
      group.rotation.x = Math.sin(t * 0.2) * 0.1 + mouse.y;
      inner.rotation.y = -t * 0.18;
      inner.rotation.x = t * 0.1;
      dust.rotation.y = t * 0.02;
      ring.rotation.z = t * 0.1;
      ring2.rotation.z = -t * 0.08;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      globeGeo.dispose();
      innerGeo.dispose();
      nodeGeo.dispose();
      dustGeo.dispose();
      ringGeo.dispose();
      if (mount && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden
    />
  );
}

/** Light-theme aurora wash */
export function AuroraBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--brand-red), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--brand-blue), transparent 70%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,40,.9) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,40,.9) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
    </div>
  );
}

export function VideoBackground() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  const isHome = path === "/" || path === "";
  const isProducts = path.includes("/product");
  const isServices = path.includes("/service");
  const isAbout = path.includes("/about");
  const isWhy = path.includes("/why");
  const isContact = path.includes("/contact");

  const v1 = useRef<HTMLVideoElement>(null);
  const v2 = useRef<HTMLVideoElement>(null);
  const v3 = useRef<HTMLVideoElement>(null);
  const v4 = useRef<HTMLVideoElement>(null);
  const v5 = useRef<HTMLVideoElement>(null);
  const v6 = useRef<HTMLVideoElement>(null);

  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    // Clear any pending pauses
    timeoutRefs.current.forEach(clearTimeout);
    timeoutRefs.current = [];

    const videos = [
      { v: v1, active: isHome },
      { v: v2, active: isProducts },
      { v: v3, active: isServices },
      { v: v4, active: isAbout },
      { v: v5, active: isWhy },
      { v: v6, active: isContact },
    ];

    videos.forEach(({ v, active }) => {
      if (v.current) {
        if (active) {
          v.current.play().catch(() => {});
        } else {
          // Pause inactive videos after the fade transition, but track the timeout
          const t = setTimeout(() => {
            if (v.current) v.current.pause();
          }, 500);
          timeoutRefs.current.push(t);
        }
      }
    });
  }, [isHome, isProducts, isServices, isAbout, isWhy, isContact]);

  return (
    <div aria-hidden className={`pointer-events-none fixed inset-0 overflow-hidden z-0 ${(isAbout || isWhy || isContact) ? 'bg-black' : 'bg-background'}`}>
      <video
        ref={v1}
        src="/background-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 h-[100svh] w-full object-cover z-10 transition-opacity duration-500 ${!isProducts && !isServices && !isAbout && !isWhy && !isContact ? "opacity-100" : "opacity-0"}`}
      />
      <video
        ref={v2}
        src="/terait-loop-1080p-fast.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 h-[100svh] w-full object-cover z-10 transition-opacity duration-500 ${isProducts ? "opacity-100" : "opacity-0"}`}
      />
      <video
        ref={v3}
        src={showcaseVideo}
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 h-[100svh] w-full object-cover z-10 transition-opacity duration-500 ${isServices ? "opacity-100" : "opacity-0"}`}
      />
      <video
        ref={v4}
        src={companyJourneyVideo}
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 h-[100svh] w-full object-cover z-20 transition-opacity duration-500 ${isAbout ? "opacity-100" : "opacity-0"}`}
      />
      <video
        ref={v5}
        src={teraitOfficeReveal}
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 h-[100svh] w-full object-cover z-20 transition-opacity duration-500 ${isWhy ? "opacity-100" : "opacity-0"}`}
      />
      <video
        ref={v6}
        src={teraitContactVideo}
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 h-[100svh] w-full object-contain z-20 transition-opacity duration-500 ${isContact ? "opacity-100" : "opacity-0"}`}
      />
      <div className={`absolute inset-0 z-20 bg-black/20 transition-opacity duration-500 ${(isHome || isAbout || isWhy || isContact) ? "opacity-0" : "opacity-100"}`} />
    </div>
  );
}


