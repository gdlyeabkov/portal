<template>
    <div>
        <div style="display: flex; justify-content: center;">
            <img style="cursor: pointer;" @click="$router.push({ name: 'Home' })" src="https://gu-st.ru/st/img/logo_nobeta.0a1f5dfe.svg"  width="175px" alt="">
            <p style="width: 240px; margin-left: 25px;">
                Единая система
                идентификации и аутентификации
            </p>
        </div>
        <div style="display: flex; justify-content: center;">
            <div style="display: flex; justify-content: center; width: 25%; height: 385px; box-shadow: 0px 0px 2px rgb(75, 75, 75);">
                <div style="margin: auto; width: 75%; display: flex; flex-direction: column; align-items: center;">
                    <div style="text-align: center; line-height: 5px; margin-bottom: 35px;">
                        <p style="font-size: 24px; font-weight: bolder;">
                            Вход
                        </p>
                        <p>
                            для портала Госуслуг
                        </p>
                    </div>
                    <div v-if="false" style="display: flex; width: 100%; justify-content: space-around;">
                        <div style="border-radius: 100%; width: 65px; height: 65px; background-color: rgb(225, 225, 225); background-image: url('https://icon-library.com/images/user-icon/user-icon-17.jpg'); background-size: cover;">

                        </div>
                        <div>
                            <p>
                                +7 (926) 863-70-91
                            </p>
                            <p @click="$router.push({ name: 'PersonalArea' })" style="color: rgb(0, 0, 255);">
                                Другой пользователь
                            </p>
                        </div>
                    </div>
                    <input v-model="phone" v-else type="phone" style="margin-bottom: 15px;" class="form-control" placeholder="Телефон, почта или СНИЛС" />
                    <input v-model="password" type="password" class="form-control" placeholder="Пароль" />
                    <button @click="login()" style="margin-top: 25px; display: block;" class="w-100 btn btn-primary">Войти</button>
                    <p style="margin-top: 25px; cursor: pointer; color: rgb(0, 0, 255);">
                        Я не знаю пароль
                    </p>
                </div>
            </div>
        </div>
        <div style="height: 75px; display: flex; align-items: center; width: 100%; justify-content: center;">
            <p style="color: rgb(0, 0, 255); cursor: pointer; text-align: center;" @click="$router.push({ name: 'DigitalSubscribe' })">
                Вход с помощью электронной подписи
            </p>
        </div>
        <div style="width: 100%;">
            <div style="display: flex; justify-content: space-around;">
                <div style="display: flex; justify-content: space-between;">
                    <p style="margin: 0px 10px;">
                        Помощь и поддержка
                    </p>
                    <p style="margin: 0px 10px;">
                        Условия использования
                    </p>
                    <p style="margin: 0px 10px;">
                        Политика конфиденциальности
                    </p>
                </div>
                <div>
                    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected value="1">Русский</option>
                        <option value="2">English</option>
                    </select>           
                </div>
            </div>
            <div style="display: flex; align-items: center; justify-content: center;">
            <img src="https://gu-st.ru/st/img/mks_new.f96ef303.png" width="45px" alt="">
            <p>
                Официальный интернет-портал государственных услуг, 2021 г.
            </p>
            <img src="https://gu-st.ru/st/img/rostelek_new.2be1d808.svg" width="45px" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PersonalArea",
    data(){
        return {
            phone: '',
            password: '',
        }
    },
    methods: {
        login(){

        }
    }
}
</script>