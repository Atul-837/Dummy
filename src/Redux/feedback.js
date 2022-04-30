import * as ActionTypes from "./actionTypes";

export const Feedbacks = (
  state = {
    errMess: null,
    feedbacks: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.POST_FEEDBACK:
      var feedback = action.payload;
      return { ...state, feedbacks: state.feedbacks.concat(feedback) };
    default:
      return state;
  }
};
