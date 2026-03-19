import Image from "next/image";
import Link from "next/link";


import Header from "./components/Header";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import AboutUs from "./components/AboutUs";

export default function Home() {
  // --- DATOS: PROYECTOS ---
  return (
	<div className="p-2 min-h-screen font-sans">
		<div className="border border-modline min-h-[calc(100vh-1rem)] flex flex-col">
		{/* --- HEADER --- */}
		<Header/>

		{/* --- MAIN CONTENT --- */}
		<main className="flex-grow">
		  
			{/* 1. HERO SECTION */}
			<Hero/>

			{/* 2. SERVICES SECTION (Renderizado Dinámico) */}
			<Services/>

			{/* 3. PROJECTS SECTION (Renderizado Dinámico) */}
			<Projects/>

			{/* ... LA SECCIÓN DE CONTACTO Y EL FOOTER SE MANTIENEN IGUAL ... */}
			<AboutUs/>
		  
		</main>
		</div>
	</div>
  );
}
