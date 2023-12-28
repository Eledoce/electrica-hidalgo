import React from 'react'

export default function Stock() {
  return (
    <section className=" p-8 pt-16 flex flex-col gap-4">
      <h3 className="h3 text-center">Stock Completo, Proyectos Grandes</h3>
      <div className="pt-5 flex md:items-center flex-col md:flex-row gap-4 md:w-5/6 md:m-auto md:pt-10">
        <div className="text-xl text-gray-600  md:w-1/2 ">
          <p>
            Respaldamos tus proyectos grandes con un amplio y diverso stock de
            productos.
          </p>
        </div>
        <div className="border md:w-1/2 grid grid-rows-2 grid-cols-6 gap-2 h-52">
          <div className="bg-gray-800  col-span-2"></div>
          <div className="bg-gray-800 col-span-2 col-start-1"></div>
          <div className="bg-gray-800   col-span-4 row-span-2 col-start-3 row-start-1"></div>
        </div>
      </div>
      <div className="pt-5 flex md:items-center flex-col md:flex-row gap-4 md:w-5/6 md:m-auto md:pt-10">
        <div className="border md:w-1/2 grid grid-rows-2 grid-cols-6 gap-2 h-52">
          <div className="bg-gray-800  col-span-2"></div>
          <div className="bg-gray-800 col-span-2 col-start-1"></div>
          <div className="bg-gray-800   col-span-4 row-span-2 col-start-3 row-start-1"></div>
        </div>
        <div className="text-xl text-gray-600  md:w-1/2 ">
          <p className="pt-3">
            Desde materiales de alta calidad hasta herramientas especializadas,
            nuestro inventario está preparado para hacer realidad tus ambiciones
            constructivas
          </p>
        </div>
      </div>
    </section>
  )
}
