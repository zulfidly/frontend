import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: {
      id: "fa6c005b-bb02-42cb",
      name: "tim",
    },
    permission: {
      read: false,
      write: false,
      delete: false,
    },
  }),
  getters: {
    id(state) {
      return state.user.id;
    },
    name(state) {
      return state.user.name;
    },
    role(state) {
      return "admin";
    },
  },
});
