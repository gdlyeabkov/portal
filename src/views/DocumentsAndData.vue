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
                    Документы и данные
                </h3>
                <div style="display: flex; margin-top: 35px;">
                    <div>
                        <p :style="`font-weight: bolder; color: ${true ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            Личные документы
                        </p>
                        <p :style="`font-weight: bolder; color: ${false ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            Семья и дети
                        </p>
                        <p :style="`font-weight: bolder; color: ${false ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            Транспорт
                        </p>
                        <p :style="`font-weight: bolder; color: ${false ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            Здоровье
                        </p>
                        <p :style="`font-weight: bolder; color: ${false ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            Работа и пенсия
                        </p>
                        <p :style="`font-weight: bolder; color: ${false ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            Образование
                        </p>
                        <p :style="`font-weight: bolder; color: ${false ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            Льготы и выплаты
                        </p>
                        <p :style="`font-weight: bolder; color: ${false ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            Доходы и налоги
                        </p>
                        <p :style="`font-weight: bolder; color: ${false ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            Правопорядок
                        </p>
                    </div>
                    <div style="margin-left: 125px; width: 65%;">
                        <div style="">
                            
                            <div style="display: flex; justify-content: space-around">
                                <div style="width: 350px; height: 375px; background-color: rgb(255, 255, 255);">
                                    <div style="display: flex; justify-content: space-around;">
                                        <h5>
                                            Пасспорт РФ
                                        </h5>
                                        <div>
                                            <span class="material-icons-outlined">
                                                camera_alt
                                            </span>
                                            <span class="material-icons-outlined">
                                                chevron_right
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                    <h5>
                                        4620916477
                                    </h5>
                                    <p style="color: rgb(175, 175, 175);">
                                        Выдан
                                    </p>
                                    <p>
                                        ГУ МВД России по Московской области
                                    </p>
                                    <p style="color: rgb(175, 175, 175);">
                                        Код подразделения
                                    </p>
                                    <p>
                                        500-163
                                    </p>
                                    <p style="color: rgb(175, 175, 175);">
                                        Дата выдачи
                                    </p>
                                    <p>
                                        15.01.2021
                                    </p>
                                </div>
                                <div style="display: flex; flex-direction: column;">
                                    <div style="box-sizing: border-box; padding: 15px; width: 375px; height: 125px; background-color: rgb(255, 255, 255); border-radius: 10px;">
                                        <h5>
                                            СНИЛС
                                        </h5>
                                        <hr />
                                        <h5>
                                            158-717-026 89
                                        </h5>
                                    </div>
                                    <div style="margin-top: 15px; box-sizing: border-box; padding: 15px; width: 375px; height: 225px; background-color: rgb(255, 255, 255); border-radius: 10px;">
                                        <h5>
                                            ИНН
                                        </h5>
                                        <div style="margin-top: 15px; box-sizing: border-box; padding: 15px; background-color: rgb(255, 185, 200); width: 100%; height: 75px;">
                                            <h6>
                                                Не найден в ФНС 
                                            </h6>
                                            <p>
                                                Проверьте данные и отправьте ещё раз
                                            </p>
                                        </div>
                                        <h5 style="margin-top: 15px;">
                                            212-717-026 89
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <h3>
                                Адреса
                            </h3>
                            <p>
                                Редактировать
                            </p>
                        </div>
                        <div style="box-sizing: border-box; padding: 5px 15px; width: 775px; height: 75px; background-color: rgb(255, 255, 255); border-radius: 10px;">
                            <p style="color: rgb(215, 215, 215);">
                                Адрес постоянной регистрации
                            </p>
                            <p>
                                141104, обл Московская, г Щёлково, ул Беляева, д. 49, кв. 73
                            </p>
                            <p style="color: rgb(0, 0, 255);">
                                Запросить
                            </p>
                        </div>
                        
                        <h3>
                            Свидетельства
                        </h3>
                        <div style="display: flex; align-items: center; justify-content: space-around; width: 775px; height: 75px; background-color: rgb(255, 255, 255); border-radius: 10px; border: 1px solid rgb(225, 225, 225);">
                            <p style="width: 75%;">
                                Запросите сведения о рождении и перемене имени на вас и ваших детей и данные об отцовстве
                                Также придут сведения о браках и разводах
                            </p>
                            <p style="color: rgb(0, 0, 255);">
                                Запросить
                            </p>
                        </div>
                        <p style="color: rgb(0, 0, 255);">
                            Добавить вручную
                        </p>
                        <h3>
                            Дополнительные документы
                        </h3>
                        <p style="color: rgb(175, 175, 175);">
                            Добавьте документы, чтобы они всегда были у вас под рукой
                        </p>
                        <div style="display: flex; justify-content: space-around; width: 100%;">
                            <div style="background-color: rgb(255, 255, 255); width: 325px; height: 100px; border: 1px solid rgb(175, 175, 175); border-radius: 10px; box-sizing: border-box; padding: 10px;">
                                <h5>
                                    Загранпаспорт
                                </h5>
                                <div style="display: flex; color: rgb(0, 0, 255);">
                                    <p>
                                        Добавить
                                    </p>
                                    <p style="margin-left: 15px;">
                                        Получить загранпаспорт
                                    </p>
                                </div>
                            </div>
                            <div style="background-color: rgb(255, 255, 255); width: 325px; height: 100px; border: 1px solid rgb(175, 175, 175); border-radius: 10px; box-sizing: border-box; padding: 10px;">
                                <h5>
                                    Военный билет
                                </h5>
                                <p  style="display: flex; color: rgb(0, 0, 255);">
                                    Добавить
                                </p>
                            </div>
                        </div>
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