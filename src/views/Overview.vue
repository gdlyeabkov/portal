<template>
    <div>
        <PersonalAreaHeader /> 
        <PersonalAreaBreadcrumbs :title="'Обзор'"/>        
        <div style="background-color: rgb(245, 245, 245);">
            <div style="position: relative; top: 0px; width: 85%; margin: auto; height: 590px;">
                <div style="display: flex; justify-content: space-between; width: 650px; ">
                    <p :style="`color: ${false ? 'rgb(0, 0, 255);' : 'rgb(0, 0, 0);'} text-decoration: ${true ? 'underline;' : 'none;'} font-size: 18px; font-weight: bolder; line-height: 15px; cursor: pointer;`" @click="$router.push({ name: 'Overview' })">
                        Обзор
                    </p>
                    <p :style="`color: ${true ? 'rgb(0, 0, 255);' : 'rgb(0, 0, 0);'} text-decoration: ${false ? 'underline;' : 'none;'} font-size: 18px; font-weight: bolder; line-height: 15px; cursor: pointer;`" @click="$router.push({ name: 'Statements' })">
                        Заявления
                    </p>
                    <p :style="`color: ${true ? 'rgb(0, 0, 255);' : 'rgb(0, 0, 0);'} text-decoration: ${false ? 'underline;' : 'none;'} font-size: 18px; font-weight: bolder; line-height: 15px; cursor: pointer;`" @click="$router.push({ name: 'DocumentsAndData' })">
                        Документы и данные
                    </p>
                    <p :style="`color: ${true ? 'rgb(0, 0, 255);' : 'rgb(0, 0, 0);'} text-decoration: ${false ? 'underline;' : 'none;'} font-size: 18px; font-weight: bolder; line-height: 15px; cursor: pointer;`" @click="$router.push({ name: 'GovermentMail' })">
                        Госпочта
                    </p>
                </div>
                <hr />
                
                <div style="display: flex; align-items: center;  justify-content: space-between;">
                    <span @click="cursorOfAds >= 1 ? cursorOfAds -= 1 : cursorOfAds = cursorOfAds" style="display: flex; align-items: center; justify-content: center; border-radius: 100%; width: 45px; height: 45px; background-color: rgb(255, 255, 255); color: rgb(0, 0, 255);" class="material-icons arrow">
                        arrow_back
                    </span>
                    <div v-if="cursorOfAds === 0" style="width: 75%; display: flex; justify-content: space-between;">
                        <div>
                            <p style="font-weight: bolder; font-size: 24px;">
                                Скачайте приложение Госуслуг
                            </p>
                            <p>
                                Там есть сканер квитанций
                            </p>
                        </div>
                        <img src="https://gu-st.ru/content/lk/banner/mob_download.svg" style="width: 300px; height: 100%;" alt="">
                    </div>
                    <div v-else-if="cursorOfAds === 1" style="width: 75%; display: flex; justify-content: space-between;">
                        <div>
                            <p style="font-weight: bolder; font-size: 24px;">
                                Биометрия - это удобно
                            </p>
                            <p>
                                Услуги банков без походов в офис
                            </p>
                        </div>
                    <img src="https://gu-st.ru/content/lk/banner/biometric.svg" style="width: 300px; height: 100%;" alt="">
                    </div>
                    <div v-else-if="cursorOfAds === 2" style="width: 75%; display: flex; justify-content: space-between;">
                        <div>
                            <p style="font-weight: bolder; font-size: 24px;">
                                Добавьте загранпаспорт
                            </p>
                            <p>
                                Так проще заполнять заяления
                            </p>
                        </div>
                        <img src="https://gu-st.ru/content/lk/banner/no_fnspass.svg" style="width: 300px; height: 100%;" alt="">
                    </div>
                    <div v-else-if="cursorOfAds === 3" style="width: 75%; display: flex; justify-content: space-between;">
                        <div>
                            <p style="font-weight: bolder; font-size: 24px;">
                                Добавьте водительские права
                            </p>
                            <p>
                                Вовремя узнавайте о штрафах
                            </p>
                        </div>
                        <img src="https://gu-st.ru/content/lk/banner/no_vu.svg" style="width: 300px; height: 100%;" alt="">
                    </div>
                    <div v-else-if="cursorOfAds === 4" style="width: 75%; display: flex; justify-content: space-between;">
                        <div>
                            <p style="font-weight: bolder; font-size: 24px;">
                                Подтвердите электронную почту
                            </p>
                            <p>
                                Только на подтждённые адресса приходят уведомления
                            </p>
                        </div>
                        <img src="https://gu-st.ru/content/lk/banner/confirmed_email.svg" style="width: 300px; height: 100%;" alt="">
                    </div>
                    <div v-else-if="cursorOfAds === 5" style="width: 75%; display: flex; justify-content: space-between;">
                        <div>
                            <p style="font-weight: bolder; font-size: 24px;">
                                Добавьте место жительства
                            </p>
                            <p>
                                Так будет проще заполнять заявления
                            </p>
                        </div>
                        <img src="https://gu-st.ru/content/lk/banner/no_plv.svg" style="width: 300px; height: 100%;" alt="">
                    </div>
                    <span @click="cursorOfAds < 5 ? cursorOfAds += 1 : cursorOfAds" style="display: flex; align-items: center; justify-content: center; border-radius: 100%; width: 45px; height: 45px; background-color: rgb(255, 255, 255); color: rgb(0, 0, 255);" class="material-icons arrow">
                        arrow_forward
                    </span>
                </div>

                <div style="display: flex; margin-top: 35px;">
                    <div style="margin-left: 125px; width: 65%;">
                        <div style="display: flex;">
                            <h3>
                                Последние события 
                            </h3>
                            <div style="color: rgb(215, 215, 215); margin-left: 15px; box-sizing: border-box; padding: 10px; display: flex; justify-content: space-between; align-items: center; background-color: rgb(240, 240, 240); height: 50px; width: 275px; border-radius: 10px;">
                                <span >
                                    Поиск
                                </span>
                                <span class="material-icons" style="font-size: 36px;">
                                    search
                                </span>
                            </div>
                        </div>
                        
                        <hr/>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="color: rgb(0, 0, 255);" class="material-icons">
                                mail_outline
                            </span>
                            <div style="display: flex; flex-direction: column;">
                                <p style="font-weight: bolder;">
                                    Получите цифровую профессию за полцены
                                </p>
                                <p style="color: rgb(125, 125, 125);">
                                    Портал Госуслуг
                                </p>
                            </div>
                            <span>
                                Вчера 20:15
                            </span>
                        </div>
                        <hr/>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="color: rgb(0, 0, 255);" class="material-icons">
                                mail_outline
                            </span>
                            <div style="display: flex; flex-direction: column;">
                                <p style="font-weight: bolder;">
                                    Получите цифровую профессию за полцены
                                </p>
                                <p style="color: rgb(125, 125, 125);">
                                    Портал Госуслуг
                                </p>
                            </div>
                            <span>
                                Вчера 20:15
                            </span>
                        </div>
                        <hr/>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="color: rgb(0, 0, 255);" class="material-icons">
                                mail_outline
                            </span>
                            <div style="display: flex; flex-direction: column;">
                                <p style="font-weight: bolder;">
                                    Получите цифровую профессию за полцены
                                </p>
                                <p style="color: rgb(125, 125, 125);">
                                    Портал Госуслуг
                                </p>
                            </div>
                            <span>
                                Вчера 20:15
                            </span>
                        </div>
                        <hr/>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="color: rgb(0, 0, 255);" class="material-icons">
                                mail_outline
                            </span>
                            <div style="display: flex; flex-direction: column;">
                                <p style="font-weight: bolder;">
                                    Получите цифровую профессию за полцены
                                </p>
                                <p style="color: rgb(125, 125, 125);">
                                    Портал Госуслуг
                                </p>
                            </div>
                            <span>
                                Вчера 20:15
                            </span>
                        </div>
                        <hr/>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="color: rgb(0, 0, 255);" class="material-icons">
                                mail_outline
                            </span>
                            <div style="display: flex; flex-direction: column;">
                                <p style="font-weight: bolder;">
                                    Получите цифровую профессию за полцены
                                </p>
                                <p style="color: rgb(125, 125, 125);">
                                    Портал Госуслуг
                                </p>
                            </div>
                            <span>
                                Вчера 20:15
                            </span>
                        </div>
                        <hr/>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="color: rgb(0, 0, 255);" class="material-icons">
                                mail_outline
                            </span>
                            <div style="display: flex; flex-direction: column;">
                                <p style="font-weight: bolder;">
                                    Получите цифровую профессию за полцены
                                </p>
                                <p style="color: rgb(125, 125, 125);">
                                    Портал Госуслуг
                                </p>
                            </div>
                            <span>
                                Вчера 20:15
                            </span>
                        </div>
                        <hr/>
                        <p style="color: rgb(0, 0, 255);">
                            Все события
                        </p>
                    </div>
                </div>
                <div style="font-weight: bolder; align-items: center; border-radius: 10px 10px 0px 0px; display: flex; justify-content: space-around; color: rgb(255, 255, 255); float: right; background-color: rgb(0, 0, 255); height: 50px; width: 275px;">
                    <span style="align-self: center;">
                        Задать вопрос
                    </span>
                    <span class="material-icons">
                        close
                    </span>
                </div>
            </div>
        </div>
        <PersonalAreaFooter />  
    </div>
</template>

<script>
import PersonalAreaHeader from '@/components/PersonalAreaHeader.vue'
import PersonalAreaBreadcrumbs from '@/components/PersonalAreaBreadcrumbs.vue'
import PersonalAreaFooter from '@/components/PersonalAreaFooter.vue'

export default {
    name: "Statements",
    data(){
        return {
            phone: '',
            password: '',
            cursorOfAds: 0
        }
    },
    methods: {
        login(){

        }
    },
    components: {
        PersonalAreaHeader,
        PersonalAreaBreadcrumbs,
        PersonalAreaFooter
    }
}
</script>

<style scoped>
    .arrow:hover {
        box-shadow: 0 0 15 rgb(75, 75, 75);
    }
</style>