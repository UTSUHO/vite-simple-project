<template>
    <div class="d-flex container">
        <v-card class="mx-auto align-self-center elevation-6 " max-width="1200">
            <template v-slot:title>
                <v-card class="mx-auto align-self-center" max-width="1200">
                    <div class="flex-container">
                        <div>
                            <v-img class="align-end text-white" height="400" width="400" :src="item.img" cover>
                            </v-img>

                        </div>
                        <v-card-text>
                            <div class="flex-container-sub">
                                <div class="text-container">
                                    <v-card-title class="text-h4">{{ item.title }}</v-card-title>
                                    <v-card-subtitle class="pt-4">
                                        {{ item.name }}

                                    </v-card-subtitle>
                                    <div style="padding: 1rem 0;">{{ item.description }}</div>

                                </div>
                                <div class="text-h5">价格：{{ item.price }}￥</div>
                                <div class="d-flex align-center" style="gap:16px;">
                                    <v-number-input style="flex:1" v-model="counter" variant="outlined" hide-details
                                        :reverse="false" control-variant="split" label="数量" :hideInput="false" :min="0"
                                        :inset="false"></v-number-input>
                                    <div class="text-h5">{{ item.price * counter }}￥</div>
                                </div>
                            </div>
                        </v-card-text>
                    </div>
                    <v-card-actions class="justify-end">
                        <v-btn :disabled="counter == 0" @click="handleBuy" color="black" text="购买"></v-btn>

                        <v-btn :disabled="counter == 0" @click="handleAddCart" color="black" text="加入购物车"></v-btn>
                    </v-card-actions>
                </v-card>
            </template>

            <v-card-text class="bg-surface-light text-body-1">
                <div style="padding-top:1rem;">{{ item.comment }}</div>
            </v-card-text>
        </v-card>

    </div>
</template>
<script setup>
import { useBusinessStore } from '@/stores/business';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
const businessStore = useBusinessStore()
const route = useRoute()
console.log(route)
const [firstElement, ...rest] = businessStore.findGood(route.params.id)
const item = firstElement

console.log(item)
function handleBuy() {
    businessStore.buy({ name: item.name, price: item.price, user: accountStore.userName, counter: counter.value })
}
function handleAddCart() {
    businessStore.addToCart({ name: item.name, price: item.price, user: accountStore.userName, counter: counter.value })
}
const counter = ref(0)

</script>
<style lang="scss" scoped>
.container {
    height: 100%;
}

.flex-container {
    display: flex;
}

.flex-container-sub {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .text-container {}
}
</style>