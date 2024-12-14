<template>
    <v-container class="fill-height">
        <v-responsive class="align-centerfill-height mx-auto" max-width="900">
            <v-form v-model="valid" @submit.prevent>
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field v-model="username" :counter="10" :rules="nameRules" label="用户名"
                                required></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field v-model="password" :type="`password`"  :counter="10" :rules="pwRules" label="密码"
                                required></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-btn size="x-large" icon="mdi-antenna" type="submit" @click="loginRequest">
                                <v-icon color="info" icon="mdi-antenna" size="x-large"></v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
            <!-- <span>{{ valid }}</span> -->
        </v-responsive>
    </v-container>
</template>

<script setup>
import { login } from '@/api/login'
import { useAccountStore } from "@/stores/account";
import { useRouter } from "vue-router";

const router = useRouter();

const accountStore = useAccountStore();
const valid = ref(false)
const username = ref("")
const password = ref("")

const nameRules = [
    value => {
        if (value) return true

        return 'Username is required.'
    },
    value => {
        if (value?.length <= 10) return true

        return 'Username must be less than 10 characters.'
    },
]
const pwRules = [
    value => {
        if (value) return true

        return 'Password is required.'
    },
]

const loginRequest = () => {
    if (!valid.value) return
    console.log(valid.value)
    const formData = new FormData();
    formData.append('username', username.value)
    formData.append('password', password.value)
    login(formData).then(
        (res) => {
            if (res.statusCode == 200) {
                accountStore.userName = res.data.name
                // 跳转至首页
                router.push("/");
            }
            else {
                console.log(res);
            }
        },
        (error) => {
            if (error.data.status == 403) {
                alert("请输入正确的用户名和密码");
            } else {
                // alert(`${error.data.message}`);
            }
        })
}
</script>