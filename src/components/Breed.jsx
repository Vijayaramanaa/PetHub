import React,{useState,useEffect} from 'react';
import { getBreedsByAnimal } from '../services/api';
import { usePetContext } from '../context/PetContext';
import Spinner from './Spinner';

function Breed() {
    const { selectBreed, loading, setLoading, error, setError } = usePetContext();
    const [pet,setPet] = useState([])
    useEffect(()=>{
        const fetchPet = async () => {
            setLoading(true);
            try {
              const data = await getBreedsByAnimal(selectBreed);
              setPet(data.breeds);
            } catch (err) {
              setError(err.message);
            } finally {
              setLoading(false);
            }
          };
      
          fetchPet();
    },[selectBreed])
    if (loading) return <Spinner />;
    if (error) return <div className="flex justify-center items-center h-screen"><div className="text-red-500 text-xl">{error}</div></div>;
  return (
    <div className="w-full h-full  flex flex-col items-center bg-gray-900 text-center text-yellow-300 py-8 px-4 ">
      <h1 className='font-bold m-3 text-green-500'>{selectBreed.toUpperCase()} Breeds Available</h1>
    <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-screen-xl">
      {pet.map((p,index) => ( 
        <li key={index} className="bg-black p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
         <h1>{p}</h1>
        </li>
      ))}
    </ol>
  </div>
  )
}

export default Breed