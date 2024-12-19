import axios from 'axios';
import {API_URL} from '@env';

const clientHttp = axios.create({
  baseURL: API_URL,
});

export default clientHttp;
