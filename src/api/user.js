import axios from 'axios';

export const getAllUser = async () => {
  try {
    const { data } = await axios.get('https://reqres.in/api/users');
    return data.data;
  } catch (error) {
    return;
  }
};
