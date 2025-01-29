import React, { useState } from 'react';

const CarForm = ({ onSubmit, initialData }) => {
  const [car, setCar] = useState(initialData || { title: '', description: '', tags: '', images: [] });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(car);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        value={car.title}
        onChange={handleChange}
        placeholder="Car Title"
        className="w-full px-4 py-2 border rounded"
      />
      <textarea
        name="description"
        value={car.description}
        onChange={handleChange}
        placeholder="Car Description"
        className="w-full px-4 py-2 border rounded"
      />
      <input
        type="text"
        name="tags"
        value={car.tags}
        onChange={handleChange}
        placeholder="Tags (car_type, company)"
        className="w-full px-4 py-2 border rounded"
      />
      <input
        type="file"
        name="images"
        multiple
        onChange={(e) => setCar({ ...car, images: e.target.files })}
        className="w-full px-4 py-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {initialData ? 'Update Car' : 'Add Car'}
      </button>
    </form>
  );
};

export default CarForm;
