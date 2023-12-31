import React, { useState, useEffect } from 'react'
import logo from '../assets/images/nuevo.png'

function Header() {
  const [top, setTop] = useState(true)

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90  transition duration-300 ease-in-out ${
        !top && 'bg-white backdrop-blur-sm shadow-lg'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <div className="flex " aria-label="Cruip">
              <div
                className={`h-10 w-10 bg-gradient-to-br from-blue-500 to-teal-300 rounded-full transition-opacity delay-300 ${
                  top ? 'opacity-100' : 'opacity-0'
                }`}
              ></div>
              <img
                src={logo}
                alt=""
                className={`h-10 w-10 absolute rounded-md transition-opacity delay-200 ${
                  top ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </div>
          </div>
          {/* Site navigation */}
          <p
            className={`hidden md:block text-xl transition-colors delay-300 ${
              top ? 'text-transparent' : 'text-gray-600'
            }`}
          >
            Eléctrica y Plomería Hidalgo
          </p>
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="#contactcard"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/maps/dir//El%C3%A9ctrica+Y+Plomer%C3%ADa+Hidalgo+Av+Insurgentes+1139+Miguel+Hidalgo+62748+Cuautla,+Mor./@18.8412411,-98.9416335,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x85ce6edca59e70e7:0xa0eab80dddbe7ffb"
                  className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Como llegar</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
