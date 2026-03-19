export default function(){
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
	return(
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
	)
}
