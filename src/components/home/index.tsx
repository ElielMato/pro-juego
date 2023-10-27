import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../navbar";

export default function home() {
  const [changeImage, setChangeImage] = useState(false);

  const nextImage = () => {
    setChangeImage(true);
  };

  const prevImage = () => {
    setChangeImage(false);
  };

  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  }

  function handleClickPrev() {
    prevImage();
    toggleNavbar();
  }

  function handleClickNext() {
    nextImage();
    toggleNavbar();
  }

  return (
    <main>
      <section className="absolute w-full top-0 z-0">
        {changeImage
          ? (
            <section className="relative">
              <div className="relative">
                
                <Image
                  src="/home2.svg"
                  className="w-full"
                  alt=""
                  width={0}
                  height={0}
                />
                <div className="absolute inset-0 flex items-center px-36">
                  <div className="text-left">
                    <h1 className="text-5xl font-lora py-6">Juegos de salón con <br /> sello personal</h1>
                    <p className="font-overpass text-lg">De la idea a la elaboración, creamos tu juego a medida.</p>
                    <div className="mt-4 py-10 font-overpass">
                      <span className="bg-white text-black py-3 px-12 text-lg border-2 border-white">
                        <Link href={"/"}>Contratar</Link>
                      </span>
                      <span className="py-3 px-10 text-lg border-2 border-white mx-4 ">
                        <Link href={"/products"}>Ver Productos</Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-end justify-center p-[10%]">
                  <button className="text-xl" onClick={handleClickPrev}>○</button>
                  <button className="text-xl">◉</button>
                </div>
                
              </div>
              
            </section>
          )
          : (
            <section className="relative ">
              <div className="relative">
                <Image
                  src="/home1.svg"
                  className="w-full"
                  alt=""
                  width={0}
                  height={0}
                />
                <div className="absolute flex items-center px-36 font-overpass">
                  <div className="text-left">
                    <h1 className="text-5xl font-lora py-6">Juegos de salón con <br /> sello personal</h1>
                    <p className="text-lg">De la idea a la elaboración, creamos tu juego a medida.</p>
                    <div className="mt-4 py-10">
                        <Link className="bg-white text-black py-3 px-12 text-lg border-2 border-white rounded-md hover:bg-black hover:text-white" href={"/contact"}>
                          Contratar
                        </Link>
                        <Link className="py-3 px-10 text-lg border-2 border-white mx-4 rounded-md hover:bg-white hover:text-black" href={"/products"}>
                          Ver Productos
                        </Link>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-end justify-center p-[10%]">
                  <button className="text-xl">◉</button>
                  <button className="text-xl" onClick={handleClickNext}>○</button>
                </div>
              </div>
            </section>
          )}
      </section>

      {/* <section className="relative bg-white text-black px-20 py-10">
        <h1>Nosotros</h1>
        <p>
          Pro Salón de Juegos es tu destino para mesas de billar, mesas de póker
          de alta calidad, metegoles excepcionales y mesas de tenis en madera de
          exquisita artesanía. Ya sea en tu hogar, negocio o evento especial,
          nuestra misión es llevar la emoción a tus momentos de diversión.
          <br />
          <br />
          Con una pasión por la calidad y un compromiso con la diversión, Pro
          Juegos de Salón ofrece una selección diversa y de primera categoría.
          Nuestro equipo de expertos está listo para ayudarte a encontrar los
          productos perfectos para tus necesidades y presupuesto. <br />
          <br />
          Hacemos tu producto a medida.
        </p>
      </section> */}
    </main>
  );
}
