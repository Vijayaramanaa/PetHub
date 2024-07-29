import React,{useState} from 'react';
import { usePetContext } from '../context/PetContext';
import { Link } from 'react-router-dom';

const SelectComponent = () => {
 const {setSelectBreed} = usePetContext();
  const [val,setVal] = useState(null);
  const handleChange = (event) => {
    const data = event.target.value;
    const text = data.toLowerCase();
    setSelectBreed(text);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <select
        id="pets"
        value={val}
        onChange={handleChange}
        className="p-2 cursor-pointer border-gray-300 rounded-md outline-none border-0"
      >
        <option value="">Select a Breed</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="bird">Bird</option>
        <option value="rabbit">Rabbit</option>
      </select>
    </div>
  );
};

export default SelectComponent;
