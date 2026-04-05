import perfilImage from '../assets/images/boy_image.jpeg'

const profileData = {
  name: "Samuel Rivera",
  aboutMe: `Tecnólogo en Desarrollo de Software y estudiante de último año de Ingeniería. Me apasiona crear interfaces excepcionales, combinando lógica sólida con diseños limpios en entornos web y móvil.`,
  experienceText: `2 años como Frontend. Lideré la UI de una Wallet en Flutter y Quasar. Especialista en React, Vue y Figma, transformando ideas en productos digitales de alto rendimiento.`,
  personalDetails: `Disfruto caminar, tocar la guitarra y compartir con mi familia y amigos.`,
  phrase: "Empieza haciendo lo necesario, luego lo posible, y cuando menos te los esperes estarás haciendo algo increíble",
  stack: [
    { name: "React", icon: "⚛️" }, { name: "Vue", icon: "🖖" }, { name: "Flutter", icon: "💙" },
    { name: "Tailwind", icon: "🌬️" }, { name: "Figma", icon: "🎨" }, { name: "JS", icon: "🟨" }
  ]
};

export default function HomePage() {
  return (
    <>
      {/* Mantenemos tu estructura de 7 filas y padding exacto */}
      <section className="min-h-screen max-h-screen bg-black text-white grid grid-rows-7 gap-2 p-8 overflow-hidden">

        {/* FILA SUPERIOR (Tus 3 filas originales) */}
        <div className="row-span-3 grid grid-cols-1 md:grid-cols-12 gap-2">
          
          <div className="bg-zinc-900 md:col-span-3 rounded-2xl overflow-hidden border border-zinc-800">
            <img src={perfilImage} alt="perfil-image" className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500' />
          </div>
          
          <div className="bg-zinc-900 md:col-span-5 rounded-2xl p-6 border border-zinc-800 flex flex-col justify-center">
             <p className="text-blue-400 text-xs font-bold uppercase mb-2 tracking-widest">Frontend Developer</p>
             <h1 className="text-3xl font-extrabold mb-3">Hola, soy {profileData.name}</h1>
             <p className="text-zinc-400 text-sm leading-relaxed">{profileData.aboutMe}</p>
          </div>
          
          <div className="bg-blue-950 md:col-span-2 rounded-2xl border border-blue-900 p-6 flex flex-col justify-end">
            <p className="text-2xl mb-2">🎨</p>
            <h3 className="font-bold">Diseño UI</h3>
            <p className="text-blue-300 text-xs opacity-70">Figma & Mockups</p>
          </div>

          <div className="md:col-span-2 grid grid-rows-2 gap-2">
            <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-4 flex items-center gap-3">
              <span className="text-2xl">🌐</span>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase">Idioma</p>
                <p className="text-sm font-bold">Español</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-4 flex items-center gap-3">
              <span className="text-2xl">🌙</span>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase">Modo</p>
                <p className="text-sm font-bold">Oscuro</p>
              </div>
            </div>
          </div>

        </div>
        
        {/* FILA INFERIOR (Tus 4 filas originales) */}
        <div className="row-span-4 grid grid-cols-1 md:grid-cols-5 gap-2">

          {/* Bloque Izquierdo (3/5 de ancho) */}
          <div className="md:col-span-3 grid grid-cols-12 grid-rows-[40%_60%] gap-2 h-full">
            
            {/* Redes e Imagen pequeña */}
            <div className="col-span-5 grid grid-rows-7 gap-2 row-span-1">
                <div className="row-span-2 bg-zinc-800 rounded-2xl p-4 flex items-center justify-around border border-zinc-700">
                    <span className="text-xs font-bold">GH</span>
                    <span className="text-xs font-bold">IN</span>
                    <span className="text-xs font-bold">EM</span>
                </div>
                <div className="row-span-5 bg-zinc-900 rounded-2xl flex flex-col items-center justify-center p-4 border border-zinc-800 text-center">
                    <p className="text-[10px] text-zinc-500 italic">"{profileData.personalDetails}"</p>
                </div>
            </div>

            {/* Experiencia */}
            <div className="bg-zinc-900 col-span-7 rounded-2xl row-span-1 p-6 border border-zinc-800 flex flex-col justify-center">
               <h3 className="text-blue-400 font-bold mb-2 text-sm flex items-center gap-2">💼 Experiencia</h3>
               <p className="text-zinc-400 text-xs leading-snug">{profileData.experienceText}</p>
            </div>

            {/* Stack */}
            <div className="bg-sky-950 col-span-8 rounded-2xl row-span-1 p-6 border border-sky-900">
               <p className="text-xs font-bold mb-3 uppercase tracking-tighter text-sky-300">Developer Stack</p>
               <div className="grid grid-cols-6 gap-2">
                  {profileData.stack.map(s => (
                    <div key={s.name} title={s.name} className="bg-sky-900/30 aspect-square rounded-lg flex items-center justify-center text-lg border border-sky-800/50">
                      {s.icon}
                    </div>
                  ))}
               </div>
            </div>

            {/* Imagen Decorativa (Guitarra) */}
            <div className="bg-zinc-800 col-span-4 rounded-2xl row-span-1 flex flex-col items-center justify-center border border-zinc-700">
               <span className="text-3xl mb-1">🎸</span>
               <p className="text-[8px] text-zinc-500 uppercase tracking-widest">Hobby</p>
            </div>

          </div>
          
          {/* Bloque Derecho (2/5 de ancho) */}
          <div className="md:col-span-2 grid grid-rows-3 gap-2">
            
            <div className="bg-blue-700 row-span-1 rounded-2xl p-6 flex items-center shadow-lg border border-blue-600">
              <p className="text-sm lg:text-base font-medium italic leading-tight">
                "{profileData.phrase}"
              </p>
            </div>

            <div className="bg-zinc-900 row-span-2 rounded-2xl p-6 border border-zinc-800 flex flex-col justify-between">
              <h3 className="font-bold text-lg">Proyectos</h3>
              <div className="flex-1 mt-3 bg-zinc-800/50 border border-dashed border-zinc-700 rounded-xl flex items-center justify-center">
                 <span className="text-[10px] text-zinc-500 font-bold tracking-[0.3em] uppercase">Coming Soon</span>
              </div>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}