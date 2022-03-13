export interface ApplicationContextInterface {
  choosenStar: number;
  setChoosenStar: React.Dispatch<React.SetStateAction<number>>;
  adults: number;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  childrens: number;
  setChildrens: React.Dispatch<React.SetStateAction<number>>;
}