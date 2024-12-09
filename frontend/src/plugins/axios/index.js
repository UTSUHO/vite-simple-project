import axios from "axios";
import router from '@/router/index'
import cookies from "js-cookie";

function request(config) {
    const axiosInstance = axios.create({
        timeout: 20000, // 请求超时时间
        withCredentials: true, // 携带cookie
    });
    //请求拦截器
    axiosInstance.interceptors.request.use(
        (config) => {
            // 引入 token
            const token = cookies.get("accessToken");
            // 如果 token 存在
            // 让每个请求携带自定义 token 请根据实际情况自行修改
            if (token && token.length != 0) {
                config.headers["Authorization"] = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return error;
        }
    );
    // // 响应拦截器
    axiosInstance.interceptors.response.use(
        (response) => {
            // api 访问接口返回数据
            const res = response.data;
            return res;
        },
        (error) => {
            // 调试用
            // console.log(error);
            if (error.response && error.response.status === 401) {
                // util.cookies.remove("shiroCookie");
                console.log("连接超时");
                // 无权限弹回登录页
                router.push({
                    name: "/login",
                }).catch((e) => {
                    console.log(e);
                    return false;
                });

            }

            return Promise.reject(error.response);
        }
    );
    return axiosInstance(config);
}
export default request;
