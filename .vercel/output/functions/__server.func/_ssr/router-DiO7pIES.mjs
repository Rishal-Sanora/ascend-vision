import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { N as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useLocation, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { d as triggerContactModal, i as ContactModal, o as Footer, u as Wordmark } from "./Misc-O4BI35YY.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DiO7pIES.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DaEhn9Q_.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var links = [
	{
		to: "/",
		label: "Home",
		exact: true
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/products",
		label: "Products"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/why",
		label: "Why Us"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 20);
			const h = document.documentElement.scrollHeight - window.innerHeight;
			setProgress(h > 0 ? window.scrollY / h * 100 : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between w-full py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex items-center",
						"aria-label": "TERAiT home",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: `hidden md:flex items-center gap-1 transition-all duration-500 ${scrolled ? "glass-strong rounded-full px-4 py-1.5 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] border border-white/20" : ""}`,
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: l.to,
							activeProps: { className: "active" },
							activeOptions: l.exact ? { exact: true } : void 0,
							className: "relative px-4 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors group [&.active]:text-foreground",
							children: [l.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-4 -bottom-0.5 h-px scale-x-0 origin-left bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-blue)] transition-transform duration-300 group-hover:scale-x-100 group-[.active]:scale-x-100" })]
						}, l.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden md:flex items-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: triggerContactModal,
							className: "relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white overflow-hidden group cursor-pointer border-none transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-glow-red",
							style: { background: "linear-gradient(135deg,var(--brand-red),var(--brand-blue))" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative z-10",
									children: "Request Quote"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative z-10",
									children: "→"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity",
									style: { background: "linear-gradient(135deg,var(--brand-blue),var(--brand-red))" }
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen(!open),
						className: `md:hidden flex flex-col gap-1.5 p-3 rounded-full transition-all duration-500 ${scrolled ? "glass-strong border border-white/20" : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-0.5 w-6 bg-foreground transition-all ${open ? "translate-y-2 rotate-45" : ""}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-0.5 w-6 bg-foreground transition-all ${open ? "opacity-0" : ""}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-0.5 w-6 bg-foreground transition-all ${open ? "-translate-y-2 -rotate-45" : ""}` })
						]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x mt-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-px w-full bg-white/5 overflow-hidden rounded-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full",
					style: {
						width: `${progress}%`,
						background: "linear-gradient(90deg,var(--brand-red),var(--brand-blue))"
					}
				})
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: -10
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			y: -10
		},
		className: "fixed inset-x-0 top-[80px] z-40 md:hidden px-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass-strong rounded-3xl p-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					activeProps: { className: "active" },
					activeOptions: l.exact ? { exact: true } : void 0,
					onClick: () => setOpen(false),
					className: "group flex items-center justify-between border-b border-white/5 py-4 text-xl font-medium text-foreground/80 transition-colors hover:text-foreground [&.active]:text-foreground",
					children: l.label
				}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setOpen(false);
						triggerContactModal();
					},
					className: "mt-4 inline-flex justify-center items-center rounded-full px-5 py-3 font-medium text-white cursor-pointer border-none",
					style: { background: "linear-gradient(135deg,var(--brand-red),var(--brand-blue))" },
					children: "Request Quote →"
				})]
			})
		})
	}) })] });
}
function NetworkParticles() {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let particles = [];
		const particleCount = 80;
		const maxDistance = 150;
		const mouse = {
			x: -1e3,
			y: -1e3
		};
		class Particle {
			x;
			y;
			vx;
			vy;
			radius;
			constructor(width, height) {
				this.x = Math.random() * width;
				this.y = Math.random() * height;
				this.vx = (Math.random() - .5) * 1.2;
				this.vy = (Math.random() - .5) * 1.2;
				this.radius = Math.random() * 2 + 1;
			}
			update(width, height) {
				this.x += this.vx;
				this.y += this.vy;
				if (this.x < 0 || this.x > width) this.vx = -this.vx;
				if (this.y < 0 || this.y > height) this.vy = -this.vy;
			}
			draw(ctx) {
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
				ctx.fillStyle = "rgba(14, 165, 233, 0.8)";
				ctx.fill();
			}
		}
		const init = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			particles = [];
			for (let i = 0; i < particleCount; i++) particles.push(new Particle(canvas.width, canvas.height));
		};
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			for (let i = 0; i < particles.length; i++) {
				particles[i].update(canvas.width, canvas.height);
				particles[i].draw(ctx);
				const dxMouse = mouse.x - particles[i].x;
				const dyMouse = mouse.y - particles[i].y;
				const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
				if (distMouse < 200) {
					ctx.beginPath();
					ctx.strokeStyle = `rgba(244, 63, 94, ${1 - distMouse / 200})`;
					ctx.lineWidth = 1.5;
					ctx.moveTo(particles[i].x, particles[i].y);
					ctx.lineTo(mouse.x, mouse.y);
					ctx.stroke();
				}
				for (let j = i; j < particles.length; j++) {
					const dx = particles[i].x - particles[j].x;
					const dy = particles[i].y - particles[j].y;
					const distance = Math.sqrt(dx * dx + dy * dy);
					if (distance < maxDistance) {
						ctx.beginPath();
						ctx.strokeStyle = `rgba(14, 165, 233, ${.3 * (1 - distance / maxDistance)})`;
						ctx.lineWidth = 1;
						ctx.moveTo(particles[i].x, particles[i].y);
						ctx.lineTo(particles[j].x, particles[j].y);
						ctx.stroke();
					}
				}
			}
			requestAnimationFrame(animate);
		};
		const handleMouseMove = (e) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		};
		const handleMouseLeave = () => {
			mouse.x = -1e3;
			mouse.y = -1e3;
		};
		const handleResize = () => {
			init();
		};
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseleave", handleMouseLeave);
		window.addEventListener("resize", handleResize);
		init();
		animate();
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseleave", handleMouseLeave);
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		className: "absolute inset-0 pointer-events-none z-30 opacity-70"
	});
}
function VideoBackground() {
	const path = useLocation().pathname.toLowerCase();
	const isAltVideo = path.includes("/services") || path.includes("/products");
	const isAboutPage = path.includes("about");
	let videoSrc = "/background-video.mp4";
	if (isAltVideo) videoSrc = "/terait-loop-1080p-fast.mp4";
	if (isAboutPage) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 overflow-hidden z-0 bg-black",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
			autoPlay: true,
			loop: true,
			muted: true,
			playsInline: true,
			className: "absolute inset-0 h-full w-full object-cover z-10 opacity-100",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
				src: "/terait-bg-1080p-16x9.mp4",
				type: "video/mp4"
			})
		}, "/terait-bg-1080p-16x9.mp4")
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 overflow-hidden z-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				autoPlay: true,
				loop: true,
				muted: true,
				playsInline: true,
				className: "absolute inset-0 h-full w-full object-cover z-10 opacity-100",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src: videoSrc,
					type: "video/mp4"
				})
			}, videoSrc),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-20 bg-white/5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkParticles, {})
		]
	});
}
function SplashScreen({ onComplete }) {
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => {
			onComplete();
		}, 3200);
		return () => clearTimeout(timer);
	}, [onComplete]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 1 },
		exit: {
			opacity: 0,
			pointerEvents: "none",
			transition: {
				duration: 1.8,
				ease: "easeInOut"
			}
		},
		className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-50 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						animate: {
							scale: [
								1,
								1.2,
								1
							],
							rotate: [
								0,
								90,
								0
							],
							x: [
								"-20%",
								"10%",
								"-20%"
							],
							y: [
								"-10%",
								"20%",
								"-10%"
							]
						},
						transition: {
							duration: 10,
							ease: "easeInOut",
							repeat: Infinity
						},
						className: "absolute top-1/4 left-1/4 h-[700px] w-[700px] rounded-full",
						style: { background: "radial-gradient(circle, rgba(253,224,71,0.5) 0%, transparent 70%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						animate: {
							scale: [
								1,
								1.3,
								1
							],
							rotate: [
								0,
								-90,
								0
							],
							x: [
								"20%",
								"-10%",
								"20%"
							],
							y: [
								"20%",
								"-10%",
								"20%"
							]
						},
						transition: {
							duration: 12,
							ease: "easeInOut",
							repeat: Infinity
						},
						className: "absolute top-1/3 right-1/4 h-[800px] w-[800px] rounded-full",
						style: { background: "radial-gradient(circle, rgba(244,114,182,0.5) 0%, transparent 70%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						animate: {
							scale: [
								1.2,
								1,
								1.2
							],
							x: [
								"0%",
								"0%",
								"0%"
							],
							y: [
								"10%",
								"-10%",
								"10%"
							]
						},
						transition: {
							duration: 8,
							ease: "easeInOut",
							repeat: Infinity
						},
						className: "absolute bottom-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full",
						style: { background: "radial-gradient(circle, rgba(56,189,248,0.5) 0%, transparent 70%)" }
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-[0.03] pointer-events-none",
				style: {
					backgroundImage: "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
					backgroundSize: "40px 40px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					scale: 1.1,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				transition: {
					duration: 1.8,
					ease: "easeOut"
				},
				className: "relative z-10 flex flex-col items-center justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: -30,
							filter: "blur(12px)"
						},
						animate: {
							opacity: 1,
							y: 0,
							filter: "blur(0px)"
						},
						transition: {
							duration: 1.5,
							delay: .2,
							ease: "easeOut"
						},
						className: "scale-125 md:scale-150 mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)] text-slate-900",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { size: "text-4xl" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20,
							filter: "blur(8px)"
						},
						animate: {
							opacity: 1,
							y: 0,
							filter: "blur(0px)"
						},
						transition: {
							duration: 1.2,
							delay: .8,
							ease: "easeOut"
						},
						className: "text-slate-600 uppercase text-xs md:text-sm font-bold mt-4 tracking-[0.3em] drop-shadow-sm mix-blend-multiply",
						children: "Elevating Your Infrastructure"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-[220px] h-[4px] mt-12 rounded-full overflow-hidden relative shadow-[0_0_20px_rgba(236,72,153,0.4)]",
						style: { background: "rgba(0,0,0,0.05)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								scaleX: 0,
								opacity: 0
							},
							animate: {
								scaleX: 1,
								opacity: 1
							},
							transition: {
								duration: 1.5,
								delay: 1,
								ease: "easeOut"
							},
							className: "absolute inset-0 w-full h-full origin-left",
							style: { background: "linear-gradient(90deg, #38bdf8, #f472b6, #fde047)" }
						})
					})
				]
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{
				name: "theme-color",
				content: "#f7f8fb"
			},
			{ title: "TERAiT Technologies" },
			{
				name: "description",
				content: "Enterprise IT infrastructure, networking, surveillance, cloud and cybersecurity from TERAiT Technologies, Bengaluru."
			},
			{
				name: "author",
				content: "TERAiT Technologies"
			},
			{
				property: "og:site_name",
				content: "TERAiT Technologies"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "icon",
				href: "/1newface-removebg-preview.png",
				type: "image/png"
			},
			{
				rel: "apple-touch-icon",
				href: "/1newface-removebg-preview.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Montserrat:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	const location = useLocation();
	const router = useRouter();
	const [showSplash, setShowSplash] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (window.location.pathname !== "/") router.navigate({
			to: "/",
			replace: true
		});
		if ("scrollRestoration" in history) history.scrollRestoration = "manual";
		window.scrollTo(0, 0);
	}, [router]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			mode: "wait",
			children: showSplash && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplashScreen, { onComplete: () => setShowSplash(false) })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoBackground, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex min-h-screen flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 flex flex-col relative w-full h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "wait",
								initial: false,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										opacity: 0,
										filter: "blur(10px)"
									},
									animate: {
										opacity: 1,
										filter: "blur(0px)"
									},
									exit: {
										opacity: 0,
										filter: "blur(10px)"
									},
									transition: {
										duration: .8,
										ease: [
											.22,
											1,
											.36,
											1
										]
									},
									className: "w-full flex-1 flex flex-col",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
								}, location.pathname)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactModal, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "https://wa.me/919964546464",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "fixed bottom-6 right-6 z-40 flex items-center gap-3 p-1.5 pr-5 rounded-full bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 shadow-2xl hover:-translate-y-1 hover:border-green-500/50 transition-all duration-300 group",
					"aria-label": "Chat on WhatsApp",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-center h-10 w-10 rounded-full border border-green-500/50 bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all duration-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							width: "20",
							height: "20",
							viewBox: "0 0 24 24",
							fill: "currentColor",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-bold text-foreground/50 leading-tight uppercase tracking-widest mb-0.5",
							children: "IT Support"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-bold text-foreground/90 leading-tight",
							children: "Chat with us"
						})]
					})]
				})
			]
		})]
	});
}
var $$splitComponentImporter$8 = () => import("./why-CJ8n-Tpt.mjs");
var Route$8 = createFileRoute("/why")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./testimonials-CzLgjyaN.mjs");
var Route$7 = createFileRoute("/testimonials")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./services-BU3O5aOZ.mjs");
var Route$6 = createFileRoute("/services")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./products-CQ0Iw0KS.mjs");
var Route$5 = createFileRoute("/products")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./process-Bn9GPl-L.mjs");
var Route$4 = createFileRoute("/process")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./faq-CRioeu6m.mjs");
var Route$3 = createFileRoute("/faq")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./contact-BO299AAF.mjs");
var Route$2 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./about-kQqa5swj.mjs");
var Route$1 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./routes-Cxi8fy9a.mjs");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "TERAiT Technologies — Secure. Smart. Scalable. Enterprise IT in Bengaluru" },
			{
				name: "description",
				content: "Enterprise networking, surveillance, cloud, cybersecurity and managed IT services. Certified engineers delivering end-to-end infrastructure across India."
			},
			{
				property: "og:title",
				content: "TERAiT Technologies — Enterprise IT, Cloud & Security"
			},
			{
				property: "og:description",
				content: "Secure. Smart. Scalable. Enterprise IT infrastructure delivered by industry veterans."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var WhyRoute = Route$8.update({
	id: "/why",
	path: "/why",
	getParentRoute: () => Route$9
});
var TestimonialsRoute = Route$7.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => Route$9
});
var ServicesRoute = Route$6.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$9
});
var ProductsRoute = Route$5.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$9
});
var ProcessRoute = Route$4.update({
	id: "/process",
	path: "/process",
	getParentRoute: () => Route$9
});
var FaqRoute = Route$3.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$9
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$9
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$9
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AboutRoute,
	ContactRoute,
	FaqRoute,
	ProcessRoute,
	ProductsRoute,
	ServicesRoute,
	TestimonialsRoute,
	WhyRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
