import {Seller} from "./seller";

export interface Photo {
  id?: number;
  placeholder: string;
  url: string;
  seller?: Seller; // Assuming Seller interface is defined elsewhere
}
