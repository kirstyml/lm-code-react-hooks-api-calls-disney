
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import CharacterContainer from './components/character_container';
import Navigation from './components/navigation';
import { DisneyCharacter } from './disney_character';
import { FavouritesProvider } from './components/favourites_context';
import { useFavourites } from './components/favourites_context'

const App: React.FC = () => {

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [favouritesView, setFavouritesView] = useState<boolean>(false);

  const [characters, setCharacters] = useState<Array<DisneyCharacter>>([]);

  useEffect(() => {
    getCharacters(currentPage);
  }, [currentPage]);

  const getCharacters = async (pageNumber: number) => {
    const apiResponse = await fetch(`http://api.disneyapi.dev/characters?page=${pageNumber}`);
    const json = await apiResponse.json() as { data: DisneyCharacter[] };
    setCharacters(json.data);
  };

  return (
    <div className="page">
      <FavouritesProvider>
        <Header currentPage={currentPage} favouritesView={favouritesView} />
        <Navigation currentPage={currentPage} favouritesView={favouritesView} setFavouritesView={setFavouritesView} setCurrentPage={setCurrentPage} />
        <CharacterContainer
          characters={characters}
          favouritesView={favouritesView}
        />
      </FavouritesProvider>
    </div>
  );
}

export default App;
