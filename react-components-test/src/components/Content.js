import React  from 'react'
import ItemList from './ItemList'

const Content = ({items, handleDelete, handleCheck} ) => {

    return (
    <main>
        {items.length ?(
            <ItemList 
                items={items} 
                handleDelete={handleDelete} 
                handleCheck={handleCheck}></ItemList>
        ) : (
            <p style={{marginTop: "2rmem"}}> Your list is empty</p>
        )}
    </main>
  )
}

export default Content