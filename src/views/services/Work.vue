<template>
  <div>
        <Header />
        <Breadcrumbs :color="'0, 185, 0'" :title="'Работа и занятость'" />
        <div style="margin: auto; width: 85%;">
            <div style="width: 100%;">
                <p style="font-size: 36px;">
                    Работа и занятость
                </p>
                <button class="btn btn-light" style="border: 1px solid rgb(225, 225, 225);">
                    Вернуться в каталог
                </button>
                <p style="font-size: 36px;">
                    Популярные услуги
                </p>
                <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                    <img src="https://gu-st.ru/content/catalog/pas/nowork.svg" width="75px" alt="">
                    <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                        <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                            Получение пособия по безработице и постановка на учет в центре занятости
                        </p>
                        <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                            <p style="">
                                Подайте заявление онлайн
                            </p>
                            <span style="" class="material-icons">
                                chevron_right
                            </span>
                        </div>
                    </div>
                </div>
                <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                    <img src="https://gu-st.ru/content/catalog/pas/38.svg" width="75px" alt="">
                    <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                        <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                            Консультация по трудовому праву
                        </p>
                        <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                            <p style="">
                                Задайте вопрос по трудовому законодательству и получите ответ
                            </p>
                            <span style="" class="material-icons">
                                chevron_right
                            </span>
                        </div>
                    </div>
                </div>
                <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                    <img src="https://gu-st.ru/content/catalog/pas/39.svg" width="75px" alt="">
                    <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                        <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                            Медицинская, социальная и профессиональная реабилитация
                        </p>
                        <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                            <p style="">
                                При несчастных случаях на производстве и профессиональных заболеваниях
                            </p>
                            <span style="" class="material-icons">
                                chevron_right
                            </span>
                        </div>
                    </div>
                </div>
                <br style="clear: both;"/>
                <hr />
                <p style="font-size: 36px;">
                    Все услуги
                </p>
                <div @click="toggleToggler('laborLaw')">
                    <div style="display: flex;">
                        <p style="font-size: 24px;">
                            Трудовое право
                        </p>
                        <span v-if="!laborLawToggler" class="material-icons">
                            expand_more
                        </span>
                        <span v-else class="material-icons">
                            expand_less
                        </span>
                    </div>
                    <div v-if="laborLawToggler">
                        <div style="display: flex;">
                            <span class="material-icons">
                                navigate_next
                            </span>
                            <p>
                                Консультация по трудовому праву
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
                                Выписка из электронной трудовой книжки
                            </p>
                            <span class="material-icons">
                                navigate_next
                            </span>
                        </div>
                    </div>
                    <hr />
                </div>

                <div @click="toggleToggler('license')">
                    <div style="display: flex;">
                        <p style="font-size: 24px;">
                            Лицензирование 
                        </p>
                        <span v-if="!licenseToggler" class="material-icons">
                            expand_more
                        </span>
                        <span v-else class="material-icons">
                            expand_less
                        </span>
                    </div>
                    <div v-if="licenseToggler">
                        <div style="display: flex;">
                            <span class="material-icons">
                                navigate_next
                            </span>
                            <p>
                                Аттестация, переаттестация физических лиц на право подготовки заключений экспертизы проектной документации
                            </p>
                            <span class="material-icons">
                                navigate_next
                            </span>
                        </div>

                        <p style="font-weight: bolder;">
                            Антикоррупционная экспертиза
                        </p>
                        <div style="display: flex;">
                            <span class="material-icons">
                                navigate_next
                            </span>
                            <p>
                                Аккредитация экспертов по проведению независимой антикоррупционной экспертизы нормативных правовых актов
                            </p>
                            <span class="material-icons">
                                navigate_next
                            </span>
                        </div>

                        <p style="font-weight: bolder;">
                            Атомная отрасль
                        </p>
                        <div style="display: flex;">
                            <span class="material-icons">
                                navigate_next
                            </span>
                            <p>
                                Выдача разрешений на право ведения работ в области использования атомной энергии работникам объектов использования атомной энергии
                            </p>
                            <span class="material-icons">
                                navigate_next
                            </span>
                        </div>

                        <p style="font-weight: bolder;">
                            Медицина
                        </p>
                        <div style="display: flex;">
                            <span class="material-icons">
                                navigate_next
                            </span>
                            <p>
                                Признание зарубежного медицинского образования
                            </p>
                            <span class="material-icons">
                                navigate_next
                            </span>
                        </div>

                        <p style="font-weight: bolder;">
                            Нотариальная и адвокатская деятельность
                        </p>
                        <div style="display: flex;">
                            <span class="material-icons">
                                navigate_next
                            </span>
                            <p>
                                Ведение реестра адвокатов иностранных государств
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
                                Выдача выписки из реестра нотариусов и лиц, сдавших квалификационный экзамен
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
                                Аттестация и регистрация патентных поверенных
                            </p>
                            <span class="material-icons">
                                navigate_next
                            </span>
                        </div>
                        <p style="font-weight: bolder;">
                            Подтверждение квалификации
                        </p>
                        <div style="display: flex;">
                            <span class="material-icons">
                                navigate_next
                            </span>
                            <p>
                                Аттестация на право выполнения работ по специальной оценке условий труда
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
                                Признание иностранных документов об образовании
                            </p>
                            <span class="material-icons">
                                navigate_next
                            </span>
                        </div>
                        <p style="font-weight: bolder;">
                            Частная охранная деятельность
                        </p>
                        <div style="display: flex;">
                            <span class="material-icons">
                                navigate_next
                            </span>
                            <p>
                                Выдача удостоверения частного охранника
                            </p>
                            <span class="material-icons">
                                navigate_next
                            </span>
                        </div>
                    </div>
                    <hr />
                </div>

                <div @click="toggleToggler('pay')">
                    <div style="display: flex;">
                        <p style="font-size: 24px;">
                            Страховые выплаты и пособия 
                        </p>
                        <span v-if="!payToggler" class="material-icons">
                            expand_more
                        </span>
                        <span v-else class="material-icons">
                            expand_less
                        </span>
                    </div>
                    <div v-if="payToggler">
                        <p style="font-weight: bolder;">
                            Несчастный случай на производстве
                        </p>
                        <div style="display: flex;">
                            <span class="material-icons">
                                navigate_next
                            </span>
                            <p>
                                Медицинская, социальная и профессиональная реабилитация
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
                                Назначение обеспечения по обязательному социальному страхованию от несчастных случаев на производстве и профессиональных заболеваний
                            </p>
                            <span class="material-icons">
                                navigate_next
                            </span>
                        </div>
                        <p style="font-weight: bolder;">
                            Прекращение деятельности работодателя
                        </p>
                        <div style="display: flex;">
                            <span class="material-icons">
                                navigate_next
                            </span>
                            <p>
                                Пособие по временной нетрудоспособности
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
                                Ежемесячное пособие по уходу за ребенком
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
                                Пособие по беременности и родам
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
                        Какими документами и в какие сроки работодатель обязан оформить трудовые отношения с работником?
                    </p>
                    <p>
                        Трудовые отношения между работником и работодателем должны быть оформлены трудовым договором в письменной форме.
                        Подробнее
                    </p>
                </div>
                <div style="width: 475px;">
                    <p style="font-size: 24px; font-weight: bolder;">
                        Как работает квотирование рабочих мест для инвалидов
                    </p>
                    <p>
                        Работодатели обязаны создавать рабочие места для людей с инвалидностью. Квота устанавливается законодательством субъекта РФ

                        Минимальный размер квоты зависит от величины штата:

                        • если сотрудников больше 100 человек, квота может быть установлена в пределах 2—4% среднего числа работников
                        • если сотрудников от 35 до 100 человек, квота — до 3%

                        При расчёте квоты в среднее число работников не включаются сотрудники, занятые вредным или опасным трудом

                        Квоту могут не соблюдать:

                        • общественные объединения инвалидов
                        • образованные ими организации
                        • общества с уставным капиталом, образованным на вклад общественного объединения инвалидов

                        Вакансии для инвалидов можно найти на портале «Работа в России»
                    </p>
                </div>
                <div style="width: 475px;">
                    <p style="font-size: 24px; font-weight: bolder;">
                        Можно ли на время испытательного срока установить меньшую зарплату, чем предусмотрено в штатном расписании по соответствующей должности?
                    </p>
                    <p>
                        Работодатель не имеет права на время испытательного срока установить меньшую зарплату, чем предусмотрено в штатном расписании по соответствующей должности, так как на работников в период испытательного срока распространяются все положения трудового законодательства и документов работодателя (в том числе в части оплаты труда), как и на работников, работающих после испытательного срока.
                    </p>
                </div>
                <hr />
                
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
    name: 'Work',
    data(){
        return {
            laborLawToggler: false,
            licenseToggler: false,
            payToggler: false,
        }
    },
    methods: {
        toggleToggler(toggler){
            if(toggler.includes('laborLaw')){
                this.laborLawToggler = !this.laborLawToggler
            } else if(toggler.includes('license')){
                this.licenseToggler = !this.licenseToggler
            } else if(toggler.includes('pay')){
                this.payToggler = !this.payToggler
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