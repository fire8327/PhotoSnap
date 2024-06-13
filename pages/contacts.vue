<template>
    <div class="flex flex-col gap-8 grow items-center justify-center">
        <div class="w-full h-px bg-gray-400"></div>
        <div class="flex gap-6 max-lg:flex-col w-full">
            <div class="lg:w-1/3 flex flex-col gap-4">
                <p class="text-3xl font-semibold font-Comfortaa tracking-widest">Контакты</p>
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-gray-400">Адрес</p>
                    <p class="font-Comfortaa font-semibold">Центральный офис г.Москва, ул.Пришвина д15, офис 009, 3 этаж</p>
                </div>
                <div>
                    <p class="text-sm text-gray-400">Режим работы</p>
                    <p class="mt-2 font-Comfortaa font-semibold">Пн-Пт: с 9:00 до 21:00</p>
                    <p class="font-Comfortaa font-semibold">Cб-Вс: с 12:00 до 18:00</p>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-gray-400">Email</p>
                    <NuxtLink to="mailto:PhotoSnap@gmail.com" class="font-Comfortaa font-semibold transition-all duration-500 hover:opacity-50">PhotoSnap@gmail.com</NuxtLink>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-gray-400">Телефон для связи</p>
                    <NuxtLink to="tel:+7 (965) 296 74-49" class="font-Comfortaa font-semibold transition-all duration-500 hover:opacity-50">+7 (965) 296 74-49</NuxtLink>
                </div>
                <div class="flex items-center gap-2">
                    <NuxtLink target="_blank" class="transition-all duration-500 hover:opacity-50">
                        <Icon class="text-3xl" name="mdi:vk"/>
                    </NuxtLink>
                    <NuxtLink target="_blank" class="transition-all duration-500 hover:opacity-50">
                        <Icon class="text-3xl" name="ic:baseline-telegram"/>
                    </NuxtLink>
                    <NuxtLink target="_blank" class="transition-all duration-500 hover:opacity-50">
                        <Icon class="text-3xl" name="basil:instagram-outline"/>
                    </NuxtLink>
                </div>
            </div>
            <iframe class="w-full h-[400px] lg:w-2/3 lg:h-full rounded-xl border border-gray-200" src="https://yandex.ru/map-widget/v1/?um=constructor%3A2dc702628277cfe28bb9b157c1d3fdaa47c3df97f80427eb48efdde2ac9d32b2&amp;source=constructor" frameborder="0"></iframe>
        </div>
        <div class="w-full h-px bg-gray-400"></div>
    </div>
</template>

<script setup>

</script>