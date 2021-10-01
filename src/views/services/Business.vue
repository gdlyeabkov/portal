<template>
  <div>
        <Header />
        <Breadcrumbs :color="'175, 175, 175'" :title="'Бизнес, предпринимательство, НКО'" />
        <div>

        </div>
        <div style="margin: auto; width: 85%;">
            <div>
                <div style="display: flex; justify-content: center;float: left; width: 75%;">
                    <div style="">
                        <div>
                            <div>
                                <p style="font-size: 36px;">
                                    Бизнес, предпринимательство, НКО
                                </p>
                                <button class="btn btn-light" style="border: 1px solid rgb(225, 225, 225);">
                                    Вернуться в каталог
                                </button>
                                <p style="font-size: 36px;">
                                    Популярные услуги
                                </p>
                                
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
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/catalog/pas/35.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">                                                
                                                Уведомление Роспотребнадзора
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Сообщите о начале работ и оказания услуг
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
                                        <img src="https://gu-st.ru/content/catalog/catalog/passport/342147478_3.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Подбор информации о недвижимом имуществе
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Запросите данные доступной недвижимости для малого бизнеса онлайн
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/catalog/catalog/passport/339777401.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Регистрация на Портале Бизнес-навигатора МСП
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Создайте профиль на Портале Бизнес-навигатора МСП онлайн
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
                                <div @click="toggleToggler('hunt')">
                                    <div style="display: flex;">
                                        <p style="font-size: 24px;">
                                            Туризм и охота
                                        </p>
                                        <span v-if="!huntToggler" class="material-icons">
                                            expand_more
                                        </span>
                                        <span v-else class="material-icons">
                                            expand_less
                                        </span>
                                    </div>
                                    <div v-if="huntToggler">
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Выдача охотбилетов единого федерального образца
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
                                                Справка об угрозе безопасности туристов
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                                <div @click="toggleToggler('library')">
                                    <div style="display: flex;">
                                        <p style="font-size: 24px;">
                                            Библиотечные фонды 
                                        </p>
                                        <span v-if="!libraryToggler" class="material-icons">
                                            expand_more
                                        </span>
                                        <span v-else class="material-icons">
                                            expand_less
                                        </span>
                                    </div>
                                    <div v-if="libraryToggler">
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Информация из библиотечных фондов
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                                <div @click="toggleToggler('gun')">
                                    <div style="display: flex;">
                                        <p style="font-size: 24px;">
                                            Спортивное и коллекционное оружие 
                                        </p>
                                        <span v-if="!gunToggler" class="material-icons">
                                            expand_more
                                        </span>
                                        <span v-else class="material-icons">
                                            expand_less
                                        </span>
                                    </div>
                                    <div v-if="gunToggler">
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Лицензия на коллекционирование и (или) экспонирование оружия и патронов
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
                                                Лицензия на приобретение охотничьего гладкоствольного или пневматического оружия, а также патронов к нему
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
                                                Лицензия на приобретение газовых пистолетов, револьверов, сигнального оружия, холодного клинкового оружия для ношения с национальными костюмами
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
                                                Лицензия на приобретение оружия с нарезным стволом и патронов к нему
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
                                                Разрешение на хранение и использование оружия и патронов к нему
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
                                                Разрешение на хранение и ношение для занятий спортом огнестрельного и пневматического оружия
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
                                                Разрешение на хранение и ношение оружия
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
                                        На какую деятельность нужно обязательно получать лицензию или специальное разрешение
                                    </p>
                                    <p>
                                        Виды деятельности, на которые требуется лицензия или разрешения контролирующего органа, определяет ст. 19 Федерального закона «О лицензировании отдельных видов деятельности».
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как зарегистрировать компанию на портале Госуслуг
                                    </p>
                                    <p>
                                        Создать учётную запись компании может её руководитель или представитель с правом действовать без доверенности. У них должна быть подтверждённая учётная запись физлица на Госуслугах

                                        Также для регистрации понадобится электронная подпись, которую можно получить в одном из удостоверяющих центров

                                        Для регистрации учётной записи компании:

                                        • заполните данные компании в регистрационной форме
                                        • дождитесь завершения автоматической проверки данных

                                        Учётная запись компании появится после успешной проверки данных

                                        Зарегистрировать компанию на Госуслугах можно только на сайте. В мобильном приложении функция пока недоступна
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как получить разрешение на хранение и ношение оружия
                                    </p>
                                    <p>
                                        Воспользуйтесь электронной услугой «Получение разрешения на хранение и ношение охотничьего пневматического, огнестрельного оружия либо оружия ограниченного поражения и патронов к нему». В Личном кабинете вы получите уведомление  о месте и времени получения документа.
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
            huntToggler: false,
            libraryToggler: false,
            gunToggler: false,
            
        }
    },
    methods: {
        toggleToggler(toggler){
            if(toggler.includes('hunt')){
                this.huntToggler = !this.huntToggler
            } else if(toggler.includes('library')){
                this.libraryToggler = !this.libraryToggler
            } else if(toggler.includes('gun')){
                this.gunToggler = !this.gunToggler
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