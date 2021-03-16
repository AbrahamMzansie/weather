const INITIAL_STATE = {
  weather: {},
};

export const weatherReducer = (state = [], action) => {
  
  switch (action.type) {
    case "FETCH_WEATHER":
      const newWeather = state.concat([action.payload.data]);
      return newWeather;
    default:
      return state;
  }
};
