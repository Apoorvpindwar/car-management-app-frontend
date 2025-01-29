import React, { useEffect, useState } from "react";
import { fetchCars } from "../services/api";
import CarCard from "../components/CarCard";
import SearchBar from "../components/SearchBar";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    const loadCars = async () => {
      const data = await fetchCars();
      setCars(data);
      setFilteredCars(data);
    };
    loadCars();
  }, []);

  const handleSearch = (query) => {
    setFilteredCars(
      cars.filter((car) =>
        car.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCars.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
