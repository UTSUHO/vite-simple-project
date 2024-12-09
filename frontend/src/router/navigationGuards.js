import router from "@/router/index";


//解析完成前获取数据源列表
router.beforeResolve(async (to) => {
    console.log(to);

});