import axios from "axios";
import {
  ADD_TO_FAVORITES,
  GET_MOVIES,
  REMOVE_FROM_FAVORITES,
} from "./reducers";

export const getMovies =  (term) => (dispatch) => {
  axios({
    method: "GET",
    url: "http://www.omdbapi.com/?apikey=f1de38d",
    params: {
      s: term,
    },
  }).then((res) => {
    console.log(res.data.Search);
    dispatch({
      type: GET_MOVIES,
      payload: res.data.Search
    });
  }).catch(err=>console.log(err))
};

export const addToFavorites = (id) => (dispatch) => {};

export const removeFromFavorites = (id) => (dispatch) => {};
