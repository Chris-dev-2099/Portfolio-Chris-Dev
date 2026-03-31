

export default function HomePage() {
  return (
    <>
      <section class="grid grid-rows-2 gap-2 p-8">

        <div class="grid grid-cols-1 md:grid-cols-12 gap-2 h-96">
          
          <div class="bg-blue-100 md:col-span-3">
            photo
          </div>
          
          <div class="bg-red-200 md:col-span-5">
            about me
          </div>
          
          <div class="bg-gray-200 md:col-span-2">
            image
          </div>

          <div class="bg-green-200 md:col-span-2">
            <div>
              Lannguaje
            </div>

            <div>
              Theme
            </div>
          </div>

        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 h-96">

          <div class="bg-blue-200">
            lef
          </div>
          
          <div class="bg-blue-300">
            right
          </div>

        </div>

        
      </section>
    </>
  )
}