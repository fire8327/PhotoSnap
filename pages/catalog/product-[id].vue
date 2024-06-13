<template>
    <div class="flex max-lg:flex-col gap-6">
        <img src="/images/products/1.jpg" alt="" class="w-full lg:w-1/2 rounded-xl object-cover aspect-video h-fit">
        <div class="flex flex-col gap-6 w-full lg:w-1/2 p-4 rounded-xl bg-white/5 border border-white/15 backdrop-blur-3xl">
            <p class="text-2xl font-Comfortaa font-semibold tracking-widest">{{ products[0].title }}</p>
            <div class="flex flex-col gap-8 md:gap-2">
                <div class="flex items-center max-md:flex-col max-md:text-center gap-2 w-full" v-for="(value, key) in products[0].characteristics">
                    <p class="w-fit">{{ key }}</p>
                    <div class="grow h-px border-b border-white border-dashed min-w-[50%]"></div>
                    <p class="w-fit">{{ value }}</p>
                </div>
            </div>
            <p class="text-4xl font-Comfortaa font-semibold tracking-widest">{{ products[0].price.toLocaleString() }} ₽ </p>
            <button v-if="authenticated" @click="addCart" class="w-[160px] text-center py-0.5 px-4 rounded-full bg-white text-[#1B1B1B] border border-white transition-all duration-500 hover:text-white hover:bg-transparent">В корзину</button>
            <p v-else class="text-sm">*Для добавления товара в корзину необходимо войти в аккаунт</p>
        </div>
    </div>  
</template>

<script setup>
    /* подключение БД и роут */
    const supabase = useSupabaseClient() 
    const route = useRoute()

    const { data:products, error:productsError } = await supabase
    .from('products')
    .select('*')   
    .eq('id', route.params.id)

    
    /* проверка входа */
    const { authenticated, id } = storeToRefs(useUserStore())


    /* создание сообщений */
    const { showMessage } = useMessagesStore()


    /* добавление в корзину */
    const addCart = async () => {
        const { data: carts } = await supabase
        .from('cart')
        .select(`*`)
        .eq('status', 'В корзине')
        .eq('userId', id.value)
        .eq('productId', route.params.id)

        if(carts && carts.length>0) {
            await supabase
            .from('cart')
            .update({ count: `${Number(carts[0].count)+1}` })
            .eq('status', 'В корзине')
            .eq('userId', id.value)
            .eq('productId', route.params.id)
            .select()      
        
            showMessage("Количество обновлено!", true)   
        } else {            
            const { data, error } = await supabase
            .from('cart')
            .insert([
                { userId: id.value, productId: route.params.id, status: 'В корзине', count: 1 },
            ])
            .select()       
            
            if(error) {
                showMessage("Произошла ошибка!", false)   
            } else {
                showMessage("Добавлено в корзину!", true)   
            }            
        }
    }
</script>