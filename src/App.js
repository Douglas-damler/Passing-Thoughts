import React, { useState } from 'react';
import AddThoughtFrom from './AddThoughtsForm';
import Thoughts from './Thoughts';
import './App.css';
import { getNewExpirationTime, generateNewId } from './utilities';

export default function App() {
   const [thoughts, setThoughts] = useState([
      {
         text: "I feel like coding",
         id: generateNewId(),
         expiresAt: getNewExpirationTime()
      },
      {
         text: "I can accomplish big things with react",
         id: generateNewId(),
         expiresAt: getNewExpirationTime()
      }
   ]);

   

   const addThought = (thought) => {
      setThoughts((prev) => [thought, ...prev])
   }

   const removeThought = (taskIdToRemove) => {
      setThoughts(() => 
         thoughts.filter((thought) =>
            thought.id !== taskIdToRemove
         )
      )
   }

   return (
      <div>
         <AddThoughtFrom addThought={addThought} />
         <ul>
            {thoughts.map((thought) => (
               <Thoughts thought={thought} removeThought={removeThought} />
            ))}
         </ul>
      </div>
   )
}