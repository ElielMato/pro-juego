import { bgMetegolProductos, bgPokerProductos, bgPoolProductos, bgMultiusoProductos, bgDardosProductos } from '@/assets';
import FeaturedProducts from '@/components/featured-products';
import ProductCard from '@/components/ui/ProductCard';


export default function Page() {
  
  /**
   * TODO: 
   * - homogeneizar distintos breakpoints para que sea armonico el pasar de un breakpoint a otro, titulo y botón ver mas
   * - sección productos destacados: tiene un carrucel. Encontré una librería Embla Carousel que parece ser bastante buena.
   *   (https://www.embla-carousel.com/examples/predefined/) opacity/parallax/arrows-dots
   *   Aparentemente permite modificar el css de los elementos del carrucel, por lo que se podrían customizar
   */
  return <Productos />;
}

const Productos = () => {

  // Lista de productos. Se pasan como argumento a ProductCard, que es el componente que se encarga de renderizarlos.
  const prodList = {
    metegol: {
      name: 'Metegol',
      bg: bgMetegolProductos.src,
      link: 'products/metegol'
    },
    pool: {
      name: 'Pool',
      bg: bgPoolProductos.src,
      link: 'products/pool'
    },
    poker: {
      name: 'Poker',
      bg: bgPokerProductos.src,
      link: 'products/poker'
    },
    multiuso: {
      name: 'Multiuso',
      bg: bgMultiusoProductos.src,
      link: 'products/multiuso'
    },
    dardos: {
      name: 'Tablero de Dardos',
      bg: bgDardosProductos.src,
      link: '/products/dardos'
    },
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full flex flex-col md:flex-row">
          <ProductCard backgroundImageSrc={prodList.metegol.bg} title={prodList.metegol.name} url={prodList.metegol.link} />
        </div>
        <div className="w-full flex flex-col md:flex-row">
          <ProductCard backgroundImageSrc={prodList.pool.bg} title={prodList.pool.name} url={prodList.pool.link} />
          <ProductCard backgroundImageSrc={prodList.poker.bg} title={prodList.poker.name} url={prodList.poker.link} />
        </div>
        <div className="w-full flex flex-col md:flex-row">
          <ProductCard backgroundImageSrc={prodList.multiuso.bg} title={prodList.multiuso.name} url={prodList.multiuso.link} />
          <ProductCard backgroundImageSrc={prodList.dardos.bg} title={prodList.dardos.name} url={prodList.dardos.link} />
        </div>
      </div>
      <FeaturedProducts />
    </section>
    
  );
};
