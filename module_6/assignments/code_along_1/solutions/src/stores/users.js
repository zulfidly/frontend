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
});
