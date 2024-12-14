import axios from "axios";
import router from '@/router/index'
import cookies from "js-cookie";

function request(config) {
    const axiosInstance = axios.create({
        timeout: 20000, // 请求超时时间
    });

    // // 响应拦截器
    axiosInstance.interceptors.response.use(
        (response) => {
            // api 访问接口返回数据
            const res = response.data;
            return res;
        },
        (error) => {
            if (error.response && error.response.status === 401) {
                alert('用户越权访问')
                // 无权限弹回登录页
                router.push({ name: 'login' }).catch((e) => {
                    console.log(e);
                    return false;
                });

            } else if (error.response && error.response.status === 403) {
                alert('用户名密码不正确')
            }

            return Promise.reject(error.response);
        }
    );
    return axiosInstance(config);
}
export default request;
