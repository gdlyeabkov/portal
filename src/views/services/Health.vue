<template>
  <div>
        <Header />
        <Breadcrumbs :color="'0, 200, 200'" :title="'Моё здоровье'" />
        <div>

        </div>
        <div style="margin: auto; width: 85%;">
            <div>
                <div style="display: flex; justify-content: center;float: left; width: 75%;">
                    <div style="">
                        <div>
                            <div>
                                <p style="font-size: 36px;">
                                    Моё здоровье
                                </p>
                                <button class="btn btn-light" style="border: 1px solid rgb(225, 225, 225);">
                                    Вернуться в каталог
                                </button>
                                <p style="font-size: 36px;">
                                    Популярные услуги
                                </p>
                                
                                <div style="display: flex;">
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/catalog/corona1.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Дневник наблюдения за состоянием здоровья
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Сохраните данные о состоянии здоровья в дневник наблюдения
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/catalog/pas/information_on_health_services.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Жалоба об отсутствии выплат медицинским работникам (Covid-19)
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Подайте жалобу онлайн
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
                                        <img src="https://gu-st.ru/content/catalog/pas/med_documents.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Доступ к электронным медицинским документам
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Получите список медицинских документов из посещенных вами поликлиник в электронном виде
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/Icons/prikreplenie_clinic.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Сведения о прикреплении к медицинской организации
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Получите сведения об адресе и названии выбранной вами медицинской организации
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
                                        <img src="https://gu-st.ru/content/catalog/pas/dispanserisation.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Запись для прохождения профилактических медицинских осмотров, диспансеризации
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Заполните анкету и запишитесь к специалистам
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/htdocs/img/vaccine-icon-35bed023a6.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Запись на вакцинацию от COVID-19
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Сделайте прививку от COVID-19
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
                                        <img src="https://gu-st.ru/content/catalog/pas/information_on_health_services.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Сведения об оказанных медицинских услугах и их стоимости
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Получите сведения о стоимости по ОМС онлайн
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/Icons/proverka_oms.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Сведения о полисе ОМС и страховой медицинской организации
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Получите сведения о страховой организации онлайн
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
                                        <img src="https://gu-st.ru/content/catalog/pas/24.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Проведение медико-социальной экспертизы
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/catalog/pas/application_choice_SMO.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Выбор страховой медицинской организации
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Подайте заявление на оформление полиса обязательного медицинского страхования
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
                                <div @click="toggleToggler('service')">
                                    <div style="display: flex;">
                                        <p style="font-size: 24px;">
                                            Медицинские услуги 
                                        </p>
                                        <span v-if="!serviceToggler" class="material-icons">
                                            expand_more
                                        </span>
                                        <span v-else class="material-icons">
                                            expand_less
                                        </span>
                                    </div>
                                    <div v-if="serviceToggler">
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Запись на прием к врачу
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
                                                Сведения об оказанной медицинской помощи
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
                                                Запись на вакцинацию от COVID-19
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                                <div @click="toggleToggler('control')">
                                    <div style="display: flex;">
                                        <p style="font-size: 24px;">
                                            Контроль медицинской деятельности 
                                        </p>
                                        <span v-if="!controlToggler" class="material-icons">
                                            expand_more
                                        </span>
                                        <span v-else class="material-icons">
                                            expand_less
                                        </span>
                                    </div>
                                    <div v-if="controlToggler">
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Лицензирование фармацевтической
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
                                                Лицензирование медицинской деятельности
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
                                                Государственная регистрация медицинских изделий
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
                                                Выдача разрешений на ввоз в РФ и вывоз из РФ сильнодействующих веществ, не являющихся прекурсорами наркотических средств и психотропных веществ
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
                                                Уведомление ФМБА России о начале деятельности
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
                                                Признание зарубежного медицинского образования
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                                <div @click="toggleToggler('invalid')">
                                    <div style="display: flex;">
                                        <p style="font-size: 24px;">
                                            Инвалидность 
                                        </p>
                                        <span v-if="!invalidToggler" class="material-icons">
                                            expand_more
                                        </span>
                                        <span v-else class="material-icons">
                                            expand_less
                                        </span>
                                    </div>
                                    <div v-if="invalidToggler">
                                        <p style="font-weight: bolder;">
                                            Социальное обеспечение
                                        </p>
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Средства реабилитации или денежная компенсация для инвалидов и ветеранов
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
                                                Предоставление санаторно-курортного лечения
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                        <p style="font-weight: bolder;">
                                            Установление инвалидности
                                        </p>
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Медико-социальная экспертиза ФМБА 
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                                <div @click="toggleToggler('pension')">
                                    <div style="display: flex;">
                                        <p style="font-size: 24px;">
                                            Страховые выплаты и пособия
                                        </p>
                                        <span v-if="!pensionToggler" class="material-icons">
                                            expand_more
                                        </span>
                                        <span v-else class="material-icons">
                                            expand_less
                                        </span>
                                    </div>
                                    <div v-if="pensionToggler">
                                        <p style="font-weight: bolder;">
                                            Несчастный случай на производстве
                                        </p>
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
                                    </div>
                                    <hr />
                                </div>

                                <p style="font-size: 36px;">
                                    Остались вопросы?
                                </p>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как записаться на прием к врачу
                                    </p>
                                    <p>
                                        Нужен полис ОМС и прикрепление к поликлинике, в которую хотите записаться  Откройте форму записи на приём к врачу, выберите поликлинику, нужного специалиста и удобное время для посещения
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как записаться в медицинскую организацию, которой нет в списке
                                    </p>
                                    <p>
                                        В форме записи на приём вы видите медицинские организации, доступные в данном регионе. Если не нашли нужную, проверьте своё прикрепление. Поменять поликлинику можно раз в год, а при переезде — ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как записаться к врачу, которого нет в списке
                                    </p>
                                    <p>
                                        Перечень специальностей и расписание врачей передают на Госуслуги регионы. Расписание для записи на приём формируется на 2 недели вперед. К врачам некоторых специальностей можно записаться только по ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как записать к врачу другого человека через свою учётную запись
                                    </p>
                                    <p>
                                        Откройте форму записи на приём ко врачу и укажите, что хотите записать другого человека. Введите номер его полиса ОМС СНИЛС и контактный телефон. Человек, которого записываете на приём, должен быть п ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как вызвать врача для другого человека через мою учетную запись
                                    </p>
                                    <p>
                                        Откройте форму вызова врача на дом и укажите, что заказываете услугу для другого человека. Введите номер его полиса ОМС. Доступность сервиса вызова врача на дом на Госуслугах зависит от региона
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как вводить номер полиса ОМС
                                    </p>
                                    <p>
                                        Введите номер полиса без пробелов. Обычно это 16 цифр на лицевой стороне полиса. У старых полисов может быть указана серия — в этом случае введите серию и номер в соответствующих разделах ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Где посмотреть или проверить запись на прием к врачу
                                    </p>
                                    <p>
                                        Если записывались через Госуслуги, проверить дату и время приёма можно в личном кабинете и мобильном приложении Записи, оформленные через другие ресурсы и регистратуру поликлиники, на Госуслугах не о ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как отменить запись на приём к врачу
                                    </p>
                                    <p>
                                        В личном кабинете откройте список записей на приём. Перейдите к нужной записи и нажмите Отменить Если этот способ не работает, отмените запись через регистратуру поликлиники и сообщите в службу подде ..
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как информация о прикреплении к поликлинике попадает на Госуслуги
                                    </p>
                                    <p>
                                        В информационную систему поликлиники вносятся ФИО, дата рождения, СНИЛС, номер полиса ОМС пациента. Данные из системы передаются в Фонд ОМС, а оттуда — на Госуслуги Если сведения указаны с ошиб ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Почему отображаются поликлиники, к которым нет прикрепления
                                    </p>
                                    <p>
                                        Некоторые регионы передают на Госуслуги данные о всех медицинских организациях. Они отображаются на портале наряду с организациями, к которым есть прикрепление. Их можно увидеть при записи на приём, ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Что такое электронный медицинский документ
                                    </p>
                                    <p>
                                        Это цифровой аналог бумажного документа, хранящегося в медицинской организации. В нём есть сведения об оказанной медицинской помощи по ОМС: результаты осмотра, обследований, данные о диагнозе и назна ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Что такое полис ОМС
                                    </p>
                                    <p>
                                        Полис обязательного медицинского страхования (ОМС) — документ, подтверждающий право на бесплатную медицинскую помощь. С полисом ОМС можно записываться к врачам, проходить обследования, лечиться ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как получить полис ОМС
                                    </p>
                                    <p>
                                        Полис ОМС выдает страховая компания. Найти компанию, которая работает в вашем регионе, можно на сайте ФОМС Подайте заявление в офисе выбранной компании или МФЦ. Уточните заранее, оказывает ваш МФЦ та ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Какую медицинскую помощь можно получить бесплатно по полису ОМС
                                    </p>
                                    <p>
                                        Полис ОМС  позволяет бесплатно получать услуги, предусмотренные программой обязательного медицинского страхования. Например, он даёт право на скорую, первичную и высокотехнологичную медицинскую ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Что такое электронный полис ОМС
                                    </p>
                                    <p>
                                        Полис ОМС можно получить на бумаге или в виде пластиковой карточки Электронный полис содержит чип-модуль, в котором хранится информация о владельце. Проверить информацию можно и без считывания с чипа ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Чем отличается постоянный полис ОМС от временного
                                    </p>
                                    <p>
                                        Временный полис ОМС — это свидетельство, которое выдают на время оформления постоянного полиса ОМС. Временное свидетельство действует максимум 30 дней. Потом его заменяет постоянный полис ОМС, ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        В каком регионе действует полис ОМС
                                    </p>
                                    <p>
                                        Полис ОМС действует на всей территории России. Любой человек, имеющий полис, может бесплатно получить медицинскую помощь, независимо от региона проживания В регионе, где был зарегистрирован полис ОМС ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Действуют ли старые полисы ОМС
                                    </p>
                                    <p>
                                        Старые полисы ОМС действуют и позволяют получать медицинские услуги бесплатно. Заменять их не обязательно, но это упростит доступ к электронным услугам в сфере здравоохранения Если на бланке полиса у ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как прикрепиться к поликлинике
                                    </p>
                                    <p>
                                        Для получения первичной медицинской помощи нужно прикрепиться к поликлинике, входящей в реестр ФОМС. Если она находится не по месту жительства, возможны ограничения при вызове врача на дом Больше под ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как поменять поликлинику по прикреплению
                                    </p>
                                    <p>
                                        Поменять поликлинику можно раз в год, а при переезде — без ограничения. Порядок такой же, как и в случае прикрепления к поликлинике Обращаться в старую поликлинику не нужно, документы передадут ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как восстановить утерянный полис
                                    </p>
                                    <p>
                                        Восстановить полис ОМС можно бесплатно в страховой компании, которая его выдала. Сначала выдадут временное свидетельство, а в течение 30 дней — постоянный полис ОМС Узнать, какая организация вы ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Можно ли сменить страховую организацию
                                    </p>
                                    <p>
                                        Сменить страховую компанию можно один раз в год до 1 ноября, а при переезде — без ограничений. Для этого нужно подать заявление лично в новую страховую компанию, где хотите получить полис ОМС П ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Могут ли отказать в медицинской помощи, если при себе нет полиса
                                    </p>
                                    <p>
                                        При обращении за медицинской помощью нужно иметь при себе полис — это требование закона. Однако отказать в медицинской помощи человеку, который забыл полис, тоже нельзя: это нарушит его право н ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Приедет ли скорая, если у человека вообще нет полиса
                                    </p>
                                    <p>
                                        Скорая помощь всегда бесплатная. От типа вызова зависит, понадобится для её получения полис ОМС или нет Экстренную помощь можно получить без полиса ОМС. Её оказывают, если чья-то жизнь под угрозой. Н ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как оформить полис ОМС на ребёнка
                                    </p>
                                    <p>
                                        Первые 30 дней новорождённый может получать медицинскую помощь по полису мамы или папы. Оформить ему собственный полис можно в любой момент после получения свидетельства о рождении Процедура получени ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как получить полис ОМС через Госуслуги
                                    </p>
                                    <p>
                                        На Госуслугах можно подать заявление о выборе страховой организации — результатом будет выдача нового полиса ОМС. Для получения полиса придётся посетить организацию лично Чтобы воспользоваться ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как записаться на вакцинацию от COVID-19 на Госуслугах
                                    </p>
                                    <p>
                                        Нужен полис ОМС, СНИЛС (для получения электронного сертификата на Госуслугах) и контактный телефон Откройте форму записи на вакцинацию, выберите пункт вакцинации, удобные дату и время Вы можете запис ..
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как записаться в лист ожидания для вакцинации от COVID-19
                                    </p>
                                    <p>
                                        Откройте форму записи на вакцинацию и выберите пункт вакцинации. Если свободных мест нет, станет активна кнопка записи в лист ожидания. Сотрудники медицинской организации позвонят вам, чтобы пригласи ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как пожаловаться на процесс вакцинации
                                    </p>
                                    <p>
                                        Если вы не смогли записаться на вакцинацию или не удовлетворены организацией процедуры в пункте вакцинации, можете сообщить о проблеме Выберите категорию «Вакцинация от COVID-19» и подход ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как получить сертификат вакцинированного
                                    </p>
                                    <p>
                                        Для получения сертификата на Госуслугах важно предоставить СНИЛС в пункте вакцинации. Сведения о вас внесут в регистр вакцинированных После полной вакцинации электронный сертификат появится на портал ...
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Почему я не вижу свой сертификат о вакцинации
                                    </p>
                                    <p>
                                        Сведения поступают из регистра вакцинированных Минздрава. Обычно информация отображается на Госуслугах в течение суток с даты вакцинации  Основные причины, почему вы можете не видеть свой с ...
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
            serviceToggler: false,
            controlToggler: false,
            invalidToggler: false,
            pensionToggler: false
        }
    },
    methods: {
        toggleToggler(toggler){
            if(toggler.includes('service')){
                this.serviceToggler = !this.serviceToggler
            } else if(toggler.includes('control')){
                this.controlToggler = !this.controlToggler
            } else if(toggler.includes('invalid')){
                this.invalidToggler = !this.invalidToggler
            } else if(toggler.includes('pension')){
                this.pensionToggler = !this.pensionToggler
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