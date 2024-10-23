import React, { useEffect, useState } from "react";
import Card from "./Card"; // Importa tu componente Card
import Carousel from "./Carousel"; // Importa tu componente Carousel

const CitiesList = () => {
  const [cities, setCities] = useState([]); // Estado para guardar las ciudades
  const [loading, setLoading] = useState(true); // Estado para manejar el loading
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    // Llamada a la API
    const fetchCities = async () => {
        try {
          const response = await fetch("http://localhost:8080/api/cities/all", {
            cache: "no-store" // Evitar uso de caché
          });
          const data = await response.json();
          setCities(data.response);
          setFilteredCities(data.response);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching cities:", error);
          setLoading(false);
        }
      };

    fetchCities(); // Ejecutamos la función al montar el componente
  }, []); // El array vacío hace que esto se ejecute solo una vez

  if (loading) return <p>Loading...</p>; // Mostrar un mensaje mientras se cargan los datos
  if (error) return <p>Error loading cities: {error.message}</p>; // Mostrar un mensaje si hay error

  return (
    <div>
      {/* Pasamos las ciudades al carrusel */}
      <Carousel cities={cities} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {/* Renderizamos las tarjetas de cada ciudad */}
        {cities.map((city) => (
          <Card key={city._id} data={city} />
        ))}
      </div>
    </div>
  );
};

export default CitiesList;


