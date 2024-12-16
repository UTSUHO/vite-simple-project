<template>
  <div class="flex-container">
    <cards class="cards" v-for="i in items" :title="i.title" :name="i.name" :price=i.price :id="i.id" :img="i.img">
    </cards>
  </div>
  <div class="fab-container">
    <v-fab color="primary" icon="mdi-cart-outline" @click="onCartFabClicked">

    </v-fab>
  </div>
  <CartDialog ref="dialog" />
</template>

<script setup>
import CartDialog from '@/components/CartDialog.vue';
import { useBusinessStore } from '@/stores/business';


const businessStore = useBusinessStore()
const items = businessStore.goodsList.filter((i) => {
  return i.isLaunched == true
})
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
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 5vh;


  .cards {
    width: 24%;
  }
}

.fab-container {
  display: flex;
  justify-content: center;
  height: 48px;
  margin-left: 50%;
}
</style>