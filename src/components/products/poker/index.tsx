import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const images = [
    "/Image-Poker/poker1.svg",
    "/Image-Poker/poker2.svg",
    "/Image-Poker/poker3.svg",
    "/Image-Poker/poker4.svg",
    "/Image-Poker/poker5.svg",
    "/Image-Poker/poker6.svg",
    "/Image-Poker/poker7.svg",
    "/Image-Poker/poker8.svg",
    "/Image-Poker/poker9.svg",
    "/Image-Poker/poker10.svg",
    "/Image-Poker/poker11.svg",
    "/Image-Poker/poker12.svg",
]

export default function poker() {

    return (
        <section>
            <section className="relative w-full top-0">
                <div className="relative">
                    <Image
                        src="/Banner_Poker.svg"
                        className="w-full"
                        alt=""
                        width={0}
                        height={0}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="font-bold text-[95px] font-lora">Poker</h1>
                    </div>
                </div>
            </section>
            <section className="text-center text-black bg-white">
                <div className="px-[25%] py-[3%]">
                    <p>Nuestras mesas de poker son la elección perfecta para tu <b>juego</b>. Hechas con gran precisión  para que tus juegos se vean profesionales. Con una selección de tamaños y modelos personalizables, podés elegir la mesa de poker que mejor encaje con tu <b>estilo y espacio</b>.</p>
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
