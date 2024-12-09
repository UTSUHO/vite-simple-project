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
            <v-list-item prepend-icon="mdi-home" title="Home" value="home" to="/home"></v-list-item>
            <v-list-item prepend-icon="mdi-orbit" title="Galaxy Generator" value="galaxy-generator"
                to="/galaxy-generator"></v-list-item>
            <v-list-item prepend-icon="mdi-consolidate" title="Tres" value="tres" to="/tres"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script setup>
import { useAccountStore } from "@/stores/account";
import { storeToRefs } from "pinia";
const accountStore = useAccountStore();

const { userName } = storeToRefs(accountStore);

const drawer = ref(true)
const rail = ref(true)


</script>
<style lang="scss" scoped></style>