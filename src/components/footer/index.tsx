<<<<<<< HEAD
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function navbar() {
  return (
    <footer className="bg-[#272727] flex items-center justify-between px-[15%] py-[5%] relative text-overpass">

        <div className="absolute bottom-0 left-0 z-10">
            <Image
            src={"/Footer_RecursoGrafico.svg"}
            alt="bottom-0 right-0"
            width={425}
            height={0}
            />
        </div>

        <Image
        src={"/logo.svg"}
        alt=""
        className="z-20"
        width={300}
        height={0}
        />
        <div>
            <h1 className="font-bold text-lg mb-2">Navegador</h1>
            <ul className="space-y-4">
                <li>
                    <Link href={""} className="hover:border-b-2 hover:border-white border-transparent">Inicio</Link>
                </li>
                <li>
                    <Link href={""} className="hover:border-b-2 hover:border-white border-transparent">Productos</Link>
                </li>
                <li>
                    <Link href={""} className="hover:border-b-2 hover:border-white border-transparent">Nosotros</Link>
                </li>
                <li>
                    <Link href={""} className="hover:border-b-2 hover:border-white border-transparent">Contacto</Link>
                </li>
            </ul>
        </div>
        <Image
        src={"/Footer_Taco.svg"}
        alt=""
        width={5}
        height={0}
        />
        <div>
            <h1 className="font-bold text-lg mb-10">¿Donde estamos?</h1>
            <ul>
                <li>Gral. Madariaga 543</li>
                <li className="mb-4">B1824 Gerli</li>
                <li>Provincia de </li>
                <li>Buenos Aires</li>
            </ul>
        </div>
        <Image
        src={"/Footer_Taco.svg"}
        alt=""
        width={5}
        height={0}
        />
        <div>
            <h1 className="font-bold text-lg mb-10">Horarios</h1>
            <ul>
                <li>Lunes a Viernes</li>
                <li className="mb-4">09:00 a 17:00</li>
                <li>Sábados </li>
                <li>10:30 a 16:00</li>
            </ul>
        </div>
    </footer>
  )}
=======
import React from 'react';
import { footerBackground, footerLogo, separador } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const backgroundImageUrl = footerBackground.src;
  return (
    <div className="bg-[#272727]">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between text-xs md:text-sm lg:text-base xl:text-lg ">
          <div className="flex justify-center flex-col items-center m-[20px] lg:ml-[50px] 2xl:ml-[200px]">
            <Image src={footerLogo} alt="footer background" className="w-40 lg:w-64 z-20" />
            <p>Juegos de Salón</p>
          </div>
          <div id="footer-data" className="flex flex-col text-center sm:text-left sm:flex-row gap-[20px] xl:gap-[30px] 2xl:gap-[50px] m-[50px] xl:mr-[200px] mr-[50px] ">
            <div id="links" className="order-1 flex flex-col gap-[10px] lg:gap-[20px] xl:gap-[30px] 2xl:gap-[50px]">
              <h1 className="font-bold">Navegador</h1>
              <Link href={"/"} className="hover:underline"> Inicio</Link>
              <Link href={"/"} className="hover:underline">Productos</Link>
              <Link href={"/"} className="hover:underline">Nosotros</Link>
              <Link href={"/"} className="hover:underline">Contacto</Link>
            </div>
            <div id="separador" className="order-2 flex rotate-90 md:rotate-0">
              <Image src={separador} alt="separador" className="hidden md:flex md:w-[3px] lg:w-[6px]" />
            </div>
            <div id="ubicacion" className="order-3 flex flex-col gap-[27px] lg:gap-[50px]">
              <h1 className="font-bold">Donde estamos</h1>
              <div>
                <p>Gral. Madariaga 543</p>
                <p>B1824 Gerli</p>
                <p>Provincia de</p>
                <p>Buenos Aires</p>
              </div>
            </div>
            <div id="separador" className="order-4 flex rotate-90 md:rotate-0">
              <Image src={separador} alt="separador" className="hidden md:flex md:w-[3px] lg:w-[6px]" />
            </div>
            <div id="horarios" className="order-5 flex flex-col gap-[10px] lg:gap-[20px] xl:gap-[30px] 2xl:gap-[50px]">
              <h1 className="font-bold">Horarios</h1>
              <div>
                <p>Lunes a Viernes</p>
                <p>9:00 a 17:00</p>
              </div>
              <div>
                <p>Sabados</p>
                <p>10:30 a 16:00</p>
              </div>
              <div>
                <p>Domingos</p>
                <p>Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
>>>>>>> 823f01dfea142ea847c703c0c05f4f4156a515bd
