<template>
    <footer class="text-white bg-[#1B1B1B] w-full py-4 grid-container z-[1]">
        <div class="flex gap-6 max-lg:flex-col lg:justify-between">
            <NuxtLink to="/" class="w-56">
                <img src="/images/header/logo.png" alt="">
            </NuxtLink>
            <div class="flex gap-6 max-lg:flex-col">
                <div class="flex flex-col gap-2">
                    <p class="font-Comfortaa text-2xl">Адрес</p>
                    <p class="max-w-96">Центральный офис г.Москва, ул.Пришвина д15, офис 009, 3 этаж</p>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="font-Comfortaa text-2xl">Контактная информация</p>
                    <NuxtLink class="transition-all duration-500 hover:opacity-50" to="tel:+7 (965) 296 74-49">+7 (965) 296 74-49</NuxtLink>
                    <NuxtLink class="transition-all duration-500 hover:opacity-50" to="mailto:PhotoSnap@gmail.com">PhotoSnap@gmail.com</NuxtLink>
                </div>
            </div>
        </div> 
    </footer>
</template>

<script setup>

</script>