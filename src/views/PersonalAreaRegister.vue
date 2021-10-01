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
                            Регистрация
                        </p>
                    </div>
                    <p style="text-align: center;">
                        Зарегистрируйтесь онлайн через банк или посетив центры обслуживания
                    </p>
                    <button @click="login()" style="margin-top: 25px; display: block;" class="w-100 btn btn-primary">Онлайн через банк</button>
                    <button @click="login()" style="margin-top: 25px; display: block; color: rgb(0, 0, 255); border: 1px solid rgb(0, 0, 255);" class="w-100 btn btn-light">Через центр обслуживания</button>
                    <p style="margin-top: 25px; cursor: pointer; color: rgb(0, 0, 255);">
                        Другой способ регистрации
                    </p>
                </div>
            </div>
        </div>
        <div style="height: 75px; display: flex; align-items: center; width: 100%; justify-content: center;">
            <p style="cursor: pointer; text-align: center;" @click="$router.push({ name: 'DigitalSubscribe' })">
                Уже зарегестрированы? <span style="color: rgb(0, 0, 255);">Войти</span>
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