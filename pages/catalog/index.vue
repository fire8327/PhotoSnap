<template>
    <div class="flex flex-col gap-6">
        <p class="text-3xl font-semibold font-Comfortaa tracking-widest text-white">Каталог</p>
        <div class="flex max-lg:flex-col gap-6">
            <FormKit type="form" :actions="false" form-class="flex flex-col gap-6 w-full lg:w-1/4 h-fit p-4 rounded-xl border border-white/15 bg-white/5 backdrop-blur-3xl">
                <div class="flex flex-col gap-2">
                    <p class="font-Comfortaa">Цена</p>
                    <div class="flex items-start gap-2 text-[#1B1B1B]">
                        <FormKit type="text" validation="number" v-model="filters.minPrice" messages-class="text-[#E9556D] font-semibold font-Comfortaa tracking-widest" name="От" outer-class="w-1/2" input-class="px-4 py-2 rounded-xl focus:outline-none w-full" placeholder="От"/>
                        <FormKit type="text" validation="number" v-model="filters.maxPrice" messages-class="text-[#E9556D] font-semibold font-Comfortaa tracking-widest" name="До" outer-class="w-1/2" input-class="px-4 py-2 rounded-xl focus:outline-none w-full" placeholder="До"/>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="font-Comfortaa">Тип</p>
                    <FormKit type="select" :options="selectType" v-model="filters.type" messages-class="text-[#E9556D] font-semibold font-Comfortaa tracking-widest" name="Тип" outer-class="w-full" input-class="px-4 py-2 rounded-xl focus:outline-none w-full text-[#1B1B1B]" placeholder="Тип"/>
                </div>
                <div class="flex items-center gap-2">
                    <button type="button" @click="filterProducts" class="w-[160px] text-center py-0.5 px-4 rounded-full bg-white text-[#1B1B1B] border border-white transition-all duration-500 hover:text-white hover:bg-transparent">Применить</button>
                    <button type="button" @click="cancelFilters" class="w-[160px] text-center py-0.5 px-4 rounded-full hover:bg-white hover:text-[#1B1B1B] border border-white transition-all duration-500 text-white bg-transparent">Отменить</button>
                </div>
            </FormKit>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:w-3/4">
                <div class="flex flex-col gap-6 bg-white/5 rounded-xl p-4 border border-white/15 backdrop-blur-3xl group" v-for="product in products">
                    <div class="overflow-hidden rounded-xl">                    
                        <img :src="product.image" alt="" class="transition-all duration-500 group-hover:scale-125 w-full aspect-video object-cover">
                    </div>
                    <p class="text-2xl font-Comfortaa">{{ product.title }}</p>
                    <div class="flex flex-col gap-2 mt-auto">
                        <p class="text-3xl font-Comfortaa">{{ product.price.toLocaleString() }} ₽</p>
                        <NuxtLink :to="`/catalog/product-${product.id}`" class="mx-auto flex flex-col w-fit after:w-0 after:bg-white after:h-px after:transition-all after:duration-500 group-hover:after:w-full">Подробнее...</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    /* подключение БД */
    const supabase = useSupabaseClient() 

    const { data, error } = await supabase
    .from('products')
    .select('*')  

    const products = ref(data)


    /* фильтрация */
    const selectType = ['Все', ...new Set(data.map(item => item.type))]

    const filters = ref({
        minPrice: null,
        maxPrice: null,
        type: "Все"
    })

    const filterProducts = () => {
        products.value = data
        const filter = products.value.filter(el => {
            if ((filters.value.type != 'Все' && el.type != filters.value.type) ||
                (filters.value.minPrice && el.price < filters.value.minPrice) ||
                (filters.value.maxPrice && el.price > filters.value.maxPrice)) {
                return false
            }
            return true
        })     
        products.value = filter
    }  

    const cancelFilters = () => {
        products.value = data
        filters.value.minPrice = null
        filters.value.maxPrice = null
        filters.value.type = "Все"
    }
</script>