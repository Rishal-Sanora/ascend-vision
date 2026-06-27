import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { t as a } from "../_libs/react-parallax-tilt.mjs";
import { n as Services } from "./Services-D5X5vDm8.mjs";
import { a as FAQ, c as Testimonials, d as triggerContactModal, l as WhyUs, n as Brands, r as Contact, s as Process, t as About } from "./Misc-O4BI35YY.mjs";
import { t as Products } from "./Products-DtzCAq9S.mjs";
import { t as m } from "../_libs/react-type-animation.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cxi8fy9a.js
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-[100svh] flex items-center pt-28 pb-20 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x relative z-10 flex flex-col items-center text-center mt-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .8 },
					className: "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold text-black mb-10 drop-shadow-lg bg-transparent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative flex h-2.5 w-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" })]
					}), "Trusted by enterprises across Bengaluru & beyond"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full max-w-6xl mx-auto flex flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[70%] h-[140%] bg-white/20 blur-[60px] rounded-[100%] pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: "hidden",
						animate: "show",
						variants: {
							hidden: { opacity: 0 },
							show: {
								opacity: 1,
								transition: {
									staggerChildren: .25,
									delayChildren: .2
								}
							}
						},
						className: "relative z-10 flex flex-col items-center w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.9] font-bold tracking-tighter mb-8 flex flex-col items-center drop-shadow-[0_2px_10px_rgba(255,255,255,1)] min-h-[220px] justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4 flex-wrap justify-center overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									variants: {
										hidden: {
											opacity: 0,
											y: 50,
											filter: "blur(10px)"
										},
										show: {
											opacity: 1,
											y: 0,
											filter: "blur(0px)",
											transition: {
												type: "spring",
												stiffness: 200,
												damping: 20
											}
										}
									},
									className: "text-gradient inline-block",
									children: "Secure."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									variants: {
										hidden: {
											opacity: 0,
											y: 50,
											filter: "blur(10px)"
										},
										show: {
											opacity: 1,
											y: 0,
											filter: "blur(0px)",
											transition: {
												type: "spring",
												stiffness: 200,
												damping: 20
											}
										}
									},
									className: "text-gradient inline-block",
									children: "Smart."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m, {
								sequence: [
									"Scalable.",
									2e3,
									"Reliable.",
									2e3,
									"Innovative.",
									2e3,
									"Powerful.",
									2e3
								],
								wrapper: "span",
								speed: 10,
								className: "text-gradient-brand mt-1 inline-block drop-shadow-[0_10px_40px_rgba(244,63,94,0.4)]",
								repeat: Infinity
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
							variants: {
								hidden: {
									opacity: 0,
									y: 20
								},
								show: {
									opacity: 1,
									y: 0,
									transition: {
										duration: 1.2,
										delay: .8
									}
								}
							},
							className: "max-w-3xl text-lg md:text-2xl text-foreground font-semibold leading-relaxed drop-shadow-[0_2px_10px_rgba(255,255,255,1)] mt-4 px-4",
							children: [
								"Enterprise networking, surveillance, cloud and cybersecurity — delivered end-to-end by certified engineers.",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-brand-red",
									children: "TERAiT Technologies"
								}),
								" bridges complex infrastructure with seamless business operations."
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .9,
						delay: 1
					},
					className: "mt-12 flex flex-wrap items-center justify-center gap-5 animate-float",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							className: "group relative inline-flex items-center gap-2 rounded-full px-8 py-4.5 font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95",
							style: {
								background: "linear-gradient(135deg,var(--brand-red),var(--brand-blue))",
								boxShadow: "var(--shadow-glow-red)"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore Services" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "transition-transform group-hover:translate-x-1",
								children: "→"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: triggerContactModal,
							className: "group inline-flex items-center gap-2 rounded-full px-8 py-4.5 font-bold bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg drop-shadow-md",
							children: "Request a Quote"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+919964546464",
							className: "group hidden sm:inline-flex items-center gap-3 text-foreground/90 hover:text-foreground transition ml-2 drop-shadow-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid place-items-center h-12 w-12 rounded-full bg-foreground/5 border border-foreground/10 shadow-md group-hover:scale-110 transition-transform",
								children: "📞"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-left text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-black font-semibold",
									children: "Talk to an expert"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-bold text-base text-black",
									children: "+91 99645 46464"
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .9,
						delay: .55
					},
					className: "mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl w-full",
					children: [
						["500+", "Projects delivered"],
						["150+", "Enterprise clients"],
						["24/7", "Managed support"],
						["15+", "Years of expertise"]
					].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a, {
						glareEnable: true,
						glareMaxOpacity: .15,
						glareColor: "#ffffff",
						glarePosition: "all",
						scale: 1.05,
						tiltMaxAngleX: 15,
						tiltMaxAngleY: 15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-transparent p-5 md:p-6 rounded-3xl h-full cursor-default transition-transform hover:scale-105 border border-foreground/5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl md:text-4xl font-display font-bold text-gradient drop-shadow-sm",
								children: n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs md:text-sm font-semibold text-black mt-2",
								children: l
							})]
						})
					}, l))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-bold text-black",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Scroll to explore" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-8 w-px bg-gradient-to-b from-slate-400 to-transparent" })]
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brands, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Products, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
	] });
}
//#endregion
export { Index as component };
