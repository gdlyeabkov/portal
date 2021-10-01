<template>
  <div>
        <Header />
        <Breadcrumbs :color="'0, 0, 175'" :title="'Транспорт и вождение'" />
        <div>

        </div>
        <div style="margin: auto; width: 85%;">
            <div>
                <div style="display: flex; justify-content: center;float: left; width: 75%;">
                    <div style="">
                        <div>
                            <div>
                                <p style="font-size: 36px;">
                                    Транспорт и вождение
                                </p>
                                <button class="btn btn-light" style="border: 1px solid rgb(225, 225, 225);">
                                    Вернуться в каталог
                                </button>
                                <p style="font-size: 36px;">
                                    Популярные услуги
                                </p>
                                
                                <div style="display: flex;">
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/catalog/pas/10.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Автомобильные и дорожные штрафы
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Воспользуйтесь онлайн-оплатой штрафов ГИБДД и за парковку
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/catalog/pas/12.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Получение права на управление транспортным средством
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Экзамен, выдача и замена водительского удостоверения
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
                                        <img src="https://gu-st.ru/content/catalog/pas/11.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Регистрация транспортного средства
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Подайте заявление онлайн и запишитесь на прием в ближайшее отделение Госавтоинспекции
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/Other/disparking.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Получение возможности парковки на специальных местах для инвалидов
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Внесите сведения о транспортном средстве, управляемом или перевозящем инвалида, для бесплатной парковки на специальных парковочных местах
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
                                        <img src="https://gu-st.ru/content/Icons/10000970474.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Государственная регистрация маломерных судов
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Подайте заявление на получение и изменение судового билета онлайн
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/Icons/10000970461.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Освидетельствование маломерных судов
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Подайте заявление на техосмотр онлайн
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
                                        <img src="https://gu-st.ru/content/catalog/pas/10000970442.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Удостоверение на право управления маломерным судном
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Подайте заявление на получение и замену удостоверения онлайн
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/catalog/pas/proezd.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Льготы на проезд в общественном транспорте
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Узнайте, какие льготы на проезд в общественном транспорте предоставляются в вашем регионе, оформите выплату или проездной документ.
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
                                <div @click="toggleToggler('auto')">
                                    <div style="display: flex;">
                                        <p style="font-size: 24px;">
                                            Автомобильный и мототранспорт
                                        </p>
                                        <span v-if="!autoToggler" class="material-icons">
                                            expand_more
                                        </span>
                                        <span v-else class="material-icons">
                                            expand_less
                                        </span>
                                    </div>
                                    <div v-if="autoToggler">
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Автомобильные и дорожные штрафы
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
                                                Получение права на управление транспортным средством
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
                                                Регистрация транспортного средства
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
                                                Разрешение на перевозку тяжеловесных грузов
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
                                                Информация из реестра автомобильных дорог
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                                <div @click="toggleToggler('water')">
                                    <div style="display: flex;">
                                        <p style="font-size: 24px;">
                                            Водный транспорт
                                        </p>
                                        <span v-if="!waterToggler" class="material-icons">
                                            expand_more
                                        </span>
                                        <span v-else class="material-icons">
                                            expand_less
                                        </span>
                                    </div>
                                    <div v-if="waterToggler">
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Принятие решения по предоставлению судну освобождения (изъятия) от выполнения требований международных конвенций в области мореплавания
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
                                                Выдача разрешений на проведение работ по созданию искусственного земельного участка в случае создания искусственного земельного участка в границах морских портов и (или) на основании решения Правительства Российской Федерации о строительстве или расширении морского порта
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
                                                Удостоверение на право управления маломерным судном
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
                                                Выдача разрешений на пересечение государственной границы для перегрузки уловов водных биологических ресурсов
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
                                                Оформление и выдача удостоверений личности моряка членам экипажей морских судов, судов смешанного (река-море) плавания и судов рыбопромыслового флота
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
                                                Выдача разрешений на строительство и разрешений на ввод в эксплуатацию отдельных объектов морского и внутреннего водного транспорта
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
                                                Государственная регистрация маломерных судов
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
                                                Выдача разрешений на судовые радиостанции, используемые на морских судах, судах внутреннего плавания и судах смешанного(река-море) плавания
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
                                                Освидетельствование маломерных судов
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                                <div @click="toggleToggler('air')">
                                    <div style="display: flex;">
                                        <p style="font-size: 24px;">
                                            Воздушный транспорт 
                                        </p>
                                        <span v-if="!airToggler" class="material-icons">
                                            expand_more
                                        </span>
                                        <span v-else class="material-icons">
                                            expand_less
                                        </span>
                                    </div>
                                    <div v-if="airToggler">
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Государственная регистрация гражданских аэродромов
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
                                                Выдача разрешений на выполнение разовых полетов воздушных судов, если такие разрешения обусловлены особыми условиями эксплуатации воздушного судна и необходимы для обеспечения безопасности полета
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
                                                Государственная регистрация прав на воздушные суда и сделок с ними
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
                                                Государственная регистрация гражданских воздушных судов и ведение Государственного реестра гражданских воздушных судов Российской Федерации
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
                                        Как проверить, снят ли автомобиль с учёта после продажи
                                    </p>
                                    <p>
                                        Воспользуйтесь сервисом Проверка транспортного средства на сайте ГИБДД. Нужно указать VIN-код, номер кузова или шасси. Вы получите всю регистрационную историю автомобиля
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Что такое полис ОСАГО и как его оформить
                                    </p>
                                    <p>
                                        Полис подтверждает оформление ОСАГО — это обязательный документ для каждого водителя. Его можно оформить в страховой компании, которая:

                                        • имеет лицензию Банка России
                                        • является членом Российского союза автостраховщиков

                                        Стоимость полиса зависит от:

                                        • мощности автомобиля
                                        • региона регистрации
                                        • числа водителей, допущенных к управлению автомобилем
                                        • стажа и возраста водителя

                                        Чем больше стаж вождения, меньше страховых случаев, меньше мощность автомобиля и уже круг лиц, допущенных к управлению, тем ниже сумма страхового взноса. На это влияет коэффициент «бонус-малус» (КБМ)

                                        Подробности — в описании жизненной ситуации «Что нужно делать ответственному автовладельцу»
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Если услуга не была получена, что будет с оплаченной госпошлиной
                                    </p>
                                    <p>
                                        Квитанцию об оплате госпошлины по предыдущему заявлению можно использовать в счёт оплаты нового. Обращаться следует в то же подразделение и за той же услугой

                                        - исполнилось 20 или 45 лет
                                        - изменение ФИО, пола, даты или места рождения, внешности
                                        - повреждение документа
                                        - нехватка страниц для обязательных отметок
                                        - в документе ошибка или неточность

                                        Заявление для замены паспорта нужно подать в течение 90 дней после наступления 20 лет или 45 лет, 30 дней — для остальных обстоятельств. При нарушении срока — штраф по ст. 19.15 КоАП РФ

                                        Заменить паспорт
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
            autoToggler: false,
            waterToggler: false,
            airToggler: false
        }
    },
    methods: {
        toggleToggler(toggler){
            if(toggler.includes('auto')){
                this.autoToggler = !this.autoToggler
            } else if(toggler.includes('water')){
                this.waterToggler = !this.waterToggler
            } else if(toggler.includes('air')){
                this.airToggler = !this.airToggler
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