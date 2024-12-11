import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const images = [
    "/Image-DartBoards/dardos1.jpg",
    "/Image-DartBoards/dardos2.jpg",
]

export default function dardos() {

    return (
        <section>
            <section className="relative w-full top-0">
                <div className="relative">
                    <Image
                        src="/darts1.jpg"
                        className="w-full"
                        alt=""
                        width={1000}
                        height={0}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="font-bold text-[95px] font-lora">Tablero de Dardos</h1>
                    </div>
                </div>
            </section>
            <section className="text-center text-black bg-white">
                <div className="px-[25%] py-[3%]">
                    <p className="">Los tableros de dardos son mucho más que un juego, representan la fusión perfecta entre <b>precisión</b> y diversión. Como símbolo de destreza y competencia, cada lanzamiento está lleno de emoción, la misma emoción que se <b>experimenta en cada partida</b>. Nuestros tableros están meticulosamente diseñados, con una precisión milimétrica y una atención <b>inigualable al detalle</b>, asegurando que cada dardo lanzado se convierta en horas de entretenimiento garantizado.</p>
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
