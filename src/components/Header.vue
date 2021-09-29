<template>
    <div>
        <div style="margin: auto; background-color: rgb(0, 0, 155); width: 100%; height: 50px;">
            <div style="margin: auto; display: flex; flex-direction: row; justify-content: space-between; align-items: center; height: 100%;">
                <div style="margin: auto; flex-direction: row; width: 85%; align-items: center; align-self: center; justify-content: flex-end;">
                <div style="float: left; background-color: rgb(215, 215, 215);  background-image: url('https://svgsilh.com/svg/1297477-9e9e9e.svg'); width: 75px; background-size: 100% 100%;">
                    &nbsp;
                </div>
                <span style="float: left; color: rgb(200, 200, 200);" class="material-icons">
                    keyboard_arrow_down
                </span>
                <div @mouseenter="" class="hoverable" style="cursor: pointer; float: left; ">
                    Для граждан
                </div>
                <span style="float: left; color: rgb(200, 200, 200);" class="material-icons">
                    keyboard_arrow_down
                </span>
                </div>
                <div style="width: 300px;">
                <span class="material-icons" style="font-size: 18px; float: left; color: rgb(200, 200, 200);">
                    location_on
                </span>
                <div class="hoverable" style="cursor: pointer; float: left; ">
                    Электросталь г.
                </div>
                <img style="margin: 0px 15px; float: left;" width="25px" src="../assets/flag.png" alt="A">
                <div class="hoverable" style="float: left; ">
                    RUS
                </div>
                <span style="float: left; color: rgb(200, 200, 200);" class="material-icons">
                    keyboard_arrow_down
                </span>
                </div>
            </div>
            </div>
            
            <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-around; width: 100%; height: 75px; background-color: rgb(255, );">
            <div style="background-image: url('https://gu-st.ru/st/img/logo_nobeta.0a1f5dfe.svg'); height: 100%; width: 175px; background-size: 100% 100%;">
            </div>
            <div style="width: 250px; display: flex; flex-direction: row;  justify-content: space-between;">
                <p style="color: rgb(0, 0, 255);" @click="$router.push({ name: 'Services' })">Услуги</p>
                <p style="color: rgb(0, 0, 255);" @click="$router.push({ name: 'Services' })">Оплата</p>
                <p style="color: rgb(0, 0, 255);" @click="$router.push({ name: 'Services' })">Поддержка</p>
                <span style="color: rgb(0, 0, 255);" @click="$router.push({ name: 'Services' })" class="material-icons">
                search
                </span>
            </div>
            <p style="color: rgb(0, 0, 255);" @click="$router.push({ name: 'PersonalArea' })">Личный кабинет</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header"
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