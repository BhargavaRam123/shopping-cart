const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  items: [],
};
const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, actions) => {
      var flag =0;
      for (let i = 0; i < state.items.length; i++) {
        if(state.items[i].title===actions.payload.title)
        {
          state.items[i].count++
          flag=1;
        }
      }
      if(flag===0)
      state.items.push(actions.payload);
    console.log("item pushed")
    },
    remove: () => {},
  },
});

export const { add, remove } = cartslice.actions;
export default cartslice.reducer;
