import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Users, Heart, Brain, Zap } from "lucide-react";
import { useState } from "react";
import povImg from "@/assets/Point of View.png";
import needFindingImg from "@/assets/need-finding.png";

export const Route = createFileRoute("/needfinding-pov")({
  head: () => ({
    meta: [
      { title: "Needfinding & Point of View — ITSuruh" },
      {
        name: "description",
        content: "Memahami kebutuhan pengguna melalui needfinding dan point of view analysis.",
      },
    ],
  }),
  component: NeedFindingPOV,
});

function NeedFindingPOV() {
  const [activeTab, setActiveTab] = useState("pov");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <nav className="mx-auto max-w-7xl px-6 h-18 py-3 flex items-center justify-between">
          <a href="/" className="text-lg font-bold text-primary hover:text-primary/80 transition">
            ← Kembali ke Beranda
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-secondary/30 blur-3xl -z-10" />

        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-medium backdrop-blur text-primary">
              <Lightbulb className="h-3.5 w-3.5" /> User Research
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Needfinding & <span className="text-secondary">Point of View</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Memahami kebutuhan nyata pengguna adalah kunci menciptakan solusi yang benar-benar
              membantu. Mari kita gali lebih dalam tentang apa yang sebenarnya dibutuhkan mahasiswa
              ITS.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="mx-auto max-w-7xl px-6 mb-12">
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <button
            onClick={() => setActiveTab("pov")}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              activeTab === "pov"
                ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Point of View
          </button>
          <button
            onClick={() => setActiveTab("needfinding")}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              activeTab === "needfinding"
                ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Needfinding
          </button>
        </div>
      </section>

      {/* POV Section */}
      {activeTab === "pov" && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Apa itu <span className="text-secondary">Point of View?</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Point of View (POV) adalah cara kita memahami dan mengartikulasikan perspektif
                    pengguna. Bukan hanya "siapa" mereka, tapi{" "}
                    <strong>bagaimana mereka berpikir, merasa, dan bertindak</strong> dalam
                    kehidupan sehari-hari.
                  </p>
                </div>

                <div className="bg-muted/40 border border-border rounded-2xl p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Brain className="h-6 w-6 text-primary mt-1" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Empati Map: STDF</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Untuk membangun POV yang kuat, kita gunakan empati map dengan 4 dimensi:
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-xl bg-purple-100/10 border border-purple-200/20">
                    <Zap className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sm mb-1">SAYS</h4>
                      <p className="text-sm text-muted-foreground">
                        Apa yang mereka <strong>katakan</strong> tentang kebutuhan mereka?
                        Pernyataan langsung dari pengguna.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-xl bg-blue-100/10 border border-blue-200/20">
                    <Brain className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sm mb-1">THINKS</h4>
                      <p className="text-sm text-muted-foreground">
                        Apa yang mereka <strong>pikirkan</strong> tetapi tidak selalu diucapkan?
                        Pikiran tersembunyi yang perlu digali.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-xl bg-green-100/10 border border-green-200/20">
                    <Zap className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sm mb-1">DOES</h4>
                      <p className="text-sm text-muted-foreground">
                        Apa <strong>tindakan nyata</strong> yang mereka lakukan? Perilaku
                        observable.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-xl bg-pink-100/10 border border-pink-200/20">
                    <Heart className="h-5 w-5 text-pink-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sm mb-1">FEELS</h4>
                      <p className="text-sm text-muted-foreground">
                        Apa yang mereka <strong>rasakan</strong>? Emosi, kekhawatiran, dan aspirasi
                        mereka.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-glow)] border border-border bg-muted/20 p-4">
                <img
                  src={povImg}
                  alt="Point of View - Empathy Map"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  📸 <strong>Contoh POV untuk Hanif:</strong> Seorang mahasiswa yang sibuk dengan
                  kuliah, cemas dengan waktu luang, tapi juga ingin dapat cuan tambahan.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Needfinding Section */}
      {activeTab === "needfinding" && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-2 md:order-1"
            >
              <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-glow)] border border-border bg-muted/20 p-4">
                <img
                  src={needFindingImg}
                  alt="Needfinding Process"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="mt-4 p-4 bg-secondary/10 border border-secondary/30 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  🔍 <strong>Needfinding</strong> adalah proses menggali kebutuhan sesungguhnya dari
                  pengguna melalui berbagai metode penelitian.
                </p>
              </div>
            </motion.div>

            <div className="order-1 md:order-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Apa itu <span className="text-secondary">Needfinding?</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Needfinding adalah proses sistematis untuk{" "}
                    <strong>menemukan kebutuhan nyata</strong> pengguna. Bukan hanya apa yang mereka
                    minta, tapi apa yang mereka <strong>butuhkan</strong>. Ada perbedaan penting di
                    sini!
                  </p>
                </div>

                <div className="bg-muted/40 border border-border rounded-2xl p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" /> Mengapa Needfinding Penting?
                  </h3>
                  <ul className="space-y-3">
                    <li className="text-sm text-muted-foreground flex gap-3">
                      <span className="text-primary font-bold flex-shrink-0">1.</span>
                      <span>
                        <strong>Menghindari Asumsi Salah:</strong> Kita tidak bisa hanya
                        mengandalkan intuisi. Data dari pengguna nyata lebih valuable.
                      </span>
                    </li>
                    <li className="text-sm text-muted-foreground flex gap-3">
                      <span className="text-primary font-bold flex-shrink-0">2.</span>
                      <span>
                        <strong>Menemukan Pain Points:</strong> Masalah tersembunyi yang pengguna
                        alami setiap hari.
                      </span>
                    </li>
                    <li className="text-sm text-muted-foreground flex gap-3">
                      <span className="text-primary font-bold flex-shrink-0">3.</span>
                      <span>
                        <strong>Prioritas Solusi:</strong> Fokus pada masalah paling urgent bagi
                        pengguna.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Metode Needfinding:</h3>
                  <div className="grid gap-3">
                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                      <p className="text-sm font-medium">
                        📋 <strong>Wawancara Mendalam (Interview)</strong> — Ngobrol langsung dengan
                        pengguna
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-secondary/5 border border-secondary/20">
                      <p className="text-sm font-medium">
                        👀 <strong>Observasi (Observation)</strong> — Lihat bagaimana mereka
                        benar-benar menggunakan produk
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-tertiary/5 border border-tertiary/20">
                      <p className="text-sm font-medium">
                        📊 <strong>Survey & Kuesioner</strong> — Kumpulkan data dari banyak pengguna
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-accent/5 border border-accent/20">
                      <p className="text-sm font-medium">
                        🧪 <strong>User Testing</strong> — Test produk dengan pengguna nyata
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Connection Section */}
      <section className="mx-auto max-w-7xl px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Hubungan <span className="text-primary">POV</span> dan{" "}
                <span className="text-secondary">Needfinding</span>
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Needfinding adalah <strong>proses pengumpulan data</strong>, sementara POV adalah{" "}
                <strong>artikulasi dari insight</strong> yang didapat dari needfinding.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dengan kata lain: Needfinding memberikan bahan baku (data), dan POV mengubahnya
                menjadi pemahaman mendalam tentang pengguna yang bisa guide desain solusi kami.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-background border border-border">
                <div className="text-sm font-semibold text-muted-foreground mb-2">NEEDFINDING</div>
                <div className="text-lg font-bold">Data dari 50 interview dengan mahasiswa</div>
              </div>
              <div className="text-center text-2xl text-muted-foreground">↓</div>
              <div className="p-4 rounded-xl bg-background border border-border">
                <div className="text-sm font-semibold text-muted-foreground mb-2">POV</div>
                <div className="text-lg font-bold">
                  "Mahasiswa ingin hemat waktu untuk urusan rutin agar fokus kuliah"
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ITSuruh Context */}
      <section className="mx-auto max-w-7xl px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-muted/40 border border-border rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            POV & Needfinding dalam Konteks <span className="text-primary">ITSuruh</span>
          </h3>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-3 text-lg">
                  Kebutuhan User (Penyuruh)
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Hemat waktu untuk urusan kecil di sela kelas/kos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Layanan yang cepat dan terpercaya</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Harga yang terjangkau untuk mahasiswa</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Tidak ribet, cukup order via app — selesai!</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-secondary mb-3 text-lg">
                  Kebutuhan Helper (Disuruh)
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Cuan tambahan yang fleksibel, bisa kapan pun</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Order yang mudah didapat dan aman</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Sistem pembayaran yang jelas dan tepat waktu</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Rating & reputasi yang fair</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Key Takeaways */}
      <section className="mx-auto max-w-7xl px-6 mb-20">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Key Takeaways</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl bg-primary/10 border border-primary/20 hover:border-primary/40 transition"
          >
            <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-bold mb-2">Empati adalah Fondasi</h4>
            <p className="text-sm text-muted-foreground">
              Memahami bagaimana pengguna berpikir, merasa, dan bertindak adalah kunci desain yang
              baik.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl bg-secondary/10 border border-secondary/20 hover:border-secondary/40 transition"
          >
            <div className="h-12 w-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-secondary" />
            </div>
            <h4 className="font-bold mb-2">Data Beats Assumption</h4>
            <p className="text-sm text-muted-foreground">
              Jangan percaya intuisi. Wawancarai pengguna, observasi, dan kumpulkan data nyata.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-2xl bg-accent/10 border border-accent/20 hover:border-accent/40 transition"
          >
            <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
              <Lightbulb className="h-6 w-6 text-accent" />
            </div>
            <h4 className="font-bold mb-2">Insight Drives Design</h4>
            <p className="text-sm text-muted-foreground">
              POV dari needfinding menjadi north star dalam setiap keputusan desain & development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-center text-primary-foreground"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Membangun Solusi yang Benar-Benar Membantu?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Dengan memahami kebutuhan pengguna melalui POV dan needfinding, kita bisa create product
            yang truly resonates dengan mahasiswa ITS.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-8 py-3.5 font-semibold hover:bg-white/90 transition shadow-[var(--shadow-glow)]"
          >
            Kembali ke Beranda <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>

      {/* Footer spacing */}
      <div className="h-12" />
    </div>
  );
}
