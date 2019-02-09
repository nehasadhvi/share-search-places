import { ADD_PLACE, DELETE_PLACE } from "../actions/types";

const initialState = {
  places: []
};

const PlacesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: `${Math.random()}`,
          name: action.placeName,
          image: {
            uri:
              "https://americanexpeditioners.com/wp-content/uploads/2016/03/sunny-jim-cave03.jpg"
          }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => place.key !== action.placeKey)
      };
    default:
      return state;
  }
};

export default PlacesReducer;
