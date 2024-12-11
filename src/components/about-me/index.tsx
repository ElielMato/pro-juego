import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AboutMe() {
    return (
        <section className="bg-white">
            <div className="flex flex-col-reverse lg:flex-row text-black">
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                    <div className="lg:w-2/3">
                        <h1 className="mb-4 font-lora text-4xl font-bold">Sobre Nosotros</h1>
                        <p className="mb-2 font-overpass text-lg">Nuestra historia comienza con la creación de juegos de salón personalizados. Ofrecemos mesas de pool, ping pong, póker, metegol y tableros de dardos de la más alta calidad. Ya sea para tu hogar, tu negocio o un evento especial, diseñamos productos que se adaptan a tus gustos y necesidades.</p>
                        <p className="font-overpass text-lg">No solo creamos mesas a medida, sino que también nos especializamos en restauraciones de mesas, cambios de paños y de bandas, entre otros servicios. En cada proyecto, nuestra misión es brindarte calidad y atención inigualables.</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 bg-[#005762] flex items-center justify-center p-8">
                    <Image
                        src={"/Image-AboutMe/Foto_SobreNosotros.svg"}
                        alt=""
                        width={600}
                        height={400}
                    />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row text-white">
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                    <Image
                        src={"/Image-AboutMe/Foto_2.svg"}
                        alt=""
                        width={600}
                        height={400}
                    />
                </div>
                <div className="w-full lg:w-1/2 bg-[#005762] flex items-center justify-center p-8">
                    <div className="lg:w-2/3">
                        <h1 className="mb-4 font-lora text-4xl font-bold">Explorar</h1>
                        <p className="mb-2 font-overpass text-md">Todos nuestros modelos de mesas están fabricados con estructura metálica pintada con pintura epoxi horneada, combinada con madera maciza, trabajamos todas las maderas (paraíso, kiri, cedro, eucalipto, guayubira, petiribi, incienso, etc).</p>
                        <p className="font-overpass text-md">El almacenamiento de las bolas no es con redes como todas las mesas tradicionales es con un sistema de cajones donde las bolas quedan alojadas y en el momento de hacerlo mesa de comedor no se ve las bolas y se pueden dejar alojadas en los cajones en cada tronera.</p>
                        <p className="font-overpass text-md">Se entregan con todos sus accesorios, (tacos, bolas, triángulo, tizas, punteras, set ping-pong) también cuentan con porta tablas metálicos retráctiles que al momento de hacerlo mesa de comedor se cierran para no molestar al sentarse y de regalo tablas comedor. Todos nuestros modelos de mesas cuentan con bandas importadas K55 y paño speed importado.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}
