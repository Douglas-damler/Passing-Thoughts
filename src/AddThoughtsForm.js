import React, { useState } from 'react';
import { getNewExpirationTime, generateNewId } from './utilities';

export default function AddThoughtsForm(props) {
    const [text, setText] = useState('');


    const addText = (event) => {
        setText(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.length !== 0) {
            const thought = {
                text: text,
                id: generateNewId(),
                expiresAt: getNewExpirationTime()
            }
            props.addThought(thought);
            setText('');
        }
    }
    return (
        <div>
            <h1>Add Thoughts</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Add your thoughts"
                value={text}
                onChange={addText}
                />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}