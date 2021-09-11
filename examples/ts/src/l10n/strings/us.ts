import axios from 'axios';

const fetchUsTranslations = async () =>
  (await axios.get('http://localhost:3000/')).data;

export { fetchUsTranslations };
