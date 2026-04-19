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
    description: "Landing page para agencia de tours en Cusco con integración de WhatsApp.",
    tags: ["Turismo", "Next.js", "WhatsApp"],
    imaurl:"https://res.cloudinary.com/de1pvywo7/image/upload/agencia_turismo_mockup_w6fzsd.webp"
  },
  {
    slug: "clinica-dental",
    title: "Clínica Dental",
    description: "Sitio web para consultorio dental con agendamiento de citas.",
    tags: ["Salud", "Landing page básica"],
    imaurl:"https://res.cloudinary.com/de1pvywo7/image/upload/clinica_dental_mockup_jkz9xm.webp"
  },
  {
    slug: "restaurante-gastronomico",
    title: "Restaurante Gastronómico",
    description: "Web para restaurante con menú interactivo y reservaciones.",
    tags: ["Restaurante", "Interactivo"],
    imaurl:"https://res.cloudinary.com/de1pvywo7/image/upload/restaurante_mockup_ap5yz8.webp"
  },
  {
    slug: "academia-cursos",
    title: "Academia de Cursos",
    description: "Plataforma para cursos online con integración de pago.",
    tags: ["Educación", "E-commerce"],
    imaurl:"https://res.cloudinary.com/de1pvywo7/image/upload/academia_mockup_bh7k2w.webp"
  }
];

const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex items-center gap-6 mb-12">
    <h3 className="text-xl md:text-2xl font-black uppercase tracking-[0.2em] whitespace-nowrap">
      {title}
    </h3>
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
        <h2 className="text-2xl font-bold mb-12 text-center uppercase tracking-widest">Trabajos Realizados</h2>
        
        <SectionHeader title="Proyectos Reales" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <SectionHeader title="Ejemplos de Landing Pages" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {exampleLandings.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
