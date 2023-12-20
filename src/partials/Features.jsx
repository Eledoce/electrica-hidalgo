import amanco from '../assets/marcas/bitmap_amanco.png'
import calorex from '../assets/marcas/bitmap_calorex.png'
import coflex from '../assets/marcas/bitmap_coflex.png'
import condumex from '../assets/marcas/bitmap_condumex.png'
import nacobre from '../assets/marcas/bitmap_nacobre.png'

function Features() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h3 className="h2 mb-4">Contamos con las mejores marcas</h3>
            <p className="text-xl text-gray-600">
              Ofrecemos productos de las marcas más respetadas en la industria,
              con marcas que son sinónimo de calidad excepcional y confiabilidad
              comprobada.
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8 pt-8">
                <h3 className="h3 mb-3">
                  Confiabilidad Certificada para tu Proyecto
                </h3>
                <p className="text-xl text-gray-600">
                  Entendemos que la excelencia en la construcción y la
                  eficiencia en cada proyecto son fundamentales.
                </p>
                <p className="text-xl text-gray-700 mt-4">
                  Por esta razón, todas nuestras marcas asociadas cuentan con
                  rigurosas certificaciones que garantizan estándares de calidad
                  internacionales.
                </p>
              </div>
            </div>

            {/* Second div */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 md:mt-6 flex justify-center items-center flex-wrap gap-4 select-none"
              data-aos="fade-left"
            >
              <img src={amanco} alt="amanco" />
              <img src={calorex} alt="calorex" />
              <img src={coflex} alt="coflex" />
              <img src={condumex} alt="condumex" />
              <img src={nacobre} alt="nacobre" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
