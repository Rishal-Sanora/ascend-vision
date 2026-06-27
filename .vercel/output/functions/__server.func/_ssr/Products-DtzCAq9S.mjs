import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { t as a } from "../_libs/react-parallax-tilt.mjs";
import { t as SectionHeader } from "./Services-D5X5vDm8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Products-DtzCAq9S.js
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	{
		name: "Enterprise IT & Data Centres",
		icon: "🏢",
		items: "Servers, Workstations, Storage, Virtualization",
		brands: [
			"HPE",
			"Dell EMC",
			"Lenovo",
			"IBM",
			"NetApp"
		]
	},
	{
		name: "Networking Solutions",
		icon: "🌐",
		items: "Routers, Switches, Access Points, WAN Optimization",
		brands: [
			"Cisco",
			"HPE",
			"Juniper",
			"TP-Link",
			"Netgear"
		]
	},
	{
		name: "Cybersecurity",
		icon: "🔐",
		items: "Firewalls, UTM, Antivirus, Endpoint Protection",
		brands: [
			"Fortinet",
			"Palo Alto",
			"Check Point",
			"Sophos"
		]
	},
	{
		name: "Security & Surveillance",
		icon: "📹",
		items: "CCTV, IP Cameras, VMS, Access Control",
		brands: [
			"Hikvision",
			"Dahua",
			"CP Plus",
			"Axis",
			"Bosch"
		]
	},
	{
		name: "Cloud & Business Apps",
		icon: "☁️",
		items: "Cloud Hosting, CRM, ERP, eSignatures",
		brands: [
			"Azure",
			"AWS",
			"Salesforce",
			"SAP",
			"Adobe"
		]
	},
	{
		name: "Power & Backup",
		icon: "🔋",
		items: "UPS, Cooling, Racks, Power Management",
		brands: [
			"APC",
			"Eaton",
			"Vertiv",
			"CyberPower"
		]
	},
	{
		name: "Audio & Video",
		icon: "🎥",
		items: "Displays, IP Phones, Projectors, Conferencing",
		brands: [
			"Samsung",
			"LG",
			"Poly",
			"Logitech",
			"Epson"
		]
	},
	{
		name: "Computer Systems",
		icon: "💻",
		items: "Desktops, Notebooks, Workstations, Gaming PCs",
		brands: [
			"HP",
			"Dell",
			"Lenovo",
			"Apple",
			"ASUS"
		]
	},
	{
		name: "Printers & Imaging",
		icon: "🖨️",
		items: "Inkjet, Laser, Large Format, 3D Printers",
		brands: [
			"HP",
			"Canon",
			"Epson",
			"Brother"
		]
	},
	{
		name: "AIDC / POS",
		icon: "🏷️",
		items: "Barcode, RFID, Scanners, POS, Thermal",
		brands: [
			"Zebra",
			"Honeywell",
			"Epson",
			"NCR"
		]
	},
	{
		name: "Mobility & Smart Devices",
		icon: "📱",
		items: "Smartphones, Tablets, Wearables",
		brands: [
			"Apple",
			"Samsung",
			"Lenovo",
			"OnePlus"
		]
	},
	{
		name: "IoT & Smart Solutions",
		icon: "🛰️",
		items: "Smart Cities, Industrial IoT, AI Automation",
		brands: [
			"Bosch",
			"Honeywell",
			"Google Nest"
		]
	}
];
function Products() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "products",
		className: "relative py-24 md:py-32 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 z-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full opacity-20 blur-3xl",
				style: { background: "radial-gradient(closest-side,var(--brand-blue),transparent 70%)" }
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				kicker: "Products & Solutions",
				title: "A complete catalogue, one partner",
				subtitle: "From data centres to desktops, surveillance to smart devices — sourced from the world's leading brands and deployed by certified engineers.",
				linkTo: "/products"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6",
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					margin: "-100px"
				},
				variants: {
					hidden: { opacity: 0 },
					show: {
						opacity: 1,
						transition: { staggerChildren: .1 }
					}
				},
				children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: {
						hidden: {
							opacity: 0,
							y: 30
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
					className: "h-full cursor-pointer outline-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(a, {
						glareEnable: true,
						glareMaxOpacity: .1,
						glareColor: "#ffffff",
						glarePosition: "all",
						scale: 1.02,
						tiltMaxAngleX: 5,
						tiltMaxAngleY: 5,
						className: "glass rounded-2xl p-6 shadow-lg group relative overflow-hidden hover:shadow-2xl hover:border-white/40 transition-all duration-300 h-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
							style: { background: "radial-gradient(circle at top right, color-mix(in srgb, var(--brand-red) 15%, transparent), transparent 70%)" }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative font-bold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-3xl",
									children: c.icon
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display font-bold text-lg leading-snug",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs font-bold text-foreground/65 leading-relaxed",
									children: c.items
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-wrap gap-1.5",
									children: [c.brands.slice(0, 3).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/5 border border-white/10",
										children: b
									}, b)), c.brands.length > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-bold text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/5 border border-white/10",
										children: ["+", c.brands.length - 3]
									})]
								})
							]
						})]
					})
				}, c.name))
			})]
		})]
	});
}
//#endregion
export { Products as t };
