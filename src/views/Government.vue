<template>
  <div style=" background-color: rgb(175, 175, 175);">
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
        <p :style="`color: ${false ? 'rgb(0, 0, 0);' : 'rgb(0, 0, 255);'} font-weight: bolder; font-size: 24px;`">
          Категории услуг
        </p>
        <!-- <hr /> -->
      </div>
      <div :style="`width: 33%; ${true ? 'border-left: 1px solid rgb(175, 175, 175); border-right: 1px solid rgb(175, 175, 175); border-top: 1px solid rgb(175, 175, 175);' : 'border-bottom: 1px solid rgb(175, 175, 175);'}`">
        <!-- <hr /> -->
        <p :style="`color: ${true ? 'rgb(0, 0, 0);' : 'rgb(0, 0, 255);'} font-weight: bolder; font-size: 24px;`">
          Органы власти
        </p>
        <!-- <hr /> -->
      </div>
      <div :style="`width: 33%; ${false ? 'border-left: 1px solid rgb(175, 175, 175); border-right: 1px solid rgb(175, 175, 175); border-top: 1px solid rgb(175, 175, 175);' : 'border-bottom: 1px solid rgb(175, 175, 175);'}`">
        <!-- <hr /> -->
        <p :style="`color: ${false ? 'rgb(0, 0, 0);' : 'rgb(0, 0, 255);'} font-weight: bolder; font-size: 24px;`">
          Жизненные ситуации
        </p>
        <!-- <hr /> -->
      </div>
    </div>
    
    <div style="display: flex; justify-content: space-around;">
      
      <div style="display: flex; flex-direction: column;justify-content: center; alingn-items: center;">
        <div style="margin-top: 50px; display: flex; justify-content: center; align-items: center;">
          <img src="https://gu-st.ru/content/newportal/mainpage/icon_32/Gov_services.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            МВД России
          </h5>
        </div>
        <div style="margin-top: 50px; display: flex; justify-content: center; align-items: center;">
          <img src="https://gu-st.ru/content/newportal/mainpage/icon_32/Gov_services.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            ФНС России
          </h5>
        </div>
        <div style="margin-top: 50px; display: flex; justify-content: center; align-items: center;">
          <img src="https://gu-st.ru/content/newportal/mainpage/icon_32/Gov_services.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            МЧС России
          </h5>
        </div>
        <div style="margin-top: 50px; display: flex; justify-content: center; align-items: center;">
          <img src="https://gu-st.ru/content/newportal/mainpage/icon_32/Gov_services.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            ФСС России
          </h5>
        </div>
      </div>

      <div style="display: flex; flex-direction: column;justify-content: center; alingn-items: center;">
        <div style="margin-top: 50px; display: flex; justify-content: center; align-items: center;">
          <img src="https://gu-st.ru/content/newportal/mainpage/icon_32/Gov_services.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            ПФР России
          </h5>
        </div>
        <div style="margin-top: 50px; display: flex; justify-content: center; align-items: center;">
          <img src="https://gu-st.ru/content/newportal/mainpage/icon_32/Gov_services.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            ФССП России
          </h5>
        </div>
        <div style="margin-top: 50px; display: flex; justify-content: center; align-items: center;">
          <img src="https://gu-st.ru/content/newportal/mainpage/icon_32/Gov_services.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            Росреестр
          </h5>
        </div>
        <div style="margin-top: 50px; display: flex; justify-content: center; align-items: center;">
          <img src="https://gu-st.ru/content/newportal/mainpage/icon_32/Gov_services.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            Росавтодор
          </h5>
        </div>
      </div>

      <div style="display: flex; flex-direction: column;justify-content: center; alingn-items: center;">
        <div style="margin-top: 50px; display: flex; justify-content: center; align-items: center;">
          <img src="https://gu-st.ru/content/newportal/mainpage/icon_32/Gov_services.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            ГУВМ МВД России
          </h5>
        </div>
        <div style="margin-top: 50px; display: flex; justify-content: center; align-items: center;">
          <img src="https://gu-st.ru/content/newportal/mainpage/icon_32/Gov_services.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            Минздрав России
          </h5>
        </div>
        <div style="margin-top: 50px; display: flex; justify-content: center; align-items: center;">
          <img src="https://gu-st.ru/content/newportal/mainpage/icon_32/Gov_services.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            Роскомнадзор
          </h5>
        </div>
        <div style="margin-top: 50px; display: flex; justify-content: center; align-items: center;">
          <img src="https://gu-st.ru/content/newportal/mainpage/icon_32/Gov_services.svg" width="45px" alt="">
          <h5 style="margin-left: 25px;">
            Роспотребнадзор
          </h5>
        </div>
      </div>

    </div>

    <div>
      <hr>
      
      <div>
        <div style="display: flex; align-items: center; height: 75px;">
          <h5>
            Федеральные министерства, подведомственные им агентства, службы, надзоры 
          </h5>
          <span @click="supervisionToggler = !supervisionToggler" style="cursor: pointer; margin-left: 15px;" class="material-icons-outlined">
            expand_circle_down
          </span>
        </div>
        <div v-if="supervisionToggler">
          a
        </div>
        <hr>
      </div>

      <div>
        <div style="display: flex; align-items: center; height: 75px;">
          <h5>
            Федеральные службы и агентства 
          </h5>
          <span @click="agencyToggler = !agencyToggler" style="cursor: pointer; margin-left: 15px;" class="material-icons-outlined">
            expand_circle_down
          </span>
        </div>
        <div v-if="agencyToggler">
          b
        </div>
        <hr>
      </div>

      <div>
        <div style="display: flex; align-items: center; height: 75px;">
          <h5>
            Региональные органы исполнительной власти 
          </h5>
          <span  @click="govermentToggler = !govermentToggler" style="cursor: pointer; margin-left: 15px;" class="material-icons-outlined">
            expand_circle_down
          </span>
        </div>
        <div v-if="govermentToggler">
          c
        </div>
        <hr>
      </div>

      <div>
        <div style="display: flex; align-items: center; height: 75px;">
          <h5>
            Органы местного самоуправления 
          </h5>
          <span @click="selfGovernmentToggler = !selfGovernmentToggler" style="cursor: pointer; margin-left: 15px;" class="material-icons-outlined">
            expand_circle_down
          </span>
        </div>
        <div v-if="selfGovernmentToggler">
          d
        </div>
        <hr>
      </div>

      <div>
        <div style="display: flex; align-items: center; height: 75px;">
          <h5>
            Другие организации
          </h5>
          <span  @click="orgToggler = !orgToggler" style="cursor: pointer; margin-left: 15px;" class="material-icons-outlined">
            expand_circle_down
          </span>
        </div>
        <div v-if="orgToggler">
          e
        </div>
        <hr>
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
  name: 'Government',
  data(){
    return {
      supervisionToggler: false,
      agencyToggler: false,
      govermentToggler: false,
      selfGovernmentToggler: false,
      orgToggler: false,
    }
  },
  components: {
    Header,
    Breadcrumbs,
    Footer
  }
}
</script>