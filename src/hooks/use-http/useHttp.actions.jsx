import { useHttpTypes } from "./useHttp.types";

export const sendAction = (value) => {
  return {
    type: useHttpTypes.SEND,
  };
};

export const onSuccessAction = (value) => {
  return {
    type: useHttpTypes.SUCCESS,
    value,
  };
};

export const onErrorAction = (value) => {
  return {
    type: useHttpTypes.ERROR,
    value,
  };
};
