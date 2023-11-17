import Link from "next/link";
import React, { Component } from "react";
import Slider from "react-slick";

const images = [
  "https://firebasestorage.googleapis.com/v0/b/pro-juegos-de-salon.appspot.com/o/dardos1.jpg?alt=media&token=aaaa556f-1cb4-4d51-9377-38103ae6b81b",
  "https://firebasestorage.googleapis.com/v0/b/pro-juegos-de-salon.appspot.com/o/dardos2.jpg?alt=media&token=1f03dd0b-e369-4496-8d42-a6d1da24c9ee",
  "https://firebasestorage.googleapis.com/v0/b/pro-juegos-de-salon.appspot.com/o/mesa1.jpg?alt=media&token=d3cfc26e-3aa9-46d2-b821-c8b44884bf9f",
  "https://firebasestorage.googleapis.com/v0/b/pro-juegos-de-salon.appspot.com/o/mesa2.png?alt=media&token=c48018ef-d925-4cb0-aa57-4257541c520e",
  "https://firebasestorage.googleapis.com/v0/b/pro-juegos-de-salon.appspot.com/o/mesa3.png?alt=media&token=70747ec8-5cb8-4b1a-a7dd-7f62fb4f8051",
  "https://firebasestorage.googleapis.com/v0/b/pro-juegos-de-salon.appspot.com/o/mesaredonda1.jpg?alt=media&token=8a90dafd-7dfd-482f-bf33-8ef68baa61be",
  "https://firebasestorage.googleapis.com/v0/b/pro-juegos-de-salon.appspot.com/o/mesaredonda3.jpg?alt=media&token=bb739274-36b6-4ad4-9cc8-07e646e3e9d1",
  "https://firebasestorage.googleapis.com/v0/b/pro-juegos-de-salon.appspot.com/o/metegol1.jpg?alt=media&token=26b2dfbd-e742-4da1-a5fd-2c4a8dc86a64",
  "https://firebasestorage.googleapis.com/v0/b/pro-juegos-de-salon.appspot.com/o/metegol3.jpg?alt=media&token=702fbf02-e43e-417e-a047-382b11689f59"
]

export default class FeaturedProducts extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "80px",
      slidesToShow: 4,
      swipeToSlide: true,
    };
    return (
      <section className="text-black bg-white text-center p-12">
        <h1 className="text-[45px] font-lora font-bold p-4">Productos Destacados</h1>
        <div className="m-12">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div className="w-[10px]">
                        <img
                            key={index}
                            src={`${image}`}
                            alt={`Thumbnail ${index}`}
                            className="px-2 w-[400px] h-[400px]"
                        />
                    </div>
                ))}
            </Slider>
        </div>
        <Link href={'/'} className="relative inline-block px-6 py-2 font-medium group">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white">Ver Mas</span>
        </Link>
      </section>
    );
  }
}