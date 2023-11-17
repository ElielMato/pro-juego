import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GoogleMapReact from "google-map-react";

import FeaturedProducts from "../featured-products";
import products from "@/json/products.json";
import testimonials from "@/json/testimonials.json";
import steps from "@/json/steps.json";
import properties from "@/json/properties.json";

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
  };

  function handleClickPrev() {
    prevImage();
    toggleNavbar();
  }

  function handleClickNext() {
    nextImage();
    toggleNavbar();
  }

  function renderProducts() {
    return Object.keys(products).map((key, index) => {
      const option = products[key];
      return (
        <Link
          key={index}
          href={""}
          className="bg-[#646464] flex items-center justify-center border-2 border-white w-[200px] h-[60px]"
        >
          <Image
            src={`/${option.emoji}`}
            className="p-2"
            alt="Emoji Product"
            width={`${option.width}`}
            height={50}
          />
          <h1>{option.name}</h1>
        </Link>
      );
    });
  }

  function renderTestimonials() {
    return Object.keys(testimonials).map((key, index) => {
      const option = testimonials[key];
      return (
        <section>
          <div className="flex items-center justify-center">
            <Image
              src={`/${option.icon}`}
              alt="Icono User"
              className="absolute"
              width={100}
              height={0}
            />
          </div>
          <div className="bg-[#1A1718] w-[350px] h-[550px] text-center text-white font-overpass flex flex-col justify-center items-center p-3">
            <p className="my-16">{option.text}</p>
            <div className="mt-auto">
              <h1 className="text-lg font-bold">
                {option.name} - {option.city}
              </h1>
              <div className="flex items-center justify-center">
                <Image
                  src="/Icono_5Estrellas.svg"
                  alt="Starts"
                  width={150}
                  height={0}
                />
              </div>
            </div>
          </div>
        </section>
      );
    });
  }

  function renderSteps() {
    return Object.keys(steps).map((key, index) => {
      const option = steps[key];
      return (
        <section>
          <div className="flex items-center justify-center">
            <Image
              src={`/${option.icon}`}
              alt="steps Icon"
              className=""
              width={200}
              height={0}
            />
          </div>

          <div className="w-[250px]">
            <h1 className="text-4xl font-bold text-lora">{option.name}</h1>
            <hr className="border-white border-[1px] mb-4" />
            <h2 className="text-2xl font-bold text-lora mb-6">
              {option.title}
            </h2>
            <p>{option.desc}</p>
          </div>
        </section>
      );
    });
  }

  function renderProperties() {
    return Object.keys(properties).map((key, index) => {
      const option = properties[key];
      return (
        <section>
          <Image
            src={`/${option.emoji}`}
            alt="properties Icon"
            className=""
            width={option.width}
            height={0}
          />
          <div className="w-[300px]">
            <h1 className="text-[#005762] font-bold text-xl">{option.name}</h1>
            <p className="">{option.text}</p>
          </div>
        </section>
      );
    });
  }

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

                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="absolute inset-0 flex items-center px-36">
                    <div className="text-left">
                      <h1 className="text-5xl font-lora py-6">
                        Juegos de salón con <br /> sello personal
                      </h1>
                      <p className="font-overpass text-lg">
                        De la idea a la elaboración, creamos tu juego a medida.
                      </p>
                      <div className="mt-4 py-10 font-overpass">
                        <Link
                          href={"/"}
                          className="relative inline-block px-10 py-3 mx-4 font-medium group"
                        >
                          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-white group-hover:-translate-x-0 group-hover:-translate-y-0">
                          </span>
                          <span className="absolute inset-0 w-full h-full bg-black border-2 border-white group-hover:bg-white">
                          </span>
                          <span className="relative text-white group-hover:text-black text-xl">
                            Contratar
                          </span>
                        </Link>
                        <Link
                          href={"/"}
                          className="relative inline-block px-8 py-3 mx-4 font-medium group"
                        >
                          <span className="absolute inset-0 w-full h-full bg-white border-2 border-white group-hover:bg-black">
                          </span>
                          <span className="relative text-black group-hover:text-white text-xl">
                            Ver Productos
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[80%]">
                    <button className="text-xl" onClick={handleClickPrev}>
                      ○
                    </button>
                    <button className="text-xl">◉</button>
                  </div>
                </div>
              </div>
            </section>
          )
          : (
            <section className="relative">
              <div className="relative">
                <Image
                  src="/home1.svg"
                  className="w-full"
                  alt=""
                  width={0}
                  height={0}
                />
                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="absolute inset-0 flex items-center px-36">
                    <div className="text-left">
                      <h1 className="text-5xl font-lora py-6">
                        Juegos de salón con <br /> sello personal
                      </h1>
                      <p className="font-overpass text-lg">
                        De la idea a la elaboración, creamos tu juego a medida.
                      </p>
                      <div className="mt-4 py-10 font-overpass">
                        <Link
                          href={"/"}
                          className="relative inline-block px-10 py-3 mx-4 font-medium group"
                        >
                          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-white group-hover:-translate-x-0 group-hover:-translate-y-0">
                          </span>
                          <span className="absolute inset-0 w-full h-full bg-black border-2 border-white group-hover:bg-white">
                          </span>
                          <span className="relative text-white group-hover:text-black text-xl">
                            Contratar
                          </span>
                        </Link>
                        <Link
                          href={"/"}
                          className="relative inline-block px-8 py-3 mx-4 font-medium group"
                        >
                          <span className="absolute inset-0 w-full h-full bg-white border-2 border-white group-hover:bg-black">
                          </span>
                          <span className="relative text-black group-hover:text-white text-xl">
                            Ver Productos
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[80%]">
                    <button className="text-xl">◉</button>
                    <button className="text-xl" onClick={handleClickNext}>
                      ○
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}
      </section>

      <section className="bg-[#202020] text-white font-overpass px-20 py-12 flex items-center justify-center w-full gap-x-5">
        {renderProducts()}
      </section>

      <FeaturedProducts />

      <section className="flex bg-[#1A1718]">
        <div className="w-[65%] font-lora px-[250px] my-auto order-first">
          <h1 className="text-4xl font-bold mb-2">Nosotros</h1>
          <p className="mb-2">
            Nuestra pasión es la creación de juegos de salón a medida, perfectos
            para tu hogar, negocio o evento. Diseñamos productos personalizados
            que se ajustan a tus gustos y necesidades.
          </p>
          <p className="mb-2">
            En nuestro catálogo de productos, encontrarás una amplia variedad de
            opciones para elegir o realizaremos tu diseño personalizado. Nos
            pondremos en contacto para brindarte asesoramiento y preparar un
            presupuesto a medida.
          </p>
          <p className="">
            Realizamos restauraciones de mesas, cambios de paños y de bandas
            entre otros.
          </p>
        </div>
        <div className="flex items-center justify-end w-[35%] order-last">
          <Image
            src="/Foto_Nosotros.png"
            className="w-[100%]"
            alt=""
            width={2000}
            height={0}
          />
        </div>
      </section>

      <section className="bg-white text-center text-black py-14">
        <h1 className="text-[45px] font-lora font-extrabold pb-14">
          Testimonios
        </h1>
        <div className="flex items-center justify-center gap-5">
          {renderTestimonials()}
        </div>
        <Link
          href={"/"}
          className="relative inline-block px-8 py-2 mt-14 font-medium group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0">
          </span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black">
          </span>
          <span className="relative text-black group-hover:text-white">
            Ver Todos
          </span>
        </Link>
      </section>

      <section className="bg-[#005762] px-60 pb-20">
        <h1 className="text-[45px] font-lora font-extrabold py-14">
          Pasos
        </h1>
        <div className="flex items-center justify-between">
          {renderSteps()}
        </div>
      </section>

      <section className="flex bg-[#1A1718] text-center">
        <div className="w-[65%] font-lora px-[350px] my-auto order-last">
          <h1 className="text-4xl font-bold mb-2">
            Donde la pasión se convierte en diversión
          </h1>
          <p>
            En Argentina, el metegol no es solo un juego. Es por eso que
            diseñamos nuestras mesas para resistir la pasión y la competitividad
            de nuestros jugadores, siendo el complemento perfecto para los
            partidos más emocionantes.
          </p>
        </div>
        <div className="flex items-center justify-end w-[40%] order-first">
          <Image
            src="/Foto_Metegol.png"
            className="w-[100%]"
            alt=""
            width={2000}
            height={0}
          />
        </div>
      </section>

      <section className="bg-white text-black z-20">
        <div className="py-14 px-60">
          <h1 className="text-4xl font-bold mb-12 text-center">Ubicación</h1>
          <div className="flex items-center justify-center">
            <Link href={"https://maps.app.goo.gl/uAcsicdCvfxQt5zF6"} target="_blacnk">
              <Image
                src={"/Ubicacion.png"}
                alt="ubicacion"
                width={1100}
                height={0}
              />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between py-14 px-40">
          {renderProperties()}
        </div>
      </section>
    </main>
  );
}
