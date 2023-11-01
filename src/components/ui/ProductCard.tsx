import Link from 'next/link';
import { VerMasButton } from '.';

type ProductCardProps = {
  backgroundImageSrc: string;
  title: string;
  url: string;
};

/**
 * Componente que renderiza una tarjeta de producto para la página de productos 'src/pages/productos/index.tsx'
 * El componente es una tarjeta con un fondo de imagen con un linear-gradient que oscurece la imagen de fondo 20%.
 * Título y botón 'Ver más' centrados en la tarjeta.
 */
const ProductCard = ({ backgroundImageSrc, title, url }: ProductCardProps) => {
  return (
    <div
      className='w-full bg-cover bg-center items-center h-[400px] lg:h-[500px] xl:h-[622px]'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${backgroundImageSrc})`,
      }}
    >
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <p className='text-white font-lora font-bold text-3xl md:text-3xl lg:text-5xl xl:text-7xl'>
          {title}
        </p>
        <Link href={url} className='pt-2 md:pt-6 xl:pt-10'>
          <VerMasButton />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
