import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function home() {
  const [changeImage, setChangeImage] = useState(false);

  const nextImage = () => {
    setChangeImage(true);
  };

  const prevImage = () => {
    setChangeImage(false);
  };

  return (
    <main>
      <section className="relative w-full top-0 z-0">
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
                <div className="absolute inset-0 flex items-end justify-center p-[10%]">
                  <button className="text-xl" onClick={prevImage}>○</button>
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
                <div className="absolute inset-0 flex items-end justify-center p-[10%]">
                  <button className="text-xl">◉</button>
                  <button className="text-xl" onClick={nextImage}>○</button>
                </div>
              </div>
            </section>
          )}
      </section>

      <section className="static bg-white text-black px-20 py-10">
        <h1>Nosotros</h1>
        <p>
          Pro Salón de Juegos es tu destino para mesas de billar, mesas de póker
          de alta calidad, metegoles excepcionales y mesas de tenis en madera de
          exquisita artesanía. Ya sea en tu hogar, negocio o evento especial,
          nuestra misión es llevar la emoción a tus momentos de diversión.{" "}
          <br />
          <br />
          Con una pasión por la calidad y un compromiso con la diversión, Pro
          Juegos de Salón ofrece una selección diversa y de primera categoría.
          Nuestro equipo de expertos está listo para ayudarte a encontrar los
          productos perfectos para tus necesidades y presupuesto. <br />
          <br />
          Hacemos tu producto a medida.
        </p>
      </section>
    </main>
  );
}
