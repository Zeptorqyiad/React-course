import { useState } from 'react'
import generateRandomNum from '../utilities/generateRandomNum'

function RandomNumber() {
   const [randomNum, setRandomNum] = useState(generateRandomNum(100))
   const changeRandomNum = () => {
      setRandomNum(generateRandomNum)
   }

   return (
      <div>
         <h1>{randomNum}</h1>
         <button onClick={changeRandomNum}>Generete new random number</button>
      </div>
   )
}

export default RandomNumber
