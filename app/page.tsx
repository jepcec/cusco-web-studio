import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const menuItems = [
    { id: "1", name: "Inicio", target: "#hero" },
    { id: "2", name: "Servicios", target: "#services" },
    { id: "3", name: "Trabajos", target: "#projects" },
    { id: "4", name: "Contacto", target: "#contact" },
  ];

  // --- DATOS: SERVICIOS ---
const services = [
  {
    id: "basico",
    name: "Landing Page Básica",
    badge: "Esencial",
    description: "Solución estructurada para negocios que necesitan presencia digital clara y funcional sin arquitectura compleja.",
    price: "S/ 450",
    includes: [
      "Dominio y Hosting (cliente puede adquirirlo o lo gestionamos con asesoría)",
      "1 página",
      "1 a 4 secciones",
      "Diseño responsivo",
      "Integración de botón directo a WhatsApp",
      "Formulario de contacto",
      "5 horas de soporte técnico posterior a la entrega"
    ],
    tech: [
      "Astro / Next.js",
      "Tailwind CSS",
      "Buenas prácticas de rendimiento y SEO"
    ],
  },
  {
    id: "intermedio",
    name: "Landing Page Intermedia",
    badge: "Completa",
    description: "Desarrollo estructurado para negocios que requieren mayor profundidad de contenido y mejor captación de clientes.",
    price: "S/ 750",
    includes: [
      "Dominio y Hosting (cliente puede adquirirlo o lo gestionamos con asesoría)",
      "1 a 4 páginas",
      "1 a 4 secciones por página",
      "Diseño responsivo",
      "Integración de botón directo a WhatsApp",
      "Mensaje prellenado dinámico en WhatsApp",
      "Formulario de contacto",
      "10 horas de soporte técnico posterior a la entrega"
    ],
    tech: [
      "Astro / Next.js",
      "Tailwind CSS",
      "Buenas prácticas de rendimiento y SEO"
    ],
  },
  {
    id: "completo",
    name: "Landing Page Completa",
    badge: "Expandida",
    description: "Solución avanzada orientada a conversión, rendimiento y escalabilidad para negocios que buscan consolidar su presencia digital.",
    price: "S/ 1100",
    includes: [
      "Dominio y Hosting (cliente puede adquirirlo o lo gestionamos con asesoría)",
      "Páginas necesarias según el proyecto",
      "Secciones necesarias",
      "Diseño responsivo",
      "Integración de botón directo a WhatsApp",
      "Mensaje prellenado dinámico en WhatsApp",
      "Formulario de contacto",
      "20 horas de soporte técnico posterior a la entrega."
    ],
    tech: [
      "Astro / Next.js",
      "Tailwind CSS",
      "Buenas prácticas de rendimiento y SEO"
    ],
  }
];
  // --- DATOS: PROYECTOS ---
  const projects = [
    {
      slug: "bambu-spa-cusco",
      title: "Centro de Terapias y Masajes",
      description: "Landing page enfocada en conversión y presentación de servicios de bienestar.",
      tags: ["Astro", "Tailwind CSS"],
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

  return (
    <div className="p-2 min-h-screen font-sans">
      <div className="border border-modline min-h-[calc(100vh-1rem)] flex flex-col">
        
        {/* --- HEADER --- */}
        <header className="border-b border-modline sticky top-0 bg-[var(--background)] z-50">
          <nav className="px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="font-bold tracking-widest text-xl">CUSCO DIGITAL STUDIO</div>
            <div className="flex gap-2 sm:gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.target}
                  className="px-3 py-1 border border-transparent hover:border-modline hover:bg-modline hover:text-[var(--background)] transition-all cursor-pointer font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </header>

        {/* --- MAIN CONTENT --- */}
        <main className="flex-grow">
          
	{/* 1. HERO SECTION */}
		<section
		  id="hero"
		  className="border-b border-modline min-h-[70vh] flex items-center"
		>
		  <div className="max-w-7xl mx-auto w-full px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
		    
		    {/* IMAGEN */}
		    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
			{/* Imagen decorativa */}
			<div className="mt-16 w-full max-w-4xl relative">
			  <img
			    src="https://res.cloudinary.com/de1pvywo7/image/upload/hero_ima_es_presencial_digital_uppxd1.png"
			    alt="Presencia digital"
			    className="w-full object-cover opacity-80 
			    [clip-path:polygon(0%_25%,15%_10%,40%_5%,70%_15%,100%_30%,100%_80%,75%_95%,40%_100%,10%_85%,0%_60%)]
			    hover:scale-105 transition-transform duration-700 ease-out"
			  />
			</div>
		    </div>

		    {/* TEXTO */}
		    <div className="order-2 lg:order-1 text-center lg:text-left">
		      <h1 className="text-4xl sm:text-6xl tracking-tight mb-4 uppercase">
			<b>Impulsamos tu presencia digital</b>
		      </h1>

		      <p className="text-lg sm:text-xl mb-6 text-gray-300">
			<b className="font-medium text-modline bg-[#2a2a2a] px-3 py-1 border border-modline uppercase tracking-widest text-sm">
			  Diseño • Lógica • Estrategia Digital 
			</b>
		      </p>

		      <p className="max-w-xl mx-auto lg:mx-0 leading-relaxed text-gray-200 mb-10 text-sm sm:text-base">
		      Creamos soluciones digitales modernas, rápidas y enfocadas en resultados. Ayudamos a negocios a destacar en internet y convertir visitas en clientes.
		      </p>

		      <a
			href="#contact"
			className="inline-block px-8 py-3 border border-modline hover:bg-modline hover:text-[var(--background)] transition-colors font-bold tracking-widest uppercase text-sm"
		      >
			Cotizar Proyecto
		      </a>
		    </div>

		  </div>
		</section>

          {/* 2. SERVICES SECTION (Renderizado Dinámico) */}
	<section id="services" className="py-20 px-6 border-b border-modline bg-[#2a2a2a]/10">
	  <h2 className="text-2xl font-bold mb-12 text-center uppercase tracking-widest">
	    Nuestros Servicios
	  </h2>

	  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
	    {services.map((plan) => (
	      <div
		key={plan.id}
		className={`border border-modline p-8 flex flex-col h-full transition-all duration-300
		${
		  plan.id === "premium"
		    ? "bg-[#2a2a2a]/50 shadow-[8px_8px_0px_var(--modline)]"
		    : "hover:shadow-[4px_4px_0px_var(--modline)] hover:bg-[#2a2a2a]/30"
		}`}
	      >
		{/* HEADER */}
		<div className="mb-6 border-b border-gray-600 pb-6">
		  <span className="text-xs border border-modline px-2 py-1 uppercase tracking-wider mb-4 inline-block">
		    {plan.badge}
		  </span>

		  <h3 className="text-2xl font-bold uppercase mb-2">
		    {plan.name}
		  </h3>

		  <p className="text-gray-400 text-sm min-h-[40px]">
		    {plan.description}
		  </p>
		</div>

		{/* PRECIO (Siempre alineado) */}
		<div className="mb-8">
		  <span className="text-sm text-gray-400 block uppercase">
		    Inversión desde
		  </span>
		  <span className="text-4xl font-bold text-modline block">
		    {plan.price}
		  </span>
		</div>

		{/* CONTENIDO */}
		<div className="flex-grow space-y-6 text-sm text-gray-300">
		  <div>
		    <p className="font-bold text-white uppercase border-b border-gray-700 pb-1 mb-2">
		      Incluye
		    </p>
		    <ul className="space-y-2">
		      {plan.includes.map((item, i) => (
			<li key={i} className="flex items-start gap-2">
			  <span className="text-modline">▹</span> {item}
			</li>
		      ))}
		    </ul>
		  </div>

		  <div>
		    <p className="font-bold text-white uppercase border-b border-gray-700 pb-1 mb-2">
		      Tecnología
		    </p>
		    <ul className="space-y-2">
		      {plan.tech.map((item, i) => (
			<li key={i} className="flex items-start gap-2">
			  <span className="text-modline">▹</span> {item}
			</li>
		      ))}
		    </ul>
		  </div>
		</div>

		{/* BOTÓN (Siempre abajo) */}
		<div className="mt-8">
		  <a
		    href="#contact"
		    className={`block text-center px-6 py-3 border border-modline font-bold uppercase tracking-wider transition-colors
		    ${
		      plan.id === "premium"
			? "bg-modline text-[var(--background)] hover:bg-transparent hover:text-modline"
			: "hover:bg-modline hover:text-[var(--background)]"
		    }`}
		  >
		    Elegir Plan
		  </a>
		</div>
	      </div>
	    ))}
	  </div>
	</section>

          {/* 3. PROJECTS SECTION (Renderizado Dinámico) */}
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

          {/* ... LA SECCIÓN DE CONTACTO Y EL FOOTER SE MANTIENEN IGUAL ... */}
          
        </main>
      </div>
    </div>
  );
}
