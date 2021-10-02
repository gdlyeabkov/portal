<template>
  <div style="height: 50px; display: flex; justify-content: center; font-size: 12px; align-items: center;">
    <span @click="asideMenu = true" style="cursor: pointer; color: rgb(0, 0, 255);" class="material-icons">
        menu_open
    </span>
    
    <div v-if="asideMenu" style="display: flex; position: fixed; z-index: 10; top: 0px; left: 0px; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5);">
        <div style="overflow-y: scroll; width: 300px; height: 100%; background-color: rgb(175, 175, 175);">
            <div style="height: 75px; display: flex; justify-content: space-around; align-items: center;">
                <img width="45" src="https://gu-st.ru/content/newportal/mainpage/icon_32/ic_Health.svg" alt="">
                <span style="width: 65%; font-size: 18px; color: rgb(255, 255, 255);">
                    Здоровье
                </span>
            </div>
            <div style="height: 75px; display: flex; justify-content: space-around; align-items: center;">
                <img width="45" src="https://gu-st.ru/content/newportal/mainpage/icon_32/ic_Folder.svg" alt="">
                <span style="width: 65%; font-size: 18px; color: rgb(255, 255, 255);">
                    Справки Выписки
                </span>
            </div>
            <div style="height: 75px; display: flex; justify-content: space-around; align-items: center;">
                <img width="45" src="https://gu-st.ru/content/newportal/mainpage/icon_32/ic_Wallet.svg" alt="">
                <span style="width: 65%; font-size: 18px; color: rgb(255, 255, 255);">
                    Пособия Пенсии Льготы
                </span>
            </div>
            <div style="height: 75px; display: flex; justify-content: space-around; align-items: center;">
                <img width="45" src="https://gu-st.ru/content/newportal/mainpage/icon_32/ic_Car.svg" alt="">
                <span style="width: 65%; font-size: 18px; color: rgb(255, 255, 255);">
                    Авто Права Транспорт
                </span>
            </div>
            <div style="height: 75px; display: flex; justify-content: space-around; align-items: center;">
                <img width="45" src="https://gu-st.ru/content/newportal/mainpage/icon_32/ic_Family.svg" alt="">
                <span style="width: 65%; font-size: 18px; color: rgb(255, 255, 255);">
                    Семья
                </span>
            </div>
            <div style="height: 75px; display: flex; justify-content: space-around; align-items: center;">
                <img width="45" src="https://gu-st.ru/content/newportal/mainpage/icon_32/ic_Book.svg" alt="">
                <span style="width: 65%; font-size: 18px; color: rgb(255, 255, 255);">
                    Дети Образование
                </span>
            </div>
            <div style="height: 75px; display: flex; justify-content: space-around; align-items: center;">
                <img width="45" src="https://gu-st.ru/content/newportal/mainpage/icon_32/ic_Pasport.svg" alt="">
                <span style="width: 65%; font-size: 18px; color: rgb(255, 255, 255);">
                    Паспорта Регистрация
                </span>
            </div>
            <div style="height: 75px; display: flex; justify-content: space-around; align-items: center;">
                <img width="45" src="https://gu-st.ru/content/newportal/mainpage/icon_32/ic_Fines.svg" alt="">
                <span style="width: 65%; font-size: 18px; color: rgb(255, 255, 255);">
                    Штрафы Долги
                </span>
            </div>
            <div style="height: 75px; display: flex; justify-content: space-around; align-items: center;">
                <img width="45" src="https://gu-st.ru/content/newportal/mainpage/icon_32/ic_Home.svg" alt="">
                <span style="width: 65%; font-size: 18px; color: rgb(255, 255, 255);">
                    Недвижимость Стройка
                </span>
            </div>
            <div style="height: 75px; display: flex; justify-content: space-around; align-items: center;">
                <img width="45" src="https://gu-st.ru/content/newportal/mainpage/icon_32/ic_Another.svg" alt="">
                <span style="width: 65%; font-size: 18px; color: rgb(255, 255, 255);">
                    Прочее
                </span>
            </div>
            <div style="height: 75px; display: flex; justify-content: space-around; align-items: center;">
                <img width="45" src="https://gu-st.ru/content/newportal/mainpage/icon_32/Gov_services.svg" alt="">
                <span style="width: 65%; font-size: 18px; color: rgb(255, 255, 255);">
                    Ведомства
                </span>
            </div>
            
        </div>
        <span @click="asideMenu = false" class="material-icons" style="cursor: pointer; margin-left: 35px; margin-top: 35px; color: rgb(245, 245, 245); font-size: 48px;">
            close
        </span>
    </div>
    <img style="cursor: pointer; margin-left: 25px;" @click="$router.push({ name: 'Home' })" src="https://gu-st.ru/st/img/logo_nobeta.0a1f5dfe.svg"  width="175px" alt="">
    <p style="color: rgb(0, 0, 255); width: 240px; margin-left: 25px;">
        Электросталь г.
    </p>
    <p style="color: rgb(0, 0, 255); margin-left: 25px;">
        Заявления
    </p>
    <p style="color: rgb(0, 0, 255); margin-left: 25px;">
        Документы
    </p>
    <p style="color: rgb(0, 0, 255); margin-left: 25px;">
        Платежи
    </p>
    <p style="color: rgb(0, 0, 255); margin-left: 25px;">
        Помощь
    </p>
    <span style="color: rgb(0, 0, 255); margin-left: 25px;" class="material-icons">
        search
    </span>
    <p style="color: rgb(0, 0, 255); margin-left: 25px;">
        {{ currentCitizen }}
    </p>
    <div style="width: 35px; height: 35px; background-color: rgb(245, 245, 245); border-radius: 100%; margin-left: 25px; background-image: url('https://icon-library.com/images/user-icon/user-icon-17.jpg'); background-size: 100% 100%;">

    </div>
    <span style="color: rgb(0, 0, 255); cursor: pointer;" @click="drawCitizenMenu(true)" class="material-icons margin-left: 25px;">
        expand_more
    </span>
    <div v-if="citizenMenu" style="box-sizing: border-box; padding: 25px; border: 1px solid rgb(225, 225, 225); width: 325px; height: 475px; position: absolute; z-index: 5; top: 50px; left: 900px; background-color: rgb(255, 255, 255);">
        <div style="display: flex; justify-content: space-between; width: 200px;">
            <p>
                {{ currentCitizen }}
            </p>
            <span class="material-icons" style="cursor: pointer;" @click="drawCitizenMenu(false)">
                close
            </span>
        </div>
        <hr />
        <div style="display: flex; justify-content: space-around;">
            <span class="material-icons">
                notifications_none
            </span>
            <span style="width: 45%; cursor: pointer; font-size: 18px;" @click="$router.push({ name: 'Overview' })">
                Уведомления
            </span>
        </div>
        <div style="margin-top: 10px; display: flex; justify-content: space-around;">
            <span class="material-icons">
                perm_identity
            </span>
            <span style="width: 45%; cursor: pointer; font-size: 18px;" @click="$router.push({ name: 'Statements' })">
                Профиль
            </span>
        </div>
        <div style="margin-top: 10px; display: flex; justify-content: space-around;">
            <span class="material-icons">
                work_outline
            </span>
            <span style="width: 45%; cursor: pointer; font-size: 18px;" @click="$router.push({ name: 'DocumentsAndData' })">
                Войти как организация
            </span>
        </div>
        <div style="margin-top: 10px; display: flex; justify-content: space-around;">
            <span class="material-icons">
                logout
            </span>
            <span style="width: 45%; cursor: pointer; font-size: 18px;" @click="logout()">
                Выйти
            </span>
        </div>
    </div>
</div>
</template>

<script>
import * as jwt from 'jsonwebtoken'

export default {
    name: 'PersonalAreaHeader',
    data(){
        return {
            asideMenu: false,
            citizenMenu: false,
            currentCitizen: '',
            citizenIsLogin: false,
            token: window.localStorage.getItem("portaltoken"),
        }
    },
    mounted(){
        jwt.verify(this.token, 'portalsecret', (err, decoded) => {
            if (err) {
                this.currentCitizen = ''
                this.citizenIsLogin = false
            } else {
                this.currentCitizen = decoded.phone
                this.citizenIsLogin = true
            }
        })
    },
    methods: {
        logout(){
            this.token = jwt.sign({
                phone: this.phone
            }, 'portalsecret', { expiresIn: 1 })
            localStorage.setItem('portaltoken', this.token)
            setTimeout(() => {
                this.$router.push({ name: 'Home' })
            }, 1000)
        },
        drawCitizenMenu(toggle){
            this.citizenMenu = toggle
        }
    }
}
</script>

<style>

</style>