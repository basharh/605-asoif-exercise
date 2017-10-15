import axios from 'axios';
import { apiUrl } from '../constants';

export default () => axios.get(`${apiUrl}/houses`);
