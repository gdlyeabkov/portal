<template>
  <div>
    <Header />
    <div style="display: flex; justify-content: center; align-items: center; background-color: rgb(255, 245, 235); height: 45px; width: 100%;">
      <div style="display: flex; align-items: center; height: 100%; width: 25%;">
        <p style="align-self: center; color: rgb(255, 150, 0);" class="material-icons-outlined">
          info
        </p>
        <p style="align-self: center; margin-left: 15px;">Попробуйте бета-версию новых Госуслуг</p>
      </div>
    </div>

    <div style="display: flex; justify-content: space-around; align-items: center; width: 100%; height: 300px; background-color: rgb(235, 235, 235);">
      <div style="width: 315px; height: 225px; background-color: rgb(255, 255, 255);">
        <p style="font-size: 24px;">
          Подведение газа к участку
        </p>
        <div style="display: flex; flex-direction: row;">
          <p>
            Онлайн-заявка на
            бесплатное
            подключение к сети
            газораспределения
          </p>
          <img src="https://gu-st.ru/htdocs/img/new-payments/gaz.svg" alt="">
        </div>
      </div>
      <div style="width: 315px; height: 225px; background-color: rgb(255, 255, 255);">
        <p style="font-size: 24px;">
          Выплаты беременным
        </p>
        <div style="display: flex; flex-direction: row;">
          <p>
            В трудном финансовом
            положении и при
            постановке на учёт
            до 12 недель
          </p>
          <img src="https://gu-st.ru/htdocs/img/new-payments/pregnancy.svg" alt="">
        </div>
      </div>
      <div style="width: 315px; height: 225px; background-color: rgb(255, 255, 255);">
        <p style="font-size: 24px;">
          Выплаты родителям
        </p>
        <div style="display: flex; flex-direction: row;">
          <p>
            На детей от 8 до 17 лет
            при доходе семьи ниже
            прожиточного
            минимума
          </p>
          <img src="https://gu-st.ru/htdocs/img/new-payments/single-parent.svg" alt="">
        </div>
      </div>
    </div>
    
    <div style="background-color: rgb(200, 255, 255);">
      <img src="https://gu-st.ru/content/Banner/coronavirus_landing_desk.svg" alt="">
    </div>

    <div style="width: 100%; height: 475px; background-color: rgb(100, 0, 245);">
      <div style="width: 85%; margin: auto; display: flex; justify-content: space-around;">
        <div style="width: 65%;">
          <input type="text" placeholder="Введите название услуги или ведомства" style="margin: 15px 0px;" class="form-control">
          <p style="color: rgb(255, 255, 255); font-size: 18px; font-weight: bolder;">
            Рекомендуем для жителей Московской области
          </p>
          <div style="display: flex; justify-content: space-around;">
            <div>
              <p style="color: rgb(255, 255, 255);">
                Проверка штрафов
              </p>
              <p style="color: rgb(255, 255, 255);">
                Справка об отсутствии судимости
              </p>
            </div>
            <div>
              <p style="color: rgb(255, 255, 255);">
                Получение загранпаспорта
              </p>
              <p style="color: rgb(255, 255, 255);">
                Запись к врачу
              </p>
            </div>
            <div>
              <p style="color: rgb(255, 255, 255);">
                Родители и дети
              </p>
              <p style="color: rgb(255, 255, 255);">
                Восстановление документов
              </p>
            </div>
          
          </div>
          <hr />
          <div style="width: 100%; display: flex; justify-content: space-around; align-items: center">
            <div v-if="serviceCursor === 0">
              <img src="https://gu-st.ru/content/Banner/ic_gasification_main.svg" alt="">
              <div style="color: rgb(255, 255, 255);">
                <p>
                  Подайте заявку на подключение к газу
                </p>
                <p>
                  Если участок находится в газифицированном населённом пункте
                </p>
              </div>
            </div>
            <div v-else-if="serviceCursor === 1">
              <img src="https://gu-st.ru/content/Banner/10vaccination.svg" alt="">
              <div style="color: rgb(255, 255, 255);">
                <p>
                  100 тысяч рублей за прививку от COVID-19
                </p>
                <p>
                  Найдите себя в списке выигравших
                </p>
              </div>
            </div>
            <div v-else-if="serviceCursor === 2">
              <img src="https://gu-st.ru/content/Banner/complaints.svg" style="width: 45px; height: 45px;" alt="">
              <div style="color: rgb(255, 255, 255);">
                <p>
                  Сообщите о проблеме с вакцинацией или лечением от коронавируса
                </p>
                <p>
                  Не смогли записаться на вакцинацию, получить сертификат или QR-код? Есть проблемы с получением медицинской помощи? Сообщите об этом
                </p>
              </div>
            </div>
            <div v-else-if="serviceCursor === 3">
              <img src="https://gu-st.ru/content/Banner/mp_auto_icon.svg" alt="">
              <div style="color: rgb(255, 255, 255);">
                <p>
                  Новое приложение «Госуслуги Авто»
                </p>
                <p>
                  Электронные документы и сервисы для автовладельцев
                </p>
              </div>
            </div>
            <div v-else-if="serviceCursor === 4">
              <img  src="https://gu-st.ru/content/Banner/complaints.svg" style="width: 45px; height: 45px;" alt="">
              <div style="color: rgb(255, 255, 255);">
                <p>
                  Сообщить о проблеме
                </p>
                <p>
                  Столкнулись с проблемой — напишите о ней. Сообщение попадёт сразу в нужное ведомство, а вы сможете оценить результат
                </p>
              </div>
            </div>
            <div v-else-if="serviceCursor === 5">
              <img src="https://gu-st.ru/content/main_banner/mir_main_old.svg" alt="">
              <div style="color: rgb(255, 255, 255);">
                <p>
                  Штрафы без комиссии по карте «Мир»
                </p>
                <p>
                  Не платите лишнего
                </p>
              </div>
            </div>
            <div v-else-if="serviceCursor === 6">
              <img src="https://gu-st.ru/content/main_banner/banner_job.svg" alt="">
              <div style="color: rgb(255, 255, 255);">
                <p>
                  Работа в Минцифры
                </p>
                <p>
                  Начни карьеру в правильном министерстве!
                </p>
              </div>
            </div>
            <span style="align-self: flex-start; color: rgb(255, 255, 255);" class="material-icons-outlined">
              close
            </span>
          </div>
          <div style="display: flex; align-items: center">
            <span @click="seekServiceCursor(false)" style="cursor: pointer; color: rgb(255, 255, 255);" class="material-icons-outlined">
              chevron_left
            </span>
            <div v-for="circleIdx in serviceCursor + 1">
              <span style="margin: 0px 5px; color: rgb(255, 255, 255); font-size: 12px;" class="material-icons">
                circle
              </span>
            </div>
            <div v-for="circleOutlineIdx in (6 - serviceCursor)">
              <span style="margin: 0px 5px; color: rgb(255, 255, 255); font-size: 12px;" class="material-icons-outlined">
                circle
              </span>
            </div>
            <span @click="seekServiceCursor(true)" style="cursor: pointer; color: rgb(255, 255, 255);" class="material-icons-outlined">
              chevron_right
            </span>
          </div>
        </div>
        <div style="width: 25%;">
          <p style="color: rgb(255, 255, 255); font-size: 18px; font-weight: bolder;">Вход в госуслуги</p>
          <hr/>
          <p style="color: rgb(255, 255, 255); ">Войдите или зарегистрируйтесь, чтобы получить полный доступ к электронным госуслугам</p>
          <button style="display: block; width: 250px; padding: 10px; margin: 10px auto" class="btn btn-light">Войти</button>
          <button style="display: block; margin: auto; width: 250px; padding: 10px;" class="btn btn-primary">Зарегистрироваться</button>
          <a style="text-align: center; display: block; margin: auto; color: rgb(255, 255, 255); " href="">Как зарегистрироваться</a>
        </div>
      </div>
    </div>
    <div>
      <div style="display: flex; flex-direction: row; justify-content: space-between;">
        <p style="font-size: 24px;">
          Популярное на портале
        </p>
        <div style="display: flex; flex-direction: row; justify-content: center; font-size: 20px;">
          <p @click="toggleServiceType(false)" style="text-decoration: underline; text-decoration-color: rgb(0, 0, 255);">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Услуги
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <p @click="toggleServiceType(true)" style="text-decoration: underline; color: rgb(0, 0, 255); text-decoration-color: rgb(175, 175, 175);">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Жизненные ситуации
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
        </div>
      </div>
      <p style="font-size: 12px;">
        для <span style="color: rgb(0, 0, 255); text-decoration-line: underline; text-decoration-style: dashed;">Московской области</span>
      </p>
      <div v-if="!servicesTypeToggler">
        <div style="margin: 30px 0px; display: flex;  flex-direction: row; justify-content: space-around; width: 100%;">
          <div style="display: flex; flex-direction: row; justify-content: center; width: 25%;">
            <div style="background-image: url('https://gu-st.ru/content/Icons/Vector2.svg'); width: 75px; height: 75px; background-size: 100% 100%; align-self: center;">

            </div>
            <p style="margin-left: 15px; align-self: center;">
              Ежемесячная выплата на детей от 8 до 17 лет >
            </p>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: center; width: 25%;">
            <div style="background-image: url('https://gu-st.ru/content/Icons/Vector3.svg'); width: 75px; height: 75px; background-size: 100% 100%; align-self: center;">

            </div>
            <p style="margin-left: 15px; align-self: center;">
              Выплата 10 000 рублей на детей школьного возраста >
            </p>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: center; width: 25%;">
            <div style="background-image: url('https://gu-st.ru/content/Icons/Vector.svg'); width: 75px; height: 75px; background-size: 100% 100%; align-self: center;">

            </div>
            <p style="margin-left: 15px; align-self: center;">
              Ежемесячная выплата женщинам, вставшим на учет в ранние сроки беременности лет >
            </p>
          </div>
        </div>
        <div style="margin: 30px 0px; display: flex;  flex-direction: row; justify-content: space-around; width: 100%;">
          <div style="display: flex; flex-direction: row; justify-content: center; width: 25%;">
            <div style="background-image: url('https://gu-st.ru/content/Icons/posobie-3-7.f2076f5e54e18d309057.svg'); width: 75px; height: 75px; background-size: 100% 100%; align-self: center;">

            </div>
            <p style="margin-left: 15px; align-self: center;">
              Ежемесячная выплата на детей от 3 до 7 лет >
            </p>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: center; width: 25%;">
            <div style="background-image: url('https://gu-st.ru/content/catalog/pas/45.svg'); width: 75px; height: 75px; background-size: 100% 100%; align-self: center;">

            </div>
            <p style="margin-left: 15px; align-self: center;">
              Судебная задолженость >
            </p>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: center; width: 25%;">
            <div style="background-image: url('https://gu-st.ru/content/coronastop.svg'); width: 75px; height: 75px; background-size: 100% 100%; align-self: center;">

            </div>
            <p style="margin-left: 15px; align-self: center;">
              Регистрация пребывающиз в Российскую Федерацию >
            </p>
          </div>
        </div>
        <div style="margin: 30px 0px; display: flex;  flex-direction: row; justify-content: space-around; width: 100%;">
          <div style="display: flex; flex-direction: row; justify-content: center; width: 25%;">
            <div style="background-image: url('https://gu-st.ru/content/catalog/pas/Education.svg'); width: 75px; height: 75px; background-size: 100% 100%; align-self: center;">

            </div>
            <p style="margin-left: 15px; align-self: center;">
              Бесплатное горячее питание для учащизся младших классов >
            </p>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: center; width: 25%;">
            <div style="background-image: url('https://gu-st.ru/content/Icons/knd.svg'); width: 75px; height: 75px; background-size: 100% 100%; align-self: center;">

            </div>
            <p style="margin-left: 15px; align-self: center;">
              Жалоба на решение контрольных органов >
            </p>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: center; width: 25%;">
            <div style="background-image: url('https://gu-st.ru/content/catalog/pas/health_doctor.svg'); width: 75px; height: 75px; background-size: 100% 100%; align-self: center;">

            </div>
            <p style="margin-left: 15px; align-self: center;">
              Запись на приём к врачу >
            </p>
          </div>
        </div>
        <div style="display: flex; justify-content: center; width: 100%; ">
          <button class="w-25 btn btn-primary">
            Все услуги
          </button>
        </div>
      </div>
      <div v-else>
        <div style="margin: 30px 0px; display: flex;  flex-direction: row; justify-content: space-around; width: 100%;">
          <div style="display: flex; flex-direction: row; justify-content: center; width: 25%;">
            <div style="background-image: url('https://gu-st.ru/content/GS/Icon_3.svg'); width: 75px; height: 75px; background-size: 100% 100%; align-self: center;">

            </div>
            <p style="margin-left: 15px; align-self: center;">
              Утеря документов >
            </p>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: center; width: 25%;">
            <div style="background-image: url('https://gu-st.ru/content/situation_icons/regbiz.svg'); width: 75px; height: 75px; background-size: 100% 100%; align-self: center;">

            </div>
            <p style="margin-left: 15px; align-self: center;">
              Как открыть своё дело >
            </p>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: center; width: 25%;">
            <div style="background-image: url('https://gu-st.ru/content/situation_icons/GS_birth.svg'); width: 75px; height: 75px; background-size: 100% 100%; align-self: center;">

            </div>
            <p style="margin-left: 15px; align-self: center;">
              Рождение ребёнка >
            </p>
          </div>
        </div>
        <div style="margin: 30px 0px; display: flex;  flex-direction: row; justify-content: space-around; width: 100%;">
          <div style="display: flex; flex-direction: row; justify-content: center; width: 25%;">
            <div style="background-image: url('https://gu-st.ru/content/situation_icons/car_buy.svg'); width: 75px; height: 75px; background-size: 100% 100%; align-self: center;">

            </div>
            <p style="margin-left: 15px; align-self: center;">
              Покупка и оформление автомобиля >
            </p>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: center; width: 25%;">
            <div style="background-image: url('https://gu-st.ru/content/situation_icons/marriage.svg'); width: 75px; height: 75px; background-size: 100% 100%; align-self: center;">

            </div>
            <p style="margin-left: 15px; align-self: center;">
              Создание семьи >
            </p>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: center; width: 25%;">
            <div style="background-image: url('https://gu-st.ru/content/situation_icons/Icon_8.svg'); width: 75px; height: 75px; background-size: 100% 100%; align-self: center;">

            </div>
            <p style="margin-left: 15px; align-self: center;">
              Поиск работы и трудоустройство >
            </p>
          </div>
        </div>
        <div style="margin: 30px 0px; display: flex;  flex-direction: row; justify-content: space-around; width: 100%;">
          <div style="display: flex; flex-direction: row; justify-content: center; width: 25%;">
            <div style="background-image: url('https://gu-st.ru/content/GS/Icon_2.svg'); width: 75px; height: 75px; background-size: 100% 100%; align-self: center;">

            </div>
            <p style="margin-left: 15px; align-self: center;">
              Помощь пенсионерам >
            </p>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: center; width: 25%;">
            <div style="background-image: url('https://gu-st.ru/content/situation_icons/house_buy.svg'); width: 75px; height: 75px; background-size: 100% 100%; align-self: center;">

            </div>
            <p style="margin-left: 15px; align-self: center;">
              Приобритение жилой недвижимости >
            </p>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: center; width: 25%;">
            <div style="background-image: url('https://gu-st.ru/content/GS/journey.svg'); width: 75px; height: 75px; background-size: 100% 100%; align-self: center;">

            </div>
            <p style="margin-left: 15px; align-self: center;">
              Отправляемся в путешествие >
            </p>
          </div>
        </div>
        <div style="display: flex; justify-content: center; width: 100%; ">
          <button class="w-25 btn btn-primary">
            Все жизненные ситуации
          </button>
        </div>
      </div>
      
      <div style="background-color: rgb(215, 215, 215); width: 100%; padding: 15px 0px;">
        <p style="font-size: 28px; font-weight: bolder;">
          Частые вопросы
        </p>
        <div style="margin-top: 50px; display: flex; justify-content: space-around;">
          <div style="display: flex; flex-direction: column; width: 25%;">
            <p style="font-weight: bolder; font-size: 18px;">
              О получении услуг
            </p>
            <p style="color: rgb(0, 0, 255); cursor: pointer;">
              Как записаться на прием к врачу
            </p>
            <p style="color: rgb(0, 0, 255); cursor: pointer;">
              Как получить загранпаспорт
            </p>
            <p style="color: rgb(0, 0, 255); cursor: pointer;">
              У кого возникает право на материнский капитал
            </p>
            <p style="color: rgb(0, 0, 255); cursor: pointer;">
              Как записать ребенка в детский сад
            </p>
            <button style="width: 200px;" class="btn btn-light">
              Все вопросы о получении услуг
            </button>
          </div>
          <div style="display: flex; flex-direction: column; width: 25%;">
            <p style="font-weight: bolder; font-size: 18px;">
              Об оплате
            </p>
            <p style="color: rgb(0, 0, 255); cursor: pointer;">
              Как оплатить госпошлину на Госуслугах
            </p>
            <p style="color: rgb(0, 0, 255); cursor: pointer;">
              Что можно оплатить на Госуслугах
            </p>
            <p style="color: rgb(0, 0, 255); cursor: pointer;">
              Как получить скидку 30% на оплату госпошлины
            </p>
            <p style="font-weight: bolder; font-size: 18px;">
              Как работать с порталом
            </p>
            <p style="color: rgb(0, 0, 255); cursor: pointer;">
              Зачем нужен личный кабинет
            </p>
            <p style="color: rgb(0, 0, 255); cursor: pointer;">
              Как получить подтверждённую учётную запись
            </p>
            <p style="color: rgb(0, 0, 255); cursor: pointer;">
              Регистрация на Госуслугах
            </p>
          </div>
          <div style="display: flex; flex-direction: column; width: 25%;">  
            <p style="font-weight: bolder; font-size: 18px;">
              Что-то пошло не так?
            </p>
            <p style="color: rgb(0, 0, 255); cursor: pointer;">
              Почему паспортные данные не проходят проверку
            </p>
            <p style="color: rgb(0, 0, 255); cursor: pointer;">
              Почему не получается погасить судебную задолженность
            </p>
            <p style="color: rgb(0, 0, 255); cursor: pointer;">
              Нужно ли показывать квитанцию об оплате госпошлины
            </p>
            <p style="color: rgb(0, 0, 255); cursor: pointer;">
              Как обжаловать штраф за парковку или нарушение ПДД
            </p>
          </div>
        </div>
        <hr />
        <div style="display: flex; justify-content: center;">
          <button class="btn btn-primary">
            Все частые вопросы
          </button>
        </div>
      </div>

      <div style="background-color: rgb(235, 235, 235); width: 100%; padding: 15px 0px;">
        <p style="font-size: 28px; font-weight: bolder;">
          Интересно и полезно
        </p>
        <div style="margin-top: 50px; display: flex; justify-content: space-around;">
          <div style="display: flex; flex-direction: column; width: 25%; height: 275px;">
            <div style="background-image: url('https://gu-st.ru/content/annotation/MP_avto_small.png'); width: 100%; height: 100%; background-size: 100% 100%; align-self: center;">

            </div>
            <p style="font-weight: bolder; font-size: 18px;">
              «Новое приложение Госуслуги Авто«
            </p>
            <p style="color: rgb(175, 175, 175); cursor: pointer;">
              Электронные документы и сервисы для автовладельцев
            </p>
            <div style="display: flex; justify-content: space-between;">
              <p style="color: rgb(175, 175, 175); cursor: pointer;">
                09.09.2021
              </p>
              <div style="display: flex; align-items: flex-start; align-self: center;">
                <span class="material-icons">
                  visibility
                </span>
                <p style="margin: 0px 15px; color: rgb(175, 175, 175); cursor: pointer;">
                  58347
                </p>
              </div>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; width: 25%;">
            <div style="background-image: url('https://gu-st.ru/content/annotation/universities_additional_stage_small.png'); width: 100%; height: 100%; background-size: 100% 100%; align-self: center;">

            </div>
            <p style="font-weight: bolder; font-size: 18px;">
              Вузы проводят дополнительный этап зачисления
            </p>
            <p style="color: rgb(175, 175, 175); cursor: pointer;">
              У абитуриентов есть ещё один шанс 
            </p>
            <div style="display: flex; justify-content: space-between;">
              <p style="color: rgb(175, 175, 175); cursor: pointer;">
                19.08.2021
              </p>
              <div style="display: flex; align-items: flex-start; align-self: center;">
                <span class="material-icons">
                  visibility
                </span>
                <p style="margin: 0px 15px; color: rgb(175, 175, 175); cursor: pointer;">
                  66494
                </p>
              </div>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; width: 25%;">  
            <div style="background-image: url('https://gu-st.ru/content/News/small_old_ipoteka_odin_rebenok.png'); width: 100%; height: 100%; background-size: 100% 100%; align-self: center;">

            </div>
            <p style="font-weight: bolder; font-size: 18px;">
              «Семейная ипотека» — теперь для семей с одним ребёнком
            </p>
            <p style="color: rgb(175, 175, 175); cursor: pointer;">
              Изменения в программе с июля 2021 года 
            </p>
            <div style="display: flex; justify-content: space-between;">
              <p style="color: rgb(175, 175, 175); cursor: pointer;">
                28.07.2021
              </p>
              <div style="display: flex; align-items: flex-start; align-self: center;">
                <span class="material-icons">
                  visibility
                </span>
                <p style="margin: 0px 15px; color: rgb(175, 175, 175); cursor: pointer;">
                  147889
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div style="display: flex; justify-content: center;">
          <button class="btn btn-primary">
            Все материалы
          </button>
        </div>
      </div>

      <div style="padding: 15px 0px; width: 100%; background-color: rgb(0, 0, 155); color: rgb(255, 255, 255);">
        <p style="font-size: 24px; font-weight: bolder;">
          Портал государственных услуг
        </p>
        <p>
          для жителей <span style="text-decoration-line: underline; text-decoration-style: dashed; text-decoration-color: rgb(255, 255, 255);">Московской области</span>
        </p>
        <div style="display: flex; justify-content: space-around;">
          <p style="align-self: center;">
            Госуслуги – Единый портал государственных услуг и функций (ЕПГУ),
            где у каждого гражданина есть возможность:
          </p>
          <p style="align-self: center; font-size: 18px; font-weight: bolder;">
            Статистика портала Госуслуг за 2019 год:
          </p>
        </div>
        <div style="display: flex; justify-content: space-around;">
          <div>
            <p>
              - узнать информацию о государственных и муниципальных услугах;
            </p>
            <p>
              - заказать госуслуги в электронной форме;
            </p>
            <p>
              - записаться на приём в ведомство;
            </p>
            <p>
              - оплатить любым электронным способом штрафы Госавтоинспекции,
                судебные и налоговые задолженности, госпошлины, услуги ЖКХ;
            </p>
            <p>
              - оценить качество предоставления госуслуг.
            </p>
          </div>
          <div style="display: flex;">
            <span style="font-size: 54px;" class="material-icons-outlined">
              description
            </span>
            <div style="display: flex; flex-direction: column; width: 175px;">
              <p style="font-weight: bolder; font-size: 24px;">
                1,8 млрд
              </p>
              <p style="font-size: 14px;">
                услуг заказано через сайт Госуслуг и мобильное приложение
              </p>
            </div>
          </div>
          <div style="display: flex;">
            <span style="font-size: 54px;" class="material-icons-outlined">
              person_outline
            </span>
            <div style="display: flex; flex-direction: column; width: 175px;">
              <p style="font-weight: bolder; font-size: 24px;">
                1,8 млрд
              </p>
              <p style="font-size: 14px;">
                услуг заказано через сайт Госуслуг и мобильное приложение
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div style="display: flex; justify-content: center;">
          <span style="text-decoration-line: underline; text-decoration-style: dashed;">Подробнее</span>
          <span class="material-icons-outlined">
            expand_more
          </span>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

import * as jwt from 'jsonwebtoken'

export default {
  name: 'Home',
  data(){
    return {
      servicesTypeToggler: false,
      serviceCursor: 0,
      currentCitizen: '',
      citizenIsLogin: false,
      token: '',
    }
  },
  methods: {
    seekServiceCursor(direction){
      if(!direction && this.serviceCursor >= 1){
        this.serviceCursor--
      } else if(direction && this.serviceCursor <= 5) {
        this.serviceCursor++
      }
    },
    toggleServiceType(serviceTypeValue){
      this.servicesTypeToggler = serviceTypeValue
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped>
  .hoverable {
    color: rgb(255, 255, 255);
  }
  .hoverable:hover {
    color: rgb(255, 255, 255);
    background-color: "rgb(255, 215, 255)";
  }
</style>