import Image from "next/image"
export default function AboutUs(){
	return(
		   <section id="sobre-nosotros" className="py-20 px-6 border-b border-modline bg-[#2a2a2a]/10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* TEXTO */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-widest mb-6">
            Sobre <b>Nosotros</b>
          </h2>

          <p className="text-gray-200 mb-6 leading-relaxed text-sm sm:text-base">
            Somos <b>CUSCO DIGITAL STUDIO</b>, un equipo apasionado por el diseño, la estrategia y el desarrollo digital.
            Nos especializamos en crear soluciones modernas y efectivas para negocios que buscan destacar en internet.
          </p>

          <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
            Nuestra misión es impulsar la presencia digital de nuestros clientes, combinando creatividad,
            tecnología y estrategia para convertir visitas en clientes reales.
          </p>

          <a
            href="#contact"
            className="inline-block px-8 py-3 border border-modline hover:bg-modline hover:text-[var(--background)] transition-colors font-bold tracking-widest uppercase text-sm"
          >
            Contáctanos
          </a>
        </div>


	  <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
	  {/* Imagen decorativa */}
	  <div className="mt-16 w-full max-w-4xl relative">
	    <img
	      src="https://res.cloudinary.com/de1pvywo7/image/upload/v1773956570/imagen_d1vozj.webp"
	      alt="Presencia digital"
	      className="w-full object-cover opacity-80 
	      [clip-path:polygon(5%_15%,20%_2%,40%_0%,60%_5%,80%_2%,95%_10%,98%_30%,90%_50%,95%_75%,85%_95%,65%_98%,45%_93%,25%_97%,8%_85%,2%_60%,0%_35%)]
	      hover:scale-105 transition-transform duration-700 ease-out"
	    />
	  </div>
	</div>

      </div>
    </section>
	)
}
