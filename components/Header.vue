<template>
    <header class="w-full py-4 bg-[#1B1B1B] grid-container text-white relative z-[2]">
        <div class="flex items-center gap-6 justify-between">
            <NuxtLink to="/" class="w-40">
                <img src="/images/header/logo.png" alt="">
            </NuxtLink>
            <nav class="flex items-center gap-6 transition-all duration-500 z-[5] max-lg:border-t border-white  max-lg:w-full max-lg:bg-[#1B1B1B] max-lg:absolute max-lg:left-0 max-lg:flex-col max-lg:py-6" :class="isMenuShow ? 'max-lg:top-full' : 'max-lg:top-0 max-lg:-translate-y-full'">
                <NuxtLink to="/catalog" class="flex flex-col after:w-0 after:h-px after:bg-white after:transition-all after:duration-500 hover:after:w-full">Каталог</NuxtLink>
                <NuxtLink to="/contacts" class="flex flex-col after:w-0 after:h-px after:bg-white after:transition-all after:duration-500 hover:after:w-full">Контакты</NuxtLink>
                <NuxtLink to="/about" class="flex flex-col after:w-0 after:h-px after:bg-white after:transition-all after:duration-500 hover:after:w-full">О нас</NuxtLink>
                <NuxtLink v-if="!authenticated" to="/auth" class="px-4 py-1 rounded-xl border border-white bg-white text-[#1B1B1B] transition-all duration-500 hover:bg-transparent hover:text-white">Вход</NuxtLink>
                <div v-else class="flex items-center gap-4">
                    <NuxtLink to="/cart" class="transition-all duration-500 hover:opacity-50">
                        <Icon class="text-3xl" name="material-symbols:shopping-cart"/> 
                    </NuxtLink>
                    <NuxtLink to="/profile" class="transition-all duration-500 hover:opacity-50">
                        <Icon class="text-3xl" name="material-symbols:person"/> 
                    </NuxtLink>
                </div>
            </nav>
            <button @click="isMenuShow = !isMenuShow" class="lg:hidden">
                <Icon class="text-3xl" name="ic:baseline-menu"/> 
            </button>
        </div>
        <div class="fixed inset-0 bg-black/50 z-[4] top-16 lg:hidden" :class="{'hidden' : !isMenuShow}"></div>
        <button type="button" @click="messageTitle = null" class="fixed top-10 right-10 z-[11] cursor-pointer flex items-center gap-2 px-6 py-2 text-lg rounded-2xl w-fit bg-white/5 border border-white/15 backdrop-blur-3xl" :class="messageType ? ' text-white' : 'text-red-500'" v-if="messageTitle">
            <Icon class="text-3xl" name="material-symbols:close-small-rounded"/>
            <span>{{messageTitle}}</span>
        </button>
    </header>
</template>

<script setup>
    /* мобильное меню */
    const isMenuShow = ref(false)


    /* хук */
    const nuxtApp = useNuxtApp()
    nuxtApp.hook('page:start', () => {
        isMenuShow.value = false
    })


    /* создание сообщений */
    const { messageTitle, messageType } = storeToRefs(useMessagesStore())


    /* проверка входа */
    const { authenticated } = storeToRefs(useUserStore())
</script>