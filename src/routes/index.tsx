import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Package,
  Printer,
  Inbox,
  ShoppingCart,
  Users,
  CalendarDays,
  ArrowRight,
  Sparkles,
  Clock,
  Shield,
  Wallet,
  CheckCircle2,
  MapPin,
  Mail,
  Instagram,
  Menu,
  ExternalLink,
  FileText,
  Lightbulb,
  Palette,
  Smartphone,
  Award,
  Play,
  Handshake,
  UserCheck,
  ShieldCheck,
  CreditCard,
  Star,
  Search,
  Bell,
  MessageSquare,
  Camera,
  FileCheck,
  Fingerprint,
  BadgeCheck,
  Banknote,
  ArrowLeftRight,
  QrCode,
  Receipt,
  Zap,
} from "lucide-react";
import { useState } from "react";
import logoImg from "@/assets/logo its suruh.png";
import heroImg from "@/assets/hero-students.jpg";
import rasyidImg from "@/assets/team/Muh. Rasyid Bomantoro Setya Putra.png";
import devinImg from "@/assets/team/Devin Alif Fansyah.png";
import rafifImg from "@/assets/team/Muh. Rafif Sabililah.png";
import choirunnisaImg from "@/assets/team/Choirunnisa Irianti.png";
import afisyaImg from "@/assets/team/Afisya Nasywa.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ITSuruh — Suruh Sana, Suruh Sini" },
      {
        name: "description",
        content:
          "Platform mikro-jasa antar mahasiswa ITS. Titip beli, antar barang, print tugas, dan banyak lagi. Hemat waktu, tambah cuan.",
      },
      { property: "og:title", content: "ITSuruh — Suruh Sana, Suruh Sini" },
      {
        property: "og:description",
        content: "Platform mikro-jasa antar mahasiswa ITS yang terpercaya, cepat, dan efisien.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

const services = [
  {
    icon: ShoppingBag,
    title: "Titip Beli Makanan",
    desc: "Lagi di kelas? Suruh helper antarkan makan siang.",
  },
  {
    icon: Package,
    title: "Antar Barang",
    desc: "Kirim barang antar gedung atau kos dengan cepat.",
  },
  {
    icon: Printer,
    title: "Print Tugas",
    desc: "Tugas mendadak? Helper print & antar ke ruang kelas.",
  },
  { icon: Inbox, title: "Ambil Paket", desc: "Paket di pos satpam? Helper siap ambilkan." },
  {
    icon: ShoppingCart,
    title: "Kebutuhan Harian",
    desc: "Beli kopi, sabun, ATK — apa pun, kapan pun.",
  },
  { icon: Users, title: "Bantuan Antre", desc: "Antre KRS, bank, atau loket? Helper gantikan." },
  {
    icon: CalendarDays,
    title: "Bantuan Event",
    desc: "Tambahan tangan untuk acara himpunan & kampus.",
  },
  {
    icon: Sparkles,
    title: "Dan Banyak Lagi",
    desc: "Selama legal & aman, semuanya bisa di-suruh.",
  },
];

const values = [
  {
    icon: Clock,
    title: "Hemat Waktu",
    desc: "Fokus ke akademik, biar urusan kecil ditangani helper.",
  },
  {
    icon: Wallet,
    title: "Cuan Tambahan",
    desc: "Jadi Helper kapan pun kamu luang, dapat penghasilan fleksibel.",
  },
  {
    icon: Shield,
    title: "Aman & Transparan",
    desc: "Semua transaksi terverifikasi via akun mahasiswa ITS.",
  },
];

const missions = [
  "Menyediakan layanan penyuruhan yang praktis, aman, dan transparan.",
  "Membantu mahasiswa menghemat waktu dalam aktivitas akademik maupun non-akademik.",
  "Memberikan peluang penghasilan tambahan yang fleksibel bagi mahasiswa ITS.",
];

const designSteps = [
  {
    number: 1,
    title: "Needfinding",
    description: "Menggali kebutuhan pengguna melalui riset mendalam",
    icon: Lightbulb,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10 border-purple-500/20",
    links: [
      {
        label: "Needfinding Document",
        url: "https://drive.google.com/file/d/1-RWle7sXUUmdBLfq5MEB5DcvulX3zk5d/view?usp=sharing",
      },
    ],
  },
  {
    number: 2,
    title: "POV & Experience Prototype",
    description: "Mendefinisikan Point of View dan membuat prototype pengalaman",
    icon: Lightbulb,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10 border-blue-500/20",
    links: [
      {
        label: "POV & Experience Prototype",
        url: "https://drive.google.com/file/d/1Q9fCM0-v9W1Y1ETUYbsQptv62_0nzTyy/view?usp=sharing",
      },
    ],
  },
  {
    number: 3,
    title: "Concept Video & PPT",
    description: "Presentasi konsep produk melalui video dan slide",
    icon: Sparkles,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10 border-green-500/20",
    links: [
      {
        label: "Concept Video PPT",
        url: "https://drive.google.com/file/d/1p-a2bfvkS1NP15F13o58Cxs21kdHliai/view?usp=drive_link",
      },
      {
        label: "Concept Video",
        url: "https://drive.google.com/file/d/10tpsrY4TSyAj0bByxbUVEbTKMZyo7GeL/view?usp=drive_link",
      },
    ],
  },
  {
    number: 4,
    title: "LoFi (Low Fidelity)",
    description: "Wireframe dan layout konsep desain awal",
    icon: Palette,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10 border-orange-500/20",
    links: [
      {
        label: "LoFi Wireframe",
        url: "https://app.visily.ai/projects/2b5dd521-9ad7-490e-9b23-295910273945/boards/2606467",
      },
      {
        label: "Laporan",
        url: "https://drive.google.com/file/d/1mG5gAEJ2C9QVJ8ByNUSnaQViSgp0Av42/view?usp=sharing",
      },
    ],
  },
  {
    number: 5,
    title: "Med-Fi (Medium Fidelity)",
    description: "Desain dengan detail dan interaksi yang lebih terstruktur",
    icon: Smartphone,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-500/10 border-indigo-500/20",
    links: [
      {
        label: "Med-Fi Design",
        url: "https://www.figma.com/proto/EV0okwVGLoRADx1G2NzyMY/ITSuruh?node-id=0-1&t=Qp91a7Aw3SeUkeuw-1",
      },
      {
        label: "PPT Med-FI",
        url: "https://drive.google.com/file/d/1iLWxyI3DEVjZ7RnkRMYsjT_1ZV1GoLPo/view?usp=drive_link",
      },
      {
        label: "ReadMe Med-Fi",
        url: "https://drive.google.com/file/d/1CGUAvpOf4J7vlkLcKmje5y0YVA3pHKfL/view?usp=drive_link",
      },
    ],
  },
  {
    number: 6,
    title: "Laporan Heuristics",
    description: "Evaluasi desain berdasarkan prinsip usability dan heuristics",
    icon: CheckCircle2,
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-500/10 border-teal-500/20",
    links: [
      {
        label: "Laporan Heuristics",
        url: "https://drive.google.com/file/d/1o8EMxaD8MQMihk3PKKWnFm6jDRT9XAYl/view?usp=sharing",
      },
    ],
  },
  {
    number: 7,
    title: "HiFi (High Fidelity)",
    description: "Desain final dengan visual dan animasi lengkap",
    icon: Smartphone,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10 border-pink-500/20",
    links: [
      {
        label: "HiFi Design",
        url: "https://www.figma.com/proto/LHxfemvU5gImKqmbLnIjJp/ITSuruh--Copy-?node-id=0-1&t=xWkNGyYoaJ95crVU-1",
      },
      {
        label: "Final Report HighFI",
        url: "https://drive.google.com/file/d/1eofzDp_XuuOWAd8Eq7MXxaZgBXOJKmcc/view",
      },
    ],
  },
  {
    number: 8,
    title: "Poster & Pitch Slide",
    description: "Marketing materials dan presentasi pitch produk",
    icon: Award,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10 border-yellow-500/20",
    links: [
      {
        label: "Poster & Pitch Slide",
        url: "https://canva.link/wubg0owwp1agxy3",
      },
    ],
  },
];

function Landing() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { href: "#tentang", label: "Tentang" },
    { href: "#layanan", label: "Layanan" },
    { href: "#cara-kerja", label: "Cara Kerja" },
    { href: "#features", label: "Features" },
    { href: "#design-process", label: "Design Process" },
    { href: "#demo", label: "Demo" },
    { href: "#our-team", label: "Our Team" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <nav className="mx-auto max-w-7xl px-6 h-18 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img src={logoImg} alt="ITSuruh" className="h-10 md:h-12 w-auto" />
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-primary transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#features"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-primary/90 transition shadow-[var(--shadow-soft)]"
          >
            Coba Sekarang <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <ul className="px-6 py-4 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm font-medium text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-secondary/30 blur-3xl -z-10" />
        <div className="absolute -bottom-40 -left-20 w-[420px] h-[420px] rounded-full bg-primary/40 blur-3xl -z-10" />

        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid lg:grid-cols-2 gap-12 items-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-medium backdrop-blur text-primary">
              <Sparkles className="h-3.5 w-3.5 text-secondary" /> Khusus mahasiswa ITS Surabaya
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-primary">
              Suruh Sana, <br />
              <span className="text-primary">Suruh Sini.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary max-w-xl">
              Platform mikro-jasa antar mahasiswa ITS. Selesaikan urusan harianmu lebih cepat, atau
              jadi Helper untuk dapat cuan tambahan di sela kuliah.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#layanan"
                className="inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-7 py-3.5 font-semibold hover:bg-secondary/90 transition shadow-[var(--shadow-glow)]"
              >
                Lihat Layanan <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#cara-kerja"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/25 backdrop-blur px-7 py-3.5 font-semibold hover:bg-white/20 transition text-primary"
              >
                Cara Kerja
              </a>
            </div>
            <div className="mt-10 flex items-center gap-8 text-sm text-primary/70">
              <div>
                <div className="text-2xl font-bold text-primary">7+</div>
                Jenis Layanan
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                Mahasiswa ITS
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                Selalu Ada Helper
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-glow)] border border-white/20">
              <img
                src={heroImg}
                alt="Mahasiswa ITS menggunakan ITSuruh"
                width={1280}
                height={960}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground rounded-2xl p-4 shadow-[var(--shadow-soft)] border border-border flex items-center gap-3 max-w-[260px]">
              <div className="h-10 w-10 rounded-full bg-secondary/15 grid place-items-center text-secondary">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">Order selesai!</div>
                <div className="text-xs text-muted-foreground">Print tugas — 8 menit</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-2 bg-card text-card-foreground rounded-2xl p-4 shadow-[var(--shadow-soft)] border border-border flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-tertiary/20 grid place-items-center text-tertiary-foreground">
                <Wallet className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Cuan helper</div>
                <div className="text-sm font-bold">+Rp 12.500</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TENTANG */}
      <section id="tentang" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Tentang ITSuruh
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">
              Aplikasi yang membantu mahasiswa ITS,{" "}
              <span className="text-secondary">saling membantu.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              ITSuruh memungkinkan setiap mahasiswa ITS menyuruh apa pun pada sesama mahasiswa ITS.
              Kamu bisa menjadi <strong className="text-foreground">User</strong> yang menyuruh,
              atau <strong className="text-foreground">Helper</strong> yang disuruh — dapat
              penghasilan tambahan sekaligus bantu efisiensi waktu teman sekampus.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-primary text-primary-foreground p-7">
              <div className="text-4xl font-extrabold">User</div>
              <p className="mt-3 text-white/75 text-sm">
                Yang menyuruh. Pesan jasa cepat, bayar transparan, fokus ke hal yang lebih penting.
              </p>
            </div>
            <div className="rounded-3xl bg-secondary text-secondary-foreground p-7 translate-y-6">
              <div className="text-4xl font-extrabold">Helper</div>
              <p className="mt-3 text-white/85 text-sm">
                Yang disuruh. Ambil order di sela kelas, dapatkan cuan tambahan secara fleksibel.
              </p>
            </div>
            <div className="col-span-2 rounded-3xl border border-border p-7 bg-muted/40">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-tertiary-foreground bg-tertiary rounded-md p-1" />
                <div className="font-semibold">Value Proposition</div>
              </div>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                Solusi praktis bagi mahasiswa ITS untuk menyelesaikan kebutuhan harian dengan lebih
                cepat, sekaligus menciptakan peluang penghasilan tambahan melalui sistem Helper.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section id="layanan" className="py-24 md:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Layanan Kami
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Apa saja yang bisa kamu suruh?</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Dari urusan kecil sampai bantuan kampus — semua bisa di-suruh ke sesama mahasiswa ITS.
            </p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-2xl bg-card border border-border p-6 hover:border-secondary hover:shadow-[var(--shadow-soft)] transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-secondary/10 text-secondary grid place-items-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CARA KERJA */}
      <section id="cara-kerja" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Cara Kerja
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Tiga langkah, urusan beres.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                t: "Buat Pesanan",
                d: "Pilih jenis suruhan, isi detail, tentukan estimasi biaya.",
              },
              {
                n: "02",
                t: "Helper Ambil Order",
                d: "Mahasiswa ITS terdekat menerima dan menjalankan suruhanmu.",
              },
              {
                n: "03",
                t: "Selesai & Bayar",
                d: "Pantau progres real-time, bayar setelah pesanan rampung.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="relative rounded-3xl bg-primary text-primary-foreground p-8 overflow-hidden"
              >
                <div className="absolute -top-6 -right-4 text-[9rem] font-extrabold leading-none text-white/5 select-none">
                  {step.n}
                </div>
                <div className="relative">
                  <div className="text-tertiary text-sm font-bold">{step.n}</div>
                  <div className="mt-3 text-2xl font-bold">{step.t}</div>
                  <p className="mt-3 text-white/75">{step.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border p-6 flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-tertiary/20 grid place-items-center text-tertiary-foreground shrink-0">
                  <v.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">{v.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN FEATURES */}
      <section id="features" className="py-24 md:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-medium backdrop-blur text-primary">
              <Zap className="h-3.5 w-3.5 text-secondary" /> Main Features
            </span>
            <h2 className="mt-6 text-3xl md:text-5xl font-bold mb-4">
              Fitur <span className="text-secondary">Utama</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jelajahi fitur-fitur lengkap ITSuruh yang dirancang untuk pengalaman terbaik bagi User maupun Helper.
            </p>
          </motion.div>

          {/* Feature Category 1: Helper Features */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="rounded-3xl border border-border bg-card overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur grid place-items-center">
                    <Handshake className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Helper Features</h3>
                    <p className="text-white/80 text-sm mt-1">Fitur untuk mahasiswa yang ingin jadi Helper dan dapat cuan</p>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: Search, title: "Cari Order", desc: "Temukan order terdekat yang sesuai dengan lokasi dan ketersediaanmu." },
                  { icon: Bell, title: "Notifikasi Real-time", desc: "Dapatkan notifikasi instan saat ada order baru di sekitarmu." },
                  { icon: Wallet, title: "Dashboard Penghasilan", desc: "Pantau total pendapatan, riwayat order, dan statistik performa." },
                  { icon: Star, title: "Rating & Review", desc: "Kumpulkan rating positif untuk meningkatkan kepercayaan User." },
                  { icon: MapPin, title: "Navigasi Lokasi", desc: "Petunjuk arah otomatis ke lokasi pick-up dan drop-off." },
                  { icon: MessageSquare, title: "Chat dengan User", desc: "Komunikasi langsung dengan User untuk detail pesanan." },
                ].map((f, i) => (
                  <div key={i} className="group rounded-2xl border border-border p-5 hover:border-blue-300 hover:shadow-md transition-all">
                    <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-500 grid place-items-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold text-foreground">{f.title}</h4>
                    <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Feature Category 2: User Features */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="rounded-3xl border border-border bg-card overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur grid place-items-center">
                    <UserCheck className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">User Features</h3>
                    <p className="text-white/80 text-sm mt-1">Fitur untuk mahasiswa yang ingin menyuruh dan hemat waktu</p>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: ShoppingCart, title: "Buat Pesanan", desc: "Buat suruhan dengan mudah — pilih jenis, isi detail, kirim." },
                  { icon: Clock, title: "Tracking Real-time", desc: "Pantau status pesanan secara langsung dari awal hingga selesai." },
                  { icon: Star, title: "Beri Rating", desc: "Nilai performa Helper setelah pesanan selesai." },
                  { icon: MessageSquare, title: "Chat dengan Helper", desc: "Koordinasi langsung dengan Helper untuk detail pesanan." },
                  { icon: FileText, title: "Riwayat Pesanan", desc: "Akses seluruh histori pesanan yang pernah dibuat." },
                  { icon: Bell, title: "Update Status", desc: "Notifikasi otomatis setiap ada perubahan status pesanan." },
                ].map((f, i) => (
                  <div key={i} className="group rounded-2xl border border-border p-5 hover:border-emerald-300 hover:shadow-md transition-all">
                    <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-500 grid place-items-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold text-foreground">{f.title}</h4>
                    <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Feature Category 3: Verification Features */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="rounded-3xl border border-border bg-card overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur grid place-items-center">
                    <ShieldCheck className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Verification Features</h3>
                    <p className="text-white/80 text-sm mt-1">Keamanan dan verifikasi identitas mahasiswa ITS</p>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: BadgeCheck, title: "Verifikasi Mahasiswa", desc: "Otentikasi melalui email @its.ac.id untuk memastikan pengguna asli." },
                  { icon: Fingerprint, title: "KTM Verification", desc: "Validasi KTM sebagai bukti identitas mahasiswa ITS yang aktif." },
                  { icon: Camera, title: "Foto Selfie", desc: "Verifikasi wajah untuk keamanan dan kepercayaan tambahan." },
                  { icon: Shield, title: "Trusted Badge", desc: "Badge khusus untuk Helper yang telah terverifikasi lengkap." },
                  { icon: FileCheck, title: "Dokumen Terverifikasi", desc: "Status verifikasi dokumen ditampilkan di profil pengguna." },
                  { icon: Users, title: "Komunitas Aman", desc: "Seluruh pengguna adalah mahasiswa ITS — lingkungan terpercaya." },
                ].map((f, i) => (
                  <div key={i} className="group rounded-2xl border border-border p-5 hover:border-purple-300 hover:shadow-md transition-all">
                    <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-500 grid place-items-center mb-4 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold text-foreground">{f.title}</h4>
                    <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Feature Category 4: Payment / Top Up / Transfer */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="rounded-3xl border border-border bg-card overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur grid place-items-center">
                    <CreditCard className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Payment / Top Up / Transfer</h3>
                    <p className="text-white/80 text-sm mt-1">Sistem pembayaran yang mudah, cepat, dan transparan</p>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: Wallet, title: "E-Wallet ITSuruh", desc: "Saldo digital untuk transaksi cepat tanpa repot tukar uang cash." },
                  { icon: Banknote, title: "Top Up Saldo", desc: "Isi saldo mudah melalui berbagai metode pembayaran." },
                  { icon: ArrowLeftRight, title: "Transfer Antar User", desc: "Kirim saldo ke sesama pengguna ITSuruh dengan instan." },
                  { icon: QrCode, title: "QR Payment", desc: "Bayar pesanan dengan scan QR code untuk kemudahan transaksi." },
                  { icon: Receipt, title: "Riwayat Transaksi", desc: "Catatan lengkap semua transaksi masuk dan keluar." },
                  { icon: Shield, title: "Pembayaran Aman", desc: "Sistem escrow — uang ditahan hingga pesanan selesai." },
                ].map((f, i) => (
                  <div key={i} className="group rounded-2xl border border-border p-5 hover:border-amber-300 hover:shadow-md transition-all">
                    <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-500 grid place-items-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold text-foreground">{f.title}</h4>
                    <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section id="design-process" className="py-20 md:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-medium backdrop-blur text-primary">
              <Lightbulb className="h-3.5 w-3.5" /> Design Journey
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold mb-4">
              Design Process <span className="text-secondary">ITSuruh</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dari riset mendalam hingga produk final yang siap launch. Lihat setiap tahap desain
              ITSuruh di sini.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {designSteps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`h-14 w-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white`}
                    >
                      <span className="text-xl font-bold">{step.number}</span>
                    </div>
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-base text-muted-foreground mb-6">{step.description}</p>

                  <div className="space-y-2">
                    {step.links.map((link, linkIdx) => (
                      <a
                        key={linkIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition ${
                          link.disabled
                            ? "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
                            : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg"
                        }`}
                      >
                        <FileText className="h-3.5 w-3.5" />
                        {link.label}
                        {!link.disabled && <ExternalLink className="h-3.5 w-3.5" />}
                      </a>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: "Research", subtitle: "Needfinding & POV" },
              { title: "Conceptualize", subtitle: "Video & Concept" },
              { title: "Design", subtitle: "LoFi → Med-Fi → HiFi" },
              { title: "Validate", subtitle: "Heuristics & Pitch" },
            ].map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-primary text-sm">{idx + 1}</span>
                </div>
                <h4 className="font-bold text-base mb-1">{phase.title}</h4>
                <p className="text-xs text-muted-foreground">{phase.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO APPLICATION */}
      <section id="demo" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute -top-32 -right-24 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 w-[400px] h-[400px] rounded-full bg-tertiary/15 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-medium backdrop-blur">
              <Play className="h-3.5 w-3.5 text-secondary" /> Demo Application
            </span>
            <h2 className="mt-6 text-3xl md:text-5xl font-bold mb-4">
              Demo <span className="text-tertiary">Application</span>
            </h2>
            <p className="text-lg text-white/75 max-w-2xl mx-auto">
              Lihat bagaimana ITSuruh bekerja dalam aksi nyata. Tonton demo aplikasi dan jelajahi
              materi presentasi kami.
            </p>
          </motion.div>

          {/* YouTube Video Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-glow)] border border-white/20 bg-black">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/sbO5CsvAGc8"
                  title="ITSuruh Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section id="our-team" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-medium backdrop-blur text-primary">
              <Users className="h-3.5 w-3.5" /> Meet The Team
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-secondary">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kenali tim kreatif di balik ITSuruh — setiap anggota berkontribusi penuh dalam pengembangan proyek dari awal hingga akhir.
            </p>
          </motion.div>

          {/* Top row: 3 cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {[
              {
                name: "Rasyid Bomantoro",
                role: "UI/UX Designer",
                description: "Berkontribusi dalam keseluruhan proses pengembangan proyek, dengan spesialisasi pada perancangan UI/UX mulai dari low-fidelity wireframe, mid-fidelity design, user flow, high-fidelity prototype, hingga menjaga konsistensi visual antarmuka.",
                image: rasyidImg,
                gradient: "from-blue-500 to-cyan-500",
                roleColor: "bg-blue-500/15 text-blue-700 border-blue-500/25",
              },
              {
                name: "Devin Alif Fansyah",
                role: "UI/UX Designer",
                description: "Berkontribusi dalam keseluruhan proses pengembangan proyek, dengan spesialisasi pada pengembangan desain UI/UX dari tahap low-fidelity, mid-fidelity, perancangan layout, high-fidelity design, hingga prototype yang siap dipresentasikan.",
                image: devinImg,
                gradient: "from-indigo-500 to-purple-500",
                roleColor: "bg-indigo-500/15 text-indigo-700 border-indigo-500/25",
              },
              {
                name: "Rafif Sabililah",
                role: "Pitching & Branding",
                description: "Berkontribusi dalam keseluruhan proses pengembangan proyek, dengan spesialisasi pada penyusunan konsep branding, strategi komunikasi, identitas proyek, dan penyampaian ide saat pitching.",
                image: rafifImg,
                gradient: "from-amber-500 to-orange-500",
                roleColor: "bg-amber-500/15 text-amber-700 border-amber-500/25",
              },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-3xl bg-card border border-border overflow-hidden hover:shadow-[var(--shadow-glow)] transition-all duration-500"
              >
                <div className={`h-1.5 bg-gradient-to-r ${member.gradient} w-full`} />
                <div className="p-8">
                  <div className="relative mx-auto w-36 h-36 mb-6">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl scale-110`} />
                    <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center text-foreground">{member.name}</h3>
                  <div className="flex justify-center mt-3">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-semibold ${member.roleColor}`}>
                      <Sparkles className="h-3 w-3" />
                      {member.role}
                    </span>
                  </div>
                  <p className="mt-5 text-sm text-muted-foreground text-center leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom row: 2 cards centered */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Choirunnisa",
                role: "Documentation & Presentation Designer",
                description: "Berkontribusi dalam keseluruhan proses pengembangan proyek, dengan spesialisasi pada penyusunan laporan, pembuatan materi presentasi, perapihan isi dokumen, dan dokumentasi proyek.",
                image: choirunnisaImg,
                gradient: "from-emerald-500 to-teal-500",
                roleColor: "bg-emerald-500/15 text-emerald-700 border-emerald-500/25",
              },
              {
                name: "Afisya Nasywa",
                role: "Documentation & Presentation Designer",
                description: "Berkontribusi dalam keseluruhan proses pengembangan proyek, dengan spesialisasi pada penyusunan laporan, pembuatan materi presentasi, perapihan isi dokumen, dan dokumentasi proyek.",
                image: afisyaImg,
                gradient: "from-rose-500 to-pink-500",
                roleColor: "bg-rose-500/15 text-rose-700 border-rose-500/25",
              },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i + 3) * 0.1 }}
                className="group relative rounded-3xl bg-card border border-border overflow-hidden hover:shadow-[var(--shadow-glow)] transition-all duration-500"
              >
                <div className={`h-1.5 bg-gradient-to-r ${member.gradient} w-full`} />
                <div className="p-8">
                  <div className="relative mx-auto w-36 h-36 mb-6">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl scale-110`} />
                    <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center text-foreground">{member.name}</h3>
                  <div className="flex justify-center mt-3">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-semibold ${member.roleColor}`}>
                      <Sparkles className="h-3 w-3" />
                      {member.role}
                    </span>
                  </div>
                  <p className="mt-5 text-sm text-muted-foreground text-center leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img src={logoImg} alt="ITSuruh" className="h-10 w-auto" />
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Platform mikro-jasa untuk mahasiswa ITS Surabaya. Suruh Sana, Suruh Sini.
            </p>
          </div>
          <div>
            <div className="font-semibold text-sm">Jelajahi</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#tentang" className="hover:text-primary">
                  Tentang
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-primary">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#cara-kerja" className="hover:text-primary">
                  Cara Kerja
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary">
                  Features
                </a>
              </li>
              <li>
                <a href="#design-process" className="hover:text-primary">
                  Design Process
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-primary">
                  Demo
                </a>
              </li>
              <li>
                <a href="#our-team" className="hover:text-primary">
                  Our Team
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-sm">Kontak</div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Kampus ITS, Surabaya
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> kelompok7dppa@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4" /> @itsuruh
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ITSuruh. Dibuat untuk warga ITS.
        </div>
      </footer>
    </div>
  );
}
