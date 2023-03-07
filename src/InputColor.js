import './InputColor.css'

const InputColor = ({newColor , setColor}) => {

    return (
        <form action="#" className='colorChanger' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="changeColor">Change color?</label>
            <input
                type="text"
                id='colorChange'
                placeholder='Enter color name'
                required
                onChange={(e)=> setColor({background:e.target.value})}
            />
    
        </form>
    )
}

export default InputColor