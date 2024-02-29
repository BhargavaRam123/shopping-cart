const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  items: [],
  togglecart: false,
};
const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, actions) => {
      state.items.push(actions.payload);
    },
    toggle: (state, actions) => {
      state.togglecart = actions.payload;
    },
    remove: () => {},
  },
});

export const { add, remove, toggle } = cartslice.actions;
export default cartslice.reducer;
