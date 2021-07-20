import React, { useEffect } from 'react';


export default function Thoughts(props) {
    const {thought, removeThought  } = props;

   useEffect(() => {
       const timeRemaining = thought.expiresAt - Date.now();
       const timeout = setTimeout(() => {
        removeThought(thought.id);
       }, timeRemaining);

       return () => {
           clearTimeout(timeout);
       }
   }, [thought, removeThought]);

    const handleRemoveThought = () => {
        removeThought(thought.id);
    }
    return(
        <li>
            <button
                onClick={handleRemoveThought} 
                aria-label="Remove Task Button"
                className="Remove-button"
                >
                &times;
                </button>
            <div>
                {thought.text}
            </div>
        </li>
    )
}