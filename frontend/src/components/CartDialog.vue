<template>
    <v-dialog v-model="isVisible" width="auto">
        <v-card max-width="400" prepend-icon="mdi-cart-outline" title="购物车">
            <DataTable />
            <template v-slot:actions>
                <v-btn class="ms-auto" text="关闭" @click="isVisible = false"></v-btn>
            </template>
        </v-card>
    </v-dialog>
</template>
<script setup>
const isVisible = ref(false)
import { defineExpose } from 'vue';
function showDialog() {
    isVisible.value = true
}

defineExpose({
    showDialog
});
</script>