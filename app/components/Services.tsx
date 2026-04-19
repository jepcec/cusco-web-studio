type Service = {
  id: string;
  name: string;
  badge: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  includes: string[];
  featured?: boolean;
};

export default function Services() {
  const landingServices = [
    {
      id: "basico",
      name: "Landing Page Básica",
      badge: "Esencial",
      description: "Para quienes inician su presencia digital.",
      price: "S/ 450",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-modline">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      includes: [
        "Tu nombre de dominio (.com) por 1 año",
        "1 página / hasta 4 secciones",
        "Se adapta a cualquier pantalla",
        "Botón directo a WhatsApp",
        "Formulario de contacto",
        "5 horas de soporte técnico"
      ],
    },
    {
      id: "intermedio",
      name: "Landing Page Intermedia",
      badge: "recomendado",
      description: "Para quienes necesitan más contenido y captar clientes.",
      price: "S/ 750",
      featured: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-modline">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
includes: [
        "Tu nombre de dominio (.com) por 1 año",
        "Hasta 4 páginas internas",
        "Secciones ilimitadas",
        "Se adapta a cualquier pantalla",
        "Botón directo a WhatsApp",
        "Mensaje de WhatsApp personalizado",
        "Formulario de contacto",
        "10 horas de soporte técnico"
      ],
    },
    {
      id: "completo",
      name: "Landing Page Completa",
      badge: "Premium",
      description: "Para quienes buscan escalar y rendimiento máximo.",
      price: "S/ 1100",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-modline">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M8 11l3 3 5-5" />
        </svg>
      ),
      includes: [
        "Tu nombre de dominio (.com) por 1 año",
        "Páginas ilimitadas",
        "Secciones ilimitadas",
        "Se adapta a cualquier pantalla",
        "Botón directo a WhatsApp",
        "Mensaje de WhatsApp personalizado",
        "Formulario de contacto",
        "Google Maps configurado",
        "Reportes de visitas",
        "15 horas de soporte técnico"
      ],
    }
  ];

  const extraServices = [
    {
      id: "google-maps",
      name: "Google Business & Maps",
      badge: "Local SEO",
      description: "Para quienes quieren que su negocio, consultorio o local aparezca en Google Maps.",
      price: "S/ 150",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-modline">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      includes: [
        "Creación de ficha en Google",
        "Optimización para búsquedas locales",
        "Configuración de horarios",
        "Fotos",
        "Botón directo a WhatsApp"
      ]
    },
      {
        id: "redisenio",
        name: "Rediseño y Mejora",
        badge: "Actualización",
        description: "Para quienes tienen una web antigua y quieren modernizarla.",
        price: "Desde S/ 400",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-modline">
            <path d="M11 4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            <path d="M21 20a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2a1 1 0 011 1v2z" />
            <path d="M8 12a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H9a1 1 0 01-1-1v-6z" />
          </svg>
        ),
        includes: [
          "Análisis de tu web actual",
          "Diseño moderno y responsivo",
          "Optimización de velocidad",
          "Mejora de SEO básico",
        ]
      }
  ];

  const ServiceCard = ({ service, isFeatured = false }:{service: Service, isFeatured?:boolean}) => (
    <div
      className={`group border border-modline p-8 flex flex-col h-full transition-all duration-500 relative
      ${isFeatured 
        ? "bg-modline/5 shadow-[12px_12px_0px_var(--modline)] scale-[1.02] z-10" 
        : "hover:bg-[#2a2a2a]/40 hover:shadow-[6px_6px_0px_rgba(242,242,242,0.3)] hover:-translate-y-1"
      }`}
    >
      {isFeatured && (
        <div className="absolute top-0 right-8 -translate-y-1/2 bg-modline text-[var(--background)] text-[10px] font-black px-3 py-1 uppercase tracking-widest">
          {service.badge}
        </div>
      )}

      <div className="mb-8 flex justify-between items-start">
        <div>
          {!isFeatured && (
            <span className="text-[10px] border border-modline/30 px-2 py-1 uppercase tracking-wider mb-3 inline-block font-bold">
              {service.badge}
            </span>
          )}
          <h3 className="text-2xl font-black uppercase leading-tight">
            {service.name}
          </h3>
        </div>
        <div className="opacity-60 group-hover:opacity-100 transition-opacity">
          {service.icon}
        </div>
      </div>

      <p className="text-gray-400 text-sm mb-8 leading-relaxed text-justify">
        {service.description}
      </p>

      <div className="mb-10 pt-6 border-t border-modline/20">
        <span className="text-[10px] text-gray-400 block uppercase font-black tracking-widest mb-1">
          Inversión desde
        </span>
        <span className="text-4xl font-black text-modline tracking-tighter">
          {service.price}
        </span>
      </div>

      <div className="flex-grow space-y-8">
        <div>
          <h4 className="font-black text-white text-xs uppercase tracking-widest border-l-2 border-modline pl-3 mb-4">
            ¿Qué incluye?
          </h4>
          <ul className="space-y-3">
            {service.includes.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="text-modline font-black mt-0.5">✓</span> 
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <a
          href="#contact"
          className={`block text-center px-6 py-4 border border-modline font-black uppercase text-xs tracking-[0.2em] transition-all
          ${isFeatured
            ? "bg-modline text-[var(--background)] hover:bg-transparent hover:text-modline"
            : "hover:bg-modline hover:text-[var(--background)] shadow-[4px_4px_0px_rgba(242,242,242,0.1)] hover:shadow-none"
          }`}
        >
          Consultar
        </a>
      </div>
    </div>
  );

  const SectionHeader = ({ title }:{title: string}) => (
    <div className="flex items-center gap-6 mb-16 mt-12">
        <h3 className="text-xl md:text-2xl font-black uppercase tracking-[0.2em] whitespace-nowrap">
            {title}
        </h3>
        <div className="h-[1px] bg-modline/30 w-full"></div>
    </div>
  );

  return (
    <section id="services" className="py-24 px-6 border-b border-modline bg-[#2a2a2a]/10">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-modline mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto uppercase text-xs tracking-[0.3em] font-bold">
            Soluciones digitales de alto impacto para quienes buscan crecer.
          </p>
        </header>

        {/* SECTION: LANDING PAGES */}
        <SectionHeader title="Desarrollo Web" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-24">
          {landingServices.map((service) => (
            <ServiceCard key={service.id} service={service} isFeatured={service.featured} />
          ))}
        </div>

        {/* SECTION: EXTRA SERVICES */}
        <SectionHeader title="Servicios Extra" />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
          {extraServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
          
          {/* CUSTOM PROJECTS CARD */}
          <div className="border border-dashed border-modline/30 p-8 flex flex-col justify-center items-center text-center group hover:bg-modline/5 transition-all min-h-[400px]">
              <div className="mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-modline">
                    <path d="M12 2v20M2 12h20" />
                </svg>
              </div>
              <h4 className="text-2xl font-black uppercase mb-3">¿Tienes otro proyecto?</h4>
              <p className="text-sm text-gray-400 mb-8 max-w-[250px]">Desarrollos a medida, tiendas virtuales o sistemas específicos.</p>
              <a 
                href="#contact"
                className="text-xs font-black uppercase tracking-widest border-b-2 border-modline pb-1 hover:text-modline/70 transition-colors"
              >
                Hablemos de tu idea
              </a>
          </div>
        </div>
      </div>
    </section>
  );
}
