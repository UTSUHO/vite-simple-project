import router from "@/router/index";
import { isLogin } from "@/api/login";
import pinia from '@/stores'
import { useAccountStore } from "@/stores/account";
const accountStore = useAccountStore(pinia);


//解析完成前获取数据源列表
router.beforeResolve(async (to) => {
    console.log(to);
    if (to.href !== "/login") {
        isLogin({ token: accountStore.userName }).then((res) => {
            console.log(res)
        })
    }

});