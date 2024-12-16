            
            
<template>
    <v-data-table :items="items" :hide-default-footer="true" :headers="headers">
        <!-- <template v-slot:item.id="{ item, index }">
            <span>{{ index + 1 }}</span>
        </template> -->
        <template v-slot:item.actions="{ item, index }">
            <v-icon v-if="item.isLaunched == false" class="me-2" size="small" @click="handleLaunchGoods(index)">
                mdi-cube-outline
            </v-icon>
            <v-icon v-else class="me-2" size="small" @click="handleRemoveGoods(index)">
                mdi-cube-off-outline
            </v-icon>
        </template>
    </v-data-table>
</template>
<script setup>
import { useBusinessStore } from '@/stores/business';

const businessStore = useBusinessStore()
const items = businessStore.goodsList
const headers = [
    { title: '商品id', value: 'id' },
    { title: '商品名称', value: 'name' },
    { title: '价格', value: 'price' },
    { title: '操作', value: 'actions' },
]
function handleLaunchGoods(index) {
    businessStore.launchGood(index)
}
function handleRemoveGoods(index) {
    businessStore.removeGood(index)
}
</script>