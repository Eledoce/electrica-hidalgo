import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { IoMdMail } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'

function Newsletter() {
  return (
    <div id="contactcard" className="w-full">
      <h3 className="h2 text-center pb-5">Contacto</h3>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
            {/* CTA box */}
            <div
              className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
              data-aos="zoom-y-out"
            >
              {/* Background illustration */}
              <div
                className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
                aria-hidden="true"
              >
                <svg
                  width="428"
                  height="328"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient
                      cx="35.542%"
                      cy="34.553%"
                      fx="35.542%"
                      fy="34.553%"
                      r="96.031%"
                      id="ni-a"
                    >
                      <stop stopColor="#DFDFDF" offset="0%" />
                      <stop stopColor="#4C4C4C" offset="44.317%" />
                      <stop stopColor="#333" offset="100%" />
                    </radialGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <g fill="#FFF">
                      <ellipse
                        fillOpacity=".04"
                        cx="185"
                        cy="15.576"
                        rx="16"
                        ry="15.576"
                      />
                      <ellipse
                        fillOpacity=".24"
                        cx="100"
                        cy="68.402"
                        rx="24"
                        ry="23.364"
                      />
                      <ellipse
                        fillOpacity=".12"
                        cx="29"
                        cy="251.231"
                        rx="29"
                        ry="28.231"
                      />
                      <ellipse
                        fillOpacity=".64"
                        cx="29"
                        cy="251.231"
                        rx="8"
                        ry="7.788"
                      />
                      <ellipse
                        fillOpacity=".12"
                        cx="342"
                        cy="31.303"
                        rx="8"
                        ry="7.788"
                      />
                      <ellipse
                        fillOpacity=".48"
                        cx="62"
                        cy="126.811"
                        rx="2"
                        ry="1.947"
                      />
                      <ellipse
                        fillOpacity=".12"
                        cx="78"
                        cy="7.072"
                        rx="2"
                        ry="1.947"
                      />
                      <ellipse
                        fillOpacity=".64"
                        cx="185"
                        cy="15.576"
                        rx="6"
                        ry="5.841"
                      />
                    </g>
                    <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                  </g>
                </svg>
              </div>

              <div className="relative flex flex-col lg:flex-row justify-between items-center">
                {/* CTA content */}
                <div className="text-center lg:text-left lg:max-w-xl">
                  <h3 className="h3 text-white mb-2">
                    Eléctrica y Plomería Hidalgo
                  </h3>
                  <p className="text-gray-300 text-lg mb-6">
                    Contáctanos para obtener soluciones expertas y productos de
                    calidad para tus proyectos.
                  </p>

                  <ul className="text-gray-300 flex flex-col gap-3 text-xl  text-left">
                    <li className="hover:underline">
                      <a
                        href="tel:+527353531683"
                        className="flex items-center"
                        aria-label="telephone"
                      >
                        <BsFillTelephoneFill className="inline-block mr-5" />
                        <ul>
                          <li>735 353 1683</li>
                          <li>
                            Ext.
                            <b>101 a la 104</b>
                          </li>
                        </ul>
                      </a>
                    </li>
                    <li className="hover:underline">
                      <a
                        href={
                          /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
                            ? 'whatsapp://send?phone=527351280629'
                            : 'https://api.whatsapp.com/send?phone=527351280629'
                        }
                        aria-label="whatsapp"
                      >
                        <IoLogoWhatsapp className="inline-block mr-5" />
                        735 128 0629
                      </a>
                    </li>
                    <li className="hover:underline">
                      <a
                        href="https://www.facebook.com/profile.php?id=100063556434788"
                        aria-label="Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook className="inline-block mr-5" />
                        {`Eléctrica y Plomería "Hidalgo"`}
                      </a>
                    </li>

                    <li className=" hover:underline">
                      <a
                        className="inline-flex items-center"
                        href="mailto:ventas@electricayplomeriahidalgo.com"
                        aria-label="mail"
                      >
                        <IoMdMail className="md:inline-block mr-5 hidden md:visible" />
                        <p className="text-base">
                          ventas@electricayplomeriahidalgo.com
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Newsletter
