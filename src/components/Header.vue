<template>
    <div>
        <div style="margin: auto; background-color: rgb(0, 0, 155); width: 100%; height: 50px;">
            <div style="margin: auto; display: flex; flex-direction: row; justify-content: space-between; align-items: center; height: 100%;">
                <div style="margin: auto; flex-direction: row; width: 85%; align-items: center; align-self: center; justify-content: flex-end;">
                    <div style="float: left; background-color: rgb(215, 215, 215);  background-image: url('https://svgsilh.com/svg/1297477-9e9e9e.svg'); width: 75px; background-size: 100% 100%;">
                        &nbsp;
                    </div>
                    <span style="float: left; color: rgb(200, 200, 200);" class="material-icons">
                        keyboard_arrow_down
                    </span>
                    <div @mouseenter="" class="hoverable" style="cursor: pointer; float: left; ">
                        Для граждан
                    </div>
                    <span style="float: left; color: rgb(200, 200, 200);" class="material-icons">
                        keyboard_arrow_down
                    </span>
                </div>
                <div style="width: 300px;">
                    <span class="material-icons" style="font-size: 18px; float: left; color: rgb(200, 200, 200);">
                        location_on
                    </span>
                    <div class="hoverable" style="cursor: pointer; float: left; ">
                        Электросталь г.
                    </div>
                    <img style="margin: 0px 15px; float: left;" width="25px" src="../assets/flag.png" alt="A">
                    <div class="hoverable" style="float: left; ">
                        RUS
                    </div>
                    <span style="float: left; color: rgb(200, 200, 200);" class="material-icons">
                        keyboard_arrow_down
                    </span>
                </div>
            </div>
        </div>
            
        <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-around; width: 100%; height: 75px; background-color: rgb(255, );">
            <div style="background-image: url('https://gu-st.ru/st/img/logo_nobeta.0a1f5dfe.svg'); height: 100%; width: 175px; background-size: 100% 100%;">
            </div>
            <div style="width: 250px; display: flex; flex-direction: row;  justify-content: space-between;">
                <p @mouseenter="drawServicesMenu(true)" style="color: rgb(0, 0, 255);" @click="$router.push({ name: 'Services' })">Услуги</p>
                <p @mouseenter="drawServicesMenu(false)" style="color: rgb(0, 0, 255);" @click="$router.push({ name: 'Services' })">Оплата</p>
                <p @mouseenter="drawServicesMenu(false)" style="color: rgb(0, 0, 255);" @click="$router.push({ name: 'Services' })">Поддержка</p>
                <span style="color: rgb(0, 0, 255);" @click="$router.push({ name: 'Services' })" class="material-icons">
                search
                </span>
            </div>
            <p style="color: rgb(0, 0, 255);" @click="$router.push({ name: 'PersonalArea' })">Личный кабинет</p>
        </div>
        
        <div v-if="servicesMenu" style="margin: auto; position: absolute; top: 125px; left: 0px; width: 100%; height: 445px; background-color: rgb(245, 245, 245);">
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
export default {
    name: "Header",
    data(){
        return {
            servicesMenu: false
        }
    },
    methods: {
        drawServicesMenu(toggle){
            console.log("рисую сервисное меню")
            this.servicesMenu = toggle
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