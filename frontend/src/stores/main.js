//总入口，打包全局注册的store

import { useAccountStore } from "./account";
import { useLevelStore } from "./level";


export const registerStore = () => {
    useAccountStore();
    useLevelStore();
}