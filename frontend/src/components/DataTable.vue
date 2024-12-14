            
            
<template>
    <v-data-table :items="items" :hide-default-footer="true" :headers="headers">
        <template v-slot:item.order="{ item, index }">
            <span>{{ index + 1 }}</span>
        </template>
        <template v-slot:item.actions="{ item, index }">
            <v-icon class="me-2" size="small" @click="handleCartToBought(index)">
                mdi-cart-check
            </v-icon>
            <!-- <v-icon v-if="props.type == 'cart'" class="me-2" size="small" @click="handleRemoveCart(index)">
                mdi-trash-can-outline
            </v-icon>
            <v-icon v-else class="me-2" size="small" @click="handleRemoveBought(index)">
                mdi-trash-can-outline
            </v-icon> -->
        </template>
    </v-data-table>
</template>
<script setup>
import { useBusinessStore } from '@/stores/business';
const businessStore = useBusinessStore()
const props = defineProps({
    type: {
        default: 'cart',
        type: String
    },
})
const items = props.type == 'cart' ? businessStore.cart : businessStore.boughtList
const headers = [
    { title: '订单序号', value: 'order' },
    { title: '商品名称', value: 'name' },
    { title: '价格', value: 'price' },
    { title: '数量', value: 'counter' }
]
if (props.type == 'admin') {
    headers.push({ title: '用户名', value: 'user' },)
}
if (props.type == 'cart') {
    headers.push({ title: '操作', value: 'actions' },)
}
function handleCartToBought(index) {
    businessStore.cartToBought(index)
}
function handleRemoveCart(index) {
    businessStore.removeCart(index)
}
function handleRemoveBought(index) {
    businessStore.removeBought(index)
}
</script>