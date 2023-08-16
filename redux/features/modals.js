import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modals",
  initialState: {
    transaction: null,
    order: null,
    refund: false,
    userToBan: null,
    userToChange: null,
    recipe: null,
    chat: null,
    dispute: null,
    notification: false,
    selectedChat: null,
  },
  reducers: {
    selectTransaction: (state, action) => {
      state.transaction = action.payload;
    },
    selectOrder: (state, action) => {
      state.order = action.payload;
    },
    selectUserToBan: (state, action) => {
      state.userToBan = action.payload;
    },
    selectUserToChange: (state, action) => {
      state.userToChange = action.payload;
    },
    selectRecipe: (state, action) => {
      state.recipe = action.payload;
    },
    selectDispute: (state, action) => {
      state.dispute = action.payload;
    },
    selectChat: (state, action) => {
      state.chat = action.payload;
    },
    setSelectedChat: (state, action) => {
      state.selectedChat = action.payload;
    },
    toggleRefund: (state) => {
      state.refund = !state.refund;
    },
    toggleNotification: (state) => {
      state.notification = !state.notification;
    },
  },
});

export default modalSlice.reducer;
export const {
  selectTransaction,
  selectOrder,
  toggleRefund,
  selectUserToBan,
  selectUserToChange,
  selectRecipe,
  selectDispute,
  selectChat,
  toggleNotification,
  setSelectedChat,
} = modalSlice.actions;

export const selectModal = (state) => state.modals;
