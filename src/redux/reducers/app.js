import { keys } from '../keys';

export const appReducer = (state = 0, action) => {
  switch (action.type) {
    case keys.PAGE_SET:
      return action.value;

    default:
      return state;
  }
};
