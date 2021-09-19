import { GO_TO } from "./types";
const initialState = {
  goTo: "home",
};
export const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GO_TO:
      console.log({ payload });
      return { ...state, goTo: payload };
    default:
      return state;
  }
};
