import { createStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case "EDUCACION":
      state = false;
      break;
    case "EXPERIENCIA":
      state = true;
      break;
  }
  return state;
};

export default function configureStore() {
  return createStore(reducer);
}
