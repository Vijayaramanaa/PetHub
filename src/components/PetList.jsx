import React, { useEffect } from 'react';
import { usePetContext } from '../context/PetContext';
import { getPets } from '../services/api';
import Spinner from './Spinner';
import {Link} from "react-router-dom"

const PetList = () => {
  const { pets, setPets, loading, setLoading, error, setError } = usePetContext();

  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true);
      try {
        const data = await getPets();
        setPets(data.pets);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, [setPets, setLoading, setError]);

  if (loading) return <Spinner/>;
  if (error) return <div className="flex  justify-center bg-gray-900 items-center h-screen"><div className="text-red-500 text-xl">{error}</div></div>;
  if (pets.length === 0) return <div className="flex justify-center items-center bg-gray-900 h-screen"><div className="text-white text-xl">No pets found</div></div>;

  return (
    <div className="w-full  min-h-full flex flex-col items-center bg-gray-900 text-white py-8 px-4 ">
      <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-screen-xl">
        {pets.map((pet) => ( 
          <li key={pet.id} className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
            <Link to={`/pet/${pet.id}`}>
            <div className="flex flex-col items-center">
              <img src={pet.images[0]} alt={pet.name} className="w-full h-48 object-cover rounded-lg mb-4 transition-transform transform hover:scale-105" />
              <h2 className="text-xl font-semibold mb-2"><span className='text-red-400'>Name : </span>{pet.name}</h2>
              <h3 className="text-lg">{pet.animal}</h3>
              <p className="text-gray-400">{pet.breed}</p>
              <p className="text-gray-400">{pet.city}, {pet.state}</p>
              <p className="text-sm mt-2">{pet.description}</p>
            </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PetList;
