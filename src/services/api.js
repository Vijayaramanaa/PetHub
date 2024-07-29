import axios from 'axios';

const API_URL = 'http://pets-v2.dev-apis.com';

export const getPets = async () => {
  try {
    const response = await axios.get(`${API_URL}/pets`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch pets');
  }
};

export const getPetById = async (id) => {
  try {
    const response = await axios.get(` http://pets-v2.dev-apis.com/pets?id=${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch pet details');
  }
};

export const getBreedsByAnimal = async (animal) => {
  try {
    const response = await axios.get(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch breeds');
  }
};

export const searchPets = async (animal, location, breed) => {
  try {
    const response = await axios.get(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to search pets');
  }
};
