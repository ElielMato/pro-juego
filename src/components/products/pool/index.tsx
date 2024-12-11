import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const images = [
    "/Image-Pool/pool1.svg",
    "/Image-Pool/pool2.svg",
    "/Image-Pool/pool3.svg",
    "/Image-Pool/pool4.svg",
    "/Image-Pool/pool5.svg",
    "/Image-Pool/pool6.svg",
    "/Image-Pool/pool7.svg",
    "/Image-Pool/pool8.svg",
    "/Image-Pool/pool9.svg",
    "/Image-Pool/pool10.svg",
    "/Image-Pool/pool11.svg",
    "/Image-Pool/pool12.svg",
]

export default function pool() {

    return (
        <section>
            <section className="relative w-full top-0">
                <div className="relative">
                    <Image
                        src="/Banner_Pool.svg"
                        className="w-full"
                        alt=""
                        width={0}
                        height={0}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="font-bold text-[95px] font-lora">Pool</h1>
                    </div>
                </div>
            </section>
            <section className="text-center text-black bg-white">
                <div className="px-[25%] py-[3%]">
                    <p className="">Creadas con <b>precisión</b> y diseñadas con <b>estilo</b>, nuestras mesas de Pool ofrecen una experiencia de juego excepcional. Ya sea que seas un profesional o un jugador ocasional, nuestras mesas añadirán un toque de elegancia y <b>diversión a tu espacio</b>.Trabajamos en tamaños de 7 y 8 pies para que puedas elegir el que mejor se adapte a tu espacio.</p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-3">
                        {images.map((image, index) => (
                            <div key={index}>
                                <Image
                                    src={`${image}`}
                                    alt={`Thumbnail ${index}`}
                                    width={400}
                                    height={0}
                                    className="px-2 py-2"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="py-20">
                    <Link href={'/contacto'} className="relative inline-block px-6 py-2 font-medium group">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">Pedir Cotización</span>
                    </Link>
                </div>

            </section>
        </section>
    );
}
