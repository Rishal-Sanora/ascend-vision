import { motion } from "framer-motion";
import { SectionHeader } from "./Services";

const categories = [
  {
    name: "Enterprise IT & Data Centres",
    icon: "🏢",
    items: "Servers, Workstations, Storage, Virtualization",
    brands: ["HPE", "Dell EMC", "Lenovo", "IBM", "NetApp"],
  },
  {
    name: "Networking Solutions",
    icon: "🌐",
    items: "Routers, Switches, Access Points, WAN Optimization",
    brands: ["Cisco", "HPE", "Juniper", "TP-Link", "Netgear"],
  },
  {
    name: "Cybersecurity",
    icon: "🔐",
    items: "Firewalls, UTM, Antivirus, Endpoint Protection",
    brands: ["Fortinet", "Palo Alto", "Check Point", "Sophos"],
  },
  {
    name: "Security & Surveillance",
    icon: "📹",
    items: "CCTV, IP Cameras, VMS, Access Control",
    brands: ["Hikvision", "Dahua", "CP Plus", "Axis", "Bosch"],
  },
  {
    name: "Cloud & Business Apps",
    icon: "☁️",
    items: "Cloud Hosting, CRM, ERP, eSignatures",
    brands: ["Azure", "AWS", "Salesforce", "SAP", "Adobe"],
  },
  {
    name: "Power & Backup",
    icon: "🔋",
    items: "UPS, Cooling, Racks, Power Management",
    brands: ["APC", "Eaton", "Vertiv", "CyberPower"],
  },
  {
    name: "Audio & Video",
    icon: "🎥",
    items: "Displays, IP Phones, Projectors, Conferencing",
    brands: ["Samsung", "LG", "Poly", "Logitech", "Epson"],
  },
  {
    name: "Computer Systems",
    icon: "💻",
    items: "Desktops, Notebooks, Workstations, Gaming PCs",
    brands: ["HP", "Dell", "Lenovo", "Apple", "ASUS"],
  },
  {
    name: "Printers & Imaging",
    icon: "🖨️",
    items: "Inkjet, Laser, Large Format, 3D Printers",
    brands: ["HP", "Canon", "Epson", "Brother"],
  },
  {
    name: "AIDC / POS",
    icon: "🏷️",
    items: "Barcode, RFID, Scanners, POS, Thermal",
    brands: ["Zebra", "Honeywell", "Epson", "NCR"],
  },
  {
    name: "Mobility & Smart Devices",
    icon: "📱",
    items: "Smartphones, Tablets, Wearables",
    brands: ["Apple", "Samsung", "Lenovo", "OnePlus"],
  },
  {
    name: "IoT & Smart Solutions",
    icon: "🛰️",
    items: "Smart Cities, Industrial IoT, AI Automation",
    brands: ["Bosch", "Honeywell", "Google Nest"],
  },
];

export function Products() {
  return (
    <section id="products" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(closest-side,var(--brand-blue),transparent 70%)" }}
        />
      </div>

      <div className="container-x relative z-10">
        <SectionHeader
          kicker="Products & Solutions"
          title="A complete catalogue, one partner"
          subtitle="From data centres to desktops, surveillance to smart devices — sourced from the world's leading brands and deployed by certified engineers."
          linkTo="/products"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {categories.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
              whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
              style={{ transformPerspective: 1000 }}
              className="glass gradient-border-glow rounded-2xl p-5 md:p-6 group relative overflow-hidden"
            >
              <div
                className="absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity"
                style={{ background: "radial-gradient(closest-side,var(--brand-red),transparent)" }}
              />
              <div className="relative">
                <div className="text-3xl">{c.icon}</div>
                <h3 className="mt-3 font-display font-semibold text-lg leading-snug">{c.name}</h3>
                <p className="mt-2 text-xs text-foreground/65 leading-relaxed">{c.items}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.brands.slice(0, 3).map((b) => (
                    <span
                      key={b}
                      className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/5 border border-white/10"
                    >
                      {b}
                    </span>
                  ))}
                  {c.brands.length > 3 && (
                    <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/5 border border-white/10">
                      +{c.brands.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
