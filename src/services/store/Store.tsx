import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./userDetailsSlice";
// import { Patient } from "../../Common/CommonInterface";

const store = configureStore({
  reducer: {
    userDetails: userDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

// export const patientDummyData: Patient = {
//   id: 5,
//   role: "string",
//   address: {
//     id: 6,
//     email: "string",
//     mobile: "string",
//     street: "string",
//     city: "string",
//     state: "string",
//     postalCode: "string",
//     country: "string",
//   },
//   details: {
//     id: 6,
//     name: "string",
//     email: "string",
//     password: "string",
//     phone: "string",
//   },
//   diseases: [
//     {
//       id: 5,
//       name: "Diabetes",
//       type: "Chronic",
//       severity: "Moderate",
//       description: "A metabolic disorder characterized by high blood sugar.",
//       treatment: "Insulin, diet control, regular exercise",
//     },
//   ],
// };
