<template>
    <div class="test">
        <div class="container">
            <test-header></test-header>
        </div>
        <test-progress></test-progress>
        <div v-if="!FINISH" class="container">
            <question-answer></question-answer>
            <div v-if="TEST.length !== PAGE" class="test__button">
                <button @click="next()" class="main-btn">Продолжить</button>
            </div>
            <div v-if="TEST.length === PAGE" class="test__button">
                <button @click="finish()" class="main-btn">Закончить</button>
            </div>
        </div>
        <div v-if="FINISH" class="container">
            <test-result></test-result>
        </div>
        <!-- <footer>
            <div class="container">
                <a href="http://thousand.kz/">
                    <img src="@/assets/logo.png" alt="">
                </a>
            </div>
        </footer> -->
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters([
                'PAGE',
                'TEST',
                'ANSWERS',
                'FINISH',
                'RESULTS'
            ])
        },
        methods: {
            next() {
                if(this.RESULTS.findIndex(e => !e) > -1 || this.RESULTS.findIndex(e => e.slice(0,4) === 'null') > -1 || this.RESULTS.length < this.TEST[this.PAGE-1].count) {
                    this.$store.dispatch('GET_CHECK_TEST', true)
                    alert('Заполните все данные')
                }
                else if (this.RESULTS[21] && (this.RESULTS[21] == '1-Z-6' || this.RESULTS[21] == '1-Z-5' ) && this.PAGE == 4) {
                    this.$store.dispatch('GET_PAGE', this.PAGE+2)
                    this.RESULTS[22] = '0-D'
                    this.RESULTS[23] = '0-D'
                    this.RESULTS[24] = '0-D'
                    this.RESULTS[25] = '0-D'
                    window.scroll(0, 0)
                } else {
                // window.scrollTop
                    window.scroll(0, 0)
                    this.$store.dispatch('GET_CHECK_TEST', false)
                    this.$store.dispatch('GET_PAGE', this.PAGE+1)
                }
            },
            finish() {
                if(this.RESULTS.findIndex(e => !e) > -1 || this.RESULTS.findIndex(e => e.slice(0,4) === 'null') > -1 || this.RESULTS.length != this.TEST[this.PAGE-1].count) {
                    alert('Заполните все данные')
                    this.$store.dispatch('GET_CHECK_TEST', true)
                } else {
                    this.$store.dispatch('GET_FINISH', true)
                    this.$store.dispatch('GET_CHECK_TEST', false)
                }
            }
        },
        components: {
            TestHeader: () => ({
                component: import('@/components/test/header'),
                delay: 300
            }),
            TestProgress: () => ({
                component: import('@/components/test/progress'),
                delay: 300
            }),
            QuestionAnswer: () => ({
                component: import('@/components/test/index'),
                delay: 300
            }),
            TestResult: () => ({
                component: import('@/components/test/result'),
                delay: 300
            }),

        },
    }
</script>

<style scoped>
    .container .main-btn {
        margin: 4% auto 0;
    }
    .test__button {
        text-align: center;
        margin-bottom: 6%;
    }
    .test__button button:disabled {
        cursor: not-allowed;
    }
    footer {
        margin-top: 40px;
        text-align: center;
        padding-bottom: 10px;
    }
    footer img {
        width: 200px;
    }
    @media (max-width: 579px) {
        .test__button  button {
            width: 280px;
            height: 48px;
        }
    }
</style>