// Utilities
import { defineStore } from 'pinia'
import { ref, toRaw } from 'vue';
export const useBusinessStore = defineStore('business', () => {
    // 购物车
    const cart = ref([]);

    // 已购买
    const boughtList = ref([])

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
    return {
        cart,
        addToCart,
        boughtList,
        buy,
        cartToBought,
        removeCart,
        removeBought
    };
})
