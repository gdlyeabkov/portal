<template>
    <div>
        <PersonalAreaHeader /> 
        <PersonalAreaBreadcrumbs :title="'Госпочта'"/>        
        <div style="background-color: rgb(245, 245, 245);">
            <div style="position: relative; top: 0px; width: 85%; margin: auto; height: 590px;">
                <div style="display: flex; justify-content: space-between; width: 650px; ">
                    <p :style="`color: ${true ? 'rgb(0, 0, 255);' : 'rgb(0, 0, 0);'} text-decoration: ${true ? 'underline;' : 'none;'} font-size: 18px; font-weight: bolder; line-height: 15px; cursor: pointer;`" @click="$router.push({ name: 'Overview' })">
                        Обзор
                    </p>
                    <p :style="`color: ${true ? 'rgb(0, 0, 255);' : 'rgb(0, 0, 0);'} text-decoration: ${false ? 'underline;' : 'none;'} font-size: 18px; font-weight: bolder; line-height: 15px; cursor: pointer;`" @click="$router.push({ name: 'Statements' })">
                        Заявления
                    </p>
                    <p :style="`color: ${true ? 'rgb(0, 0, 255);' : 'rgb(0, 0, 0);'} text-decoration: ${false ? 'underline;' : 'none;'} font-size: 18px; font-weight: bolder; line-height: 15px; cursor: pointer;`" @click="$router.push({ name: 'DocumentsAndData' })">
                        Документы и данные
                    </p>
                    <p :style="`color: ${false ? 'rgb(0, 0, 255);' : 'rgb(0, 0, 0);'} text-decoration: ${false ? 'underline;' : 'none;'} font-size: 18px; font-weight: bolder; cursor: pointer;`" @click="$router.push({ name: 'GovermentMail' })">
                        Госпочта
                    </p>
                </div>
                <hr />
                <h3>
                    Мои сообщения
                </h3>
                <div style="display: flex; margin-top: 35px;">
                    <div>
                        <p :style="`font-weight: bolder; color: ${true ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            Входящие
                        </p>
                        <p :style="`font-weight: bolder; color: ${false ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            Исходящие
                        </p>
                        <p :style="`font-weight: bolder; color: ${false ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            Архив сообщений
                        </p>
                        <hr />
                        <p :style="`font-weight: bolder; color: ${false ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            Настройки
                        </p>
                    </div>
                    <div style="margin-left: 125px; width: 65%;">
                        
                        <div style="align-items: center; display: flex; flex-direction: row; justify-content: space-between;">
                            <input type="checkbox">
                            <div>
                                <p style="color: rgb(0, 0, 255); text-decoration: underline; text-decoration-style: dotted;">
                                    Сделать непрочитанным
                                </p>
                            </div>
                            <div>
                                <div style="color: rgb(200, 200, 200); box-sizing: border-box; padding: 15px; height: 45px; justify-content: space-between; align-items: center; width: 275px; background-color: rgb(235, 235, 235); border-radius: 10px; display: flex;">
                                    <span>
                                        Поиск
                                    </span>
                                    <span class="material-icons-outlined">
                                        search
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div style="align-items: center; display: flex; flex-direction: row; justify-content: space-between;">
                            <input type="checkbox">
                            <div>
                                <h5>
                                    Получите цифровую профессию за полцены
                                </h5>
                                <p style="color: rgb(175, 175, 175);">
                                   Портал Госуслуг 
                                </p>
                            </div>
                            <div>
                                <p>
                                    Вчера
                                </p>
                                <p>
                                    20:15
                                </p>
                            </div>
                        </div>
                        <hr />

                        <div style="align-items: center; display: flex; flex-direction: row; justify-content: space-between;">
                            <input type="checkbox">
                            <div>
                                <h5>
                                    Получите цифровую профессию за полцены
                                </h5>
                                <p style="color: rgb(175, 175, 175);">
                                   Портал Госуслуг 
                                </p>
                            </div>
                            <div>
                                <p>
                                    Вчера
                                </p>
                                <p>
                                    20:15
                                </p>
                            </div>
                        </div>
                        <hr />

                        <div style="align-items: center; display: flex; flex-direction: row; justify-content: space-between;">
                            <input type="checkbox">
                            <div>
                                <h5>
                                    Получите цифровую профессию за полцены
                                </h5>
                                <p style="color: rgb(175, 175, 175);">
                                   Портал Госуслуг 
                                </p>
                            </div>
                            <div>
                                <p>
                                    Вчера
                                </p>
                                <p>
                                    20:15
                                </p>
                            </div>
                        </div>
                        <hr />

                        <div style="align-items: center; display: flex; flex-direction: row; justify-content: space-between;">
                            <input type="checkbox">
                            <div>
                                <h5>
                                    Получите цифровую профессию за полцены
                                </h5>
                                <p style="color: rgb(175, 175, 175);">
                                   Портал Госуслуг 
                                </p>
                            </div>
                            <div>
                                <p>
                                    Вчера
                                </p>
                                <p>
                                    20:15
                                </p>
                            </div>
                        </div>
                        <hr />

                        <div style="align-items: center; display: flex; flex-direction: row; justify-content: space-between;">
                            <input type="checkbox">
                            <div>
                                <h5>
                                    Получите цифровую профессию за полцены
                                </h5>
                                <p style="color: rgb(175, 175, 175);">
                                   Портал Госуслуг 
                                </p>
                            </div>
                            <div>
                                <p>
                                    Вчера
                                </p>
                                <p>
                                    20:15
                                </p>
                            </div>
                        </div>
                        <hr />

                        <div style="align-items: center; display: flex; flex-direction: row; justify-content: space-between;">
                            <input type="checkbox">
                            <div>
                                <h5>
                                    Получите цифровую профессию за полцены
                                </h5>
                                <p style="color: rgb(175, 175, 175);">
                                   Портал Госуслуг 
                                </p>
                            </div>
                            <div>
                                <p>
                                    Вчера
                                </p>
                                <p>
                                    20:15
                                </p>
                            </div>
                        </div>
                        <hr />

                        <div style="align-items: center; display: flex; flex-direction: row; justify-content: space-between;">
                            <input type="checkbox">
                            <div>
                                <h5>
                                    Получите цифровую профессию за полцены
                                </h5>
                                <p style="color: rgb(175, 175, 175);">
                                   Портал Госуслуг 
                                </p>
                            </div>
                            <div>
                                <p>
                                    Вчера
                                </p>
                                <p>
                                    20:15
                                </p>
                            </div>
                        </div>
                        <hr />

                        <div style="align-items: center; display: flex; flex-direction: row; justify-content: space-between;">
                            <input type="checkbox">
                            <div>
                                <h5>
                                    Получите цифровую профессию за полцены
                                </h5>
                                <p style="color: rgb(175, 175, 175);">
                                   Портал Госуслуг 
                                </p>
                            </div>
                            <div>
                                <p>
                                    Вчера
                                </p>
                                <p>
                                    20:15
                                </p>
                            </div>
                        </div>
                        <hr />

                        <div style="align-items: center; display: flex; flex-direction: row; justify-content: space-between;">
                            <input type="checkbox">
                            <div>
                                <h5>
                                    Получите цифровую профессию за полцены
                                </h5>
                                <p style="color: rgb(175, 175, 175);">
                                   Портал Госуслуг 
                                </p>
                            </div>
                            <div>
                                <p>
                                    Вчера
                                </p>
                                <p>
                                    20:15
                                </p>
                            </div>
                        </div>
                        <hr />

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