import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
      const querydb = getFirestore();
      const queryDoc = doc(querydb, 'products', idItem);
      getDoc(queryDoc)
      .then(res => setData({id: res.id, ...res.data()}));
    }, [idItem]);


  return (
    <ItemDetail item={data} />
  )
}

export default ItemDetailContainer