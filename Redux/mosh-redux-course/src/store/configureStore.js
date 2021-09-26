import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import toast from "./middleware/toast";

export default function () {
  return configureStore({
    reducer,
    middleware: [toast],
  });
}
