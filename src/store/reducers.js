export const GET_MOVIES = "GET_MOVIES";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

const initialState = {
  movies: [],
  favorites: [],
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: [action.payload],
      };

    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...action.payload],
      };

    case REMOVE_FROM_FAVORITES:
      let id = action.payload.id;

      return {
        ...state,
        favorites: state.favorites.filter((movie) => movie.id !== id),
      };

    default:
      return state;
  }
};