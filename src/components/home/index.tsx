import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import FeaturedProducts from "../featured-products";
import ProductsJson from "@/json/products.json"
import TestimonialJson from "@/json/testimonials.json";
import StepsJson from "@/json/steps.json";
import PropertyJson from "@/json/properties.json";



export default function Home() {
  interface Product {
    name: string;
    emoji: string;
    width: number;
    url: string;
  }

  const products: Record<string, Product> = ProductsJson
  
  interface Testimony {
    icon: string;
    text: string;
    name: string;
    city: string;
  }

  const Testimonials: Record<string, Testimony> = TestimonialJson

  interface Step {
    icon: string;
    name: string;
    title: string;
    desc: string;
  }

  const Steps: Record<string, Step> = StepsJson

  interface Property {
    name: string;
    text: string;
    url: string;
    width: number;
  }

  const Propieties: Record<string, Property> = PropertyJson
  const [changeimage, setchangeimage] = useState(false);
  const nextImage = () => {
    setchangeimage(true);
  };

  const prevImage = () => {
    setchangeimage(false);
  };

  function handleClickPrev() {
    prevImage();
  }

  function handleClickNext() {
    nextImage();
  }

  function renderProducts() {
    return Object.keys(products).map((key) => {
      const option = products[key];
      return (
        <Link
          key={key}
          href={`/${option.url}`}
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
    return Object.keys(Testimonials).map((key, index) => {
      const option = Testimonials[key];
      return (
        <section key={key}>
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
    return Object.keys(Steps).map((key, index) => {
      const option = Steps[key];
      return (
        <section key={index} className="flex flex-col md:flex-row md:w-full md:max-w-[400px] mb-8 md:mb-0">
          <div className="flex items-center justify-center md:w-[200px]">
            <Image
              src={`/${option.icon}`}
              alt="steps Icon"
              className=""
              width={200}
              height={200}
            />
          </div>

          <div className="w-full md:ml-6 md:border-l-2 md:pl-6">
            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold font-lora">{option.name}</h1>
            <hr className="border-white border-[1px] mb-2 md:mb-4" />
            <h2 className="text-base md:text-lg lg:text-xl font-bold font-lora mb-2 md:mb-6">
              {option.title}
            </h2>
            <p className="text-sm md:text-base lg:text-lg">{option.desc}</p>
          </div>
        </section>
      );
    });
  }

  function renderProperties() {
    return Object.keys(Propieties).map((key, index) => {
      const option = Propieties[key];
      return (
        <section key={key}>
          <Image
            src={`/${option.url}`}
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
      <section className="relative w-full top-0">
        {changeimage
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
                          href={"/contact"}
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
                          href={"/products"}
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
                  <div className="absolute top-[80%] lg:hidden">
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
                          href={"/contact"}
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
                          href={"/products"}
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
                </div>
              </div>
            </section>
          )}
      </section>
      
      {/* Productos */}
      <section className="bg-[#202020] text-white font-overpass px-20 py-12 flex items-center justify-center w-full gap-x-5">
        {renderProducts()}
      </section>
      
      {/* Productos Destacados */}
      <FeaturedProducts />
      
      {/* Nosotros */}
      <section className="flex flex-col items-center md:flex-row bg-[#1A1718]">
        <div className="md:w-3/5 md:order-first px-6 md:px-10 py-8 md:py-0 font-lora">
          <h1 className="text-4xl font-bold mb-4 md:mb-6">Nosotros</h1>
          <p className="mb-4 md:mb-6">
            Nuestra pasión es la creación de juegos de salón a medida, perfectos
            para tu hogar, negocio o evento. Diseñamos productos personalizados
            que se ajustan a tus gustos y necesidades.
          </p>
          <p className="mb-4 md:mb-6">
            En nuestro catálogo de productos, encontrarás una amplia variedad de
            opciones para elegir o realizaremos tu diseño personalizado. Nos
            pondremos en contacto para brindarte asesoramiento y preparar un
            presupuesto a medida.
          </p>
          <p className="mb-4 md:mb-6">
            Realizamos restauraciones de mesas, cambios de paños y de bandas
            entre otros.
          </p>
        </div>
        <div className="md:w-2/5 md:order-last flex items-center justify-center">
          <Image
            src="/Foto_Nosotros.png"
            className="w-full md:max-w-lg"
            alt=""
            width={2000}
            height={0}
          />
        </div>
      </section>


      {/* Testimonios */}
      <section className="bg-white text-center text-black py-14">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-lora font-extrabold pb-8 md:pb-14">
          Testimonios
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
          {renderTestimonials()}
        </div>
        <Link
          href={"/"}
          className="inline-block mt-8 md:mt-14 px-6 py-2 md:px-8 md:py-3 font-medium relative group"
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

      
      {/* Pasos */}
      <section className="bg-[#005762] px-6 md:px-12 lg:px-24 pb-8 md:pb-20">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-lora font-extrabold py-8 md:py-14">
          Pasos
        </h1>
        <div className="flex flex-col items-center justify-center lg:flex-row md:gap-6 lg:gap-12">
          {renderSteps()}
        </div>
      </section>

      {/* Pasion/Diversion */}
      <section className="flex flex-col items-center justify-center lg:flex-row bg-[#1A1718] text-center">
        <div className="lg:w-2/3 lg:order-last lg:px-20 max-md:text-center">
          <h1 className="text-2xl lg:text-4xl font-bold font-lora mb-2">
            Donde la pasión se convierte en diversión
          </h1>
          <p className="text-sm lg:text-base" >
            En Argentina, el metegol no es solo un juego. Es por eso que diseñamos nuestras mesas para resistir la pasión y la competitividad de nuestros jugadores, siendo el complemento perfecto para los partidos más emocionantes.
          </p>
        </div>
        <div className="lg:w-1/3 lg:order-first">
          <Image
            src="/Foto_Metegol.png"
            alt=""
            className="w-full max-md:w-[100px]"
            width={2000}
            height={0}
          />
        </div>
      </section>


      {/* Ubicacion */}
      <section className="bg-white text-black z-20">
        <div className="py-8 md:py-14 px-4 md:px-12 lg:px-24">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-12 text-center">
            Ubicación
          </h1>
          <div className="flex items-center justify-center">
            <Link href={"https://maps.app.goo.gl/uAcsicdCvfxQt5zF6"} target="_blank">
              <Image
                src={"/Ubicacion.png"}
                alt="ubicacion"
                width={800}
                height={600}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between py-8 md:py-14 px-4 md:px-12 lg:px-24">
          {renderProperties()}
        </div>
      </section>
    </main>
  );
}
