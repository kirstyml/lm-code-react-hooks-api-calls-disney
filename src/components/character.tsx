import { DisneyCharacter } from "../disney_character"
import React from 'react';
import { useFavourites, useFavouritesUpdate } from './favourites_context'

interface CharacterProps {
  character: DisneyCharacter;
}

// for our props we can reuse the DisneyCharacter interface
// - defining an anonymous type that just has one property - a DisneyCharacter
const Character: React.FC<CharacterProps> = ({ character }) => {
  const characterFavourites = useFavourites();
  const updateFavourites = useFavouritesUpdate();
  // Define a default in case the character doesn't have an image
  let imageSrc = "https://picsum.photos/300/200/?blur";
  if (character.imageUrl) {
    // API seems to include extra path for images so here we strip it off to fetch raw image
    const indexOfExtraPath = character.imageUrl.indexOf('/revision');
    imageSrc = indexOfExtraPath >= 0 ? character.imageUrl.substring(0, indexOfExtraPath) : character.imageUrl;
  }

  function toggleFavouriteForCharacter(character: DisneyCharacter) {
    if (!characterFavourites.includes(character)) {
      // add to favourites
      updateFavourites([...characterFavourites, character]);
    }
    else {
      // remove from favourites
      const updatedFavourites = characterFavourites.filter((entry) => entry._id !== character._id);
      updateFavourites(updatedFavourites);
    }
  }

  return (
    <article className="character-item">

      <h2>{character.name}</h2>

      <div className="character-item__actions" onClick={() => toggleFavouriteForCharacter(character)}>
        {!characterFavourites.includes(character) ? "Add to Favourites" : "Favourited"}
      </div>

      <img className="character-item__img" src={imageSrc} alt={character.name} />

    </article>
  )
}

export default Character