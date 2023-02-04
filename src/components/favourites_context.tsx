import React, { useState, useContext } from 'react';
import { DisneyCharacter } from '../disney_character';

interface IFavouritesProviderProps {
    children?: React.ReactNode
}

const FavouritesContext = React.createContext<DisneyCharacter[]>([]);
const FavouritesUpdateContext = React.createContext<React.Dispatch<React.SetStateAction<DisneyCharacter[]>>>(() => {});

export const useFavourites = () => {
    return useContext(FavouritesContext);
}

export const useFavouritesUpdate = () => {
    // const favourites = useFavourites();
    // console.log(favourites);
    return useContext(FavouritesUpdateContext);
}

export const FavouritesProvider : React.FC<IFavouritesProviderProps> = ({ children }) => {
    const [characterFavourites, setCharacterFavourites] = useState<Array<DisneyCharacter>>([]);

    return (
        <FavouritesContext.Provider value={characterFavourites}>
            <FavouritesUpdateContext.Provider value={setCharacterFavourites}>
                {children}
            </FavouritesUpdateContext.Provider>
        </FavouritesContext.Provider>
    )
}

