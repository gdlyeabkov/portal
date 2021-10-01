<template>
  <div>
        <Header />
        <Breadcrumbs :color="'200, 0, 0'" :title="'Лицензии, справки, аккредитации'" />   
        <div>

        </div>
        <div style="margin: auto; width: 85%;">
            <div>
                <div style="display: flex; justify-content: center;float: left; width: 75%;">
                    <div style="">
                        <div>
                            <div>
                                <p style="font-size: 36px;">
                                    Лицензии, справки, аккредитации
                                </p>
                                <button class="btn btn-light" style="border: 1px solid rgb(225, 225, 225);">
                                    Вернуться в каталог
                                </button>
                                <p style="font-size: 36px;">
                                    Популярные услуги
                                </p>
                                
                                <div style="display: flex;">
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/catalog/pas/57.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Справка об отсутствии судимости
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Для получения справки заполните заявление на портале
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
                                        <img src="https://gu-st.ru/content/Icons/reestr_licenzii.png" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Получение выписок из реестров лицензий
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Получите сведения о конкретной лицензии на осуществление вида лицензируемой деятельности
                                                </p>
                                                <span style="" class="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: flex; float: left; width: 500px; height: 175px; align-items: center;">
                                        <img src="https://gu-st.ru/content/Other/voting_icon.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Справка об административном наказании за потребление наркотических средств без назначения врача
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Получите справку онлайн
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
                                        <img src="https://gu-st.ru/content/catalog/pas/30.svg" width="75px" alt="">
                                        <div style="margin-left: 15px; align-self: center; display: flex; flex-direction: column; justify-content: center;">
                                            <p style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 255); cursor: pointer; " @click="$router.push({ name: '' })">
                                                Предоставление адресно-справочной информации
                                            </p>
                                            <div style="display: flex; cursor: pointer" @click="$router.push({ name: '' })">
                                                <p style="">
                                                    Проверить и исправить сведения о себе или запросить справочные данные о другом лице
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
                                                    Заверьте архивные документы, справки о реабилитации или отсутствии судимости
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
                                <div @click="toggleToggler('archive')">
                                    <div style="display: flex;">
                                        <p style="font-size: 24px;">
                                            Личные и архивные справки
                                        </p>
                                        <span v-if="!archiveToggler" class="material-icons">
                                            expand_more
                                        </span>
                                        <span v-else class="material-icons">
                                            expand_less
                                        </span>
                                    </div>
                                    <div v-if="archiveToggler">
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Извещение о состоянии лицевого счета в ПФР
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
                                                Выплата пенсии
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
                                                Установление пенсии
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
                                                Пенсионный калькулятор
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                                <div @click="toggleToggler('prof')">
                                    <div style="display: flex;">
                                        <p style="font-size: 24px;">
                                            Профессиональная деятельность
                                        </p>
                                        <span v-if="!profToggler" class="material-icons">
                                            expand_more
                                        </span>
                                        <span v-else class="material-icons">
                                            expand_less
                                        </span>
                                    </div>
                                    <div v-if="profToggler">
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
                                        <div style="display: flex;">
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                            <p>
                                                Информирование о предоставлении социальной помощи
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
                                    </div>
                                    <hr />
                                </div>

                                <div @click="toggleToggler('gun')">
                                    <div style="display: flex;">
                                        <p style="font-size: 24px;">
                                            Оформление оружия
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
                                                Регистрация страхователей, обязанных уплачивать страховые взносы в связи с заключением гражданско-правового договора
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
                                                Подача документов по уплате страховых взносов
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
                                                Установление скидки к страховому тарифу на обязательное социальное страхование
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
                                                Подача расчета по уплате страховых взносов (4-ФСС)
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
                                                Принятие решения о финансовом обеспечении предупредительных мер
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
                                                Регистрация добровольного социального страхования
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
                                                Регистрация страхователей, заключивших договор с работником
                                            </p>
                                            <span class="material-icons">
                                                navigate_next
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                                <div @click="toggleToggler('permission')">
                                    <div style="display: flex;">
                                        <p style="font-size: 24px;">
                                            Сертификаты, разрешения, экспертизы 
                                        </p>
                                        <span v-if="!permissionToggler" class="material-icons">
                                            expand_more
                                        </span>
                                        <span v-else class="material-icons">
                                            expand_less
                                        </span>
                                    </div>
                                    <div v-if="permissionToggler">
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
                                                Регистрация страхователей, обязанных уплачивать страховые взносы в связи с заключением гражданско-правового договора
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
                                                Подача документов по уплате страховых взносов
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
                                                Установление скидки к страховому тарифу на обязательное социальное страхование
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
                                                Подача расчета по уплате страховых взносов (4-ФСС)
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
                                                Принятие решения о финансовом обеспечении предупредительных мер
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
                                                Регистрация добровольного социального страхования
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
                                                Регистрация страхователей, заключивших договор с работником
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
                                                Справка об угрозе безопасности туристов
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
                                                Информация из библиотечных фондов
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
                                                Выписка из реестра федерального имущества
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
                                                Прекращение прав физических и юридических лиц в случае добровольного отказа от прав на земельные участки
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
                                                Рассмотрение заявлений о включении сведений, предоставлении сведений из национальной части Единого реестра органов по сертификации и испытательных лабораторий (центров) Таможенного союза
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
                                                Информационно-консультационные услуги
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
                                                Дача разъяснений по вопросам международного права
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
                                                Предоставление информации из реестра деклараций
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
                                                Предоставление информации из реестра сертификатов
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
                                                Лицензирование телерадиовещания
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
                                                Лицензирование деятельности в области оказания услуг связи
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
                                        Как получить архивную справку из ФСБ России
                                    </p>
                                    <p>
                                        Перейдите на страницу услуги Получение архивной справки ФСБ. Заполните электронную форму заявления и дождитесь его проверки и регистрации. Ответ от ведомства придёт в личный кабинет на Госуслугах в течение 30 дней. Услуга бесплатная
                                        Подробнее
                                    </p>
                                </div>
                                <div style="width: 475px;">
                                    <p style="font-size: 24px; font-weight: bolder;">
                                        Как узнать, в каком отделении получать бумажную справку об отсутствии судимости
                                    </p>
                                    <p>
                                        Адрес подразделения, дату и время приёма ведомство сообщит в комментарии по заявлению, когда его статус изменится на «Услуга оказана».
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
            archiveToggler: false,
            profToggler: false,
            gunToggler: false,
            permissionToggler: false,
            regToggler: false,
        }
    },
    methods: {
        toggleToggler(toggler){
            if(toggler.includes('archive')){
                this.archiveToggler = !this.archiveToggler
            } else if(toggler.includes('prof')){
                this.profToggler = !this.profToggler
            } else if(toggler.includes('gun')){
                this.gunToggler = !this.gunToggler
            } else if(toggler.includes('permission')){
                this.permissionToggler = !this.permissionToggler
            } else if(toggler.includes('reg')){
                this.regToggler = !this.regToggler
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