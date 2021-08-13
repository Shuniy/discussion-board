import { GET_ALL_CATEGORIES } from "./constants";

export const getAllCategories = (categories) => ({
  type: GET_ALL_CATEGORIES,
  categories,
});
