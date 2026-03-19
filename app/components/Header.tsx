export default function Header(){
	const menuItems = [
		{ id: "1", name: "Inicio", target: "#hero" },
		{ id: "2", name: "Servicios", target: "#services" },
		{ id: "3", name: "Trabajos", target: "#projects" },
		{ id: "4", name: "Contacto", target: "#contact" },
	];

	return(
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

	)
}
