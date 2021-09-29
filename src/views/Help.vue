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
    name: "Help",
    components: {
        Header,
        Footer
    }
}
</script>