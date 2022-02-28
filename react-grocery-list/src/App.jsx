import React, { useState, Component } from 'react'
import SearchItem from './components/SearchItem'
import AddItem from './components/AddItem'
//import Counter1 from './components/Counter'
import Content from './components/Content'
import Header from './Header'
import Footer from './Footer'

const App = () => {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));
  const [newItem, setNewItem] = useState('');
  const [search,setSearch] = useState('');

  const setAndSaveItems = (newItems)=>{
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }
  const addItem = (item) =>{
    const id = items.length? items[items.length-1].id+1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [ ...items, myNewItem];
    setAndSaveItems(listItems);
  }

  const handleCheck = (id)=>{
    console.log(`key: ${id}`);
    const listItems = items.map(item=>item.id === id ? {...item,checked:!item.checked}: item);
    setAndSaveItems(listItems);
}

const handleDelete =(id)=>{
    const listItems = items.filter(item=>item.id !== id);
    setItems(listItems);
    setAndSaveItems(listItems);
}
const handleSubmit= (e)=>{
  e.preventDefault();
  if(!newItem)
    return;
  
  addItem(newItem);
  setNewItem('');
  console.log('submit');
}
    return (
      <div>
        <Header title="grocery list"></Header>
        <AddItem 
          newItem={newItem} 
          setNewItem={setNewItem} 
          handleSubmit={handleSubmit}/>
          <SearchItem
              search={search}
              setSearch={setSearch}
            ></SearchItem>
        <Content 
            items={items.filter(item=> ((item.item).toLowerCase()).includes(search.toLowerCase()) )} 
            handleCheck={handleCheck} 
            handleDelete={handleDelete} ></Content>
        <Footer length={items.length}></Footer>
      </div>
    )
}
export default App;