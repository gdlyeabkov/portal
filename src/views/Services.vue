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
      <div :style="`width: 33%; ${true ? 'border-left: 1px solid rgb(175, 175, 175); border-right: 1px solid rgb(175, 175, 175); border-top: 1px solid rgb(175, 175, 175);' : 'border-bottom: 1px solid rgb(175, 175, 175);'}`">
        <!-- <hr /> -->
        <p @click="$router.push({ name: 'Services' })" :style="`cursor: pointer; color: ${true ? 'rgb(0, 0, 0);' : 'rgb(0, 0, 255);'} font-weight: bolder; font-size: 24px;`">
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
      <div :style="`width: 33%; ${false ? 'border-left: 1px solid rgb(175, 175, 175); border-right: 1px solid rgb(175, 175, 175); border-top: 1px solid rgb(175, 175, 175);' : 'border-bottom: 1px solid rgb(175, 175, 175);'}`">
        <!-- <hr /> -->
        <p @click="$router.push({ name: 'LifeSituations' })" :style="`cursor: pointer; color: ${false ? 'rgb(0, 0, 0);' : 'rgb(0, 0, 255);'} font-weight: bolder; font-size: 24px;`">
          Жизненные ситуации
        </p>
        <!-- <hr /> -->
      </div>
    </div>

    <div style="display: flex; justify-content: space-around;">
      
      <div style="display: flex; flex-direction: column; width: 275px;">
        <div style="display: flex; flex-direction: row; color: rgb(0, 0, 255);">
          <img src="https://gu-st.ru/content/catalog/pas/3.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            Семья и дети
          </h5>
        </div>
        <span>
          Выплата компенсации стоимости путевок в детский лагерь, Регистрация брака, Регистрация рождения, Создание семьи, Рождение ребёнка
        </span>
        <span>
          Еще...
        </span>
      </div>

      <div style="display: flex; flex-direction: column; width: 275px;">
        <div style="display: flex; flex-direction: row; color: rgb(0, 0, 255);">
          <img src="https://gu-st.ru/content/catalog/pas/7.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            Паспорта, регистрации, визы
          </h5>
        </div>
        <span>
          Паспорт гражданина РФ, Загранпаспорт гражданина РФ, Регистрация по месту жительства или пребывания, Ваши документы утеряны или украдены?, Создание семьи
        </span>
        <span>
          Еще...
        </span>
      </div>

      <div style="display: flex; flex-direction: column; width: 275px;">
        <div style="display: flex; flex-direction: row; color: rgb(0, 0, 255);">
          <img src="https://gu-st.ru/content/catalog/pas/11.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            Транспорт и вождение
          </h5>
        </div>
        <span>
          Автомобильные и дорожные штрафы, Получение права на управление транспортным средством, Регистрация транспортного средства, Покупка и оформление автомобиля, Продажа автомобиля салону или частному лицу, Содержание автомобиля
        </span>
        <span>
          Еще...
        </span>
      </div>
    
    </div>
    <div style="display: flex; justify-content: space-around;">

      <div style="display: flex; flex-direction: column; width: 275px;">
        <div style="display: flex; flex-direction: row; color: rgb(0, 0, 255);">
          <img src="https://gu-st.ru/content/catalog/pas/56.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            Образование
          </h5>
        </div>
        <span>
          Подача заявления на поступление в вуз, Запись в детский сад, Предоставление предварительных результатов ЕГЭ, Получение образования, Поступление в вуз, Рождение ребёнка
        </span>
        <span>
          Еще...
        </span>
      </div>

      <div style="display: flex; flex-direction: column; width: 275px;">
        <div style="display: flex; flex-direction: row; color: rgb(0, 0, 255);">
          <img src="https://gu-st.ru/content/catalog/pas/16.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            Налоги и финансы
          </h5>
        </div>
        <span>
          Налоговая задолженность, Налоговый учет физических лиц, Прием налоговых деклараций, Как открыть своё дело, Имущественный налоговый вычет
        </span>
        <span>
          Еще...
        </span>
      </div>

      <div style="display: flex; flex-direction: column; width: 275px;">
        <div style="display: flex; flex-direction: row; color: rgb(0, 0, 255);">
          <img src="https://gu-st.ru/content/catalog/pas/22.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            Моё здоровье
          </h5>
        </div>
        <span>
          Дневник наблюдения за состоянием здоровья, Жалоба об отсутствии выплат медицинским работникам (Covid-19), Доступ к электронным медицинским документам, Рождение ребёнка, Инвалидность
        </span>
        <span>
          Еще...
        </span>
      </div>
    
    </div>
    <div style="display: flex; justify-content: space-around;">
    
      <div style="display: flex; flex-direction: column; width: 275px;">
        <div style="display: flex; flex-direction: row; color: rgb(0, 0, 255);">
          <img src="https://gu-st.ru/content/catalog/pas/26.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            Пенсия, пособия и льготы
          </h5>
        </div>
        <span>
          Выплата компенсации стоимости путевок в детский лагерь, Выплата 10 000 рублей на детей школьного возраста, Извещение о состоянии лицевого счета в ПФР, Пособия, выплаты и льготы семьям, имеющим детей, Помощь пенсионерам, Льготы по капремонту
        </span>
        <span>
          Еще...
        </span>
      </div>
    
      <div style="display: flex; flex-direction: column; width: 275px;">
        <div style="display: flex; flex-direction: row; color: rgb(0, 0, 255);">
          <img src="https://gu-st.ru/content/catalog/pas/29.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            Лицензии, справки, аккредитации
          </h5>
        </div>
        <span>
          Справка об отсутствии судимости, Получение выписок из реестров лицензий, Архивные справки МВД, Ваши документы утеряны или украдены?, Поиск работы и трудоустройство
        </span>
        <span>
          Еще...
        </span>
      </div>

      <div style="display: flex; flex-direction: column; width: 275px;">
        <div style="display: flex; flex-direction: row; color: rgb(0, 0, 255);">
          <img src="https://gu-st.ru/content/catalog/pas/45.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">            
            Безопасность и правопорядок
          </h5>
        </div>
        <span>
          Судебная задолженность, Лицензия на приобретение охотничьего гладкоствольного или пневматического оружия, а также патронов к нему, Разрешение на хранение и ношение оружия, Оружие и личная безопасность, Дорожно-транспортное происшествие, Ваши документы утеряны или украдены?
        </span>
        <span>
          Еще...
        </span>
      </div>

    </div>
    <div style="display: flex; justify-content: space-around;">

      <div style="display: flex; flex-direction: column; width: 275px;">
        <div style="display: flex; flex-direction: row; color: rgb(0, 0, 255);">
          <img src="https://gu-st.ru/content/catalog/pas/38.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            Работа и занятость
          </h5>
        </div>
        <span>
          Получение пособия по безработице и постановка на учет в центре занятости, Консультация по трудовому праву, Медицинская, социальная и профессиональная реабилитация , Как встать на учет в центре занятости, Как получить пособие по безработице, Поиск работы и трудоустройство
        </span>
        <span>
          Еще...
        </span>
      </div>

      <div style="display: flex; flex-direction: column; width: 275px;">
        <div style="display: flex; flex-direction: row; color: rgb(0, 0, 255);">
          <img src="https://gu-st.ru/content/catalog/pas/41.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            Культура, досуг, спорт
          </h5>
        </div>
        <span>
          Информация из библиотечных фондов, Выдача охотбилетов единого федерального образца, Справка об угрозе безопасности туристов, Отправляемся в путешествие, Получение образования
        </span>
        <span>
          Еще...
        </span>
      </div>

      <div style="display: flex; flex-direction: column; width: 275px;">
        <div style="display: flex; flex-direction: row; color: rgb(0, 0, 255);">
          <img src="https://gu-st.ru/content/catalog/pas/34.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            Бизнес, предпринимательство, НКО
          </h5>
        </div>
        <span>
          Регистрация юридических лиц и предпринимателей, Уведомление Роспотребнадзора, Подбор информации о недвижимом имуществе, Как открыть своё дело, Поиск работы и трудоустройство
        </span>
        <span>
          Еще...
        </span>
      </div>

    </div>
    <div style="display: flex; justify-content: space-around;">

      <div style="display: flex; flex-direction: column; width: 275px;">
        <div style="display: flex; flex-direction: row; color: rgb(0, 0, 255);">
          <img src="https://gu-st.ru/content/catalog/pas/46.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            Производство и торговля
          </h5>
        </div>
        <span>
          Сведения о добровольной сертификации
        </span>
        <span>
          Еще...
        </span>
      </div>

      <div style="display: flex; flex-direction: column; width: 275px;">
        <div style="display: flex; flex-direction: row; color: rgb(0, 0, 255);">
          <img src="https://gu-st.ru/content/catalog/pas/49.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            Информация, связь и реклама
          </h5>
        </div>
        <span>
          Присвоение радиочастот, Разрешение на установку рекламных конструкций
        </span>
        <span>
          Еще...
        </span>
      </div>

      <div style="display: flex; flex-direction: column; width: 275px;">
        <div style="display: flex; flex-direction: row; color: rgb(0, 0, 255);">
          <img src="https://gu-st.ru/content/catalog/pas/55.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            Природопользование и экология
          </h5>
        </div>
        <span>
          Информация о недрах, Выдача охотбилетов единого федерального образца, Заявка на подключение к сети газораспределения в рамках догазификации
        </span>
        <span>
          Еще...
        </span>
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
  components: {
    Header,
    Breadcrumbs,
    Footer
  }
}
</script>