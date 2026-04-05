

export default function HomePage() {
  return (
    <>
      <section class="min-h-screen grid grid-rows-7 gap-2 p-8">

        <div class="row-span-3 grid grid-cols-1 md:grid-cols-12 gap-2">
          
          <div class="bg-blue-100 md:col-span-3 rounded-2xl">
            photo
          </div>
          
          <div class="bg-red-200 md:col-span-5 rounded-2xl">
            about me
          </div>
          
          <div class="bg-gray-200 md:col-span-2 rounded-2xl">
            image
          </div>

          <div class="md:col-span-2 grid grid-rows-2 gap-2">
            <div class="bg-green-300 rounded-2xl">
              Lannguaje
            </div>

            <div class="bg-green-400 rounded-2xl">
              Theme
            </div>
          </div>

        </div>
        
        <div class="row-span-4 grid grid-cols-1 md:grid-cols-5 gap-2">

          <div class="grid grid-cols-1 md:grid-cols-12 gap-2 md:col-span-3 h-full">

            <div class="flex flex-col gap-2 md:col-span-5 md:grid md:grid-rows-7 h-full">
              
              <div class="bg-red-300 rounded-2xl md:row-span-2 h-full">
                Redes sociales
              </div>

              <div class="bg-red-300 rounded-2xl md:row-span-5 h-full">
                Image
              </div>

            </div>

            <div class="bg-green-100 rounded-2xl md:col-span-7 h-full">
              Experiencia
            </div>

            <div class="flex flex-col gap-2 md:col-span-12 md:grid md:grid-cols-12 h-full">
              
              <div class="bg-yellow-100 rounded-2xl md:col-span-8 h-full">
                Developer stack
              </div>

              <div class="bg-orange-300 rounded-2xl md:col-span-4 h-full">
                Image
              </div>

            </div>

          </div>
          
          <div class="md:col-span-2 grid grid-rows-3 gap-2">
            
            <div class="bg-blue-600 row-span-1 rounded-2xl">
              phrase
            </div>

            <div class="bg-blue-400 row-span-2 rounded-2xl">
              Projects
            </div>
          </div>

        </div>

        
      </section>
    </>
  )
}