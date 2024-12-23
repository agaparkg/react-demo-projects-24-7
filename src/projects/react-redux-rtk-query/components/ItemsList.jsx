import React, { useRef, useState } from "react";
import { Button } from "reactstrap";
import {
  useCreateItemMutation,
  useDeleteItemMutation,
  useGetItemsQuery,
  useUpdatedItemMutation,
} from "../redux-store/itemsApi";

function ItemsList() {
  const [editingItem, setEditingItem] = useState(null);
  const ref = useRef(null);

  const { data: items, error, isLoading } = useGetItemsQuery();
  const [deleteItem] = useDeleteItemMutation();
  const [createItem] = useCreateItemMutation();
  const [updateItem] = useUpdatedItemMutation();

  if (error)
    return (
      <li>
        <p>Error: {error}</p>
      </li>
    );

  if (isLoading)
    return (
      <li>
        <p>Loading...</p>
      </li>
    );

  const addItem = async () => {
    await createItem({ name: ref.current.value });
    ref.current.value = null;
  };

  const editItem = (item) => {
    ref.current.value = item.name;
    setEditingItem(item);
  };

  const submitEdit = async () => {
    await updateItem({ name: ref.current.value, id: editingItem.id });
    setEditingItem(null);
    ref.current.value = null;
  };

  const removeItem = async (itemId) => await deleteItem(itemId);

  return (
    <div>
      <h1>List of Items</h1>
      <input ref={ref} type="text" />
      {editingItem !== null ? (
        <button onClick={submitEdit}>Submit Edit</button>
      ) : (
        <button onClick={addItem}>Add Item</button>
      )}
      <ul>
        {items.length ? (
          items.map((item) => {
            return (
              <li key={item.id}>
                {item.name}{" "}
                <Button onClick={() => editItem(item)} color="secondary">
                  Edit
                </Button>
                <Button onClick={() => removeItem(item.id)} color="danger">
                  Delete
                </Button>
              </li>
            );
          })
        ) : (
          <li>
            <p>List is empty</p>
          </li>
        )}
      </ul>
    </div>
  );
}

export default ItemsList;
