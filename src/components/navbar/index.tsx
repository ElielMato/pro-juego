import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function navbar() {
  return (
    <section>
      <header className="flex items-center justify-between px-[10%] py-5">
        <div className="z-10">
          <Image
            src={"logo.svg"}
            alt="Logo Pro Juegos"
            width={80}
            height={80}
          />
        </div>
        <div className="space-x-8 z-10 text-white font-overpass">
          <span className="font-bold hover:border-b-2 border-white">
            <Link href={"/"}>
              Inicio
            </Link>
          </span>
          <span className="font-bold hover:border-b-2 border-white">
            <Link href={"/productos"}>
              Productos
            </Link>
          </span>
          <span className="font-bold hover:border-b-2 border-white">
            <Link href={"/"}>
              Nosotros
            </Link>
          </span>
        </div>
        <div className="z-10 ">
          <span className="font-bold border-2 border-white px-10 py-2 hover:bg-black rounded-md">
            <Link href={"/"}>
              Contacto
            </Link>
          </span>
        </div>
        
      </header>
    </section>
  )}