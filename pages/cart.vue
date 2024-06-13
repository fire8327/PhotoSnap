<template>
    <div class="flex max-lg:flex-col gap-10" v-if="carts && carts.length>0">
        <div class="flex flex-col gap-6 lg:w-1/2">
            <p class="text-3xl tracking-widest font-semibold font-Comfortaa">Список товаров</p>
            <div class="flex flex-col gap-8">
                <div class="flex flex-col gap-4 rounded-xl p-4 border border-white/15 bg-white/5 backdrop-blur-3xl" v-for="cart in carts">
                    <p class="text-2xl tracking-widest font-semibold font-Comfortaa">{{ cart.products.title }}</p>
                    <div class="text-4xl tracking-widest font-semibold font-Comfortaa">{{ cart.products.price.toLocaleString() }} ₽</div>
                    <div class="flex items-center gap-2 md:w-1/2">
                        <div class="flex items-center justify-center gap-4 h-full px-4 rounded-xl border white w-1/2">
                            <button :disabled="cart.count<2" @click="minusCard(cart.count, cart.id), cart.count--" :class="{'text-gray-300' : cart.count<2}" class="text-2xl">-</button>
                            <p>{{ cart.count }}</p>
                            <button @click="plusCard(cart.count, cart.id), cart.count++" class="text-2xl">+</button>
                        </div>  
                        <button @click="deleteProduct(cart.id, carts.indexOf(cart))" class="w-1/2 text-center py-0.5 px-4 rounded-full bg-white border white text-[#1B1B1B] transition-all duration-500 hover:text-white hover:bg-transparent">Удалить</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-6 lg:w-1/2">
            <p class="text-3xl tracking-widest font-semibold font-Comfortaa">Оформление заказа</p>
            <FormKit type="form" @submit="makeOrder" :actions="false" messages-class="hidden" form-class="flex flex-col gap-4 w-full items-center">
                <div class="flex items-start gap-2 w-full text-[#1B1B1B]">
                    <FormKit type="text" validation="required|number" messages-class="text-[#E9556D] font-Comfortaa" name="Номер карты" outer-class="max-md:w-full md:w-2/4" input-class="px-4 py-2 rounded-xl focus:outline-none w-full" placeholder="Номер карты"/>
                    <FormKit type="text" validation="required" messages-class="text-[#E9556D] font-Comfortaa" name="Срок действия" outer-class="max-md:w-full md:w-1/4" input-class="px-4 py-2 rounded-xl focus:outline-none w-full" placeholder="YY/YY"/>
                    <FormKit type="text" validation="required|number" messages-class="text-[#E9556D] font-Comfortaa" name="CVC" outer-class="max-md:w-full md:w-1/4" input-class="px-4 py-2 rounded-xl focus:outline-none w-full" placeholder="CVC"/>
                </div>
                <p class="text-2xl w-full"><span class="font-Comfortaa">Итого: </span>{{ total.toLocaleString() }} ₽</p>
                <button type="submit" class="w-[160px] text-center py-0.5 px-4 rounded-full bg-white text-[#1B1B1B] border border-white transition-all duration-500 hover:text-white hover:bg-transparent">Оформить</button>
            </FormKit>
        </div>
    </div>
    <div class="flex flex-col gap-6 p-4 rounded-xl bg-white/5 border border-white/15 backdrop-blur-3xl w-full h-fit self-center text-center items-center">
        <p class="text-3xl tracking-widest font-semibold font-Comfortaa">Ваша корзина пуста</p>
        <p class="tracking-widest max-w-xl">Кажется, вы еще не добавили товары в корзину. Не упустите шанс найти что-то особенное!</p>
        <NuxtLink to="/catalog" class="w-[160px] text-center py-0.5 px-4 rounded-full bg-white text-[#1B1B1B] border border-white transition-all duration-500 hover:text-white hover:bg-transparent">В каталог</NuxtLink>
    </div>
</template>

<script setup>
    /* проверка входа */
    const { id } = storeToRefs(useUserStore())


    /* создание сообщений */
    const showMessage = useMessagesStore().showMessage


    /* подключение к БД */
    const supabase = useSupabaseClient()     
    const { data:cart, error:cartError } = await supabase
    .from('cart')
    .select(`*, products (*)`)
    .eq('status', 'В корзине')
    .eq('userId', id.value)

    const carts = ref(cart)


    /* управление количеством и суммой */  
    const calculateTotal = () => {
        return carts.value.reduce((acc, { count, products: { price } }) => acc + count * price, 0)
    }
    const total = ref(calculateTotal())

    const updateCount = async (newCount, id) => {
        const { data, error } = await supabase
        .from('cart')
        .update({ count: newCount })
        .eq('id', id)
        .select()

        if(error) {
            showMessage("Произошла ошибка!", false)             
        } else {
            total.value = calculateTotal()
            showMessage("Количество обновлено!", true)  
        }
    }
    const plusCard = async (count, id) => {
        count++
        await updateCount(count, id)
    }
    const minusCard = async (count, id) => {
        if (count > 1) {
            count--
            await updateCount(count, id)
        }
    }


    /* удаление товара */
    const deleteProduct = async (idBase, idArray) => {
        const { error } = await supabase
        .from('cart')
        .delete()
        .eq('id', idBase)

        carts.value.splice(idArray, 1)

        if(error) {
            showMessage("Произошла ошибка!", false)             
        } else {
            showMessage("Удалено!", true)  
        }
    }


    /* оформление заказа и роутер */
    const router = useRouter()
    const makeOrder = async () => {
        const { data, error } = await supabase
        .from('cart')
        .update({ status: 'Оформлен' })
        .eq('status', 'В корзине')
        .eq('userId', id.value)
        .select() 

        if(error) {
            showMessage("Произошла ошибка!", false)             
        } else {
            showMessage("Заказ успешно оформлен!", true)  
            router.push("/")
        }     
    } 
</script>