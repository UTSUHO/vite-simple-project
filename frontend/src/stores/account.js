// Utilities
import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import { ref } from 'vue';
export const useAccountStore = defineStore('account', () => {
  const userName = ref("嘎");
  // 初始化以防止刷新时渲染错误
  const jwtToken = ref("")
  const userInfo = ref(

  );

  function getUserData() {
  }
  function setJwtToken(jwt) {
    jwtToken.value = jwt
  }
  function logout() {
    jwtToken.value = ''
    Cookies.remove('accessToken')
  }
  return {
    userName,
    userInfo,
    jwtToken,
    setJwtToken,
    logout,

  };
})
