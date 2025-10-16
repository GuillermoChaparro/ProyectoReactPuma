import { useState, useEffect} from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router';
import{getItems, getItemsByCategory} from '../firebase/db'

function ItemListContainer() {
    const [items, setItems] = useState([])
    const {name}=useParams()
    

    
useEffect(() => {
  console.log("🧭 ID desde useParams:", name); // 👈 Verificamos qué valor llega

  if (name) {
    getItemsByCategory(name)
      .then(data => {
        console.log("📦 Productos filtrados:", data); // 👈 Verificamos resultado
        setItems(data);
      });
  } else {
    getItems()
      .then(data => {
        console.log("📦 Todos los productos:", data); // 👈 Verificamos resultado
        setItems(data);
      });
  }
}, [name]);

    return (
        
        <ItemList items={items}></ItemList>
    )
}

export default ItemListContainer