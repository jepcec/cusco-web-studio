'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'landing-intermedia',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: 'landing-intermedia', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  // Mensaje predeterminado para WhatsApp (codificado para URL)
  const whatsappMessage = encodeURIComponent("¡Hola! Me gustaría recibir más información para mi proyecto.");

  return (
    <section id="contact" className="py-24 px-6 bg-[#2a2a2a]/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* TEXT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-tighter leading-none">
              ¿Listo para <br />
              <span className="text-modline">empezar?</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed uppercase font-bold text-xs tracking-widest">
              Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas con una propuesta personalizada.
            </p>

            <div className="space-y-8">
              {/* WHATSAPP MEJORADO: Todo el bloque es un enlace */}
              <a 
                href={`https://wa.me/51912648714?text=${whatsappMessage}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 group cursor-pointer w-fit"
              >
                <div className="w-12 h-12 flex items-center justify-center ">
                  <span className="font-black">
                    <img 
                      src="/whatsapp.svg" 
                      alt="WhatsApp" 
                      className="w-8 h-8 group-hover:brightness-0 group-hover:invert transition-all" 
                    />
                  </span>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-gray-500 tracking-[0.2em] group-hover:text-modline transition-colors">
                    WhatsApp Directo
                  </p>
                  <p className="text-xl font-bold hover:text-modline transition-colors">
                    +51 912 648 714
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="border border-modline p-8 md:p-12 bg-[#2a2a2a]/20 shadow-[16px_16px_0px_rgba(242,242,242,0.05)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-modline">Nombre</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-modline transition-colors placeholder:text-gray-600"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-modline">Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-modline transition-colors placeholder:text-gray-600"
                    placeholder="ejemplo@correo.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-modline">Servicio de interés</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-modline transition-colors appearance-none cursor-pointer"
                >
                  <option value="landing-basica" className="bg-[#3d3d3d]">Landing Page Básica</option>
                  <option value="landing-intermedia" className="bg-[#3d3d3d]">Landing Page Intermedia</option>
                  <option value="landing-completa" className="bg-[#3d3d3d]">Landing Page Completa</option>
                  <option value="google-maps" className="bg-[#3d3d3d]">Google Business & Maps</option>
                  <option value="otro" className="bg-[#3d3d3d]">Otro Proyecto Especial</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-modline">Mensaje</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-modline transition-colors resize-none placeholder:text-gray-600"
                  placeholder="Cuéntanos un poco sobre tu negocio o proyecto..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-5 border border-modline font-black uppercase text-xs tracking-[0.3em] hover:bg-modline hover:text-[var(--background)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-xs uppercase font-black tracking-widest text-center mt-4">
                  ✓ Mensaje enviado con éxito. Te contactaremos pronto.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-xs uppercase font-black tracking-widest text-center mt-4">
                  ✗ Error al enviar. Por favor, intenta por WhatsApp.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
