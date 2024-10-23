import React from "react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../index.css";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  // Verifica que 'cities' tenga datos antes de intentar usar sort
  if (!data || data.length === 0) {
    return <div>Loading...</div>; // Puedes mostrar un mensaje de carga si no hay datos
  }

  // Filtrar y ordenar las ciudades por población
  const topCities = cities
    .sort((a, b) => b.population - a.population)
    .slice(0, 12);

  const slides = [];
  for (let i = 0; i < topCities.length; i += 4) {
    slides.push(topCities.slice(i, i + 4));
  }

  const previous = () => {
    setCurrentIndex((index) =>
      index > 0 ? index - 1 : slides.length - 1
    );
  };

  const next = () => {
    setCurrentIndex((index) =>
      index < slides.length - 1 ? index + 1 : 0
    );
  };

  return (
    <div className="relative w-full" id="carousel">
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "block" : "hidden"
            } duration-700 ease-in-out`}
          >
            <div className="flex justify-center space-x-4">
              {slide.map((city) => (
                <div key={city._id} className="w-1/4">
                  <img
                    src={city.photo}
                    alt={city.city}
                    className="w-full h-56 md:h-96 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 p-4 bg-opacity-70 bg-gray-800 text-white w-full">
                    <p className="text-lg font-semibold">{city.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={previous}
        className="absolute top-0 left-0 z-30 flex items-center h-full px-4"
      >
        <FaArrowLeft className="text-white" />
      </button>
      <button
        onClick={next}
        className="absolute top-0 right-0 z-30 flex items-center h-full px-4"
      >
        <FaArrowRight className="text-white" />
      </button>
    </div>
  );
};


export default Carousel;

