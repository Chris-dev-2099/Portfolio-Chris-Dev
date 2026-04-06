import '../styles/homePageStyle.css'
import { useMemo } from 'react';
import { useTranslation } from "react-i18next";

// Images
import perfilImage from '../assets/images/boy_image.jpeg'
import githubIcon from '../assets/images/github.png'
import linkedinIcon from '../assets/images/linkedin.png'
import emailIcon from '../assets/images/email.png'
import imageDecoration1 from '../assets/images/soft_code.jpg'
import imageDecoration2 from '../assets/images/soft_code2.jpg'
import imageDecoration3 from '../assets/images/soft_code3.jpg'
import reactIcon from '../assets/images/dev-icons/react.png'
import cssIcon from '../assets/images/dev-icons/css.png'
import htmlIcon from '../assets/images/dev-icons/html.png'
import figmaIcon from '../assets/images/dev-icons/figma.png'
import bootstrapIcon from '../assets/images/dev-icons/bootstrap.png'
import flutterIcon from '../assets/images/dev-icons/flutter.png'
import jsIcon from '../assets/images/dev-icons/js.png'
import tsIcon from '../assets/images/dev-icons/ts.png'
import quasarIcon from '../assets/images/dev-icons/quasar.png'
import tailwindcssIcon from '../assets/images/dev-icons/tailwind.png'
import vueIcon from '../assets/images/dev-icons/vue.png'


