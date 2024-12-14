<template>
    <v-card class="mx-auto" max-width="400">
        <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
            <v-card-title>秋冬新品</v-card-title>
        </v-img>
        <v-card-subtitle class="pt-4">
            {{ props.name }}
        </v-card-subtitle>
        <v-card-text>
            <div class="flex-container">
                <div>
                    <div>价格：{{ props.price }}￥
                    </div>
                </div>
                <v-number-input v-model="counter" variant="outlined" hide-details :reverse="false" control-variant="split" label="数量"
                    :hideInput="false" :min="0" :inset="false"></v-number-input>
            </div>
        </v-card-text>
        <v-card-actions>
            <v-btn :disabled="counter == 0" @click="handleBuy" color="orange" text="购买"></v-btn>

            <v-btn :disabled="counter == 0" @click="handleAddCart" color="orange" text="加入购物车"></v-btn>
        </v-card-actions>
    </v-card>
</template>
<script setup>
import { useBusinessStore } from '@/stores/business';
import { useAccountStore } from "@/stores/account";


const businessStore = useBusinessStore()

const accountStore = useAccountStore();

function handleBuy() {
    businessStore.buy({ name: props.name, price: props.price, user: accountStore.userName, counter: counter.value })
}
function handleAddCart() {
    businessStore.addToCart({ name: props.name, price: props.price, user: accountStore.userName, counter: counter.value })
}
const props = defineProps({
    name: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    }

})
const counter = ref(0)
</script>
<style lang="scss" scoped>
.flex-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
</style>