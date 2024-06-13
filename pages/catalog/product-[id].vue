<template>
    <div class="flex max-lg:flex-col gap-6">
        <img src="/images/products/1.jpg" alt="" class="w-full lg:w-1/2 rounded-xl object-cover aspect-video h-fit">
        <div class="flex flex-col gap-6 w-full lg:w-1/2 p-4 rounded-xl bg-white/5 border border-white/15 backdrop-blur-3xl">
            <p class="text-2xl font-Comfortaa font-semibold tracking-widest">{{ products[0].title }}</p>
            <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2 w-full" v-for="(value, key) in products[0].characteristics">
                    <p class="w-fit">{{ key }}</p>
                    <div class="grow h-px border-b border-white border-dashed min-w-[50%]"></div>
                    <p class="w-fit">{{ value }}</p>
                </div>
            </div>
            <p class="text-4xl font-Comfortaa font-semibold tracking-widest">{{ products[0].price.toLocaleString() }} ₽ </p>
            <button class="w-[160px] text-center py-0.5 px-4 rounded-full bg-white text-[#1B1B1B] border border-white transition-all duration-500 hover:text-white hover:bg-transparent">В корзину</button>
        </div>
    </div>  
</template>

<script setup>
    /* подключение БД и роут */
    const supabase = useSupabaseClient() 
    const { id } = useRoute().params

    const { data:products, error:productsError } = await supabase
    .from('products')
    .select('*')   
    .eq('id', id)
</script>