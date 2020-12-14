import { ENABLE_LOADING, DISABLE_LOADING } from "./actions";
import { Action } from "./../../../models/redux/Action";

const initState = {
  status: false,
};

export const loadingReducer = (state: any = initState, action: Action) => {
  switch (action.type) {
    case ENABLE_LOADING: {
      return {
        status: true,
      };
    }
    case DISABLE_LOADING:
      return {
        status: false,
      };
    default:
      return state;
  }
};
