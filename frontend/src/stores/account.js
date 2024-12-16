// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue';
export const useAccountStore = defineStore('account', () => {
  const userName = ref("admin");
  function logout() {
    userName.value = ""
  }
  return {
    userName,
    logout,

  };
})
