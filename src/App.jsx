import { useState } from "react";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPupies] = useState(puppyList);
  console.log("puppyList:", puppyList);
  const [featPupId, setFeatPupId] = useState(null);
const featuredPup = puppies.find((pup) => pup.id === featPupId);
console.log("Featured Pup:", featuredPup);

  return (
    <>
      <div className="App">
        {puppies.map((puppy) => {
          return (
            <p onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>
              {puppy.name}
            </p>
          );
        })}
        {
          featPupId && <p>{featPupId}</p>
        }
      </div>
{featPupId&& (
  <div>
    <h2>{featuredPup.name}</h2>
    <ul>
      
    </ul>
  </div>
)}

    </>
  );
}

export default App;
