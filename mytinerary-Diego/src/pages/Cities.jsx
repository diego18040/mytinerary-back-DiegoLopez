import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Cities = () => {
  const [cities, setCities] = useState([]); // Asegurarse de inicializar como array
  const [filteredCities, setFilteredCities] = useState([]); // También inicializar como array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    

    fetchCities();
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = cities.filter((city) =>
      city.city.toLowerCase().includes(searchTerm)
    );
    setFilteredCities(filtered); // Actualizar `filteredCities`
  };

  if (loading) {
    return <p>Loading cities...</p>; // Mostrar mensaje de carga
  }

  return (
    <>
      <Header />
      <main className="py-8 text-center">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search By City"
            onChange={handleSearch}
            className="border rounded p-2 w-full md:w-1/2 mx-auto"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.isArray(filteredCities) && filteredCities.length === 0 ? (
            <section className="text-center">
              <h1 className="text-3xl font-bold mb-2">No cities found.</h1>
            </section>
          ) : (
            Array.isArray(filteredCities) &&
            filteredCities.map((city) => <Card key={city._id} data={city} />)
          )}
        </div>
        <NavLink
          className="bg-blue-500 text-white px-6 py-3 rounded-full mt-4 hover:bg-blue-600 hover:shadow-md transition duration-300 ease-in-out bg-center w-full md:w-auto"
          to="/"
        >
          Go Back to Main
        </NavLink>
      </main>
      <Footer />
    </>
  );
};

export default Cities;
