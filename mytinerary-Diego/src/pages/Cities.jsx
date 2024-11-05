import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchCard from "../components/SearchCard";
import { NavLink } from "react-router-dom";

const Cities = () => {
  const [cities, setCities] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const cityResponse = await fetch("http://localhost:8080/api/cities/all", {
          cache: "no-store",
        });
        const cityData = await cityResponse.json();

        const testimonialResponse = await fetch("http://localhost:8080/api/itenary/all", {
          cache: "no-store",
        });
        const testimonialData = await testimonialResponse.json();

        setCities(cityData.response);
        setTestimonials(testimonialData.response);
        setFilteredCities(cityData.response);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    // Solo ejecuta la llamada si `loading` está activado
    if (loading) {
      fetchCities();
    }
  }, [loading]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = cities.filter((city) =>
      city.city.toLowerCase().includes(searchTerm)
    );
    setFilteredCities(filtered);
  };

  if (loading) {
    return <p>Loading cities...</p>;
  }

  return (
    <>
      <Header />
      <main className="py-8 text-center">
        <div className="mt-20">
          <SearchCard handleSearch={handleSearch} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCities.length === 0 ? (
            <section className="text-center">
              <h1 className="text-3xl font-bold mb-2">No cities found.</h1>
            </section>
          ) : (
            filteredCities.map((city) => {
              const cityItineraries = testimonials.filter(
                (t) => t.city.toLowerCase() === city.city.toLowerCase()
              );

              return (
                <Card
                  key={city._id}
                  data={city}
                  itineraries={cityItineraries} 
                />
              );
            })
          )}
        </div>

        <div className="mt-4">
          <NavLink
            className="bg-blue-500 text-white px-6 py-3 rounded-full mt-4 hover:bg-blue-600 hover:shadow-md transition duration-300 ease-in-out bg-center w-full md:w-auto"
            to="/"
          >
            Go Back to Main
          </NavLink>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cities;

