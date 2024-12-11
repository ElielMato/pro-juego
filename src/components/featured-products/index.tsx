import Link from "next/link";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image';

const images = [
  "Image-DartBoards/dardos1.jpg",
  "Image-DartBoards/dardos2.jpg",
  "Image-Foosball/metegol1.svg",
  "Image-Foosball/metegol2.svg",
  "Image-Foosball/metegol3.svg",
  "Image-Multipurpose/Multi2.svg",
  "Image-Multipurpose/Multi3.svg",
  "Image-Poker/poker1.svg",
  "Image-Poker/poker3.svg",
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
        <h1 className="text-4xl font-lora font-bold p-4">Productos Destacados</h1>
        <div className="m-12">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="w-40 sm:w-60 md:w-80 lg:w-96 xl:w-96 mx-auto">
                <div style={{ width: '400px', height: '400px' }}>
                  <Image
                    src={image}
                    alt={`Thumbnail ${index}`}
                    layout="responsive" 
                    width={400}
                    height={400}
                    className="px-2"
                  />
                </div>
                
              </div>
            ))}
          </Slider>
        </div>
        <Link href={'/products'} className="relative inline-block px-6 py-2 font-medium group">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white">Ver Mas</span>
        </Link>
      </section>
    );
  }
}