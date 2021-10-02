<template>
  <div>
    <Header />
    <Breadcrumbs :color="'245, 245, 245'" :title="''" />
    <div style="display: flex; align-items: center; justify-content: space-around;">
      <div style="align-items: center; display: flex;">
        <h3>
          Каталог услуг
        </h3>
        <span style="font-size: 18px; font-weight: bolder ; margin-left: 15px; color: rgb(0, 0, 255); text-decoration: underline; text-decoration-line: dashed; ">
          Для граждан
        </span>
        <span class="material-icons" style="font-weight: bolder; color: rgb(0, 0, 255);" >
          expand_more
        </span>
      </div>
      <div style="display: flex;">
        <span style="font-size: 36px; color: rgb(0, 0, 255);" class="material-icons">
          how_to_reg
        </span>
        <p style="width: 375px;">
          <span style="color: rgb(0, 0, 255);">Узнайте, как получить электронную подпись</span> для доступа ко всем услугам
        </p>
      </div>
    </div>
      
    <div style="box-sizing:border-box; padding: 15px; display: flex; align-items: center; justify-content: center; margin: auto; width: 85%; height: 75px; background-color: rgb(215, 245, 245);">
      <input placeholder="Введите название услуги или ведомства" type="text" style="height: 50px;" class="form-control" name="" id="">
      <span style="font-size: 36px;" class="btn btn-primary material-icons">
        search
      </span>
    </div>
    
    <div style="margin-top: 50px; text-align: center; display: flex; justify-content: center; width: 85%; margin: auto; align-items: center;">
      <div :style="`width: 33%; ${false ? 'border-left: 1px solid rgb(175, 175, 175); border-right: 1px solid rgb(175, 175, 175); border-top: 1px solid rgb(175, 175, 175);' : 'border-bottom: 1px solid rgb(175, 175, 175);'}`">
        <!-- <hr /> -->
        <p @click="$router.push({ name: 'Services' })" :style="`cursor: pointer; color: ${false ? 'rgb(0, 0, 0);' : 'rgb(0, 0, 255);'} font-weight: bolder; font-size: 24px;`">
          Категории услуг
        </p>
        <!-- <hr /> -->
      </div>
      <div :style="`width: 33%; ${false ? 'border-left: 1px solid rgb(175, 175, 175); border-right: 1px solid rgb(175, 175, 175); border-top: 1px solid rgb(175, 175, 175);' : 'border-bottom: 1px solid rgb(175, 175, 175);'}`">
        <!-- <hr /> -->
        <p @click="$router.push({ name: 'Government' })" :style="`cursor: pointer; color: ${false ? 'rgb(0, 0, 0);' : 'rgb(0, 0, 255);'} font-weight: bolder; font-size: 24px;`">
          Органы власти
        </p>
        <!-- <hr /> -->
      </div>
      <div :style="`width: 33%; ${true ? 'border-left: 1px solid rgb(175, 175, 175); border-right: 1px solid rgb(175, 175, 175); border-top: 1px solid rgb(175, 175, 175);' : 'border-bottom: 1px solid rgb(175, 175, 175);'}`">
        <!-- <hr /> -->
        <p @click="$router.push({ name: 'LifeSituations' })" :style="`cursor: pointer; color: ${true ? 'rgb(0, 0, 0);' : 'rgb(0, 0, 255);'} font-weight: bolder; font-size: 24px;`">
          Жизненные ситуации
        </p>
        <!-- <hr /> -->
      </div>
    </div>

    <div style="display: flex; margin: auto; width: 100%; justify-content: center;">
      <div style="width: 35%; display: flex; flex-direction: column; align-items: center; ">
        <h5>
          Автомобиль
        </h5>
        <div style="background-color: rgb(215, 215, 215); width: 100%;">
          <p style="cursor: pointer; margin-left: 10px; margin-top: 15px; font-size: 20px;" @click="" >
            Документы
          </p>
          <p style="cursor: pointer; margin-left: 10px; margin-top: 15px; font-size: 20px;" @click="" >
            Недвижимость
          </p>
          <p style="cursor: pointer; margin-left: 10px; margin-top: 15px; font-size: 20px;" @click="" >
            Инвалидность
          </p>
          <p style="cursor: pointer; margin-left: 10px; margin-top: 15px; font-size: 20px;" @click="" >
            Образование
          </p>
          <p style="cursor: pointer; margin-left: 10px; margin-top: 15px; font-size: 20px;" @click="" >
            Пенсия
          </p>
          <p style="cursor: pointer; margin-left: 10px; margin-top: 15px; font-size: 20px;" @click="" >
            Путешествия
          </p>
          <p style="cursor: pointer; margin-left: 10px; margin-top: 15px; font-size: 20px;" @click="" >
            Работа
          </p>
          <p style="cursor: pointer; margin-left: 10px; margin-top: 15px; font-size: 20px;" @click="" >
            Семья
          </p>
          <p style="cursor: pointer; margin-left: 10px; margin-top: 15px; font-size: 20px;" @click="" >
            Правопорядок
          </p>
        </div>
      </div>
      <div style=" width: 65%;">
        
        <div style="margin-top: 35px; display: flex; justify-content: center;">
          <img width="75px" src="https://gu-st.ru/content/situation_icons/car_buy.svg" alt="">
          <div style="margin-left: 25px; color: rgb(0, 0, 255); display: flex; flex-direction: column;">
            <h5>
              Покупка и оформление автомобиля
            </h5>
            <span>
              Покупка и оформление нового автомобиля. Покупка и оформление поддержанного автомобиля
            </span>
          </div>
        </div>

        <div style="width: 75%; margin-top: 35px; display: flex; justify-content: center;">
          <img width="75px" src="https://gu-st.ru/content/situation_icons/car_sell.svg" alt="">
          <div style="margin-left: 25px; color: rgb(0, 0, 255); display: flex; flex-direction: column;">
            <h5>
              Продажа автомобиля салону или частному лицу
            </h5>
          </div>
        </div>

        <div style="margin-top: 35px; display: flex; justify-content: center;">
          <img width="75px" src="https://gu-st.ru/content/situation_icons/soderjanie.svg" alt="">
          <div style="width: 78%; margin-left: 25px; color: rgb(0, 0, 255); display: flex; flex-direction: column;">
            <h5>
              Содержание автомобиля
            </h5>
            <span>
              Что нужно делать ответственному автовладельцу, Восстановление госномеров, Эвакуация автомобиля, Лишение прав за нарушение правил дорожного движения.
            </span>
            <span>
              Все ситуации
            </span>
          </div>
        </div>

        <div style="margin-top: 35px; display: flex; justify-content: center;">
          <img width="75px" src="https://gu-st.ru/content/situation_icons/dtp.svg" alt="">
          <div style="width: 80%; margin-left: 25px; color: rgb(0, 0, 255); display: flex; flex-direction: column;">
            <h5>
              Дорожно-транспортное проишествие
            </h5>
          </div>
        </div>

        <div style="margin-top: 35px; display: flex; justify-content: center;">
          <img width="75px" src="https://gu-st.ru/content/situation_icons/first_driver_license.svg" alt="">
          <div style="width: 80%; margin-left: 25px; color: rgb(0, 0, 255); display: flex; flex-direction: column;">
            <h5>
              Получение водительского удостоверения впервые
            </h5>
          </div>
        </div>

        <div style="margin-top: 35px; display: flex; justify-content: center;">
          <img width="75px" src="https://gu-st.ru/content/situation_icons/posredniki.svg" alt="">
          <div style="width: 80%; margin-left: 25px; color: rgb(0, 0, 255); display: flex; flex-direction: column;">
            <h5>
              Госуслуги без посрдников
            </h5>
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
  name: 'LifeSituations',
  components: {
    Header,
    Breadcrumbs,
    Footer
  }
}
</script>