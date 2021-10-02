<template>
    <div>
        <div style="margin: auto; background-color: rgb(0, 0, 155); width: 100%; height: 50px;">
            <div style="margin: auto; display: flex; flex-direction: row; justify-content: space-between; align-items: center; height: 100%;">
                <div style="margin: auto; flex-direction: row; width: 85%; align-items: center; align-self: center; justify-content: flex-end;">
                    <span @click="coatToggler = !coatToggler" @mouseenter="hoverEffect($event, true)" @mouseleave="hoverEffect($event, false)" class="hoverable" style="display: flex; align-items: center; height: 50px; width: 125px; cursor: pointer; display: flex; float: left;">
                        <div style="float: left; background-image: url('https://gu-st.ru/content/newportal/mainpage/icon_32/Gov_services.svg'); height: 35px; width: 75px; background-size: 100% 100%;">
                            &nbsp;
                        </div>
                        <span style="float: left; color: rgb(200, 200, 200);" class="material-icons">
                            keyboard_arrow_down
                        </span>
                    </span>
                    <span @click="forCitizenToggler = !forCitizenToggler" @mouseenter="hoverEffect($event, true)" @mouseleave="hoverEffect($event, false)" class="hoverable" style="display: flex; align-items: center; height: 50px; width: 125px; cursor: pointer; display: flex;">
                        <div style="float: left; ">
                            Для граждан
                        </div>
                        <span style="float: left; color: rgb(200, 200, 200);" class="material-icons">
                            keyboard_arrow_down
                        </span>
                    </span>
                </div>
                <div style="width: 300px;">
                    <span @click="locationToggler = !locationToggler" @mouseenter="hoverEffect($event, true)" @mouseleave="hoverEffect($event, false)" class="hoverable" style="display: flex; align-items: center; height: 50px; cursor: pointer; float: left;">
                        <span class="material-icons"  style="font-size: 18px; color: rgb(200, 200, 200);">
                            location_on
                        </span>
                        <div style="float: right;">
                            Электросталь г.
                        </div>
                    </span>
                    <span @click="languageToggler = !languageToggler" @mouseenter="hoverEffect($event, true)" @mouseleave="hoverEffect($event, false)" class="hoverable" style="display: flex; align-items: center; float: left; height: 50px; cursor: pointer;">
                        <img style="float: left; margin: 0px 15px;" width="25px" src="../assets/flag.png" alt="A">
                        <div style="float: left;">
                            RUS
                        </div>
                        <span style="color: rgb(200, 200, 200);" class="material-icons">
                            keyboard_arrow_down
                        </span>
                    </span>
                </div>
            </div>
        </div>

        <div v-if="coatToggler" style="box-shadow: 0 0 15px rgb(150, 150, 150); z-index: 20; display: flex; flex-direction: row; justify-content: center; align-items: center; position: absolute; top: 50px; left: 5%; background-color: rgb(0, 0, 150); width: 90%; height: 500px;">
            <div style="box-sizing: border-box; padding: 35px; display: flex; flex-direction: column; width: 60%; background-color: rgb(215, 215, 255); height: 100%;">
                <h3>
                    О каталоге
                </h3>
                <p>
                    В каталог государственных сайтов включены официальные информационные интернет-ресурсы, посвященные деятельности государственных ведомств.
                </p>
                <p>
                    Навигация в каталоге организована таким образом, чтобы вы могли быстро найти нужное ведомство и его контактную информацию, ознакомиться с предоставляемыми услугами или перейти на официальный сайт.
                </p>
                <hr />
                <img width="125px" style="cursor: pointer;" src="https://gu-st.ru/st/img/logo_nobeta.0a1f5dfe.svg" alt="">
                <p>
                    Теперь пользоваться госуслугами очень просто!
                </p>
                <button class="w-25 btn btn-primary">
                    Перейти в портал
                </button>
            </div>
            <div style="overflow-y: scroll; box-sizing: border-box; padding: 35px; display: flex; flex-direction: column; width: 40%; background-color: rgb(245, 245, 245); height: 100%;">
                <h5>
                    Категории
                </h5>
                <div style="margin-top: 25px;">
                    <h5 style="color: rgb(0, 0, 255);">
                        Государственные услуги
                    </h5>
                    <p>
                        Порталы государственных услуг
                    </p>
                </div>
                <div style="margin-top: 25px;">
                    <h5 style="color: rgb(0, 0, 255);">
                        Здоровье, спорт, туризм
                    </h5>
                    <p>
                        Здравохранение, активные и здоровый образ жизни
                    </p>
                </div>
                <div style="margin-top: 25px;">
                    <h5 style="color: rgb(0, 0, 255);">
                        Правосудие, правопорядок
                    </h5>
                    <p>
                        Обеспечение и охрана правопорядка на территории РФ, нормативно-правовое и судебное регулирование
                    </p>
                </div>
                <div style="margin-top: 25px;">
                    <h5 style="color: rgb(0, 0, 255);">
                        Безопасность страны, ЧС
                    </h5>
                    <p>
                        Защита от внешних угроз и чрезвычайных ситуаций
                    </p>
                </div>
                <div style="margin-top: 25px;">
                    <h5 style="color: rgb(0, 0, 255);">
                        Образование, наука, культура
                    </h5>
                    <p>
                        Воспитание и обучение, научные учреждения, искусство, культурное наследие
                    </p>
                </div>
                <div style="margin-top: 25px;">
                    <h5 style="color: rgb(0, 0, 255);">
                        Труд, соцзащита
                    </h5>
                    <p>
                        Охрана прав человека регулирование в вопросах труда и его оплаты, пенсионного обеспечения и социальной защиты
                    </p>
                </div>
                <div style="margin-top: 25px;">
                    <h5 style="color: rgb(0, 0, 255);">
                        ИТ, связь, СМИ
                    </h5>
                    <p>
                        Госсударственные услуги, информационные технологии, почта, доступ к услугам связи и медиасреде
                    </p>
                </div>
                <div style="margin-top: 25px;">
                    <h5 style="color: rgb(0, 0, 255);">
                        Экономика, финансы
                    </h5>
                    <p>
                        Макроэкономика, финансовые рынки, инвестиционная политика
                    </p>
                </div>
                <div style="margin-top: 25px;">
                    <h5 style="color: rgb(0, 0, 255);">
                        Промышленность, строительство
                    </h5>
                    <p>
                        Промышленный и обороно-промышленный комплекс, техническое регулирование
                    </p>
                </div>
                <div style="margin-top: 25px;">
                    <h5 style="color: rgb(0, 0, 255);">
                        Природопользование, экология
                    </h5>
                    <p>
                        Использование, воспроизводство и охрана природных ресурсов
                    </p>
                </div>
                <div style="margin-top: 25px;">
                    <h5 style="color: rgb(0, 0, 255);">
                        Транспорт
                    </h5>
                    <p>
                        Превозка пассажров и грузов
                    </p>
                </div>
                <div style="margin-top: 25px;">
                    <h5 style="color: rgb(0, 0, 255);">
                        Региональное развитие
                    </h5>
                    <p>
                        Социально-экономического развитие субъектов Российской Федерации
                    </p>
                </div>
                <div style="margin-top: 25px;">
                    <h5 style="color: rgb(0, 0, 255);">
                        Стандарты, реестры, развитие
                    </h5>
                    <p>
                        Службы Госсударственной регистрации
                    </p>
                </div>
                <div style="margin-top: 25px;">
                    <h5 style="color: rgb(0, 0, 255);">
                        Международная деятельность
                    </h5>
                    <p>
                        Международные отношения Российской Федерации
                    </p>
                </div>
                <div style="margin-top: 25px;">
                    <h5 style="color: rgb(0, 0, 255);">
                        Президент, Правительство, Федеральное собрание
                    </h5>
                    <p>
                        Высшее руководство страны
                    </p>
                </div>
            </div>
        </div>

        <div v-if="forCitizenToggler" style="display: flex; flex-direction: column; justify-content: center; align-items: center; position: absolute; top: 50px; left: 110px; background-color: rgb(0, 0, 150); width: 250px; color: rgb(255, 255, 255);">
            <div style="width: 100%;" @mouseenter="hoverEffect($event, true)" @mouseleave="hoverEffect($event, false)">
                <p style="text-align:center; cursor: pointer;">
                    Для юридических лиц
                </p>
            </div>
            <div style="width: 100%;" @mouseenter="hoverEffect($event, true)" @mouseleave="hoverEffect($event, false)" >
                <p style="text-align:center; cursor: pointer;">
                    Для предипринимателей
                </p>
            </div>
            <div style="width: 100%;" @mouseenter="hoverEffect($event, true)" @mouseleave="hoverEffect($event, false)" >
                <p style="text-align:center; cursor: pointer;">
                    Для иностранных граждан
                </p>
            </div>
            <div style="width: 100%;" @mouseenter="hoverEffect($event, true)" @mouseleave="hoverEffect($event, false)" >
                <p style="text-align:center; cursor: pointer;" @mouseenter="hoverEffect($event, true)" @mouseleave="hoverEffect($event, false)">
                    Для партнёров
                </p>
            </div>
        </div>

        <div v-if="locationToggler" style="display: flex; justify-content: center; align-items: center; z-index: 25; position: fixed; top: 0px; left:0 px; width: 100%; height: 100%; background-color:rgba(75, 75, 75, 0.3);">
            <div style="box-sizing: border-box; padding: 35px; width: 65%; height: 65%; background-color: rgb(255, 255, 255); border-radius: 5px;">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <h5>
                        Укажите ваше местоположение
                    </h5>
                    <span @click="locationToggler = false" class="material-icons" style="cursor: pointer; font-size: 57px;">
                        highlight_off
                    </span>
                </div>
                <p>
                    От выбора местоположения зависит набор услуг, доступный для получения на портале
                </p>
                <p style="font-weight: bolder">
                    Ваше текущее местоположение
                </p>
                <input checked id="moscowcity" type="radio">
                <label for="moscowcity" style="margin-left: 35px;">
                    Московская область / Электросталь г.
                </label>
                <p style="font-weight: bolder; margin-top: 25px;">
                    Вы можете изменить регион
                </p>
                <input id="autodefinecity" type="radio">
                <label for="autodefinecity" style="margin-left: 35px;">
                    Определить автоматически
                </label>
                <input id="manualdefinecity" type="radio" style="margin-left: 75px;">
                <label for="manualdefinecity" style="margin-left: 35px;">
                    Выбрать вручную
                </label>
                <button style="display: block; height: 50px; margin-top: 35px;" class="w-25 btn btn-primary">
                    Сохранить
                </button>
            </div>
        </div>

        <div v-if="languageToggler" @mouseenter="hoverEffect($event, true)" @mouseleave="hoverEffect($event, false)" style="position: absolute; top: 50px; left: calc(100% - 150px); background-color: rgb(0, 0, 150); width: 150px; height: 50px; display: flex; align-items: center; color: rgb(255, 255, 255);">
            <img style="float: left; margin: 0px 15px;" width="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png" alt="A">
            <div style="float: left;">
                GBR
            </div>
        </div>
            
        <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-around; width: 100%; height: 75px; background-color: rgb(255, );">
            <div style="cursor: pointer; background-image: url('https://gu-st.ru/st/img/logo_nobeta.0a1f5dfe.svg'); height: 100%; width: 175px; background-size: 100% 100%;">
            </div>
            <div style="width: 250px; display: flex; flex-direction: row;  justify-content: space-between;">
                <p @mouseenter="drawServicesMenu(true)" style="color: rgb(0, 0, 255); cursor: pointer;" @click="$router.push({ name: 'Services' })">Услуги</p>
                <p @mouseenter="drawServicesMenu(false)" style="color: rgb(0, 0, 255); cursor: pointer;" @click="$router.push({ name: 'Pay' })">Оплата</p>
                <p @mouseenter="drawServicesMenu(false)" style="color: rgb(0, 0, 255); cursor: pointer;" @click="$router.push({ name: 'Help' })">Поддержка</p>
                <span style="color: rgb(0, 0, 255);" @click="$router.push({ name: 'Services' })" class="material-icons">
                    search
                </span>
            </div>
            <p v-if="!citizenIsLogin" style="cursor: pointer; color: rgb(0, 0, 255);" @click="$router.push({ name: 'PersonalAreaLogin' })">
                Личный кабинет
            </p>
            <div v-else style="display: flex; justify-content: space-between; width: 200px;">
                <div style="background-image: url('https://icon-library.com/images/user-icon/user-icon-17.jpg'); background-size: 100% 100%; background-color: transparent; height: 35px; width: 35px; border-radius: 100%;">
                </div>
                <p>
                    {{ currentCitizen }}
                </p>
                <span class="material-icons" style="cursor: pointer;" @click="drawCitizenMenu(true)">
                    expand_more
                </span>
                <div v-if="citizenMenu" style="box-sizing: border-box; padding: 25px; border: 1px solid rgb(225, 225, 225); width: 325px; height: 475px; position: absolute; top: 50px; left: 900px; background-color: rgb(255, 255, 255);">
                    <div style="display: flex; justify-content: space-between; width: 200px;">
                        <div style="background-image: url('https://icon-library.com/images/user-icon/user-icon-17.jpg'); background-size: 100% 100%; background-color: transparent; height: 35px; width: 35px; border-radius: 100%;">
                        </div>
                        <p>
                            {{ currentCitizen }}
                        </p>
                        <span class="material-icons" style="cursor: pointer;" @click="drawCitizenMenu(false)">
                            close
                        </span>
                    </div>
                    <hr />
                    <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="$router.push({ name: 'Overview' })">
                        Обзор
                    </p>
                    <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="$router.push({ name: 'Statements' })">
                        Заявления
                    </p>
                    <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="$router.push({ name: 'DocumentsAndData' })">
                        Документы и данные
                    </p>
                    <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="$router.push({ name: 'GovermentMail' })">
                        Госпочта
                    </p>
                    <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="logout()">
                        Согласия
                    </p>
                    <hr />
                    <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="$router.push({ name: 'PersonalArea' })">
                        Настройки и безопасность
                    </p>
                    <hr />
                    <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="logout()">
                        Войти как организация
                    </p>
                    <hr />
                    <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="logout()">
                        Выйти
                    </p>
                </div>
            </div>
        </div>
        
        <div v-if="servicesMenu" style="margin: auto; position: absolute; z-index: 15; top: 125px; left: 0px; width: 100%; height: 445px; background-color: rgb(245, 245, 245);">
            <div>
                <div style="display: flex; width: 75%; margin: auto; justify-content: center; align-items: center; height: 100%;">
                    <div @click="$router.push({ name: 'Family' })" style="cursor: pointer; margin: 15px; align-self: center; display: flex; align-items: center;">
                        <img style="align-self: center;" src="https://gu-st.ru/content/catalog/pas/3.svg" width="45px" alt="">
                        <p style="align-self: center; margin-left: 10px;">
                            Семья и дети
                        </p>
                    </div>
                    <div @click="$router.push({ name: 'Passports' })" style="cursor: pointer; margin: 15px; align-self: center; display: flex; align-items: center;">
                        <img style="align-self: center;" src="https://gu-st.ru/content/catalog/pas/7.svg" width="45px" alt="">
                        <p style="align-self: center; margin-left: 10px;">
                            Паспорта, регистрации, визы
                        </p>
                    </div>
                    <div @click="$router.push({ name: 'Transport' })" style="cursor: pointer; margin: 15px; align-self: center; display: flex; align-items: center;">
                        <img style="align-self: center;" src="https://gu-st.ru/content/catalog/pas/11.svg" width="45px" alt="">
                        <p style="align-self: center; margin-left: 10px;">
                            Транспорт и вождение
                        </p>
                    </div>
                    <div @click="$router.push({ name: 'Education' })" style="cursor: pointer; margin: 15px; align-self: center; display: flex; align-items: center;">
                        <img style="align-self: center;" src="https://gu-st.ru/content/catalog/pas/56.svg" width="45px" alt="">
                        <p style="align-self: center; margin-left: 10px;">
                            Образование
                        </p>
                    </div>
                </div>
                <div style="display: flex; width: 75%; margin: auto; justify-content: center; align-items: center; height: 100%;">
                    <div @click="$router.push({ name: 'Tax' })" style="cursor: pointer; margin: 15px; align-self: center; display: flex; align-items: center;">
                        <img style="align-self: center;" src="https://gu-st.ru/content/catalog/pas/16.svg" width="45px" alt="">
                        <p style="align-self: center; margin-left: 10px;">
                            Налоги и финансы
                        </p>
                    </div>
                    <div @click="$router.push({ name: 'Health' })" style="cursor: pointer; margin: 15px; align-self: center; display: flex; align-items: center;">
                        <img style="align-self: center;" src="https://gu-st.ru/content/catalog/pas/22.svg" width="45px" alt="">
                        <p style="align-self: center; margin-left: 10px;">
                            Моё здоровье
                        </p>
                    </div>
                    <div @click="$router.push({ name: 'Pension' })" style="cursor: pointer; margin: 15px; align-self: center; display: flex; align-items: center;">
                        <img style="align-self: center;" src="https://gu-st.ru/content/catalog/pas/26.svg" width="45px" alt="">
                        <p style="align-self: center; margin-left: 10px;">
                            Пенсия, пособия, льготы
                        </p>
                    </div>
                    <div @click="$router.push({ name: 'Licenses' })" style="cursor: pointer; margin: 15px; align-self: center; display: flex; align-items: center;">
                        <img style="align-self: center;" src="https://gu-st.ru/content/catalog/pas/29.svg" width="45px" alt="">
                        <p style="align-self: center; margin-left: 10px;">
                            Лицензии, справки, аккредитации
                        </p>
                    </div>
                </div>
                <div style="display: flex; width: 75%; margin: auto; justify-content: center; align-items: center; height: 100%;">
                    <div @click="$router.push({ name: 'Security' })" style="cursor: pointer; margin: 15px; align-self: center; display: flex; align-items: center;">
                        <img style="align-self: center;" src="https://gu-st.ru/content/catalog/pas/45.svg" width="45px" alt="">
                        <p style="align-self: center; margin-left: 10px;">
                            Безопасность и правопорядок
                        </p>
                    </div>
                    <div @click="$router.push({ name: 'Work' })" style="cursor: pointer; margin: 15px; align-self: center; display: flex; align-items: center;">
                        <img style="align-self: center;" src="https://gu-st.ru/content/catalog/pas/38.svg" width="45px" alt="">
                        <p style="align-self: center; margin-left: 10px;">
                            Работа и занятость
                        </p>
                    </div>
                    <div @click="$router.push({ name: 'Culture' })" style="cursor: pointer; margin: 15px; align-self: center; display: flex; align-items: center;">
                        <img style="align-self: center;" src="https://gu-st.ru/content/catalog/pas/41.svg" width="45px" alt="">
                        <p style="align-self: center; margin-left: 10px;">
                            Культура, досуг, спорт
                        </p>
                    </div>
                    <div @click="$router.push({ name: 'Business' })" style="cursor: pointer; margin: 15px; align-self: center; display: flex; align-items: center;">
                        <img style="align-self: center;" src="https://gu-st.ru/content/catalog/pas/34.svg" width="45px" alt="">
                        <p style="align-self: center; margin-left: 10px;">
                            Бизнес и предпринимательство, НКО
                        </p>
                    </div>
                </div>
                <div style="display: flex; width: 75%; margin: auto; justify-content: center; align-items: center; height: 100%;">
                    <div @click="$router.push({ name: 'Production' })" style="cursor: pointer; margin: 15px; align-self: center; display: flex; align-items: center;">
                        <img style="align-self: center;" src="https://gu-st.ru/content/catalog/pas/46.svg" width="45px" alt="">
                        <p style="align-self: center; margin-left: 10px;">
                            Производство и торговля
                        </p>
                    </div>
                    <div @click="$router.push({ name: 'Information' })" style="cursor: pointer; margin: 15px; align-self: center; display: flex; align-items: center;">
                        <img style="align-self: center;" src="https://gu-st.ru/content/catalog/pas/49.svg" width="45px" alt="">
                        <p style="align-self: center; margin-left: 10px;">
                            Информация, связь и реклама
                        </p>
                    </div>
                    <div @click="$router.push({ name: 'Ecology' })" style="cursor: pointer; margin: 15px; align-self: center; display: flex; align-items: center;">
                        <img style="align-self: center;" src="https://gu-st.ru/content/catalog/pas/55.svg" width="45px" alt="">
                        <p style="align-self: center; margin-left: 10px;">
                            Природопользование и экология
                        </p>
                    </div>
                    <div @click="$router.push({ name: '' })" style="margin: 15px; align-self: center; display: flex; flex-direction: column; align-items: center;">
                        <button class="w-100 btn btn-primary" style="align-self: center; margin-left: 10px;">
                            Весь каталог
                        </button>
                        <button class="w-100 btn btn-light" style="margin-top: 15px; align-self: center; margin-left: 10px; border: 1px solid rgb(235, 235, 235);">
                            Закрыть
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import * as jwt from 'jsonwebtoken'

