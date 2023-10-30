import React from 'react';
import { footerBackground, footerLogo, separador } from '@/assets';
import Image from 'next/image';

const Navbar = () => {
  const backgroundImageUrl = footerBackground.src;
  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-between bg-[#272727] text-lg">
      <div
        id="footer-logo"
        style={{
          color: '#272727', // Color de fondo
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover', // Ajusta el tamaño del fondo a la ventana
          backgroundRepeat: 'no-repeat', // Evita la repetición del fondo
          maxWidth: '500px' // Establece el ancho máximo que desees
        }}
        className="flex justify-center items-center "
      >
        <Image src={footerLogo} alt="footer background" className="w-64 m-12" />
      </div>
        <div id="footer-data" className="flex flex-row gap-[50px] m-[50px] mr-[200px]">
          <div id="links" className="order-1 flex flex-col gap-[27px]">
            <h1 className="font-bold">Navegador</h1>
            <p>Inicio</p>
            <p>Productos</p>
            <p>Nosotros</p>
            <p>Contacto</p>
          </div>
          <div id="separador" className="order-2">
            <Image src={separador} alt="separador" className="w-[6px]" />
          </div>
          <div id="ubicacion" className="order-3 flex flex-col gap-[27px]">
            <h1 className="font-bold">Donde estamos</h1>
            <div>
              <p>Gral. Madariaga 543</p>
              <p>B1824 Gerli</p>
              <p>Provincia de</p>
              <p>Buenos Aires</p>
            </div>
          </div>
          <div id="separador" className="order-4">
            <Image src={separador} alt="separador" className="w-[6px]" />
          </div>
          <div id="horarios" className="order-5 flex flex-col gap-[27px]">
            <h1 className="font-bold">Horarios</h1>
            <div>
              <p>Lunes a Viernes</p>
              <p>9:00 a 17:00</p>
            </div>
            <div>
              <p>Sabados</p>
              <p>10:30 a 16:00</p>
            </div>
            <div>
              <p>Domingos</p>
              <p>Cerrado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
