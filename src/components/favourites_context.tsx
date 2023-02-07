import React, { useState, useContext } from 'react';
import { DisneyCharacter } from '../disney_character';

interface IFavouritesProviderProps {
    children?: React.ReactNode
}

interface IFavouritesContext {
    favourites: DisneyCharacter[],
    setFavourites: React.Dispatch<React.SetStateAction<DisneyCharacter[]>>
}

const defaultFavouritesState = {
    favourites: [],
    setFavourites: () => { }
}

const FavouritesContext = React.createContext<IFavouritesContext>(defaultFavouritesState)

export const useFavourites = () => {
    const { favourites } = useContext(FavouritesContext);
    return favourites;
}

export const useFavouritesUpdate = () => {
    const { setFavourites } = useContext(FavouritesContext);
    return setFavourites;
}

export const FavouritesProvider: React.FC<IFavouritesProviderProps> = ({ children }) => {
    const [favourites, setFavourites] = useState<Array<DisneyCharacter>>([]);

    return (
        <FavouritesContext.Provider value={{ favourites, setFavourites }}>
            {children}
        </FavouritesContext.Provider>
    )
}

