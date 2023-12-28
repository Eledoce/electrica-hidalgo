import { FaFacebook } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { IoLogoWhatsapp } from 'react-icons/io'

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className=" flex justify-center py-8 md:py-12 border-t border-gray-200">
          <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-teal-300 rounded-full"></div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                href={
                  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
                    ? 'whatsapp://send?phone=527351280629'
                    : 'https://api.whatsapp.com/send?phone=527351280629'
                }
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="whatsapp"
              >
                <IoLogoWhatsapp />
              </a>
            </li>
            <li className="ml-4">
              <a
                href="mailto:ventas@electricayplomeriahidalgo.com"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="mail"
              >
                <IoMdMail />
              </a>
            </li>
            <li className="ml-4">
              <a
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                href="https://www.facebook.com/profile.php?id=100063556434788"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            Copyryght © 2023 -{' '}
            <span className="text-blue-600">Eléctrica y Plomería Hidalgo</span>{' '}
            - todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
