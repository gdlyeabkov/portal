<template>
    <div>
        <PersonalAreaHeader />
        <div style="background-color: rgb(245, 245, 245);">
            <div style="position: relative; top: 0px; width: 85%; margin: auto; height: 830px;">
                <h3>
                    Профиль
                </h3>
                <div style="display: flex; margin-top: 35px;">
                    <div>
                        <p :style="`font-weight: bolder; color: ${true ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            Учётная запись
                        </p>
                        <p :style="`font-weight: bolder; color: ${false ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            Банковские карты и счета
                        </p>
                        <p :style="`font-weight: bolder; color: ${false ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            Электронная подпись
                        </p>
                        <p :style="`font-weight: bolder; color: ${false ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            Согласия и доверенности
                        </p>
                        <p :style="`font-weight: bolder; color: ${false ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            Безопасность
                        </p>
                        <p :style="`font-weight: bolder; color: ${false ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 255)'}`">
                            Биометрия
                        </p>
                    </div>
                    <div style="margin-left: 125px; width: 65%;">
                        <div style="">
                            
                            <h3>
                                {{ currentCitizen }}
                            </h3>
                            <p>
                                Телефон
                            </p>
                            <div style="display: flex; justify-content: space-between; width: 250px;">
                                <span class="material-icons" style="color: rgb(0, 155, 0);">
                                    check_circle
                                </span>    
                                <p>
                                    {{ currentCitizen }}
                                </p>
                                <p style="color: rgb(0, 0, 255); font-weight: bolder;">
                                    Изменить
                                </p>
                            </div>
                            <p>
                                Электронная почта
                            </p>
                            <div style="display: flex; justify-content: space-between; width: 250px;">
                                <span class="material-icons" style="color: rgb(175, 175, 175);">
                                    check_circle
                                </span>    
                                <p>
                                    Не указана
                                </p>
                                <p style="color: rgb(0, 0, 255); font-weight: bolder;">
                                    
                                </p>
                            </div>
                            
                            <div style="background-color: rgb(255, 255, 255); height: 250px; border: 1px solid rgb(175, 175, 175); border-radius: 10px; box-sizing: border-box; padding: 10px;">
                                <p>
                                    Новый адрес
                                </p>
                                <p>
                                    {{ email }}
                                </p>
                                <p>
                                    На эту электронную почту придёт письмо с ссылкой для подтверждения
                                </p>
                                <button style="border-radius: 10px; border: 2px solid rgb(0, 0, 255); height: 50px;" class="btn btn-primary">
                                    Отправить повторно
                                </button>
                                <button style="border-radius: 10px; border: 2px solid rgb(0, 0, 255); height: 50px; margin-left: 15px;" class="btn btn-light w-25">
                                    Отменить
                                </button>
                            </div>

                            <p>
                                Пароль
                            </p>
                            <div style="display: flex; justify-content: space-between; width: 250px;">
                                <span class="material-icons" style="color: rgb(0, 155, 0);">
                                    check_circle
                                </span>    
                                <p>
                                    ****************
                                </p>
                                <p @click="newPasswordDisabled = !newPasswordDisabled" style="cursor: pointer; color: rgb(0, 0, 255); font-weight: bolder;">
                                    Изменить
                                </p>
                            </div>

                            <input :disabled="newPasswordDisabled" class="w-25 form-control" type="password" v-model="newPassword">
                            
                            <hr/>

                            <div style="box-sizing: border-box; padding: 5px 15px; width: 775px; height: 75px; background-color: rgb(255, 255, 255); border-radius: 10px;">
                                <h5>
                                    У вас “Подтвержденная” учетная запись
                                </h5>
                                <p>
                                    Вам доступны все сервисы и услуги
                                </p>
                            </div>
                        
                            <hr>
                            <p style="color: rgb(0, 0, 255);">
                                Удаление учётной записи
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div style="font-weight: bolder; align-items: center; border-radius: 10px 10px 0px 0px; display: flex; justify-content: space-around; color: rgb(255, 255, 255); float: right; background-color: rgb(0, 0, 255); height: 50px; width: 275px;">
                    <span style="align-self: center;">
                        Задать вопрос
                    </span>
                    <span class="material-icons">
                        close
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

import * as jwt from 'jsonwebtoken'

export default {
    name: 'PersonalArea',
    data(){
        return {
            currentCitizen: 'ad',
            token: window.localStorage.getItem("portaltoken"),
            citizenIsLogin: false,
            email: 'rodhitroumnyi@mail.ru',
            newPassword: '',
            newPasswordDisabled: true
        }
    },
    methods: {
        replacePassword(){
            fetch(`http://localhost:4000/password/replace/?phone=${this.currentCitizen}&newpassword=${this.newPassword}`, {
                mode: 'cors',
                method: 'GET'
            }).then(response => response.body).then(rb  => {
                const reader = rb.getReader()
                return new ReadableStream({
                    start(controller) {
                    function push() {
                        reader.read().then( ({done, value}) => {
                        if (done) {
                            console.log('done', done);
                            controller.close();
                            return;
                        }
                        controller.enqueue(value);
                        console.log(done, value);
                        push();
                        })
                    }
                    push();
                    }
                });
            }).then(stream => {
                return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
            })
            .then(result => {
                console.log(JSON.parse(result))
                if(JSON.parse(result).status.includes("OK")){
                    this.$router.push({ name: "Home" })
                }
            });
        },
        deleteSelf(){
            fetch(`http://localhost:4000/citizens/delete/?phone=${this.currentCitizen}`, {
                mode: 'cors',
                method: 'GET'
            }).then(response => response.body).then(rb  => {
                const reader = rb.getReader()
                return new ReadableStream({
                    start(controller) {
                    function push() {
                        reader.read().then( ({done, value}) => {
                        if (done) {
                            console.log('done', done);
                            controller.close();
                            return;
                        }
                        controller.enqueue(value);
                        console.log(done, value);
                        push();
                        })
                    }
                    push();
                    }
                });
            }).then(stream => {
                return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
            })
            .then(result => {
                console.log(JSON.parse(result))
                if(JSON.parse(result).status.includes("OK")){
                    this.token = jwt.sign({
                        phone: "this.phone"
                    }, 'portalsecret', { expiresIn: 1 })
                    setTimeout(() => {
                        this.$router.push({ name: "Home" })
                    }, 1000)
                }
            });
        },
    },
    mounted(){
        jwt.verify(this.token, 'portalsecret', (err, decoded) => {
            if (err) {
                this.currentCitizen = ''
                this.citizenIsLogin = false
            } else {
                this.currentCitizen = decoded.phone
                this.citizenIsLogin = true
                fetch(`http://localhost:4000/citizens/get/?phone=${this.currentCitizen}`, {
                    mode: 'cors',
                    method: 'GET'
                }).then(response => response.body).then(rb  => {
                    const reader = rb.getReader()
                    return new ReadableStream({
                        start(controller) {
                        function push() {
                            reader.read().then( ({done, value}) => {
                            if (done) {
                                console.log('done', done);
                                controller.close();
                                return;
                            }
                            controller.enqueue(value);
                            console.log(done, value);
                            push();
                            })
                        }
                        push();
                        }
                    });
                }).then(stream => {
                    return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
                })
                .then(result => {
                    console.log(JSON.parse(result))
                    if(JSON.parse(result).status.includes("OK")){
                        this.email = JSON.parse(result).citizen.email
                    }
                });
            }
        })
    },
    components: {
        PersonalAreaHeader,
        PersonalAreaFooter
    }
}
</script>