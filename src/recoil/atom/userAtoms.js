import { atom, selector } from "recoil";
import axios from "axios";

export const currentUserIdState = atom({
  key: "currentUserIdState",
  default: 1,
});

export const currentUserNameQuery = selector({
  key: "currentUserName",
  get: async ({ get }) => {
    try {
      const path = "https://jsonplaceholder.typicode.com/users/";
      const res = await axios.get(`${path}${get(currentUserIdState)}`);
      return res.data.username;
    } catch (e) {
      console.log("error", e);
    }
  },
});
