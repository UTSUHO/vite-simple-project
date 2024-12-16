<template>
    <v-card>
        <v-img class="align-end text-white" height="200" :src="props.img" cover>
            <v-card-title><v-btn variant="text" color="black" @click="goDetail">{{ props.title }}</v-btn></v-card-title>
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
                <v-number-input v-model="counter" variant="outlined" hide-details :reverse="false"
                    control-variant="split" label="数量" :hideInput="false" :min="0" :inset="false"></v-number-input>
            </div>
        </v-card-text>
        <v-card-actions>
            <v-btn :disabled="counter == 0" @click="handleBuy" color="black" text="购买"></v-btn>

            <v-btn :disabled="counter == 0" @click="handleAddCart" color="black" text="加入购物车"></v-btn>
        </v-card-actions>
    </v-card>
</template>
<script setup>
import { useBusinessStore } from '@/stores/business';
import { useAccountStore } from "@/stores/account";
import router from '@/router';

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
    title: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    id: {
        required: true,
        type: Number
    },
    img: {
        required: true,
        type: String,
    }
})
const counter = ref(0)
const goDetail = () => {
    router.push({ name: 'detail', params: { id: props.id } }).catch((e) => {
        console.log(e);
        return false;
    });
}
</script>
<style lang="scss" scoped>
.flex-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
</style>