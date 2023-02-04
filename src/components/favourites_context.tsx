import React, { useState, useContext } from 'react';

interface IFavouritesProviderProps {
    children?: React.ReactNode
}

const FavouritesContext = React.createContext<number[]>([]);
const FavouritesUpdateContext = React.createContext<React.Dispatch<React.SetStateAction<number[]>>>(() => {});

export const useFavourites = () => {
    return useContext(FavouritesContext);
}

export const useFavouritesUpdate = () => {
    return useContext(FavouritesUpdateContext);
}

export const FavouritesProvider : React.FC<IFavouritesProviderProps> = ({ children }) => {
    const [characterFavourites, setCharacterFavourites] = useState<Array<number>>([]);

    return (
        <FavouritesContext.Provider value={characterFavourites}>
            <FavouritesUpdateContext.Provider value={setCharacterFavourites}>
                {children}
            </FavouritesUpdateContext.Provider>
        </FavouritesContext.Provider>
    )
}

