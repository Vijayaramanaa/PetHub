import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { getPetById } from '../services/api';
import Spinner from './Spinner';
import Slider from 'react-slick';

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const fetchPet = async () => {
      setLoading(true);
      try {
        const data = await getPetById(id);
        setPet(data.pets);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPet();
  }, [id]);

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
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-900 text-white py-8 px-4">
      <button className='bg-amber-600 p-1 text-black rounded-md cursor-pointer absolute top-2 left-2 lg:top-[85px] md:top-[75px]' onClick={()=>nav(-1)}>Back</button>
      {pet && (
        pet.map((p)=>(

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
      )}
    </div>
  );
};

export default PetDetails;