export default function HomePage() {
  const { t, i18n } = useTranslation();

  const currentLang = useMemo(
    () => (i18n.language?.startsWith("es") ? "es" : "en"),
    [i18n.language]
  );

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === "es" ? "en" : "es");
  };

  return (
    <>
      <section className="min-h-screen md:max-h-screen grid grid-rows-7 gap-2 p-9 bg-zinc-950 text-zinc-200">

        <div className="row-span-3 grid grid-cols-1 md:grid-cols-12 gap-2">
          
          {/* FOTO */}
          <div className="bg-zinc-900 md:col-span-3 rounded-2xl overflow-hidden border border-zinc-800">
            <img src={perfilImage} alt="perfil-image" className='w-full h-full object-cover' />
          </div>
          
          {/* ABOUT */}
          <div className="bg-zinc-900 md:col-span-5 rounded-2xl border border-zinc-800 p-5 flex flex-col justify-center">
            <h2 className="text-xl font-semibold text-blue-400 mb-2">
              Christopher Arboleda
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Tengo 22 años, soy tecnólogo en desarrollo de software y actualmente
              me encuentro en el último año de ingeniería de software.
            </p>
            <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
              Me apasiona el desarrollo frontend y la creación de interfaces
              modernas, funcionales y centradas en el usuario.
            </p>
            <p className="text-sm text-zinc-300 mt-2">
              Disfruto salir a caminar, tocar la guitarra y compartir con mi familia y amigos.
            </p>
          </div>
          
          {/* IMAGE */}
          <div className="overflow-hidden bg-zinc-900 md:col-span-2 rounded-2xl border border-zinc-800 flex items-center justify-center text-zinc-500 text-sm">
            <img src={imageDecoration2} alt="decoration-image" className='w-full h-full object-cover' />
          </div>

          <div className="md:col-span-2 grid grid-rows-2 gap-2">
            
            <div className="bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center">
              <button
                onClick={toggleLanguage}
                className="relative w-28 h-12 bg-zinc-800 rounded-full flex items-center px-2 transition"
              >
                <div
                  className={`absolute w-8 h-8 bg-blue-500 rounded-full shadow-md transform transition ${
                    currentLang === "es" ? "translate-x-0" : "translate-x-16"
                  }`}
                />
                <div className="w-full flex justify-between text-xs px-2 z-10">
                  <span className={currentLang === "es" ? "text-white" : "text-zinc-400"}>
                    ES
                  </span>
                  <span className={currentLang === "en" ? "text-white" : "text-zinc-400"}>
                    EN
                  </span>
                </div>
              </button>
            </div>

            <div className="bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center text-blue-400 text-sm">
              Theme
            </div>
          </div>

        </div>
        
        <div className="row-span-4 grid grid-cols-1 md:grid-cols-5 gap-2">

          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-12 gap-2 md:col-span-3 h-full min-h-0">

            {/* IZQUIERDA (REDES + IMAGE) */}
            <div className="flex flex-col gap-2 md:col-span-5 md:row-span-5 md:grid md:grid-rows-7 h-full min-h-0">
              
              {/* REDES */}
              <div className="bg-zinc-900 rounded-2xl md:row-span-2 border border-zinc-800 p-3 flex items-center justify-center">
                <div className="flex gap-10">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-xl hover:bg-blue-300 transition group"
                  >
                    <img
                      src={githubIcon}
                      alt="GitHub"
                      className="w-5 h-5 object-contain group-hover:scale-110 transition"
                    />
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-xl hover:bg-blue-300 transition group"
                  >
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      className="w-5 h-5 object-contain group-hover:scale-110 transition"
                    />
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-xl hover:bg-blue-300 transition group"
                  >
                    <img
                      src={emailIcon}
                      alt="Email"
                      className="w-5 h-5 object-contain group-hover:scale-110 transition"
                    />
                  </a>

                </div>
              </div>

              {/* IMAGE */}
              <div className="overflow-hidden bg-zinc-900 rounded-2xl md:row-span-5 border border-zinc-800 flex items-center justify-center text-zinc-500 text-sm min-h-0">
                <img src={imageDecoration3} alt="decoration-image" className='w-full h-full object-cover'/>
              </div>

            </div>

            {/* EXPERIENCIA */}
            <div className="bg-zinc-900 rounded-2xl md:col-span-7 md:row-span-5 border border-zinc-800 p-4 flex flex-col justify-center min-h-0 overflow-hidden">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Experiencia</h3>
              <p className="text-sm text-zinc-300 leading-snug">
                Más de 2 años de experiencia como frontend developer trabajando con
                React, Vue, Quasar y Flutter.
              </p>
              <p className="text-sm text-zinc-300 mt-2 leading-snug">
                He desarrollado una aplicación tipo wallet, sistemas administrativos
                y landing pages modernas.
              </p>
              <p className="text-sm text-zinc-300 mt-2 leading-snug">
                Experiencia en UI/UX con Figma, creando interfaces limpias y centradas en el usuario.
              </p>
            </div>

            <div className="flex flex-col gap-2 md:col-span-12 md:row-span-7 md:grid md:grid-cols-12 h-full min-h-0">
              {/* STACK */}
              <div className="bg-zinc-900 rounded-2xl md:col-span-8 border border-zinc-800 p-4 pt-8 flex flex-col justify-start overflow-hidden">
                <h3 className="text-blue-400 text-base mb-12 font-semibold text-xl text-center">Developer Stack</h3>

                <div className="relative w-full overflow-hidden fade-mask">
                  <div className="flex w-max gap-6 animate-scroll">

                    {[ 
                      reactIcon,
                      vueIcon,
                      quasarIcon,
                      flutterIcon,
                      jsIcon,
                      tsIcon,
                      htmlIcon,
                      cssIcon,
                      tailwindcssIcon,
                      bootstrapIcon,
                      figmaIcon,
                    ].map((icon, index) => (
                      <div
                        key={`first-${index}`}
                        className="flex items-center justify-center w-[80px] h-[80px] bg-zinc-800 rounded-xl p-2 shrink-0"
                      >
                        <img src={icon} className="w-full h-full object-contain hover:scale-110" />
                      </div>
                    ))}

                    {/* DUPLICADO EXACTO */}
                    {[ 
                      reactIcon,
                      vueIcon,
                      quasarIcon,
                      flutterIcon,
                      jsIcon,
                      tsIcon,
                      htmlIcon,
                      cssIcon,
                      tailwindcssIcon,
                      bootstrapIcon,
                      figmaIcon,
                    ].map((icon, index) => (
                      <div
                        key={`second-${index}`}
                        className="flex items-center justify-center w-[80px] h-[80px] bg-zinc-800 rounded-xl p-2 shrink-0"
                      >
                        <img src={icon} className="w-full h-full object-contain hover:scale-110" />
                      </div>
                    ))}

                  </div>
                </div>
              </div>

              {/* IMAGE */}
              <div className="overflow-hidden bg-zinc-900 rounded-2xl md:col-span-4 border border-zinc-800 flex items-center justify-center text-zinc-500 text-sm min-h-0">
                <img src={imageDecoration1} alt="decoration-image" className='w-full h-full object-cover'/>
              </div>

            </div>

          </div>
          
          <div className="md:col-span-2 grid grid-rows-3 gap-2">

            {/* FRASE */}
            <div className="bg-zinc-900 row-span-1 rounded-2xl border border-zinc-800 flex items-center justify-center p-4">
              <p className="text-sm text-center text-base italic text-blue-400 leading-relaxed">
                "{t("phrase")}"
              </p>
            </div>

            {/* PROJECTS */}
            <div className="bg-zinc-900 row-span-2 rounded-2xl border border-zinc-800 flex items-center justify-center text-zinc-500 text-sm">
              Projects
            </div>

          </div>

        </div>

      </section>
    </>
  )
}