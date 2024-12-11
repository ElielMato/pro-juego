import Image from "next/image";
import Link from "next/link";
import {useEffect, useState } from "react";

export default function Contact() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    
    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        if (name === 'fullName') setFullName(value);
        else if (name === 'email') setEmail(value);
        else if (name === 'phone') setPhone(value);
        else if (name === 'description') setDescription(value);
    };

    const [selectedPhotos, setSelectedPhotos] = useState<File[]>([]);
    const [showPopup, setShowPopup] = useState(false);

    const handlePhotoChange = (event: { target: { files: FileList | null }; }) => {
        const files = event.target.files;

        if (files) {
            const selectedFiles: File[] = Array.from(files); // Convert FileList to array of Files

            setSelectedPhotos(selectedFiles);
        }
    };


    const handleSubmit = () => {
        setShowPopup(true)
    };

    return (
        <section className="bg-white flex items-center justify-center">
            <div className="grid grid-cols-2 space-y-10 space-x-10 max-lg:flex max-lg:items-center max-lg:justify-center">
                <div className="text-black p-6 flex items-center justify-center">
                    <div>
                        <h1 className="text-4xl font-lora font-bold">Ponete en contacto</h1>
                        <p className="font-overpass">Completa los datos y dejanos tu consulta a continuación</p>
                        <form onSubmit={handleSubmit}>
                            <div className="border-[0.5px] border-gray px-4 py-2 m-4">
                                <label htmlFor="fullName" className="text-sm">Nombre <span className="text-[#F70A0A]">*</span> </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={fullName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="border-[0.5px] border-gray px-4 py-2 m-4">
                                <label htmlFor="email" className="text-sm">Correo Electrónico <span className="text-[#F70A0A]">*</span> </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="border-[0.5px] border-gray px-4 py-2 m-4">
                                <label htmlFor="phone" className="text-sm">Número de teléfono </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="border-[0.5px] border-gray px-4 py-2 m-4">
                                <label htmlFor="description" className="text-sm">Escriba su mensaje </label>
                                <br />
                                <textarea
                                    className="w-full h-[200px]"
                                    id="description"
                                    name="description"
                                    value={description}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="border-[0.5px] border-gray px-4 py-2 m-4">
                                <label htmlFor="photos" className="flex items-center justify-center cursor-pointer">
                                    <input
                                        type="file"
                                        id="photos"
                                        name="photos"
                                        multiple
                                        accept="image/*"
                                        onChange={handlePhotoChange}
                                        className="hidden"
                                    />
                                    <Image
                                        src={"/Image-Contact/Icono_Fotos.svg"}
                                        alt=""
                                        width={50}
                                        height={0}
                                    />
                                    <p className="text-sm text-gray ml-2">Agregar Fotos</p>
                                </label>
                                {selectedPhotos.length > 0 && (
                                    <div>
                                        <p>{selectedPhotos.length} fotos seleccionadas:</p>
                                        <ul>
                                            {selectedPhotos.map((photo, index) => (
                                                <li key={index}>{photo.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <button type="submit" className="w-full relative inline-block px-6 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">Enviar</span>
                            </button>
                        </form>
                        <div className="flex items-center jutify-center text-sm space-x-6 m-4">
                            <div className="flex items-center space-x-2">
                                <Image
                                    src={"/Image-Contact/Icono_Telefono.svg"}
                                    alt=""
                                    width={30}
                                    height={0} />
                                <div>
                                    <h3 className="font-semibold">Telefono</h3>
                                    <p>03 5432 1234</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Image
                                    src={"/Image-Contact/Icono_Correo.svg"}
                                    alt=""
                                    width={30}
                                    height={0} />
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p>info@projuegos.com.ar</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Image
                                    src={"/Image-Contact/Icono_Instagram.svg"}
                                    alt=""
                                    width={30}
                                    height={0} />
                                <div>
                                    <h3 className="font-semibold">Instagram</h3>
                                    <p>@projuegosdesalon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[90%] max-lg:hidden">
                    <Link href={"https://maps.app.goo.gl/uAcsicdCvfxQt5zF6"} target="_blacnk">
                        <Image
                            src={"/Ubicacion_Vertical.png"}
                            alt={""}
                            width={400}
                            height={0}
                            className="h-full"
                        />
                    </Link>
                </div>
            </div>

            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
                    <div className="bg-white p-4 rounded-md shadow-lg border-2 border-black ">
                        <p className="text-black">¡Formulario enviado con éxito!</p>
                    </div>
                </div>
            )}
        </section>
    )
}
