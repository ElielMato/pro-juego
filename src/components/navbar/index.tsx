import Image from "next/image";
import Link from "next/link";

export default function navbar() {
  return (
    <header className="flex items-center justify-between px-[10%] py-5">
        <div>
          <Image
          src={"logo.svg"}
          alt="Logo Pro Juegos"
          width={80}
          height={80}/>
        </div>
        <div className="space-x-8">
            <span className="font-bold hover:border-b-2"> 
              <Link href={"/"}>
                Inicio
              </Link> 
            </span>
            <span className="font-bold hover:border-b-2"> 
              <Link href={"/"}>
                Productos
              </Link> 
            </span>
            <span className="font-bold hover:border-b-2"> 
              <Link href={"/"}>
                Nosotros
              </Link> 
            </span>
            <span className="font-bold hover:border-b-2"> 
              <Link href={"/"}>
                Contacto
              </Link> 
            </span>
        </div>
    </header>
  )
}
