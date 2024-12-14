<template>
  <div class="flex-container">
    <cards name="羊毛衬衫" :price=198></cards>
    <cards name="大衣" :price=198></cards>
    <cards name="长裙" :price=198></cards>
    <cards name="鞋子" :price=198></cards>
    <cards name="衬衫" :price=198></cards>

  </div>
  <div class="fab-container">
    <v-fab color="primary" icon="mdi-cart-outline" @click="onCartFabClicked">

    </v-fab>
  </div>
  <CartDialog ref="dialog" />
</template>

<script setup>
import CartDialog from '@/components/CartDialog.vue';

const dialog = ref()
function onCartFabClicked() {
  console.log(dialog.value)
  dialog.value.showDialog()
}
</script>
<style lang="scss" scoped>
.flex-container {
  display: flex;
  width: 100%;
}

.fab-container {
  display: flex;
  justify-content: center;
  height: 48px;
  margin-left: 50%;
}
</style>