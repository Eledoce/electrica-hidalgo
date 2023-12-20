import React from 'react'

export default function Maps() {
  return (
    <section className="py-16">
      <h3 className="h2 text-center pb-5">Ubicación</h3>
      <p className="text-xl xl:w-3/4 text-center m-auto text-gray-600 pb-16">
        Ya sea que busques productos específicos o necesites conocernos, estamos
        en
        <b>
          Av. Insurgentes 1139 Colonia Miguel Hidalgo Cuautla Morelos 62748
        </b>{' '}
        ¡Estamos aquí para ayudarte con tus proyectos!
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2670.0729503455173!2d-98.94234756199842!3d18.84030812179416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce6edca59e70e7%3A0xa0eab80dddbe7ffb!2sEl%C3%A9ctrica%20Y%20Plomer%C3%ADa%20Hidalgo!5e0!3m2!1ses-419!2smx!4v1703033904550!5m2!1ses-419!2smx"
        title='Ubicación de "Electrica y Plomeria Hidalgo"'
        loading="lazy"
        className="w-full h-96"
        target="_blank"
      ></iframe>
    </section>
  )
}
