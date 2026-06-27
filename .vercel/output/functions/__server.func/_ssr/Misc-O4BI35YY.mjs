import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as Canvas, r as useFrame, t as OrbitControls } from "../_libs/@react-three/drei+[...].mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { t as SectionHeader } from "./Services-D5X5vDm8.mjs";
import { t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Misc-O4BI35YY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Wordmark({ size = "text-xl" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-2xl px-3 py-1.5 border border-white/20 shadow-lg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/22new-removebg-preview.png",
			alt: "TERAiT Technologies",
			className: "h-8 md:h-9 w-auto object-contain drop-shadow-sm",
			loading: "eager"
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var OPEN_CONTACT_MODAL_EVENT = "open-contact-modal";
function triggerContactModal() {
	window.dispatchEvent(new Event(OPEN_CONTACT_MODAL_EVENT));
}
function ContactModal() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleOpen = () => {
			setOpen(true);
			setIsSuccess(false);
		};
		window.addEventListener(OPEN_CONTACT_MODAL_EVENT, handleOpen);
		return () => window.removeEventListener(OPEN_CONTACT_MODAL_EVENT, handleOpen);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "max-w-4xl max-h-[90vh] overflow-y-auto p-0 border-none bg-transparent shadow-2xl glass-strong",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-strong rounded-xl p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-2xl md:text-3xl font-display font-bold mb-2",
						children: "Let's build your next infrastructure"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-foreground/70 mb-8 max-w-xl",
						children: "We provide high-level enterprise solutions. Connect with our experts today to scale your infrastructure and secure your digital assets."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-2 gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
									icon: "📍",
									label: "Headquarters",
									value: "#24, 100 Feet Rd, HRBR Layout 1st Block, Banaswadi, Bengaluru, Karnataka 560043"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
									icon: "📞",
									label: "Phone",
									value: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:+919964546464",
											className: "hover:text-foreground font-medium",
											children: "+91 99645 46464"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground/40 mx-2",
											children: "·"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:08043364331",
											className: "hover:text-foreground font-medium",
											children: "080 4336 4331"
										})
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
									icon: "✉️",
									label: "Email",
									value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:lewissanorarishu26@gmail\n                    .com",
										className: "hover:text-foreground font-medium",
										children: "lewissanorarishu26@gmail.com"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 rounded-xl overflow-hidden h-[200px] border border-black/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
										src: "https://maps.google.com/maps?q=24,%20100%20Feet%20Rd,%20HRBR%20Layout%201st%20Block,%20Banaswadi,%20Bengaluru,%20Karnataka%20560043&t=&z=15&ie=UTF8&iwloc=&output=embed",
										width: "100%",
										height: "100%",
										style: { border: 0 },
										allowFullScreen: false,
										loading: "lazy",
										referrerPolicy: "no-referrer-when-downgrade"
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								setIsSubmitting(true);
								const f = new FormData(e.currentTarget);
								fetch("https://formsubmit.co/ajax/sales@TERAiTtech.com", {
									method: "POST",
									headers: {
										"Content-Type": "application/json",
										Accept: "application/json"
									},
									body: JSON.stringify({
										name: f.get("name"),
										email: f.get("email"),
										phone: f.get("phone"),
										message: f.get("message"),
										_subject: "New Website Enquiry - TERAiT",
										_template: "table"
									})
								}).then((response) => response.json()).then((data) => {
									setIsSubmitting(false);
									setIsSuccess(true);
									setTimeout(() => {
										setOpen(false);
									}, 3e3);
								}).catch((error) => {
									setIsSubmitting(false);
									alert("Failed to send message. Please try again or email us directly.");
								});
							},
							className: "bg-white/80 dark:bg-black/20 border border-black/5 dark:border-white/10 rounded-2xl p-6 space-y-4 relative",
							children: [
								isSuccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 flex flex-col items-center justify-center bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-2xl z-10 text-center px-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-16 w-16 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl mb-4 animate-bounce",
											children: "✓"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-bold mb-2",
											children: "Request Sent Successfully!"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-foreground/70",
											children: "Our team will get back to you shortly."
										})
									]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Full name",
									name: "name",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email address",
									name: "email",
									type: "email",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone number",
									name: "phone",
									type: "tel"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Your message",
									name: "message",
									textarea: true,
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: isSubmitting,
									className: "w-full relative group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-glow-blue border-none cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed",
									style: { background: "linear-gradient(135deg,var(--brand-blue),var(--brand-red))" },
									children: isSubmitting ? "Sending Request..." : "Submit your request →"
								})
							]
						})]
					})
				]
			})
		})
	});
}
function ContactRow({ icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white/50 dark:bg-black/10 border border-black/5 dark:border-white/5 rounded-xl p-4 flex gap-4 items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br from-[var(--brand-red)] to-[var(--brand-blue)] text-white text-xl grid place-items-center font-bold",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] uppercase tracking-widest text-foreground/50 font-bold",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-0.5 text-foreground/90 text-sm leading-tight",
			children: value
		})] })]
	});
}
function Field({ label, name, type = "text", required, textarea }) {
	const base = "w-full rounded-xl border border-white/20 bg-white/5 dark:bg-black/10 px-4 py-3 text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-white/10 focus:border-brand-blue focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-brand-blue/30 focus:shadow-glow-blue";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-[10px] font-bold uppercase tracking-widest text-foreground/60",
			children: [label, required && " *"]
		}), textarea ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			name,
			required,
			rows: 3,
			className: `${base} mt-1.5 resize-none`
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			className: `${base} mt-1.5`
		})]
	});
}
function GlobeParticles() {
	const pointsRef = (0, import_react.useRef)(null);
	const particlesCount = 2e3;
	const positions = (0, import_react.useMemo)(() => {
		const pos = new Float32Array(particlesCount * 3);
		for (let i = 0; i < particlesCount; i++) {
			const phi = Math.acos(-1 + 2 * i / particlesCount);
			const theta = Math.sqrt(particlesCount * Math.PI) * phi;
			const r = 2.5;
			pos[i * 3] = r * Math.cos(theta) * Math.sin(phi);
			pos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
			pos[i * 3 + 2] = r * Math.cos(phi);
		}
		return pos;
	}, []);
	useFrame((state) => {
		if (pointsRef.current) {
			pointsRef.current.rotation.y = state.clock.getElapsedTime() * .1;
			pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * .05) * .2;
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("points", {
		ref: pointsRef,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferGeometry", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferAttribute", {
			attach: "attributes-position",
			count: particlesCount,
			args: [positions, 3],
			itemSize: 3
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointsMaterial", {
			size: .035,
			color: "#0369a1",
			transparent: true,
			opacity: .85,
			sizeAttenuation: true
		})]
	});
}
function ThreeGlobe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full h-full min-h-[400px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
			camera: {
				position: [
					0,
					0,
					6
				],
				fov: 45
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .5 }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
					position: [
						10,
						10,
						5
					],
					intensity: 2,
					color: "#0ea5e9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
					position: [
						-10,
						-10,
						-5
					],
					intensity: 2,
					color: "#f43f5e"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobeParticles, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
					enableZoom: false,
					enablePan: false,
					autoRotate: true,
					autoRotateSpeed: 1,
					minPolarAngle: Math.PI / 3,
					maxPolarAngle: Math.PI / 1.5
				})
			]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative py-24 md:py-32 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					kicker: "About TERAiT",
					title: "Empowering businesses through technical excellence",
					subtitle: "TERAiT Technologies is a leading provider of comprehensive IT infrastructure and specialized surveillance solutions. We bridge complex technology with seamless business operations — from architecture to 24/7 managed care."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "grid sm:grid-cols-2 gap-4 mt-8",
					initial: "hidden",
					whileInView: "show",
					viewport: {
						once: true,
						margin: "-50px"
					},
					variants: {
						hidden: { opacity: 0 },
						show: {
							opacity: 1,
							transition: { staggerChildren: .15 }
						}
					},
					children: [
						{
							t: "Cloud Architecture",
							d: "Scalable, secure, and highly available environments.",
							i: "☁️"
						},
						{
							t: "DevOps & CI/CD",
							d: "Accelerated delivery pipelines and automation.",
							i: "🚀"
						},
						{
							t: "IT Support",
							d: "Expert managed services and maintenance.",
							i: "🛠️"
						}
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: {
							hidden: {
								opacity: 0,
								y: 20
							},
							show: {
								opacity: 1,
								y: 0,
								transition: {
									type: "spring",
									stiffness: 300,
									damping: 24
								}
							}
						},
						whileHover: {
							y: -4,
							scale: 1.02
						},
						className: "glass rounded-2xl p-6 text-left shadow-lg cursor-pointer hover:shadow-2xl hover:border-white/40 transition-all duration-300 group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl mb-3 group-hover:scale-110 transition-transform origin-left",
								children: f.i
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-bold drop-shadow-sm",
								children: f.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-sm text-black font-semibold",
								children: f.d
							})
						]
					}, f.t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: .4 },
					className: "mt-10 flex flex-col sm:flex-row gap-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "px-8 py-4 rounded-full bg-brand-red text-white font-bold tracking-wide hover:shadow-glow-red transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2",
						children: ["Start Your Project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "relative",
				initial: {
					opacity: 0,
					x: 50,
					filter: "blur(10px)"
				},
				whileInView: {
					opacity: 1,
					x: 0,
					filter: "blur(0px)"
				},
				viewport: {
					once: true,
					margin: "-100px"
				},
				transition: {
					duration: .8,
					ease: "easeOut"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "aspect-[4/5] rounded-3xl overflow-hidden relative shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 z-20 mix-blend-screen pointer-events-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreeGlobe, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 z-30 grid place-items-center pointer-events-none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/1newface-removebg-preview.png",
							alt: "",
							className: "h-48 w-48 opacity-90 animate-float object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute -bottom-6 -left-6 bg-white/20 dark:bg-black/40 backdrop-blur-3xl rounded-2xl p-5 max-w-[240px] border border-white/20 shadow-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-black font-bold",
							children: "Headquartered in"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 font-semibold",
							children: "Bengaluru, Karnataka"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-black font-medium mt-1",
							children: "Serving clients pan-India"
						})
					]
				})]
			})]
		})
	});
}
function Counter({ to, suffix = "" }) {
	const [n, setN] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((e) => {
			if (e[0].isIntersecting) {
				const start = performance.now();
				const dur = 1400;
				const tick = (t) => {
					const p = Math.min(1, (t - start) / dur);
					setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
					if (p < 1) requestAnimationFrame(tick);
				};
				requestAnimationFrame(tick);
				io.disconnect();
			}
		}, { threshold: .4 });
		io.observe(el);
		return () => io.disconnect();
	}, [to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "text-4xl md:text-5xl font-display font-bold text-gradient",
		children: [n, suffix]
	});
}
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "why",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					kicker: "Why TERAiT",
					title: "The partner enterprises rely on",
					subtitle: "We combine technical expertise with a relentless commitment to reliability — ensuring your IT is built for growth, scale and security."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-12",
					initial: "hidden",
					whileInView: "show",
					viewport: {
						once: true,
						margin: "-50px"
					},
					variants: {
						hidden: { opacity: 0 },
						show: {
							opacity: 1,
							transition: { staggerChildren: .1 }
						}
					},
					children: [
						{
							n: 500,
							s: "+",
							l: "Projects delivered"
						},
						{
							n: 150,
							s: "+",
							l: "Enterprise clients"
						},
						{
							n: 24,
							s: "/7",
							l: "Managed support"
						},
						{
							n: 15,
							s: "+",
							l: "Years experience"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: {
							hidden: {
								opacity: 0,
								scale: .9
							},
							show: {
								opacity: 1,
								scale: 1,
								transition: { type: "spring" }
							}
						},
						whileHover: {
							y: -4,
							scale: 1.02
						},
						className: "glass gradient-border-glow rounded-2xl p-5 md:p-6 cursor-default hover:shadow-glow-blue transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
							to: s.n,
							suffix: s.s
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-sm text-black font-semibold",
							children: s.l
						})]
					}, s.l))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5",
					children: [
						{
							i: "🎓",
							t: "Certified IT Engineers",
							d: "Highly skilled, vendor-certified professionals across all major platforms."
						},
						{
							i: "⚡",
							t: "Fast Installation",
							d: "Quick, efficient deployments designed to minimise downtime."
						},
						{
							i: "💰",
							t: "Affordable Solutions",
							d: "Enterprise-grade quality at competitive, transparent pricing."
						},
						{
							i: "🛟",
							t: "Reliable After-Support",
							d: "Expert support so your operations continue smoothly."
						},
						{
							i: "🧩",
							t: "Complete IT Provider",
							d: "One partner for infrastructure, security, cloud and beyond."
						}
					].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .5,
							delay: i * .05
						},
						whileHover: {
							y: -6,
							scale: 1.02
						},
						className: "glass rounded-2xl p-6 hover:shadow-xl hover:border-white/30 transition-all duration-300",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl drop-shadow-sm",
								children: r.i
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 font-display font-semibold text-lg",
								children: r.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-sm text-black leading-relaxed font-semibold",
								children: r.d
							})
						]
					}, r.t))
				})
			]
		})
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				kicker: "Our process",
				title: "How we deliver, every time",
				subtitle: "A proven four-step methodology built around clarity, craftsmanship and continuity."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" }), [
					{
						n: "01",
						t: "Requirement Analysis",
						d: "We understand your business needs, goals and existing infrastructure."
					},
					{
						n: "02",
						t: "Solution Design",
						d: "We plan the right architecture and select best-fit hardware and topology."
					},
					{
						n: "03",
						t: "Installation",
						d: "Our certified engineers professionally deploy systems and equipment."
					},
					{
						n: "04",
						t: "Maintenance",
						d: "Continuous monitoring and reliable after-support keep operations smooth."
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: i * .08
					},
					whileHover: {
						y: -6,
						scale: 1.02
					},
					className: "relative glass gradient-border-glow rounded-2xl p-6 hover:shadow-xl hover:border-white/30 transition-all duration-300 group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs font-mono text-black font-bold group-hover:text-brand-blue transition-colors",
								children: ["STEP ", s.n]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-8 w-8 rounded-full bg-gradient-to-br from-[var(--brand-red)] to-[var(--brand-blue)] text-white grid place-items-center text-sm font-bold drop-shadow-sm group-hover:shadow-glow-blue transition-shadow",
								children: i + 1
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display font-semibold text-lg",
							children: s.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-black leading-relaxed font-semibold",
							children: s.d
						})
					]
				}, s.n))]
			})]
		})
	});
}
function Brands() {
	const brands = [
		"Microsoft",
		"AWS",
		"Cisco",
		"HPE",
		"Dell EMC",
		"Fortinet",
		"Palo Alto",
		"Hikvision",
		"Veeam",
		"Acronis",
		"VMware",
		"Lenovo",
		"Salesforce",
		"Adobe",
		"Logitech",
		"Sophos",
		"APC",
		"IBM",
		"Juniper",
		"NetApp"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-16 border-y border-white/5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-50px"
			},
			transition: { duration: .8 },
			className: "container-x",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center text-xs uppercase tracking-[0.3em] text-black font-bold mb-8",
				children: "Powered by the world's leading technology brands"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { opacity: 0 },
			whileInView: { opacity: 1 },
			viewport: {
				once: true,
				margin: "-50px"
			},
			transition: {
				duration: 1,
				delay: .2
			},
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-max animate-marquee gap-12 px-6",
					children: [...brands, ...brands].map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-2xl md:text-3xl font-display font-bold text-black hover:text-black transition whitespace-nowrap",
						children: b
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" })
			]
		})]
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				kicker: "Loved by clients",
				title: "Real outcomes, real teams"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-3 gap-5",
				children: [
					{
						q: "TERAiT helped us set up our office network and CCTV system perfectly. Their team is professional and highly skilled.",
						n: "Rajesh Kumar",
						r: "Business Owner — Bengaluru"
					},
					{
						q: "The server setup and networking delivered by TERAiT exceeded our expectations. Reliable and efficient service throughout.",
						n: "Suresh Raina",
						r: "IT Manager — Bengaluru"
					},
					{
						q: "Great after-support and quick installation. TERAiT is our go-to partner for everything IT.",
						n: "Meera Nair",
						r: "Operations Head — Bengaluru"
					}
				].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: i * .08
					},
					whileHover: {
						y: -6,
						scale: 1.02
					},
					className: "glass gradient-border-glow rounded-3xl p-7 relative hover:shadow-xl hover:border-white/30 transition-all duration-300",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-5xl leading-none text-gradient-brand font-display drop-shadow-sm",
							children: "\""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-black leading-relaxed font-semibold",
							children: t.q
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-11 w-11 rounded-full bg-gradient-to-br from-[var(--brand-red)] to-[var(--brand-blue)] grid place-items-center font-bold text-white shadow-md",
								children: t.n[0]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-bold",
								children: t.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-black font-semibold",
								children: t.r
							})] })]
						})
					]
				}, t.n))
			})]
		})
	});
}
function FAQ() {
	const items = [
		{
			q: "What IT services does TERAiT Technologies provide?",
			a: "We specialise in IT networking, CCTV & surveillance, server setup, cloud enablement, cybersecurity, hardware supply (laptops, printers, etc.), and UPS power backup solutions — all delivered end-to-end."
		},
		{
			q: "Where is TERAiT Technologies located?",
			a: "Our headquarters is at #24, 100 Feet Rd, HRBR Layout 1st Block, Banaswadi, Bengaluru, Karnataka 560043. We serve clients across India."
		},
		{
			q: "Do you provide after-installation support?",
			a: "Yes. Every deployment includes managed support and maintenance options, with 24/7 monitoring available for enterprise clients."
		},
		{
			q: "Can you help with new office IT setups?",
			a: "Absolutely. We design, procure and deploy full office IT infrastructure — networking, surveillance, servers, endpoints, security and cloud — as a single turnkey engagement."
		},
		{
			q: "Which brands do you partner with?",
			a: "We work with Microsoft, AWS, Cisco, HPE, Dell EMC, Fortinet, Palo Alto, Hikvision, Veeam, VMware, Lenovo, Adobe and many more."
		}
	];
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				kicker: "FAQ",
				title: "Questions, answered",
				center: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(open === i ? null : i),
						className: "w-full text-left p-5 md:p-6 flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: it.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-2xl transition-transform ${open === i ? "rotate-45" : ""}`,
							children: "+"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: false,
						animate: {
							height: open === i ? "auto" : 0,
							opacity: open === i ? 1 : 0
						},
						className: "overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-5 md:px-6 pb-6 text-black font-medium leading-relaxed",
							children: it.a
						})
					})]
				}, i))
			})]
		})
	});
}
function Contact() {
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x max-w-5xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-strong rounded-2xl p-6 md:p-10 shadow-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-display font-bold mb-3",
						children: "Let's build your next infrastructure"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-black font-medium mb-10 max-w-2xl",
						children: "We provide high-level enterprise solutions. Connect with our experts today to scale your infrastructure and secure your digital assets."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-2 gap-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
									icon: "📍",
									label: "Headquarters",
									value: "#24, 100 Feet Rd, HRBR Layout 1st Block, Banaswadi, Bengaluru, Karnataka 560043"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
									icon: "📞",
									label: "Phone",
									value: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:+919964546464",
											className: "hover:text-foreground font-medium",
											children: "+91 99645 46464"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground/40 mx-2",
											children: "·"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:08043364331",
											className: "hover:text-foreground font-medium",
											children: "080 4336 4331"
										})
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
									icon: "✉️",
									label: "Email",
									value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:sales@TERAiTtech.com",
										className: "hover:text-foreground font-medium",
										children: "sales@TERAiTtech.com"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
									icon: "🕒",
									label: "Working Hours",
									value: "9:30 am to 6:30 pm"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 rounded-xl overflow-hidden h-[250px] border border-black/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
										src: "https://maps.google.com/maps?q=24,%20100%20Feet%20Rd,%20HRBR%20Layout%201st%20Block,%20Banaswadi,%20Bengaluru,%20Karnataka%20560043&t=&z=15&ie=UTF8&iwloc=&output=embed",
										width: "100%",
										height: "100%",
										style: { border: 0 },
										allowFullScreen: false,
										loading: "lazy",
										referrerPolicy: "no-referrer-when-downgrade"
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								setIsSubmitting(true);
								const f = new FormData(e.currentTarget);
								fetch("https://formsubmit.co/ajax/sales@TERAiTtech.com", {
									method: "POST",
									headers: {
										"Content-Type": "application/json",
										Accept: "application/json"
									},
									body: JSON.stringify({
										name: f.get("name"),
										email: f.get("email"),
										phone: f.get("phone"),
										message: f.get("message"),
										_subject: "New Website Enquiry - TERAiT",
										_template: "table"
									})
								}).then((response) => response.json()).then((data) => {
									setIsSubmitting(false);
									setIsSuccess(true);
									setTimeout(() => {
										setIsSuccess(false);
										e.target.reset();
									}, 4e3);
								}).catch((error) => {
									setIsSubmitting(false);
									alert("Failed to send message. Please try again or email us directly.");
								});
							},
							className: "bg-white/80 dark:bg-black/20 border border-black/5 dark:border-white/10 rounded-2xl p-6 md:p-8 space-y-5 relative",
							children: [
								isSuccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 flex flex-col items-center justify-center bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-2xl z-10 text-center px-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-16 w-16 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl mb-4 animate-bounce",
											children: "✓"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-bold mb-2",
											children: "Message Sent Successfully!"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-foreground/70",
											children: "Our team will get back to you shortly."
										})
									]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Full name",
									name: "name",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email address",
									name: "email",
									type: "email",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone number",
									name: "phone",
									type: "tel"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Your message",
									name: "message",
									textarea: true,
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: isSubmitting,
									className: "w-full relative group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 mt-2 font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-glow-blue border-none cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed",
									style: { background: "linear-gradient(135deg,var(--brand-blue),var(--brand-red))" },
									children: isSubmitting ? "Sending Request..." : "Submit your request →"
								})
							]
						})]
					})
				]
			})
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative pt-10 pb-6 glass-strong shadow-2xl border-x-0 border-b-0 rounded-none rounded-t-3xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-4 gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-3 drop-shadow-md",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { size: "text-xl" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-black max-w-md leading-relaxed font-semibold drop-shadow-sm",
							children: "Enterprise IT infrastructure, surveillance, cloud and cybersecurity — engineered for businesses that refuse to compromise."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-bold uppercase tracking-widest text-foreground mb-3 drop-shadow-sm",
						children: "Company"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-1.5 text-black font-semibold text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "hover:text-brand-red transition-colors",
								children: "About"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								className: "hover:text-brand-red transition-colors",
								children: "Services"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/products",
								className: "hover:text-brand-red transition-colors",
								children: "Products"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "hover:text-brand-red transition-colors",
								children: "Contact"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-bold uppercase tracking-widest text-foreground mb-3 drop-shadow-sm",
						children: "Reach us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-1.5 text-black font-semibold text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "+91 99645 46464" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "080 4336 4331" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "sales@TERAiTtech.com" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Bengaluru, Karnataka" })
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 pt-4 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-semibold text-black",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" TERAiT Technologies Pvt Ltd. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Designed & engineered for enterprises." })]
			})]
		})
	});
}
//#endregion
export { FAQ as a, Testimonials as c, triggerContactModal as d, ContactModal as i, WhyUs as l, Brands as n, Footer as o, Contact as r, Process as s, About as t, Wordmark as u };
