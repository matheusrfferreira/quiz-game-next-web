import { PLAYER_INFORMATION } from "./actions";


const reducer = (state = {}, action) => {
    
  switch (action.type) {
    case PLAYER_INFORMATION:
      return action.player;

    default:
      return state;
  };
};

export default reducer;