import { useHttpStatus, useHttpTypes } from "./useHttp.types";

export function httpReducer(state, action) {
  if (action.type === useHttpTypes.SEND) {
    return {
      data: null,
      error: null,
      status: useHttpStatus.PENDING,
    };
  }

  if (action.type === useHttpTypes.SUCCESS) {
    return {
      data: action.value,
      error: null,
      status: useHttpStatus.COMPLETED,
    };
  }

  if (action.type === useHttpTypes.ERROR) {
    return {
      data: null,
      error: action.value,
      status: useHttpStatus.COMPLETED,
    };
  }

  return state;
}
