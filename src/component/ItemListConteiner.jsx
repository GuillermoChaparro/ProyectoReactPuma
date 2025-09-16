import { useState, useEffect } from 'react'
import ItemList from './ItemList';

    function ItemListContainer() {
    const [items, setItems] = useState([])


useEffect(() => {
  fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(data => setItems(data))
    .catch(err => console.error("Error al traer productos:", err));
}, []);

    return (
        <ItemList items={items}></ItemList>
    )
}

export default ItemListContainer