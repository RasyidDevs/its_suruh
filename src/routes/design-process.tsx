import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ExternalLink,
  FileText,
  Lightbulb,
  Palette,
  Smartphone,
  CheckCircle2,
  Sparkles,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/design-process")({
  head: () => ({
    meta: [
      { title: "Design Process — ITSuruh" },
      {
        name: "description",
        content: "Proses desain ITSuruh dari Needfinding hingga HiFi dan Pitch Slide.",
      },
    ],
  }),
  component: DesignProcess,
});

const steps = [
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
        url: "https://www.figma.com/design/EV0okwVGLoRADx1G2NzyMY/Untitled?node-id=0-1&t=Rr2HTjmnxVmHiNwq-1",
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
        url: "https://www.figma.com/design/LHxfemvU5gImKqmbLnIjJp/ITSuruh--Copy-?m=auto&t=f5o9VAYSPCH7fapw-1",
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
        label: "Link Coming Soon",
        url: "#",
        disabled: true,
      },
    ],
  },
];

function DesignProcess() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <nav className="mx-auto max-w-7xl px-6 h-18 py-3 flex items-center">
          <a href="/" className="text-lg font-bold text-primary hover:text-primary/80 transition">
            ← Kembali
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-secondary/30 blur-3xl -z-10" />
        <div className="absolute -bottom-40 -left-20 w-[420px] h-[420px] rounded-full bg-primary/40 blur-3xl -z-10" />

        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-medium backdrop-blur text-primary">
              <Lightbulb className="h-3.5 w-3.5" /> Design Journey
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Design Process <span className="text-secondary">ITSuruh</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Dari riset mendalam hingga produk final yang siap launch. Lihat setiap tahap desain
              ITSuruh di sini.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:gap-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? "md:[direction:rtl]" : ""}`}
                >
                  {/* Content */}
                  <div className={!isEven ? "md:[direction:ltr]" : ""}>
                    <div className={`border border-border rounded-2xl p-8 ${step.bgColor}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`h-16 w-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white`}
                        >
                          <span className="text-2xl font-bold">{step.number}</span>
                        </div>
                        <div>
                          <Icon
                            className="h-8 w-8 mb-2"
                            style={{
                              color: step.color.split(" ")[1],
                            }}
                          />
                        </div>
                      </div>

                      <h2 className="text-3xl font-bold mb-3">{step.title}</h2>
                      <p className="text-lg text-muted-foreground mb-8">{step.description}</p>

                      <div className="space-y-3">
                        {step.links.map((link, linkIdx) => (
                          <a
                            key={linkIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-3 px-5 py-3 rounded-lg font-semibold transition ${
                              link.disabled
                                ? "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
                                : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl"
                            }`}
                          >
                            <FileText className="h-4 w-4" />
                            {link.label}
                            {!link.disabled && <ExternalLink className="h-4 w-4" />}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual Indicator */}
                  <div className={`flex justify-center ${!isEven ? "md:[direction:ltr]" : ""}`}>
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full blur-3xl opacity-30`}
                      />
                      <div
                        className={`relative h-48 w-48 md:h-64 md:w-64 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-2xl`}
                      >
                        <Icon className="h-24 w-24 md:h-32 md:w-32" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Flow Overview */}
      <section className="py-20 md:py-32 bg-muted/40">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Alur Desain <span className="text-secondary">ITSuruh</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Setiap tahap dirancang untuk memastikan produk final yang optimal dan sesuai kebutuhan
              pengguna.
            </p>
          </motion.div>

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
                className="bg-background border border-border rounded-xl p-6 text-center"
              >
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-primary text-lg">{idx + 1}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-10 md:p-16 text-center text-primary-foreground"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Design Process yang Terstruktur</h2>
            <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
              Dari riset pengguna hingga produk final, setiap langkah dipikirkan dengan matang untuk
              memastikan ITSuruh solve masalah dengan tepat.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-8 py-3 font-semibold hover:bg-white/90 transition shadow-lg"
            >
              ← Kembali ke Beranda
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-12" />
    </div>
  );
}
