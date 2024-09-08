import config from '@/lib/config';
import axios from 'axios';

export const api = axios.create({
    baseURL: config.api.apiUrl,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})