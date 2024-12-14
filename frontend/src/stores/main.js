//总入口，打包全局注册的store

import { useAccountStore } from "./account";
import { useBusinessStore } from "./business";

export const registerStore = () => {
    useAccountStore();
    useBusinessStore();
}