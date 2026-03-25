"use client"
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";

const projectsDB = [
  {
    slug: "bambu-spa-cusco",
    title: "Bambú Spa Cusco — Landing Page Comercial",
    description:
      "Diseño y desarrollo de una landing page comercial para un spa ubicado en Cusco, orientada a la captación directa de reservas mediante WhatsApp. El proyecto se enfocó en transmitir una identidad visual relajante y profesional, optimizando la estructura para conversión, claridad de servicios y experiencia móvil.",
    client: "Bambú Spa Cusco",
    year: "2026",
    technologies: [
      "Astro",
      "Tailwind CSS",
      "React Components",
      "Optimización de Imágenes",
      "Integración WhatsApp",
      "Resend API"
    ],
    liveUrl: "https://www.bambuspacusco.com/",
    githubUrl: "",
    challenges:
      "Optimización de rendimiento para carga rápida en dispositivos móviles (principal fuente de tráfico), implementación de estructura clara de servicios con precios visibles y generación de enlaces dinámicos a WhatsApp con mensajes pre–rellenados según el tratamiento seleccionado.",

    heroImage: "https://res.cloudinary.com/de1pvywo7/image/upload/bambuspacusco_hero_eooanr.webp",
    mobileImage: "https://res.cloudinary.com/de1pvywo7/image/upload/bambuspacusco_movil_xyyd1x.webp",
    sectionImage: "https://res.cloudinary.com/de1pvywo7/image/upload/v1772067075/bambuspacusco_seccion_ur89gu.webp"
  },
  {
    slug: "agencia-marketing",
    title: "Agencia de Marketing Digital",
    description:
      "Sitio web de alto impacto visual para una agencia de marketing. Se priorizó una arquitectura que permitiera animaciones fluidas sin sacrificar el rendimiento ni el SEO.",
    client: "Agencia Grow",
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://ejemplo-agencia.com",
    githubUrl: "#",
    challenges:
      "Estructuración de Server Components en Next.js para manejar contenido dinámico del portafolio de la agencia de forma eficiente.",

    heroImage: "https://tusitio.com/hero2.jpg",
    mobileImage: "https://tusitio.com/mobile2.jpg",
    sectionImage: "https://tusitio.com/section2.jpg"
  }
];

export default function ProjectDetail() {
  const params = useParams<{ slug: string }>();
  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!params) {
    notFound();
  }

  const project = projectsDB.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <div className="p-2 min-h-screen font-sans">
        <div className="border border-modline min-h-[calc(100vh-1rem)] flex flex-col bg-[var(--background)]">

          <header className="border-b border-modline p-6 flex justify-between items-center sticky top-0 bg-[var(--background)] z-50">
            <Link href="/" className="font-bold tracking-widest text-xl hover:text-modline transition-colors"> CUSCO DIGITAL STUDIO</Link>
            <Link href="/#projects" className="px-4 py-2 border border-modline hover:bg-modline hover:text-[var(--background)] transition-colors text-sm uppercase font-bold">
              ← Volver
            </Link>
          </header>

          <main className="flex-grow">

            <section className="py-16 px-6 border-b border-modline text-center bg-[#2a2a2a]/20">
              <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                {project.title}
              </h1>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-mono text-gray-400">
                <span className="border border-modline px-3 py-1 bg-[var(--background)]">Cliente: {project.client}</span>
                <span className="border border-modline px-3 py-1 bg-[var(--background)]">Año: {project.year}</span>
              </div>
            </section>

            <section className="max-w-5xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">

              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-widest mb-4 border-b border-modline pb-2">
                    Tecnologías
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs border border-gray-600 px-3 py-2 uppercase tracking-wider bg-[#2a2a2a]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold uppercase tracking-widest mb-4 border-b border-modline pb-2">
                    Enlaces
                  </h3>
                  <div className="flex flex-col gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between border border-modline px-4 py-3 hover:bg-modline hover:text-[var(--background)] transition-colors group"
                    >
                      <span className="font-bold uppercase text-sm">Ver Proyecto Vivo</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-12">

                <div>
                  <h2 className="text-2xl font-bold uppercase tracking-widest mb-6">
                    El Proyecto
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg text-justify">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold uppercase tracking-widest mb-6">
                    Desafío Técnico
                  </h2>
                  <p className="text-gray-400 leading-relaxed border-l-4 border-modline pl-4 text-justify">
                    {project.challenges}
                  </p>
                </div>

                <div className="space-y-6">

                  <div
                    className="aspect-video border border-modline bg-[#2a2a2a] overflow-hidden group cursor-pointer"
                    onClick={() => setActiveImage(project.heroImage)}
                  >
                    <img
                      src={project.heroImage}
                      alt="Captura principal"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div
                      className="aspect-square border border-modline bg-[#2a2a2a] overflow-hidden cursor-pointer"
                      onClick={() => setActiveImage(project.mobileImage)}
                    >
                      <img
                        src={project.mobileImage}
                        alt="Detalle móvil"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div
                      className="aspect-square border border-modline bg-[#2a2a2a] overflow-hidden cursor-pointer"
                      onClick={() => setActiveImage(project.sectionImage)}
                    >
                      <img
                        src={project.sectionImage}
                        alt="Sección interna"
                        className="w-full h-full object-cover"
                      />
                    </div>

                  </div>
                </div>

              </div>
            </section>

          </main>
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-6"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="Preview"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </>
  );
}
