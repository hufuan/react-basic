import React from 'react'

const Counter = () => {
    const handleNameChagne = ()=> {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random()*3);
        return names[int];
    }
    const handleClick = ()=>{
        console.log('You clicked it')
    }

    const handleClick2 = (name)=>{
        console.log(`${name} You clicked it`)
    }
    const handleClick3 = (e)=>{
        console.log(e.target)
        console.log(`${e.target} is clicked`)
    }

  return (
    <main>
        <p>
            Hello {handleNameChagne()}!
        </p>
        <button onClick={handleClick}>Click it 1</button>
        <button onClick={()=> {handleClick2('Dave') } } >Click it 2</button>
        <button onClick={(e)=> {handleClick3(e) } } >Click it 3</button>
    </main>
  )
}

export default Counter