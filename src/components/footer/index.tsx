import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function navbar() {
  return (
      <footer className="bg-[#272727] flex items-center justify-between px-[15%] py-[5%] relative text-overpass">

        <div className="absolute inset-0 z-10 bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.discordapp.com/attachments/898207467975082014/1186047092020478095/Footer_Madera.jpg?ex=6591d36e&is=657f5e6e&hm=890d0c08f50e61996c18fa3ae3267936afbc5d222b40965091f413f0b5382503&)' }}>
        </div>

        <Image
        src={"/Logo_Blanco.svg"}
        alt=""
        className="z-20 max-xl:hidden"
        width={300}
        height={0}
        />
        <div className="z-20">
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
        className="z-20"
        width={5}
        height={0}
        />
        <div className="z-20">
            <h1 className="font-bold text-lg mb-10">¿Donde estamos?</h1>
            <ul>
                <li>Av. Gral. Madariaga 543 Gerli</li>
                <li>Lanús Provincia de Buenos Aires </li>
            </ul>
        </div>
        <Image
        src={"/Footer_Taco.svg"}
        alt=""
        className="z-20"
        width={5}
        height={0}
        />
        <div className="z-20">
            <h1 className="font-bold text-lg mb-10">Horarios</h1>
            <ul>
                <li>Cordinar una cita antes de presentarse</li>
                <li>Lunes a Viernes</li>
                <li className="mb-4">08:00 a 17:00</li>
                <li>Sábados </li>
                <li>10:00 a 13:00</li>
            </ul>
        </div>
    </footer>
  )}
