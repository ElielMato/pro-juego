import React from 'react'

/**
 * Este componente se usa en ProductCard.tsx, sirve de botón para redirigir a la página de cada producto.
 * @returns html botón 'Ver más' blanco con texto negro centrado, responsive.
 */
const VerMasButton = () => {
  return (
    <div className="px-4 md:px-7 p-2 flex justify-center content-center gap-1 bg-white text-black font-overpass border-black text-md md:text-2xl">Ver más</div>
  )
}

export default VerMasButton