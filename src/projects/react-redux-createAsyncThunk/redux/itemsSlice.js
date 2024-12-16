import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://61008c3dbca46600171cf917.mockapi.io/api/v1/fake-items";

const initialState = {
  data: [],
  status: "loading", // 'loading' | 'success' | 'failed',
  error: null,
};

export const fetchItems = createAsyncThunk("items/fetchAll", async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    return error; // Error {}
  }
});

export const deleteItem = createAsyncThunk("items/delete", async (id) => {
  try {
    const res = await fetch(url + "/" + id, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error; // Error {}
  }
});

export const createItem = createAsyncThunk("items/create", async (item) => {
  try {
    const res = await axios.post(url, item);
    return res.data;
  } catch (error) {
    return error; // Error {}
  }
});
// export const createItem = createAsyncThunk("items/create", async (item) => {
//   try {
//     const res = await fetch(url, {
//       method: "POST",
//       body: JSON.stringify(item),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     return error; // Error {}
//   }
// });

export const editItemFn = createAsyncThunk(
  "items/edit",
  async (updatedItem) => {
    try {
      const res = await fetch(url + "/" + updatedItem.id, {
        method: "PUT",
        body: JSON.stringify(updatedItem),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return error; // Error {}
    }
  }
);

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  //   extraReducers: {
  //     [fetchItems.fulfilled]: () => {},
  //   },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload.id);
      })
      .addCase(createItem.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(editItemFn.fulfilled, (state, action) => {
        const currItem = state.data.find(
          (item) => item.id === action.payload.id
        );
        currItem.name = action.payload.name;

        // const index = state.data.findIndex((item) => item.id === action.payload.id);
        // state.data[index] = action.payload
      });
  },
  selectors: {
    selectItems: (state) => state.data,
    selectStatus: (state) => state.status,
    selectError: (state) => state.error,
  },
});

export const { selectItems, selectError, selectStatus } = itemsSlice.selectors;

export default itemsSlice.reducer;
