import axios from 'axios';
import { TABLE_ITEMS_LIMIT, urls } from '@/constants';

export const fetchMeters = async (
  page = 1,
  limit: number = TABLE_ITEMS_LIMIT
) => {
  const offset = (page - 1) * limit;
  const response = await axios.get(
    `${urls.meters}?limit=${limit}&offset=${offset}`
  );
  return response.data;
};

export const fetchAddress = async (id: string) => {
  const response = await axios.get(`${urls.areas}?id__in=${id}`);
  return response.data.results[0];
};

export const deleteMeter = async (id: string) => {
  await axios.delete(`${urls.meters}${id}/`);
};
