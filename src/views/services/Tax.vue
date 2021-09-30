<template>
  <div>
              <Header />
        <div>

        </div>
        <div style="margin: auto; width: 85%;">
            <div style="width: 100%;">
                <p style="font-size: 36px;">
                Помощь и поддержка
                </p>
            </div>
            <div style="margin-top: 25px; background-color: rgb(100, 100, 255); width: 100%; height: 75px; display: flex; justify-content: space-around; align-items: center;">
                <p style="font-weight: bolder; font-size: 24px;">
                Что вы ищите?
                </p>
                <input type="text" placeholder="Поиск в частых вопросах" class="form-control w-50">
            </div>
            <div>
                <div style="float: left; width: 25%;">
                    <p style="font-weight: bolder;">
                        На этой странице
                    </p>
                    <p style="color: rgb(0, 0, 255); text-decoration-line: underline; text-decoration-style: dashed;">
                        Популярные вопросы
                    </p>
                    <p style="color: rgb(0, 0, 255); text-decoration-line: underline; text-decoration-style: dashed;">
                        О портале
                    </p>
                    <p style="color: rgb(0, 0, 255); text-decoration-line: underline; text-decoration-style: dashed;">
                        Темы вопросов
                    </p>
                    <p style="color: rgb(0, 0, 255); text-decoration-line: underline; text-decoration-style: dashed;">
                        Получатели услуг
                    </p>
                    <p style="color: rgb(0, 0, 255); text-decoration-line: underline; text-decoration-style: dashed;">
                        Не нашли ответа на свой вопрос?
                    </p>
                    <p style="color: rgb(0, 0, 255); text-decoration-line: underline; text-decoration-style: dashed;">
                        Установите приложение
                    </p>
                </div>
                <div style="display: flex; justify-content: center;float: left; width: 75%;">
                    <div style="">
                        <div style="background-color: rgb(245, 245, 245);">
                            <div>
                                <p style="font-size: 36px;">
                                    Популярные вопросы
                                </p>
                            </div>
                            <div style="margin-top: 175px; display: flex; justify-content: space-between;">
                                <div style="width: 45%;">
                                    <p style="color: rgb(0, 0, 255); cursor: pointer;" @click="$router.push({ name: '' })">
                                        Как получить подтверждённую учётную запись
                                    </p>
                                    <p style="color: rgb(0, 0, 255); cursor: pointer;" @click="$router.push({ name: '' })">
                                        Выдача согласия на предоставление доступа к данным
                                    </p>
                                    <p style="color: rgb(0, 0, 255); cursor: pointer;" @click="$router.push({ name: '' })">
                                        Как проверить, снят ли автомобиль с учёта после продажи
                                    </p>
                                    <p style="color: rgb(0, 0, 255); cursor: pointer;" @click="$router.push({ name: '' })">
                                        Как получить загранпаспорт
                                    </p>
                                    <p style="color: rgb(0, 0, 255); cursor: pointer;" @click="$router.push({ name: '' })">
                                        Почему не получается погасить судебную задолженность
                                    </p>
                                    <p style="color: rgb(0, 0, 255); cursor: pointer;" @click="$router.push({ name: '' })">
                                        Как оплатить судебную задолженность
                                    </p>
                                </div>
                                <div>
                                    <p style="color: rgb(0, 0, 255); cursor: pointer;" @click="$router.push({ name: '' })">
                                        Регистрация на Госуслугах
                                    </p>
                                    <p style="color: rgb(0, 0, 255); cursor: pointer;" @click="$router.push({ name: '' })">
                                        Как восстановить пароль для упрощённой учётной записи
                                    </p>
                                    <p style="color: rgb(0, 0, 255); cursor: pointer;" @click="$router.push({ name: '' })">
                                        Как получить новый паспорт после 18 лет
                                    </p>
                                    <p style="color: rgb(0, 0, 255); cursor: pointer;" @click="$router.push({ name: '' })">
                                        У кого возникает право на материнский капитал
                                    </p>
                                    <p style="color: rgb(0, 0, 255); cursor: pointer;" @click="$router.push({ name: '' })">
                                        Как получить скидку 30% на оплату госпошлины
                                    </p>
                                    <p style="color: rgb(0, 0, 255); cursor: pointer;" @click="$router.push({ name: '' })">
                                        Как записать ребенка в детский сад
                                    </p>
                                </div>
                            </div>
                            <div style="text-align: center; margin-bottom: 75px;">
                                <button style="margin: 75px; padding: 15px 35px; border: 1px solid rgb(175, 175, 175);" class="btn btn-light">Показать Все</button>
                            </div>
                        </div>
                        <div>
                            <p style="font-size: 36px;">
                                О портале
                            </p>
                            <div style="display: flex; flex-direction: row; justify-content: space-around;">
                                <div style="display: flex; width: 275px;">
                                    <span class="material-icons-outlined">
                                        arrow_circle_right
                                    </span>
                                
                                    <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                        Общая информация о портале
                                    </p>
                                </div>
                                <div style="display: flex; width: 275px;">
                                    <span class="material-icons-outlined">
                                        arrow_circle_right
                                    </span>
                                    <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                        Вход и регистрация
                                    </p>
                                </div>
                                <div style="display: flex; width: 275px;">
                                    <span class="material-icons-outlined">
                                        arrow_circle_right
                                    </span>
                                    <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">Центры обслуживания
                                        Вопросы по оплате
                                    </p>
                                </div>
                            </div>
                            <div style="display: flex; flex-direction: row; justify-content: space-around; ">
                                <div style="display: flex; width: 275px;">
                                    <span class="material-icons-outlined">
                                        arrow_circle_right
                                    </span>
                                    <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                        Госпочта
                                    </p>
                                </div>
                                <div style="display: flex; width: 275px;">
                                    <span class="material-icons-outlined">
                                        arrow_circle_right
                                    </span>
                                    <p style="font-weight: bolder; color: rgb(0, 0, 255);">
                                        Персональные данные
                                    </p>
                                </div>
                                <div style="display: flex; width: 275px;">
                                    <span class="material-icons-outlined">
                                        arrow_circle_right
                                    </span>
                                    <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                        Личный кабинет
                                    </p>
                                </div>
                            </div>
                            <div style="text-align: left; display: flex; flex-direction: row; justify-content: space-around;">
                                <div style="display: flex; width: 275px;">
                                    <span class="material-icons-outlined">
                                        arrow_circle_right
                                    </span>
                                    <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                        Центры обслуживания
                                    </p>
                                </div>
                                <div style="display: flex; width: 275px;">
                                    <span class="material-icons-outlined">
                                        arrow_circle_right
                                    </span>
                                    <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                        Мобильное приложение
                                    </p>
                                </div>
                                <div style="display: flex; width: 275px;">
                                    <span class="material-icons-outlined">
                                        arrow_circle_right
                                    </span>
                                    <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                        Юридические вопросы
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <p style="font-size: 36px;">
                                    Темы вопросов
                                </p>
                                <div style="display: flex;">
                                    <div v-if="!currentTheme.includes('citizens')" @click="setThemeQuestions('citizens')" style="cursor: pointer; width: 175px; height: 50px; border: 1px solid rgb(215, 215, 215); display: flex; flex-direction: row; justify-content: center; align-items: center; border-top-left-radius: 5px; border-bottom-left-radius: 5px;">
                                        <p style="color: rgb(0, 0, 255); align-self: center;">
                                            Гражданам
                                        </p>
                                    </div>
                                    <div v-else @click="setThemeQuestions('citizens')" style="background-color: rgb(0, 0, 255); cursor: pointer; width: 175px; height: 50px; border: 1px solid rgb(215, 215, 215); display: flex; flex-direction: row; justify-content: center; align-items: center; border-top-left-radius: 5px; border-bottom-left-radius: 5px;">
                                        <p style="color: rgb(255, 255, 255); align-self: center;">
                                            Гражданам
                                        </p>
                                    </div>
                                    <div v-if="!currentTheme.includes('entrepreneurs')" @click="setThemeQuestions('entrepreneurs')" style="cursor: pointer; width: 175px; height: 50px; border: 1px solid rgb(215, 215, 215); display: flex; flex-direction: row; justify-content: center; align-items: center;">
                                        <p style="color: rgb(0, 0, 255); align-self: center;">
                                            Предпринимателям
                                        </p>
                                    </div>
                                    <div v-else @click="setThemeQuestions('entrepreneurs')" style="background-color: rgb(0, 0, 255); cursor: pointer; width: 175px; height: 50px; border: 1px solid rgb(215, 215, 215); display: flex; flex-direction: row; justify-content: center; align-items: center;">
                                        <p style="color: rgb(255, 255, 255); align-self: center;">
                                            Предпринимателям
                                        </p>
                                    </div>
                                    <div v-if="!currentTheme.includes('legalEntities')" @click="setThemeQuestions('legalEntities')" style="cursor: pointer; width: 175px; height: 50px; border: 1px solid rgb(215, 215, 215); display: flex; flex-direction: row; justify-content: center; align-items: center; border-top-right-radius: 5px; border-bottom-right-radius: 5px;">
                                        <p style="color: rgb(0, 0, 255); align-self: center;">
                                            Юридичеким лицам
                                        </p>
                                    </div>
                                    <div v-else @click="setThemeQuestions('legalEntities')" style="background-color: rgb(0, 0, 255); cursor: pointer; width: 175px; height: 50px; border: 1px solid rgb(215, 215, 215); display: flex; flex-direction: row; justify-content: center; align-items: center; border-top-right-radius: 5px; border-bottom-right-radius: 5px;">
                                        <p style="color: rgb(255, 255, 255); align-self: center;">
                                            Юридичеким лицам
                                        </p>
                                    </div>
                                </div>

                                <div v-if="currentTheme.includes('citizens')">
                                    <div style="display: flex; flex-direction: row; justify-content: space-around;">
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                        
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Коронавирус: сервисы, сертификаты и QR-коды
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Здоровье
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">Центры обслуживания
                                                Недвижимость
                                            </p>
                                        </div>
                                    </div>
                                    <div style="display: flex; flex-direction: row; justify-content: space-around; ">
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Контроль и оплата налогов
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="font-weight: bolder; color: rgb(0, 0, 255);">
                                                Образование
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Паспорта, регистрации, визы
                                            </p>
                                        </div>
                                    </div>
                                    <div style="text-align: left; display: flex; flex-direction: row; justify-content: space-around;">
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Лицензии, справки, аккредитации
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Безопасность и правопорядок
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Культура, досуг, спорт
                                            </p>
                                        </div>
                                    </div>
                                    <div style="text-align: left; display: flex; flex-direction: row; justify-content: space-around;">
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Наследство
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Единый день голосования 2021
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Корпоративные сим-карты
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="currentTheme.includes('entrepreneurs')">
                                    <div style="display: flex; flex-direction: row; justify-content: space-around;">
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Здоровье
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">Центры обслуживания
                                                Недвижимость
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Контроль и оплата налогов
                                            </p>
                                        </div>
                                    </div>
                                    <div style="display: flex; flex-direction: row; justify-content: space-around; ">
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="font-weight: bolder; color: rgb(0, 0, 255);">
                                                Образование
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Паспорта, регистрации, визы
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Лицензии, справки, аккредитации
                                            </p>
                                        </div>
                                    </div>
                                    <div style="text-align: left; display: flex; flex-direction: row; justify-content: space-around;">
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Безопасность и правопорядок
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Культура, досуг, спорт
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                        
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Коронавирус: сервисы, сертификаты и QR-коды
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="currentTheme.includes('legalEntities')">
                                    <div style="display: flex; flex-direction: row; justify-content: space-around;">
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Здоровье
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">Центры обслуживания
                                                Недвижимость
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Контроль и оплата налогов
                                            </p>
                                        </div>
                                    </div>
                                    <div style="display: flex; flex-direction: row; justify-content: space-around; ">
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="font-weight: bolder; color: rgb(0, 0, 255);">
                                                Образование
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Паспорта, регистрации, визы
                                            </p>
                                        </div>
                                    </div>
                                    <div style="text-align: left; display: flex; flex-direction: row; justify-content: space-around;">
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Лицензии, справки, аккредитации
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Безопасность и правопорядок
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Культура, досуг, спорт
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <p style="font-size: 36px;">
                                    Получатели услуг
                                </p>
                                <div>
                                    <div style="display: flex; flex-direction: row; justify-content: space-around;">
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Автовладельцам
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">Центры обслуживания
                                                Родители и дети
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Работающим людям
                                            </p>
                                        </div>
                                    </div>
                                    <div style="display: flex; flex-direction: row; justify-content: space-around;">
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Пенсионерам
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Инвалидам
                                            </p>
                                        </div>
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Юридическим лицам
                                            </p>
                                        </div>
                                    </div>
                                    <div style="display: flex; flex-direction: row; justify-content: space-around;">
                                        <div style="display: flex; width: 275px;">
                                            <span class="material-icons-outlined">
                                                arrow_circle_right
                                            </span>
                                            <p style="margin-left: 15px; font-weight: bolder; color: rgb(0, 0, 255);">
                                                Индивидуальным предпринимателям
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <p style="font-size: 36px;">
                                    Не нашли ответа на свой вопрос?
                                </p>
                                <div>
                                    <p>
                                        Задайте вопрос через <span style="color: rgb(0, 0, 255);">чат</span>.
                                    </p>
                                    <button class="btn btn-light">Задать вопрос</button>
                                </div>
                                <p style="color: rgb(0, 0, 255); text-decoration-line: underline; text-decoration-style: dashed;">
                                    Другие способы связи
                                </p>
                                <hr />
                                <div style="display: flex;">
                                    <div>
                                        <div style="display: flex;">
                                            <img style="align-self: flex-start;" width="45px" src="https://gu-st.ru/htdocs/img/landings/logo.svg" alt="">
                                            <p style="font-size: 36px;">
                                                Установите приложение и
                                                пользуйтесь госуслугами в любое время
                                            </p>
                                        </div>
                                        <p style="font-weight: bolder;">
                                            Скачать
                                        </p>
                                        <div style="display: flex;">
                                            <button style="display: flex; border: 1px solid rgb(175, 175, 175);" class="btn btn-light">
                                                <span style="align-self: center;" class="material-icons">
                                                    play_arrow
                                                </span>
                                                App Store
                                            </button>
                                            <button style="margin-left: 15px; display: flex; border: 1px solid rgb(175, 175, 175);" class="btn btn-light">
                                                <span style="align-self: center;" class="material-icons">
                                                    play_arrow
                                                </span>
                                                Google Play
                                            </button>
                                            <button style="margin-left: 15px; display: flex; border: 1px solid rgb(175, 175, 175);" class="btn btn-light">
                                                <span style="align-self: center;" class="material-icons">
                                                    play_arrow
                                                </span>
                                                App Gallery
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="https://gu-st.ru/htdocs/img/landings/phones_short.png" alt="">
                                    </div>
                                </div>
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
import Footer from "@/components/Footer.vue"

export default {
    name: 'Family',
    components: {
        Header,
        Footer
    }
}
</script>