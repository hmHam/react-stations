// @ts-check

import DogImage from "./DogImage"
import { useState } from "react"


export const Description = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
  async function handleClick() {
    const url = "https://dog.ceo/api/breeds/image/random";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`レスポンスステータス: ${response.status}`);
      }
      const json = await response.json();
      setDogUrl(json.message);
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  return <>
    <div>犬の画像を表示するサイトです</div>  
    <div>
      <DogImage imageUrl={dogUrl} />
    </div>    
      <div>
      <button onClick={handleClick}>更新</button>
    </div>
  </>
}

export default Description
