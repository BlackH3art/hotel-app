import React, { useState, FC, ReactElement } from 'react';
import { ApplicationContextInterface } from '../interfaces/ApplicationContextInterface';

export const ApplicationContext = React.createContext<ApplicationContextInterface>({
  choosenStar: 0,
  setChoosenStar: () => {},
  adults: 1,
  setAdults: () => {},
  childrens: 0,
  setChildrens: () => {}
});

interface Props {
  children: ReactElement;
}

export const ApplicationProvider: FC<Props> = ({ children }) => {

  const [choosenStar, setChoosenStar] = useState<number>(0);
  const [adults, setAdults] = useState<number>(1);
  const [childrens, setChildrens] = useState<number>(0);


  return (
    <ApplicationContext.Provider value={{
      choosenStar,
      setChoosenStar,
      adults,
      setAdults,
      childrens,
      setChildrens
    }}>
      {children}
    </ApplicationContext.Provider>
  );
}