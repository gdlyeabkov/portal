<template>
  <div>
        <PersonalAreaHeader />
        <div>
            <h3>
                Ваши роли и организации
            </h3>
            <div style="background-color: rgb(245, 245, 245); box-shadow: 0 0 15px solid rgb(215, 215, 215); width: 675px; height: 125px; display: flex; align-items: center;">
                <div style="width: 60px; height: 60px; background-color: rgb(245, 245, 245); border-radius: 100%; margin-left: 25px; background-image: url('https://icon-library.com/images/user-icon/user-icon-17.jpg'); background-size: 100% 100%;">

                </div>
                
                <div style="margin-left: 25px; width: 60%;">
                    <h5>
                        Дьяков Родион Сергеевич
                    </h5>
                    <span>
                        Частное лицо
                    </span>
                </div>
                <span style="background-color: rgb(225, 225, 225); border-radius: 10px; padding: 10px 25px;">
                    Текущая роль
                </span>
            </div>
            <div style="display: flex; justify-content: space-around;">
                <div style="width: 350px; height: 100px; background-color: rgb(200, 200, 200); border: 1px solid rgb(175, 175, 175); display: flex; flex-direction: column; color: rgb(0, 0, 255); align-items: center;">
                    <span class="material-icons" style="font-size: 48px;">
                        control_point
                    </span>
                    <span>
                        Создать учётную запись предпринимателя
                    </span>
                </div>
                <div style="width: 350px; height: 100px; background-color: rgb(200, 200, 200); border: 1px solid rgb(175, 175, 175); display: flex; flex-direction: column; color: rgb(0, 0, 255); align-items: center;">
                    <span class="material-icons" style="font-size: 48px;">
                        control_point
                    </span>
                    <span>
                        Создать учётную запись организации
                    </span>
                </div>
            </div>
        </div>
        <PersonalAreaFooter />
  </div>
</template>

<script>
import PersonalAreaHeader from '@/components/PersonalAreaHeader.vue'
import PersonalAreaFooter from '@/components/PersonalAreaFooter.vue'

export default {
    name: 'Company',
    components: {
        PersonalAreaHeader,
        PersonalAreaFooter
    }
}
</script>

<style>

</style>