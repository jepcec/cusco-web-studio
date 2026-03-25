export default function Hero(){
	return(
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

		      <p className="max-w-xl mx-auto lg:mx-0 leading-relaxed text-gray-300 mb-10 text-sm sm:text-base text-justify">
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

	)
}
