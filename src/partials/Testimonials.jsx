import { FaUser } from 'react-icons/fa'

function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Opiniones</h2>
            <p className="text-xl text-gray-600">
              Nos enorgullece compartir algunas de las experiencias que otros
              han tenido al elegir nuestros servicios
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            <Card
              title="Reyna Gama"
              description="Muy buena atención, servicio, los precios son accesibles, extenso surtido, resuelven tus dudas con amabilidad, recomendado al 100%"
            />

            <Card
              title="Ric Arce"
              description="En estos momentos difíciles, se pueden encontrar productos de calidad y a precios muy competitivos."
            />

            <Card
              title="Edith Estudillo"
              description="Que tienen unos excelentes productos para el hogar de muy buena calidad a un super precio! yo quede encantada con la bomba de agua de las mejores inversiones que eh hecho!! 🙂"
            />

            <Card
              title="Martha Lisbeth Vergara Jiménez"
              description="Excelente atención de los vendedores, te resuelven tus dudas y asesoran. Cuentan con un extenso surtido en plomeria y electricidad! Superaron mis espectativas 😉…"
            />

            <Card
              title="Jorge lopez gomez"
              description="Considero que es una tienda que tiene surtido material de electricidad y plomería, además de una muy buena atención por parte de su personal"
            />

            <Card
              title="Josué Morales"
              description="Extenso surtido y buena atención"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const Card = ({ title, description, icon }) => {
  return (
    <div className="relative flex flex-col items-center p-6 min-h-full bg-white rounded shadow-xl">
      <FaUser className="bg-blue-600 text-4xl rounded-full p-2 text-blue-100 m-1" />
      <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center capitalize">
        {title}
      </h4>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  )
}

export default FeaturesBlocks
