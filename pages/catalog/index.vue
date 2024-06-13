<template>
    <div class="flex flex-col gap-6">
        <p class="text-3xl font-semibold font-Comfortaa tracking-widest text-white">Каталог</p>
        <div class="flex max-lg:flex-col gap-6">
            <FormKit type="form" :actions="false" form-class="flex flex-col gap-6 w-full lg:w-1/3 p-4 rounded-xl border border-white/15 bg-white/5 backdrop-blur-3xl">
                <div class="flex flex-col gap-2">
                    <p class="font-Comfortaa">Цена</p>
                    <div class="flex items-start gap-2 text-[#1B1B1B]">
                        <FormKit type="text" validation="number" messages-class="text-[#E9556D] font-semibold font-Comfortaa tracking-widest" name="От" outer-class="w-1/2" input-class="px-4 py-2 rounded-xl focus:outline-none w-full" placeholder="От"/>
                        <FormKit type="text" validation="number" messages-class="text-[#E9556D] font-semibold font-Comfortaa tracking-widest" name="До" outer-class="w-1/2" input-class="px-4 py-2 rounded-xl focus:outline-none w-full" placeholder="До"/>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="font-Comfortaa">Тип</p>
                    <FormKit type="select" :options="['Все']" messages-class="text-[#E9556D] font-semibold font-Comfortaa tracking-widest" name="Тип" outer-class="w-full" input-class="px-4 py-2 rounded-xl focus:outline-none w-full" placeholder="Тип"/>
                </div>
                <div class="flex items-center gap-2">
                    <button type="button" class="w-[160px] text-center py-0.5 px-4 rounded-full bg-white text-[#1B1B1B] border border-white transition-all duration-500 hover:text-white hover:bg-transparent">Применить</button>
                    <button type="button" class="w-[160px] text-center py-0.5 px-4 rounded-full hover:bg-white hover:text-[#1B1B1B] border border-white transition-all duration-500 text-white bg-transparent">Отменить</button>
                </div>
            </FormKit>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:w-2/3">
                
            </div>
        </div>
    </div>
</template>

<script setup>

</script>