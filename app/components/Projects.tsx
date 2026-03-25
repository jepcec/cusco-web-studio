import Link from "next/link";
export default function Projects(){
  const projects = [
    {
      slug: "bambu-spa-cusco",
      title: "Centro de Terapias y Masajes",
      description: "Landing page enfocada en conversión y presentación de servicios de bienestar.",
      tags: ["Spa", "Landing page intermedia"],
      imaurl:"https://res.cloudinary.com/de1pvywo7/image/upload/bambuspacusco_hero_eooanr.webp"
    },
    {
      slug: "agencia-marketing",
      title: "Agencia de Marketing Digital",
      description: "Sitio web de una página diseñado para maximizar la captación de leads.",
      tags: ["Next.js", "TypeScript"],
      imaurl:"https://res.cloudinary.com/de1pvywo7/image/upload/bambuspacusco_hero_eooanr.webp"
    }
  ];

	return(
          <section id="projects" className="py-20 px-6 border-b border-modline">
            <h2 className="text-2xl font-bold mb-12 text-center uppercase tracking-widest">Trabajos Realizados</h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {projects.map((project) => (
                <Link key={project.slug} href={`/trabajos/${project.slug}`} className="border border-modline group block hover:shadow-[4px_4px_0px_var(--modline)] transition-all">
                  <div className="h-56 border-b border-modline bg-[#2a2a2a] flex items-center justify-center overflow-hidden relative">
                    <span className="text-gray-500 group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={project.imaurl}
                      alt="Captura principal"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    </span>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-sm">
                      <span className="border border-modline px-4 py-2 uppercase text-sm font-bold bg-[var(--background)]">Ver Detalles ↗</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-modline transition-colors">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs border border-modline px-2 py-1">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}

            </div>
          </section>


	)
}
