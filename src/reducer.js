export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  //REMOVE after finissh developing...
  //token:
  //  "BQBtcFzbbP82684NPn20LWdoRhh-XgnQeEdldVi6RuOoMCCToK2lE7iP7V0rqd1O13_MezkdPnQvxIPLm6IQCT5rAnYkjJBgy4pWQOwbxMoVga5Ao4PCelO0hOLlopibSTrEcJ5o3dgAckhWBRrOXt8zI0xzfUDwHAXJHQ",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
