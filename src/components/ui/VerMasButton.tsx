import Link from 'next/link'
import React from 'react'

/**
 * Este componente se usa en ProductCard.tsx, sirve de botón para redirigir a la página de cada producto.
 * @returns html botón 'Ver más' blanco con texto negro centrado, responsive.
 */
const VerMasButton = () => {
  return (
    <div className="relative inline-block px-6 py-2 font-medium group">
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
      <span className="relative text-black group-hover:text-white">Ver Mas</span>
    </div>
  )
}

export default VerMasButton