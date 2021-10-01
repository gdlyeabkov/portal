<template>
  <div>
        <Header />
        <Breadcrumbs :color="'150, 0, 150'" :title="'Налоги и финансы'" />
        <div>

        </div>
        <div style="margin: auto; width: 85%;">
            <div>
                <div style="display: flex; justify-content: center;float: left; width: 75%;">
                    <div style="">
                        <div>
                            <div>
                                <p style="font-size: 36px;">
                                    Налоги и финансы
                                </p>
                                <button class="btn btn-light" style="border: 1px solid rgb(225, 225, 225);">
                                    Вернуться в каталог
                                </button>
                                <p style="font-size: 36px;">
                                    Популярные услуги
                                </p>
                                
                                <div style="display: flex;">
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/catalog/pas/nalog.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Налоговая задолженность
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Достаточно вашего ИНН, чтобы проверить задолженность по налогам
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/catalog/pas/17.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Налоговый учет физических лиц
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Для получения ИНН и внесения данных в ЕГРН достаточно паспорта
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div style="display: flex;">
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/catalog/pas/10054.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Прием налоговых деклараций
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Подавайте налоговую декларацию в электронном виде — в удобное время и без очередей
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/catalog/pas/19.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Узнай свой ИНН
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Найдите свой ИНН по паспортным данным
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div style="display: flex;">
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://static.gosuslugi.ru/content/catalog/catalog/passport/343006028.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Сведения о бюро кредитных историй
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Узнайте список БКИ онлайн
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/catalog/pas/20.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Предоставление сведений из ЕГРЮЛ и ЕГРИП
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Сведения о юридическом лице/индивидуальном предпринимателе в форме документа
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div style="display: flex;">
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/catalog/pas/34.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Регистрация юридических лиц и предпринимателей
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Подготовьте документы и обратитесь в налоговую инспекцию
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p style="font-size: 36px;">
                                    Все услуги
                                </p>
                                <div @click="toggleToggler('declaration')">
                                    <div style="display: flex;">
                                        <p style="font-size: 24px;">
                                            Прием налоговых деклараций
                                        </p>
                                        <span v-if="!declarationToggler" class="material-icons">
                                            expand_more
                                        </span>
                                        <span v-else class="material-icons">
                                            expand_less
                                        </span>
                                    </div>
                                    <div v-if="declarationToggler">
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Признание иностранных документов об образовании
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                                <div @click="toggleToggler('reg')">
                                    <div style="display: flex;">
                                        <p style="font-size: 24px;">
                                            Отраслевые справки и реестры
                                        </p>
                                        <span v-if="!regToggler" class="material-icons">
                                            expand_more
                                        </span>
                                        <span v-else class="material-icons">
                                            expand_less
                                        </span>
                                    </div>
                                    <div v-if="regToggler">
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Сведения из реестра организаций аудиторов
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Выдача по требованию резидентов ОЭЗ или по запросу заинтересованных лиц выписки из реестра резидентов ОЭЗ
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Предоставление данных годовой бухгалтерской (финансовой) отчетности юридических лиц, а также аудиторских заключений о ней за отчетные периоды 2014 – 2018 годов
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Налоговый учет физических лиц
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Узнай свой ИНН
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Предоставление сведений из ЕГРЮЛ и ЕГРИП
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Сведения о бюро кредитных историй
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Сведения об участнике финансового рынка
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Информация о наличии сведений в базе данных деловой репутации
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                                <div @click="toggleToggler('antiMonopoly')">
                                    <div style="display: flex;">
                                        <p style="font-size: 24px;">
                                            Антимонопольный контроль 
                                        </p>
                                        <span v-if="!antiMonopolyToggler" class="material-icons">
                                            expand_more
                                        </span>
                                        <span v-else class="material-icons">
                                            expand_less
                                        </span>
                                    </div>
                                    <div v-if="antiMonopolyToggler">
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Согласование приобретения акций (долей) в уставном капитале коммерческих организаций, получения в собственность или пользование основных производственных средств или нематериальных активов, приобретения прав, позволяющих определять условия ведения хозяйствующим субъектом его предпринимательской деятельности, в случаях, предусмотренных законодательством Российской Федерации
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Рассмотрение запросов о необходимости согласования сделок в соответствии с частью 6 статьи 8 Федерального закона от 29.04.2008 № 57-ФЗ
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                                <div @click="toggleToggler('externalEconom')">
                                    <div style="display: flex;">
                                        <p style="font-size: 24px;">
                                            Внешнеэкономическая деятельность
                                        </p>
                                        <span v-if="!externalEconomToggler" class="material-icons">
                                            expand_more
                                        </span>
                                        <span v-else class="material-icons">
                                            expand_less
                                        </span>
                                    </div>
                                    <div v-if="externalEconomToggler">
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Выдача идентификационных заключений
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Информирование российских участников внешнеэкономической деятельности о целях, процедурах и правилах осуществления экспортного контроля
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                                <p style="font-size: 36px;">
                                    Частые вопросы
                                </p>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Что такое налоговые вычеты по НДФЛ?
                                    </p>
                                    <p>
                                        Если у вас есть право на вычет, можно вернуть НДФЛ из бюджета
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Когда нужно подавать налоговую декларацию?
                                    </p>
                                    <p>
                                        Если у вас есть доходы, с которых вы самостоятельно должны заплатить НДФЛ, нужно подать декларацию до 30 апреля следующего года.
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Какие налоги платят физические лица?
                                    </p>
                                    <p>
                                        Физлица платят имущественные налоги и НДФЛ. Некоторые виды налогов начисляет инспекция, а что-то нужно считать самостоятельно.
                                        Подробнее
                                    </p>
                                </div>
                                <hr />
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Breadcrumbs from "@/components/Breadcrumbs.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: 'Family',
    data(){
        return {
            declarationToggler: false,
            regToggler: false,
            antiMonopolyToggler: false,
            externalEconomToggler: false
        }
    },
    methods: {
        toggleToggler(toggler){
            if(toggler.includes('declaration')){
                this.declarationToggler = !this.declarationToggler
            } else if(toggler.includes('reg')){
                this.regToggler = !this.regToggler
            } else if(toggler.includes('antiMonopoly')){
                this.antiMonopolyToggler = !this.antiMonopolyToggler
            } else if(toggler.includes('externalEconom')){
                this.externalEconomToggler = !this.externalEconomToggler
            }

        }
    },
    components: {
        Header,
        Breadcrumbs,
        Footer
    }
}
</script>