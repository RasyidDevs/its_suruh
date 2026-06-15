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
} from "lucide-react";
import { useState } from "react";
import logoImg from "@/assets/logo its suruh.png";
import heroImg from "@/assets/hero-students.jpg";

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

function Landing() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { href: "#tentang", label: "Tentang" },
    { href: "#layanan", label: "Layanan" },
    { href: "#cara-kerja", label: "Cara Kerja" },
    { href: "#visi-misi", label: "Visi & Misi" },
    { href: "#kontak", label: "Kontak" },
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
            href="#kontak"
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

      {/* VISI MISI */}
      <section
        id="visi-misi"
        className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden"
      >
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-10 w-[500px] h-[500px] rounded-full bg-tertiary/15 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 relative">
          <div>
            <span className="text-sm font-semibold text-tertiary uppercase tracking-wider">
              Visi
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
              Platform mikro-jasa <span className="text-tertiary">terpercaya</span> antar mahasiswa
              ITS.
            </h2>
            <p className="mt-6 text-white/80 text-lg leading-relaxed">
              Menjadi platform mikro-jasa antar mahasiswa ITS yang terpercaya, cepat, dan efisien
              untuk membantu kebutuhan sehari-hari mahasiswa serta membuka peluang penghasilan
              tambahan di lingkungan kampus.
            </p>
          </div>
          <div>
            <span className="text-sm font-semibold text-tertiary uppercase tracking-wider">
              Misi
            </span>
            <ul className="mt-6 space-y-5">
              {missions.map((m, i) => (
                <li key={i} className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-tertiary text-tertiary-foreground grid place-items-center font-bold shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-white/85 text-lg pt-1.5">{m}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA / KONTAK */}
      <section id="kontak" className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div
            className="rounded-[2rem] p-10 md:p-16 text-center text-primary-foreground relative overflow-hidden"
            style={{ background: "var(--gradient-accent)" }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold">
              Siap mulai? Suruh sana, suruh sini.
            </h2>
            <p className="mt-5 text-white/90 text-lg max-w-2xl mx-auto">
              Bergabung jadi User atau Helper hari ini. Hemat waktu, tambah cuan, bantu sesama warga
              ITS.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:kelompok7dppa@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold hover:bg-primary/90 transition"
              >
                <Mail className="h-4 w-4" /> Hubungi Kami
              </a>
              <a
                href="#layanan"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/30 backdrop-blur px-7 py-3.5 font-semibold hover:bg-white/25 transition"
              >
                Jelajahi Layanan
              </a>
            </div>
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
                <a href="#visi-misi" className="hover:text-primary">
                  Visi & Misi
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
