import { useParams } from "react-router";
import { useState, useEffect} from 'react'
import ItemDetail from "./IteamDetail";
import { getItem } from "../firebase/db";

function ItemDetailCoteiner() {
    const [item, setItem] = useState([null])
    const {id}=useParams()

    useEffect(() => {
     getItem(id)
      .then(data=>setItem(data))
    },[id])
  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailCoteiner; 