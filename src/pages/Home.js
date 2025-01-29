import React, { useEffect, useState } from "react";
import { fetchCars } from "../services/api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getCars = async () => {
      try {
        const carsData = await fetchCars();
        setCars(carsData);
      } catch (err) {
        console.error("Error fetching cars:", err);
        // Handle error appropriately (e.g., show a message or redirect)
      } finally {
        setLoading(false);
      }
    };

    getCars();
  }, []);

  const handleCreateCar = () => {
    navigate("/create-car");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Car List</h1>
      <button
        onClick={handleCreateCar}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Car
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {cars.map((car) => (
            <li key={car._id} className="border-b py-2">
              {car.name} - {car.model}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
