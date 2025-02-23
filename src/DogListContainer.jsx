// @ts-check

import { useEffect, useState } from "react";
import BreedsSelect from "./BreedsSelect";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  useEffect(() => {
    async function fetching() {
      const url = "https://dog.ceo/api/breeds/list/all";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`レスポンスステータス: ${response.status}`);
        }
        const json = await response.json();
        setBreeds(Object.keys(json.message));
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }
    fetching();
  }, [])

  function handleSelectChange(newValue) {
    setSelectedBreed(newValue);
  }

  async function handleClick() {
    let url = "";
    if (selectedBreed) {
      url = "https://dog.ceo/api/breed/" + selectedBreed + "/images/random/4";
    } else {
      url = "https://dog.ceo/api/breeds/image/random";
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`レスポンスステータス: ${response.status}`);
      }
      const json = await response.json();
      if (selectedBreed) {
        setSelectedBreeds(json.message);
      } else {
        setSelectedBreeds([json.message]);
      }
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  return <>
    <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onChange={handleSelectChange} />
    <button onClick={handleClick}>表示</button>
    <ul>
    {selectedBreeds.map((breed) => (
        <li>
          <img src={breed} alt='dog' />
        </li>
      ))}
    </ul>

  </>
}

export default DogListContainer
