import axios from "axios";
import { HotelInterface } from "../interfaces/HotelInterface";

const API = axios.create({
  baseURL: 'https://obmng.dbm.guestline.net/api', 
});

export const getAllHotels = () => API.get<HotelInterface[]>('/hotels?collection-id=OBMNG');
export const getRoomTypes = (hotelId: string) => API.get(`/roomRates/OBMNG/${hotelId}`)

// https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG
// https://obmng.dbm.guestline.net/api/roomRates/OBMNG/[hotelId] 