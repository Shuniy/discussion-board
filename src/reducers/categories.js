import {GET_ALL_CATEGORIES} from "../actions";

import {getAllCategories} from '../utils/api';

export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      const categories = action.categories.map((category) => category.name);
      return [...categories];

    default:
      return state;
  }
}
