<template>    
    <FormKit @submit="updateUser" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-4 items-center justify-center text-xl p-4 rounded-xl border border-white/15 bg-white/5 backdrop-blur-3xl text-[#1B1B1B]">
        <p class="text-3xl font-semibold font-Comfortaa tracking-widest text-white">Обновление данных</p>
        <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
            <FormKit type="text" v-model="user.surname" validation="required" messages-class="text-[#E9556D] font-semibold font-Comfortaa tracking-widest" name="Фамилия" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 rounded-xl focus:outline-none w-full" placeholder="Фамилия"/>
            <FormKit type="text" v-model="user.name" validation="required" messages-class="text-[#E9556D] font-semibold font-Comfortaa tracking-widest" name="Имя" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 rounded-xl focus:outline-none w-full" placeholder="Имя"/>
            <FormKit type="text" v-model="user.patronymic" validation="required" messages-class="text-[#E9556D] font-semibold font-Comfortaa tracking-widest" name="Отчество" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 rounded-xl focus:outline-none w-full" placeholder="Отчество"/>
        </div>
        <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
            <FormKit type="text" v-model="user.login" validation="required" messages-class="text-[#E9556D] font-semibold font-Comfortaa tracking-widest" name="Логин" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 rounded-xl focus:outline-none w-full" placeholder="Логин"/>
            <FormKit type="password" v-model="user.password" validation="required|length:6" messages-class="text-[#E9556D] font-semibold font-Comfortaa tracking-widest" name="Пароль" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 rounded-xl focus:outline-none w-full" placeholder="••••••"/>
        </div>
        <FormKit type="text" v-model="user.phone" validation="required|length:11" messages-class="text-[#E9556D] font-semibold font-Comfortaa tracking-widest" name="Телефон" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 rounded-xl focus:outline-none w-full" placeholder="Телефон"/>
        <button type="submit" class="w-[160px] text-center py-0.5 px-4 rounded-full bg-white text-[#1B1B1B] border border-white transition-all duration-500 hover:text-white hover:bg-transparent">Обновить</button>
    </FormKit>
    <div class="flex flex-col gap-6" v-if="carts">
        <p class="text-3xl font-semibold font-Comfortaa tracking-widest text-white">Мои покупки</p>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div class="flex flex-col gap-4 rounded-xl p-4 border border-white/15 bg-white/5 backdrop-blur-3xl" v-for="cart in carts">
                <p>Id заказа: {{ cart.id }}</p>
                <p class="tracking-widest font-semibold font-Comfortaa">{{ cart.products.title }}</p>
                <img :src="cart.products.image" alt="" class="w-full rounded-xl aspect-video object-cover">
                <div class="text-3xl tracking-widest font-semibold font-Comfortaa">{{ cart.products.price.toLocaleString() }} ₽</div>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-6">
        <p class="text-3xl font-semibold font-Comfortaa tracking-widest text-white">Выход из аккаунта</p>
        <button @click="logoutUser" class="w-[160px] text-center py-0.5 px-4 rounded-full bg-white text-[#1B1B1B] border border-white transition-all duration-500 hover:text-white hover:bg-transparent">Выход</button>
    </div>
</template>

<script setup>
    /* подключение БД и проверка пользователя */
    const supabase = useSupabaseClient() 
    const { authenticated, role, id } = storeToRefs(useUserStore())
    const { logout } = useUserStore()

    const { data:users, error } = await supabase
    .from('users')
    .select('*')   
    .eq('id', id.value)  


    /* создание сообщений и роутера */
    const { showMessage } = useMessagesStore()
    const router = useRouter()


    /* создание формы пользователя */
    const user = ref({
        name: users[0].name,
        surname: users[0].surname,
        patronymic: users[0].patronymic,
        phone: users[0].phone,
        login: users[0].login,
        password: users[0].password
    })


    /* обновление данных */
    const updateUser = async () => {    
        const { data, error } = await supabase
        .from('users')
        .update(user.value)
        .eq('id', id.value)
           
        if(error) {
            console.log(error)
            showMessage("Произошла ошибка!", false)   
        } else {            
            showMessage("Данные обновлены!", true)   
        }
    }


    /* заказы */
    const { data:carts, error:cartsError } = await supabase
    .from('cart')
    .select('*, products(*)')   
    .eq('userId', id.value)  
    .eq('status', 'Оформлен')  


    /* выход из аккаунта */
    const logoutUser = () => {
        logout()
        showMessage("Успешный выход!", true)   
        router.push('/')
    }
</script>