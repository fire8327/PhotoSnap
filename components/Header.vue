<template>
    <header class="w-full py-4 bg-[#1B1B1B] grid-container text-white relative z-[1]">
        <div class="flex items-center gap-6 justify-between">
            <NuxtLink to="/" class="w-40">
                <img src="/images/header/logo.png" alt="">
            </NuxtLink>
            <nav class="flex items-center gap-6 transition-all duration-500 z-[5] max-lg:border-t border-white  max-lg:w-full max-lg:bg-[#1B1B1B] max-lg:absolute max-lg:left-0 max-lg:flex-col max-lg:py-6" :class="isMenuShow ? 'max-lg:top-full' : 'max-lg:top-0 max-lg:-translate-y-full'">
                <NuxtLink to="/catalog" class="flex flex-col after:w-0 after:h-px after:bg-white after:transition-all after:duration-500 hover:after:w-full">Каталог</NuxtLink>
                <NuxtLink to="/contacts" class="flex flex-col after:w-0 after:h-px after:bg-white after:transition-all after:duration-500 hover:after:w-full">Контакты</NuxtLink>
                <NuxtLink to="/about" class="flex flex-col after:w-0 after:h-px after:bg-white after:transition-all after:duration-500 hover:after:w-full">О нас</NuxtLink>
                <NuxtLink to="/auth" class="px-4 py-1 rounded-xl border border-white bg-white text-[#1B1B1B] transition-all duration-500 hover:bg-transparent hover:text-white">Вход</NuxtLink>
            </nav>
            <button @click="isMenuShow = !isMenuShow" class="lg:hidden">
                <Icon class="text-3xl" name="ic:baseline-menu"/> 
            </button>
        </div>
        <div class="fixed inset-0 bg-black/50 z-[4] top-16 lg:hidden" :class="{'hidden' : !isMenuShow}"></div>
    </header>
</template>

<script setup>
    /* мобильное меню */
    const isMenuShow = ref(false)
</script>