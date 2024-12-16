// Utilities
import { defineStore } from 'pinia'
import { ref, toRaw } from 'vue';
export const useBusinessStore = defineStore('business', () => {
    // 购物车
    const cart = ref([]);
    // 已购买
    const boughtList = ref([])
    // 商品列表
    const goodsList = ref([
        {
            id: 1, title: '秋冬新品', name: '羊毛衬衫', price: 198, isLaunched: true, img: "/src/assets/羊毛衬衫.jpg", description: '一件暖和的羊毛衬衫',
            comment: `
            温暖与时尚的完美结合——羊毛衬衫            
            在这个季节交替的时刻，一件优质的羊毛衬衫是您衣橱中不可或缺的单品。我们精心挑选的高品质羊毛，不仅柔软舒适，更具备卓越的保暖性能，让您在寒冷的天气中依然保持温暖与优雅。            
            为什么选择我们的羊毛衬衫？            
            天然材质，环保健康：采用100%纯天然羊毛，透气性极佳，贴身穿着舒适，呵护您的肌肤。            
            精湛工艺，品质保证：每一件羊毛衬衫都经过严格的质量检测，确保每一针每一线都符合最高标准。            
            经典设计，时尚百搭：无论是商务正装还是休闲搭配，我们的羊毛衬衫都能轻松驾驭，助您在各种场合中展现自信风采。            
            多色可选，满足个性需求：从经典的黑色、白色到时尚的深蓝、酒红，丰富的颜色选择让您随心搭配，展现独特风格。
            适合多种场合
            商务会议：剪裁合身的羊毛衬衫，搭配西装外套，彰显专业与稳重。
            日常通勤：简约大方的设计，让您在忙碌的工作日中依然保持时尚与舒适。
            休闲时光：搭配牛仔裤或休闲裤，轻松打造休闲时尚造型。
            `
        },
        { id: 2, title: '秋冬新品', name: '大衣', price: 198, isLaunched: false, img: "/src/assets/羊毛衬衫.jpg", description: '', comment: '' },
        { id: 3, title: '秋冬新品', name: '长裙', price: 198, isLaunched: false, img: "/src/assets/羊毛衬衫.jpg", description: '', comment: '' },
        { id: 4, title: '秋冬新品', name: '风衣', price: 198, isLaunched: false, img: "/src/assets/羊毛衬衫.jpg", description: '', comment: '' },
        { id: 5, title: '秋冬新品', name: '鞋子', price: 198, isLaunched: false, img: "/src/assets/羊毛衬衫.jpg", description: '', comment: '' }
    ])
    function addToCart(data) {
        cart.value.push(data)
    }
    function buy(data) {
        console.log(data)
        boughtList.value.push(data)

    }
    function cartToBought(index) {
        if (index >= 0 && index < cart.value.length) {
            // 获取对象元素
            const element = cart.value.splice(index, 1)[0]; // 使用 splice 方法移除元素并获取它
            console.log(element)
            // 将该元素添加到 已购买 中
            buy(element);
        } else {
            console.error("Invalid index.");
        }
    }
    function removeCart(index) {
        cart.value.splice(index, 1)[0];
    }
    function removeBought(index) {
        boughtList.value.splice(index, 1)[0];
    }
    function launchGood(index) {
        goodsList.value[index].isLaunched = true
    }
    function removeGood(index) {
        goodsList.value[index].isLaunched = false
    }
    function findGood(index) {
        return goodsList.value.filter((i) => index == i.id)
    }
    return {
        cart,
        addToCart,
        boughtList,
        buy,
        cartToBought,
        removeCart,
        removeBought,
        goodsList,
        launchGood,
        removeGood,
        findGood
    };
})
