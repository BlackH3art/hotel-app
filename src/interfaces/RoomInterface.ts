import { OccupancyInterface } from "./OccupancyInterface";

export interface RoomInterface {
  
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  occupancy: OccupancyInterface,
  disabledAccess: boolean,
  bedConfiguration: string;
  images: { url: string, alt: string }[],
  facilities: { code: string, name: string }[] 
  
}