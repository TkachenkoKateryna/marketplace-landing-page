import { useCallback, useReducer } from "react";
import { onSuccessAction, sendAction } from "./useHttp.actions";
import { httpReducer } from "./useHttp.reducer";
import { useHttpStatus } from "./useHttp.types";

function useHttp(requestFunction, startWithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? useHttpStatus.PENDING : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async function (requestData) {
      dispatch(sendAction());
      try {
        const responseData = await requestFunction(requestData);
        dispatch(onSuccessAction(responseData));
      } catch (error) {
        dispatch(onSuccessAction(error.message || "Something went wrong!"));
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
