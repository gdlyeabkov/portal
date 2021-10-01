<template>
  <div style="background-color: rgb(245, 245, 245);">
        <div :style="`height: 5px; background-color: rgb(${color});`">

        </div>
        <div style="width: 45%; display: flex; align-items: center; justify-content: center; overflow: hidden; height: 45px;">
            <div style="display: flex; ">
                <span class="material-icons">
                    home
                </span>
                <p style="font-weight: bolder;">
                    Главная
                </p>
            </div>
            <span style="font-weight: 100; font-size: 65px; color: rgb(225, 225, 225);" class="material-icons">
                arrow_forward_ios
            </span>
            <p style="font-weight: bolder;">
                Категории услуг
            </p>
            <span style="font-weight: 100; font-size: 65px; color: rgb(225, 225, 225);" class="material-icons">
                arrow_forward_ios
            </span>
            <p>
                {{ title }}
            </p>
        </div>
  </div>
</template>

<script>
export default {
    name: 'Breadcrumbs',
    props: {
        color: {
            type: String,
            default : "255, 255, 0",
            required: false,
        },
        title: {
            type: String,
            default : "255, 255, 0",
            required: "Семья и дети",
        }
    }
}
</script>