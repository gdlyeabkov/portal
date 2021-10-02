<template>
    <div>
        <Header />
        <div style="background-color: rgb(235, 235, 235); ">
            <div style="margin: auto; width: 85%;">
                <div>
                    <h3>
                        Платежи
                    </h3>
                    <div style="display: flex;">
                        <div :style="`margin-left: 15px; display: flex; justify-content: center; align-items: center; border-radius: 10px; width: 125px; height: 50px; background-color: ${true ? 'rgb(220, 230, 245);' : 'transparent;'}`">
                            <span :style="`color: ${false ? 'rgb(0, 0, 255);' : 'rgb(0, 0, 0);'}`">
                                К оплате
                            </span>
                        </div>
                        <div :style="`margin-left: 15px; display: flex; justify-content: center; align-items: center; border-radius: 10px; width: 125px; height: 50px; background-color: ${false ? 'rgb(220, 230, 245);' : 'transparent;'}`">
                            <span :style="`color: ${true ? 'rgb(0, 0, 255);' : 'rgb(0, 0, 0);'}`">
                                По квитанции
                            </span>
                        </div>
                        <div :style="`margin-left: 15px; display: flex; justify-content: center; align-items: center; border-radius: 10px; width: 125px; height: 50px; background-color: ${false ? 'rgb(220, 230, 245);' : 'transparent;'}`">
                            <span :style="`color: ${true ? 'rgb(0, 0, 255);' : 'rgb(0, 0, 0);'}`">
                                История
                            </span>
                        </div>
                    </div>
                    <hr />
                    
                    <div style="display: flex; align-items: center; justify-content: center;">
                        <img width="150px" src="https://gu-st.ru/portal-st/assets/svg/pay/messages/no-bills.svg" alt="">
                        <div style="margin-left: 35px; width: 65%; display: flex; flex-direction: column;">
                            <span style="font-size: 24px; font-weight: bolder;">
                                Нет оплаченных начислений
                            </span>
                            <span>
                                Проверьте данные по которым производится поиск
                            </span>
                        </div>
                    </div>
                    <hr />
                    <h5>
                        Данные по которым происходит поиск начислений
                    </h5>
                    <h5>
                        Документы
                    </h5>
                    <div>
                        <div style="float: left; margin-left: 10px; display: flex; justify-content: space-around; align-items: center; width: 200px; height: 85px; background-color: rgb(255, 255, 255); border-radius: 10px;">
                            <span style="color: rgb(0, 155, 0);" class="material-icons-outlined">
                                check_circle
                            </span>
                            <span @click="" style="cursor: pointer;">
                                Паспорт РФ
                            </span>
                        </div>
                        <div style="float: left; margin-left: 10px; display: flex; justify-content: space-around; align-items: center; width: 200px; height: 85px; background-color: rgb(255, 255, 255); border-radius: 10px;">
                            <span style="color: rgb(0, 155, 0);" class="material-icons-outlined">
                                check_circle
                            </span>
                            <span @click="" style="cursor: pointer;">
                                СНИЛС
                            </span>
                        </div>
                        <div style="float: left; margin-left: 10px; display: flex; justify-content: space-around; align-items: center; width: 200px; height: 85px; background-color: rgb(255, 255, 255); border-radius: 10px;">
                            <span style="color: rgb(0, 155, 0);" class="material-icons-outlined">
                                check_circle
                            </span>
                            <span @click="" style="cursor: pointer;">
                                ИНН
                            </span>
                        </div>
                    </div>
                    <div style="clear: both; ">
                        
                    </div>
                    <div style="margin-top: 25px;">
                        <div style="float: left; margin-left: 10px; display: flex; justify-content: center; align-items: center; width: 300px; height: 85px; background-color: rgb(255, 255, 255); border: 3px dashed rgb(235, 235, 235); border-radius: 10px;">
                            <span @click="" style="cursor: pointer; color: rgb(0, 0, 255);">
                                Добавить ребёнка
                            </span>
                        </div>
                        <div style="float: left; margin-left: 10px; display: flex; justify-content: center; align-items: center; width: 300px; height: 85px; background-color: rgb(255, 255, 255); border: 3px dashed rgb(235, 235, 235); border-radius: 10px;">
                            <span @click="" style="cursor: pointer; color: rgb(0, 0, 255);">
                                Добавить ребёнка
                            </span>
                        </div>
                        <div style="float: left; margin-left: 10px; display: flex; justify-content: center; align-items: center; width: 300px; height: 85px; background-color: rgb(255, 255, 255); border: 3px dashed rgb(235, 235, 235); border-radius: 10px;">
                            <span @click="" style="cursor: pointer; color: rgb(0, 0, 255);">
                                Добавить ребёнка
                            </span>
                        </div>
                    </div>
                </div>
                <div style="clear: both;">
                    <h5>
                        Транспортные средства
                    </h5>
                    <div style="display: flex; justify-content: center; align-items: center; width: 300px; height: 85px; background-color: rgb(255, 255, 255); border: 3px dashed rgb(235, 235, 235); border-radius: 10px;">
                        <span @click="" style="cursor: pointer; color: rgb(0, 0, 255);">
                            Добавить транспорт
                        </span>
                    </div>
                </div>
                <div>
                    <h5>
                        Данные детей
                    </h5>
                    <div style="display: flex; justify-content: center; align-items: center; width: 300px; height: 85px; background-color: rgb(255, 255, 255); border: 3px dashed rgb(235, 235, 235); border-radius: 10px;">
                        <span @click="" style="cursor: pointer; color: rgb(0, 0, 255);">
                            Добавить ребёнка
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
    name: "Pay",
    components: {
        Header,
        Footer
    }
}
</script>