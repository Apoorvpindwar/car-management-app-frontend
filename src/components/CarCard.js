import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <img
        src={car.image}
        alt={car.title}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-2">{car.title}</h2>
      <p className="text-gray-600">{car.description}</p>
      <Link
        to={`/cars/${car._id}`}
        className="text-blue-500 mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
};

export default CarCard;
