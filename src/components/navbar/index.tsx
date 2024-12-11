import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, CSSProperties } from 'react';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = 50;

      if (scrollPosition > triggerPoint) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle: CSSProperties = {
    backgroundColor:
      router.pathname === '/contact' ||
        router.pathname === '/about-me' ||
        router.pathname === '/products'
        ? '#272727'
        : 'transparent',
    position:
      router.pathname === '/contact' || router.pathname === '/about-me'
        ? 'static'
        : 'fixed',
  };


  return (
    <header style={navbarStyle} className={`py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="z-10 flex flex-grow basis-0 px-5">
        <Image
          src={"/Logo_Blanco.svg"}
          alt="Logo Pro Juegos"
          width={80}
          height={80}
        />
      </div>

      <nav className="space-x-8">
        <span className="font-bold hover:border-b-2 border-white">
          <Link href={"/"}>
            Inicio
          </Link>
        </span>
        <span className="font-bold hover:border-b-2 border-white">
          <Link href={"/products"}>
            Productos
          </Link>
        </span>
        <span className="font-bold hover:border-b-2 border-white">
          <Link href={"/about-me"}>
            Nosotros
          </Link>
        </span>
      </nav>

      <nav className="flex flex-grow justify-end basis-0">
        <div className="z-10 px-10 py-2 backdrop-blur-xl border-2 border-white hover:bg-black">
          <span className="font-bold">
            <Link href={"/contact"}>
              Contacto
            </Link>
          </span>
        </div>
      </nav>
    </header>
  )
}