import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
   get: (id) => async ({ get }) => {
  try {
    const res = await axios.get(`https://dummyjson.com/todos/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Failed to fetch todo with id ${id}:`, error);
    return { todo: "Error loading todo", completed: false };
  }
},
  })
});