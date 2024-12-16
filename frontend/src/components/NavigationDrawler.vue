<template>
    <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
        <v-list-item nav>
            <template v-slot:title>
                <span :class="['text-subtitle-1', 'font-italic']">欢迎回来，</span>
                <span :class="['text-subtitle-1']">{{ userName }}</span> </template>
            <template v-slot:prepend>
                <v-avatar style="margin-left: 8px; cursor: pointer" color="primary">
                    <span>{{ userName }}</span>
                </v-avatar>
            </template>
            <template v-slot:append>
                <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
            </template>
        </v-list-item>

        <v-divider></v-divider>
        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home" title="主页" value="home" to="/home"></v-list-item>
            <v-list-item prepend-icon="mdi-script-text-outline" title="已购买的商品" value="order" to="/order"></v-list-item>
            <v-list-item v-if="userName == 'admin'" prepend-icon="mdi-orbit" title="个人中心" value="management"
                to="/management"></v-list-item>
                <v-list-item v-if="userName == 'admin'" prepend-icon="mdi-upload-box-outline" title="商品管理" value="goods"
                to="/goods"></v-list-item>
        </v-list>
        <template v-slot:append>
            <v-btn variant="text" @click="logout" style="margin-left: -4px !important">
                <v-icon>mdi-power</v-icon>
            </v-btn>
        </template>
    </v-navigation-drawer>
</template>
<script setup>
import { useAccountStore } from "@/stores/account";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const router = useRouter();

const accountStore = useAccountStore();

const { userName } = storeToRefs(accountStore);

const drawer = ref(true)
const rail = ref(true)
function logout() {
    accountStore.logout();
    router.push("/login");
}


</script>
<style lang="scss" scoped></style>