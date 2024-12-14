import request from "@/plugins/axios/index";
import { hostAddress } from "@/constants/reverseProxy"

export function login(data) {
    return request({
        url: `${hostAddress}/login`,
        method: "post",
        data: data,
    });
}

export function isLogin(data) {
    return request({
        url: `${hostAddress}/isLogin`,
        method: "post",
        data: data,
    });
}