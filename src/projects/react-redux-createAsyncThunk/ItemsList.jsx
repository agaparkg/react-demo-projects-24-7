import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import {
  createItem,
  deleteItem,
  editItemFn,
  fetchItems,
  selectError,
  selectItems,
  selectStatus,
} from "./redux/itemsSlice";

function ItemsList() {
  const items = useSelector(selectItems);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const [editingItem, setEditingItem] = useState(null);
  const dispatch = useDispatch();
  const ref = useRef(null);

  useEffect(() => {
    if (status === "loading") {
      dispatch(fetchItems());
    }
  }, [status, dispatch]);

  let content = null;

  if (status === "failed")
    content = (
      <li>
        <p>Error: {error}</p>
      </li>
    );

  if (status === "loading")
    content = (
      <li>
        <p>Loading...</p>
      </li>
    );

  const addItem = () => {
    dispatch(createItem({ name: ref.current.value }));
    ref.current.value = null;
  };
  const editItem = (item) => {
    ref.current.value = item.name;
    setEditingItem(item);
  };

  const submitEdit = () => {
    dispatch(editItemFn({ name: ref.current.value, id: editingItem.id }));
    setEditingItem(null);
    ref.current.value = null;
  };

  if (status === "success")
    content = items.length ? (
      items.map((item) => {
        return (
          <li key={item.id}>
            {item.name}{" "}
            <Button onClick={() => editItem(item)} color="secondary">
              Edit
            </Button>
            <Button
              onClick={() => dispatch(deleteItem(item.id))}
              color="danger"
            >
              Delete
            </Button>
          </li>
        );
      })
    ) : (
      <li>
        <p>List is empty</p>
      </li>
    );

  return (
    <div>
      <h1>List of Items</h1>
      <input ref={ref} type="text" />
      {editingItem !== null ? (
        <button onClick={submitEdit}>Submit Edit</button>
      ) : (
        <button onClick={addItem}>Add Item</button>
      )}
      <ul>{content}</ul>
    </div>
  );
}

export default ItemsList;
