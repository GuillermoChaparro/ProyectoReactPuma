
import CardProducto from './CardProducto';

function ItemList({items}) {
  return (
    <div className="d-flex flex-wrap gap-3 p-4">
      {items.map((item) => (
        <CardProducto item={item} key={item.id}></CardProducto>
      ))}
    </div>
  );
}
export default ItemList