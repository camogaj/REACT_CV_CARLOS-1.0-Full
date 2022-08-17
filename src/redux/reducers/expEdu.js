import { cv } from "../../CV";

export default function expReducer(state = "EDUCACION", action) {
  switch (action.type) {
    case "EXPERIENCIA":
      return cv.experiencia;
    case "EDUCACION":
      return cv.educacion;
    default:
      return state;
  }
}
