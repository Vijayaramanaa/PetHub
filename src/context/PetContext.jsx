import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const PetContext = createContext();

export const usePetContext = () => useContext(PetContext);

export const PetProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectBreed,setSelectBreed] = useState(null)

  return (
    <PetContext.Provider
      value={{ pets, setPets, selectedPet, setSelectedPet, loading, setLoading, error, setError,selectBreed,setSelectBreed }}
    >
      {children}
    </PetContext.Provider>
  );
};

PetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
