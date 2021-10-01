<template>
  <div>
        <Header />
        <Breadcrumbs :color="'0, 200, 255'" :title="'Семья и дети'" />
        <div>

        </div>
        <div style="margin: auto; width: 85%;">
            <div>
                <div style="display: flex; justify-content: center;float: left; width: 75%;">
                    <div style="">
                        <div>
                            <div>
                                <p style="font-size: 36px;">
                                    Семья и дети
                                </p>
                                <button class="btn btn-light" style="border: 1px solid rgb(225, 225, 225);">
                                    Вернуться в каталог
                                </button>
                                <p style="font-size: 36px;">
                                    Популярные услуги
                                </p>
                                
                                <div style="display: flex;">
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/catalog/pas/brak.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Регистрация брака
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Забронируйте время торжественной регистрации и подайте заявление через портал
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/Icons/icon.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Выплата компенсации стоимости путевок в детский лагерь
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Получите до 50% от стоимости путёвки в детский лагерь на карту «Мир»
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
                                        <img src="https://gu-st.ru/content/catalog/pas/list256-02.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Регистрация рождения
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Узнайте, как получить свидетельство о рождении в вашем регионе
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/catalog/pas/3.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Распоряжение материнским капиталом
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Управляйте средствами материнского капитала
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div style="height: 500px; display: flex;">
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/catalog/pas/3.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Сертификат на материнский капитал
                                            </p>
                                            <div style="height: 50px; display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Государственная услуга направлена на реализацию прав граждан на дополнительные меры государственной поддержки семей, имеющих детей. Государственную услугу предоставляют территориальные органы ПФР по месту жительства (пребывания) или фактического проживания получателей государственной услуги. ПФР предоставляет государственную услугу гражданам Российской Федерации, выехавшим на постоянное место жительства за пределы территории Российской Федерации и не имеющим подтвержденного регистрацией места жительства или места пребывания на территории Российской Федерации.
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/catalog/catalog/passport/413464.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Проставление апостиля МВД
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
                                </div>

                                <div style="display: flex;">
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/catalog/pas/usinovlenie.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Регистрация усыновления (удочерения)
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Узнайте, как получить свидетельство об усыновлении в вашем регионе
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/catalog/pas/29.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Архивные справки МВД
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Заполните заявление на портале и получите необходимые вам архивные документы
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
                                        <img src="https://gu-st.ru/content/catalog/pas/kindergarten_nut@1x.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Запись в детский сад
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Подайте заявление и получите направление в дошкольное учреждение
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
                                <div @click="toggleToggler('composition')">
                                    <div style="display: flex;">
                                        <p style="font-size: 24px;">
                                            Изменение состава семьи
                                        </p>
                                        <span v-if="!laborLawToggler" class="material-icons">
                                            expand_more
                                        </span>
                                        <span v-else class="material-icons">
                                            expand_less
                                        </span>
                                    </div>
                                    <div v-if="compositionToggler">
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Регистрация брака
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
                                                Регистрация рождения
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
                                                Регистрация смерти
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
                                                Регистрация усыновления (удочерения)
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
                                                Государственная регистрация установления отцовства
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
                                                Регистрация расторжения брака
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                                <div @click="toggleToggler('reference')">
                                    <div style="display: flex;">
                                        <p style="font-size: 24px;">
                                            Личные и архивные справки 
                                        </p>
                                        <span v-if="!referenceToggler" class="material-icons">
                                            expand_more
                                        </span>
                                        <span v-else class="material-icons">
                                            expand_less
                                        </span>
                                    </div>
                                    <div v-if="referenceToggler">
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Архивные справки МВД
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
                                                Проставление апостиля МВД
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
                                                Справка о реабилитации жертв политических репрессий
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
                                                Предоставление адресно-справочной информации
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
                                                Получение архивной справки ФСБ
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                                <div @click="toggleToggler('benefit')">
                                    <div style="display: flex;">
                                        <p style="font-size: 24px;">
                                            Пособия и льготы 
                                        </p>
                                        <span v-if="!benefitToggler" class="material-icons">
                                            expand_more
                                        </span>
                                        <span v-else class="material-icons">
                                            expand_less
                                        </span>
                                    </div>
                                    <div v-if="benefitToggler">
                                        <p style="font-weight: bolder;">
                                            Страховые выплаты и пособия
                                        </p>
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
                                        <p style="font-weight: bolder;">
                                            Дети и подростки
                                        </p>
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Распоряжение материнским капиталом
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
                                                Сертификат на материнский капитал
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
                                        Как получить ежемесячное пособие по уходу за ребёнком
                                    </p>
                                    <p>
                                        Куда обращаться
                                        • к работодателю — если есть трудовой договор
                                        • в соцзащиту — если нет трудового договора

                                        Кто подаёт заявление

                                        Один из родителей или другой член семьи, который находится в отпуске по уходу за ребёнком. Отпуск по уходу за ребёнком можно брать по очереди

                                        Документы

                                        • свидетельство о рождении
                                        • справка с места работы другого родителя, что он не получает пособие
                                        • справка о сумме заработка у другого работодателя
                                        • заявление о замене лет в расчётном периоде (при необходимости)

                                        Заявление нужно подать до двухлетия ребёнка

                                        Размер пособия
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как прописать новорождённого по месту жительства
                                    </p>
                                    <p>
                                        Воспользуйтесь услугой Регистрация гражданина по месту жительства. Для этого понадобится свидетельство о рождении
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как записать ребенка в детский сад
                                    </p>
                                    <p>
                                        Воспользуйтесь электронной услугой Запись в дошкольную организацию, если она доступна в вашем регионе. Или обратитесь лично в местный орган управления образованием

                                        Подав заявление, вы встанете на учёт в местном органе управления образованием. Это можно сделать сразу, как родится ребёнок. В заявлении нужно будет указать желаемую дату, когда вы хотите, чтобы ребёнок пошел в детский сад, подходящие детские сады, направленность группы и режим пребывания в ней 

                                        После подачи заявления нужно ждать, пока наступит указанная в заявлении дата и в детском саду появится место для зачисления. Если подавали заявление на Госуслугах, то направление в сад появится в личном кабинете, если подавали лично — ждите, пока с вами свяжутся или подайте заявление об информировании через Госуслуги 

                                        Подробнее о записи в детский сад можно узнать из жизненной ситуации Дошкольное образование

                                        Не нашли ответа?
                                        Еще больше материалов в разделе «Помощь и поддержка»:
                                        Родители и дети
                                        Образование
                                        Помощь и поддержка
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
            compositionToggler: false,
            referenceToggler: false,
            benefitToggler: false,
        }
    },
    methods: {
        toggleToggler(toggler){
            if(toggler.includes('composition')){
                this.compositionToggler = !this.compositionToggler
            } else if(toggler.includes('reference')){
                this.referenceToggler = !this.referenceToggler
            } else if(toggler.includes('benefit')){
                this.benefitToggler = !this.benefitToggler
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