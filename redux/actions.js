import { GO_TO } from "./types";

export const goTo = (value) => (dispatch) => {
  dispatch({
    type: GO_TO,
    payload: value,
  });
};
