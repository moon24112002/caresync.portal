import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Initial state: an array of user objects
const initialState: string[] = [];

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    // Action to set the entire user details array
    setUserDetails: (state, action: PayloadAction<string[]>) => {
      return action.payload; // Replace the current state with the new array
    },

    // Action to add a new user
    addUser: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },

    // Action to update a user by ID
    updateUserById: (
      state,
      action: PayloadAction<{ id: number; updates: Partial<string> }>
    ) => {
      // const { id, updates } = action.payload;
      // const user = state.find((user) => user.id === id);
      // if (user) {
      //   Object.entries(updates).forEach(([key, value]) => {
      //     if (key in user) {
      //       (user as any)[key] = value;
      //     }
      //   });
      // }
      return;
    },

    // Action to remove a user by ID
    removeUserById: (state, action: PayloadAction<number>) => {
      // const userId = action.payload;
      // return state.filter((user) => user.id !== userId);
    },

    // Action to clear all users
    clearUserDetails: () => {
      return [];
    },
  },
});

export const {
  setUserDetails,
  addUser,
  updateUserById,
  removeUserById,
  clearUserDetails,
} = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
