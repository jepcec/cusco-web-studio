import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  imaurl: string;
};

const projects: Project[] = [
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

const exampleLandings = [
  {
    slug: "agencia-turismo",
    title: "Agencia de Turismo",
    description: "Landing page para agencia de tours con integración de WhatsApp.",
    tags: ["Turismo", "Next.js", "WhatsApp"],
    imaurl:"https://res.cloudinary.com/de1pvywo7/image/upload/v1776640464/Agencia-templete_texv2j.png"
  },
  {
    slug: "hoteleria",
    title: "Hoteleria",
    description: "Landing page para hoteles y hospedajes con reservaciones在线.",
    tags: ["Hotel", "Reservas", "Next.js"],
    imaurl:"https://res.cloudinary.com/de1pvywo7/image/upload/v1776640464/Agencia-templete_texv2j.png"
  }
];

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="flex items-center gap-6 mb-16">
    <div>
      <h3 className="text-xl md:text-2xl font-black uppercase tracking-[0.2em] whitespace-nowrap">
        {title}
      </h3>
      {subtitle && (
        <p className="text-gray-400 text-xs tracking-widest uppercase mt-1">{subtitle}</p>
      )}
    </div>
    <div className="h-[1px] bg-modline/30 w-full"></div>
  </div>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <Link 
    href={`/trabajos/${project.slug}`} 
    className="border border-modline group block hover:shadow-[4px_4px_0px_var(--modline)] transition-all"
  >
    <div className="h-56 border-b border-modline bg-[#2a2a2a] flex items-center justify-center overflow-hidden relative">
      <img
        src={project.imaurl}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-sm">
        <span className="border border-modline px-4 py-2 uppercase text-sm font-bold bg-[var(--background)]">
          Ver Detalles ↗
        </span>
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
);

export default function Projects(){
  return(
    <section id="projects" className="py-20 px-6 border-b border-modline">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            Proyectos
          </h2>
          <div className="w-24 h-1 bg-modline mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto uppercase text-xs tracking-[0.3em] font-bold">
            Trabajos realizados y galeria.
          </p>
        </header>
        
        <SectionHeader title="Proyectos" subtitle="trabajos publicados" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <SectionHeader title="Galeria" subtitle="Revisa cómo puede verse tu próxima pagina web" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {exampleLandings.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
