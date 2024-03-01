const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  items: [],
  totalitems: 0,
  totalcost: 0,
};
const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, actions) => {
      const obj = actions.payload;
      var len = state.items.length;
      var f = 0;
      state.totalcost += Number(obj.price);
      for (var i = 0; i < len; i++) {
        if (state.items[i].title === obj.title) {
          state.items[i].count++;
          f = 1;
          break;
        }
      }
      if (f === 0) {
        state.items.push(obj);
      }
      var tc = 0;
      len = state.items.length;
      for (var i = 0; i < len; i++) {
        tc += state.items[i].count;
      }
      state.totalitems = tc;
    },
    remove: (state, actions) => {
      const obj = actions.payload;
      console.log("before length:", state.items.length);
      state.items = state.items.filter((o) => {
        if (o.title === obj.title) {
          state.totalitems -= obj.count;
          state.totalcost -= obj.count * obj.price;
        }
        return o.title !== obj.title;
      });
      console.log("after length:", state.items.length);
    },
    reducec: (state, actions) => {
      const obj = actions.payload;
      var arr = state.items;
      var len = arr.length;
      state.totalcost -= obj.price;
      console.log("splice function for single element");
      for (var i = 0; i < len; i++) {
        if (arr[i].title === obj.title) {
          if (arr[i].count === 1) {
            state.items.splice(i, 1);
          } else {
            state.items[i].count--;
            break;
          }
        }
      }
      state.totalitems--;
    },
  },
});

export const { add, remove, reducec } = cartslice.actions;
export default cartslice.reducer;
