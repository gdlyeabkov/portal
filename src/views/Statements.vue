<template>
    <div>
        <PersonalAreaHeader /> 
        <PersonalAreaBreadcrumbs :title="'Заявления'"/>        
        <div style="background-color: rgb(245, 245, 245);">
            <div style="position: relative; top: 75px; width: 85%; margin: auto; height: 590px;">
                <div style="display: flex; justify-content: space-between; width: 650px; ">
                    <p :style="`color: ${false ? 'rgb(0, 0, 255);' : 'rgb(0, 0, 0);'} text-decoration: ${true ? 'underline;' : 'none;'} font-size: 18px; font-weight: bolder; line-height: 15px;`">
                        Обзор
                    </p>
                    <p :style="`color: ${true ? 'rgb(0, 0, 255);' : 'rgb(0, 0, 0);'} text-decoration: ${false ? 'underline;' : 'none;'} font-size: 18px; font-weight: bolder; line-height: 15px;`">
                        Заявления
                    </p>
                    <p :style="`color: ${true ? 'rgb(0, 0, 255);' : 'rgb(0, 0, 0);'} text-decoration: ${false ? 'underline;' : 'none;'} font-size: 18px; font-weight: bolder; line-height: 15px;`">
                        Документы и данные
                    </p>
                    <p :style="`color: ${true ? 'rgb(0, 0, 255);' : 'rgb(0, 0, 0);'} text-decoration: ${false ? 'underline;' : 'none;'} font-size: 18px; font-weight: bolder; line-height: 15px;`">
                        Госпочта
                    </p>
                </div>
                <hr />
                <h3>
                Заявления 
                </h3>
                <div style="display: flex; margin-top: 35px;">
                    <div>
                        <p :style="`font-weight: bolder; color: ${false ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            ORDERS.ASIDE.ORDERS
                        </p>
                        <p :style="`font-weight: bolder; color: ${true ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            ORDERS.ASIDE.DRAFTS
                        </p>
                        <p :style="`font-weight: bolder; color: ${true ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            ORDERS.ASIDE.ARCHIVES
                        </p>
                        <p :style="`font-weight: bolder; color: ${true ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            ORDERS.ASIDE.SETTINGS
                        </p>
                    </div>
                    <div style="margin-left: 125px; width: 65%;">
                        <div style="display: flex;">
                            <div style="box-sizing: border-box; padding: 10px; display: flex; justify-content: space-between; align-items: center; background-color: rgb(240, 240, 240); height: 50px; width: 275px; border-radius: 10px;">
                                <span>
                                    Все
                                </span>
                                <span style="color: rgb(0, 0, 255); font-weight: bolder;" class="material-icons">
                                    expand_more
                                </span>
                            </div>
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
                            <span class="material-icons" style="align-self: flex-start; color: rgb(0, 125, 0);">
                                flag
                            </span>
                            <div style="display: flex; flex-direction: column;">
                                <p>
                                    Замена паспорта РФ в связи с достижением возраста 20 или 45 лет
                                </p>
                                <p style="color: rgb(125, 125, 125);">
                                    Закрыто
                                </p>
                            </div>
                            <span>
                                15.01.2021, 10:20
                            </span>
                        </div>
                        <hr/>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="align-self: flex-start; color: rgb(255, 175, 0);" class="material-icons">
                                schedule
                            </span>
                            <div style="display: flex; flex-direction: column;">
                                <p>
                                    Заявление о предоставление гражданину госсударственной услуги по содействию в поиске подходящей работы
                                </p>
                                <p style="color: rgb(125, 125, 125);">
                                    Назначено пособие
                                </p>
                            </div>
                            <span>
                                23.11.2020, 15:20
                            </span>
                        </div>
                        <hr/>
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