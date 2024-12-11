import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const images = [
    "/Image-Foosball/metegol1.svg",
    "/Image-Foosball/metegol2.svg",
    "/Image-Foosball/metegol3.svg",
    "/Image-Foosball/metegol4.svg",
    "/Image-Foosball/metegol5.svg",
    "/Image-Foosball/metegol6.svg",
]

export default function metegol() {

    return (
        <section>
            <section className="relative w-full top-0">
                <div className="relative">
                    <Image
                        src="/Banner_Metegol.svg"
                        className="w-full"
                        alt=""
                        width={0}
                        height={0}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="font-bold text-[95px] font-lora">Metegol</h1>
                    </div>
                </div>
            </section>
            <section className="text-center text-black bg-white">
                <div className="px-[25%] py-[3%]">
                    <p className="">El metegol es un símbolo de diversión y competencia. No importa el estilo, nuestros metegoles están diseñados para brindarte esa misma <b>emoción</b> que sentimos cada vez que pisamos una cancha. Fabricados con <b>precisión</b> y atención al detalle, nuestros metegoles te garantizan muchas horas de <b>entretenimiento</b>.</p>
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
