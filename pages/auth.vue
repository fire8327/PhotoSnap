<template>
    <FormKit @submit="authUser" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-4 items-center justify-center grow text-xl p-4 rounded-xl border border-white/15 bg-white/5 backdrop-blur-3xl">
        <p class="text-3xl font-semibold font-Comfortaa tracking-widest text-white">Вход</p>
        <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
            <FormKit v-model="user.login" type="text" validation="required" messages-class="text-[#E9556D] font-semibold font-Comfortaa tracking-widest" name="Логин" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 rounded-xl focus:outline-none w-full" placeholder="Логин"/>
            <FormKit v-model="user.password" type="password" validation="required|length:6" messages-class="text-[#E9556D] font-semibold font-Comfortaa tracking-widest" name="Пароль" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 rounded-xl focus:outline-none w-full" placeholder="••••••"/>
        </div>
        <button type="submit" class="w-[160px] text-center py-0.5 px-4 rounded-full bg-white text-[#1B1B1B] border border-white transition-all duration-500 hover:text-white hover:bg-transparent">Вход</button>
        <div class="flex items-center justify-center gap-4 w-full md:w-2/3 lg:w-1/2 my-10">
            <div class="w-1/3 h-px bg-white"></div>  
            <p class="font-semibold font-Comfortaa tracking-widest text-white">или</p>
            <div class="w-1/3 h-px bg-white"></div>  
        </div>
        <NuxtLink to="/reg" class="w-[160px] text-center py-0.5 px-4 rounded-full  hover:bg-white hover:text-[#1B1B1B] border border-white transition-all duration-500 text-white bg-transparent">Регистрация</NuxtLink>        
    </FormKit>
</template>

<script setup>
    /* создание пользователя */
    const user = ref({
        login: "",
        password: ""  
    })
</script>