export default {
    name: "Header",
    data(){
        return {
            servicesMenu: false,
            currentCitizen: '',
            citizenIsLogin: false,
            token: window.localStorage.getItem("portaltoken"),
            citizenMenu: false,
            coatToggler: false,
            forCitizenToggler: false,
            locationToggler: false,
            languageToggler: false,
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
            this.$router.push({ name: 'Home' })
        },
        hoverEffect(event, toggle){
            if(toggle){
                // event.target.style = `
                //     height: 100%; 
                //     cursor: pointer;
                //     display: flex;
                //     background-color: rgb(0, 0, 185);
                //     width: 125px;
                // `
                event.target.style.backgroundColor = `rgb(0, 0, 185)`
            } else {
                // event.target.style = `
                //     height: 100%; 
                //     cursor: pointer;
                //     display: flex;
                //     background-color: rgb(0, 0, 150);
                //     width: 125px;
                // `
                event.target.style.backgroundColor = `rgb(0, 0, 150)`
                    
            }
        },
        drawServicesMenu(toggle){
            console.log("рисую сервисное меню")
            this.servicesMenu = toggle
        },
        drawCitizenMenu(toggle){
            this.citizenMenu = toggle
        }
    }
}
</script>
<style scoped>
  .hoverable {
    color: rgb(255, 255, 255);
  }
  .hoverable:hover {
    color: rgb(255, 255, 255);
    background-color: "rgb(255, 215, 255)";
  }
</style>