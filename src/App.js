import React from 'react'
import Square from './Square'
import InputColor from './InputColor'
import { useState } from 'react'

const App = () => {

    const [newColor,setColor] = useState({background:'aliceblue'});

    return (
        <div className="App" >
            <Square 
            newColor={newColor}
            setColor={setColor}
            />
            <InputColor 
            newColor={newColor}
            setColor={setColor}
            />
        </div>
    )
}

export default App