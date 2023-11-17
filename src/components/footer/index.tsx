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