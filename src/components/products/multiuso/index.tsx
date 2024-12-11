import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const images = [
    "/Image-Multipurpose/Multi1.svg",
    "/Image-Multipurpose/Multi2.svg",
    "/Image-Multipurpose/Multi3.svg",   
]

export default function multiuso() {

    return (
        <section>
            <section className="relative w-full top-0">
                <div className="relative">
                    <Image
                        src="/Banner_Multiuso.svg"
                        className="w-full"
                        alt=""
                        width={0}
                        height={0}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="font-bold text-[95px] font-lora">Multiuso</h1>
                    </div>
                </div>
            </section>
            <section className="text-center text-black bg-white">
                <div className="px-[25%] py-[3%]">
                    <p className="">Las mesas especiales fueron creadas para satisfacer diferentes necesidades. Podrás utilizarla tanto para una cena en familia como para una juntada con amigos donde podrán disfrutar de juegos como Ping Pong o Pool, transformando la mesa en cuestión de minutos. Podrás elegir entre <b>mesa doble</b> (pool y mesa comedor) o <b>mesa triple</b> (pool, ping pong y mesa comedor)</p>
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
