import React, { useState } from 'react';
import { usePetContext } from '../context/PetContext';
import { searchPets } from '../services/api';
import Spinner from './Spinner';
import Slider from 'react-slick';


const SearchForm = () => {
  const [animal, setAnimal] = useState('');
  const [location, setLocation] = useState('');
  const [breed, setBreed] = useState('');
  const {  setLoading, setError,loading,error } = usePetContext();
  const [pet,setPet] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await searchPets(animal, location, breed);
      setPet(data.pets);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  if (loading) return <Spinner />;
  if (error) return <div className="flex justify-center items-center h-screen"><div className="text-red-500 text-xl">{error}</div></div>;

  return (
    <div className='flex flex-col w-full h-full '>
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 p-4 bg-gray-800  shadow-md m-3 rounded-xl">
      <input 
        value={animal} 
        onChange={(e) => setAnimal(e.target.value)} 
        placeholder="Animal" 
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
      <input 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        placeholder="Location" 
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
      <input 
        value={breed} 
        onChange={(e) => setBreed(e.target.value)} 
        placeholder="Breed" 
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
        Search
      </button>
    </form>
    <div>
      {pet.length  ?  <div className="w-full min-h-screen flex flex-col items-center bg-gray-900 text-white py-8 px-4 gap-5">
        {pet.map((p)=>(

          <div className="max-w-screen-md w-full bg-gray-800 p-8 rounded-lg shadow-lg">
            {p.images.length === 1 ?<img
                  src={p.images[0]}
                  className="w-full h-[400px] object-contain rounded-lg mb-4 transition-transform transform hover:scale-105"
                  /> :  
          <Slider {...settings}>
            {p.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`${pet.name} ${index + 1}`}
                  className="w-full h-[400px] object-contain rounded-lg mb-4 transition-transform transform hover:scale-105"
                  />
              </div>
            ))}
          </Slider>
          }
          <div className="flex flex-col items-center mt-8">
            <h1 className="text-3xl font-semibold mb-4">{p.name}</h1>
            <h2 className="text-xl mb-2">{p.animal}</h2>
            <p className="text-lg mb-2">{p.breed}</p>
            <p className="text-gray-400 mb-2">{p.city}, {p.state}</p>
            <p className="text-sm mt-4">{p.description}</p>
          </div>
        </div>
          ))
        }
    </div> : <h1 className='text-white text-center m-20 text-xl font-semibold'>Search what Your are looking for</h1> }
    </div>
    </div>
  );
};

export default SearchForm;
