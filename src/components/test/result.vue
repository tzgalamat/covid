<template>
    <div class="result">
        <div class="result__content">
            <vc-donut v-if="sections && sections.length > 0" :sections="sections">
                {{parseInt(persent)}}% / 100%
            </vc-donut>
            <div class="result__text">
                <h2>Показатель вероятности заражения COVID-19: {{parseInt(persent)}}%</h2>
                <p v-if="result_two">Описание фазы заболевания: <strong>{{result_two}}</strong></p>
                <p v-if="result_three">Группа риска: <strong>{{result_three}}</strong></p>
                <p v-if="result_four"><strong>{{result_four}}</strong></p>
            </div>
        </div>
        <!-- <button @click="result()">ОК</button> -->
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                sections: [],
                persent: 0,
                risk: '',
                result_one: '',
                result_two: '',
                result_three: '',
                result_four: '',
            }
        },
        computed: {
            ...mapGetters([
                'ANSWERS',
                'TEST_LENGTH',
                'RESULTS'
            ]),
            result() {
                let sum = 0, a = 0, b = 0, c = 0, d = 0, r = 0, z = 0
                for (let i = 0; i < this.RESULTS.length; i++) {
                    sum += parseFloat(this.RESULTS[i].split('-')[0])
                    console.log(this.RESULTS[i].split('-')[0], sum, this.RESULTS[i].split('-')[1].slice(0, 1));
                    if(this.RESULTS[i].split('-')[1].slice(0, 1) == 'A') {
                        a += parseFloat(this.RESULTS[i].split('-')[0])
                    }
                    else if(this.RESULTS[i].split('-')[1].slice(0, 1) == 'B') {
                        b += parseFloat(this.RESULTS[i].split('-')[0])
                    }
                    else if(this.RESULTS[i].split('-')[1].slice(0, 1) == 'C') {
                        c += parseFloat(this.RESULTS[i].split('-')[0])
                    }
                    else if(this.RESULTS[i].split('-')[1].slice(0, 1) == 'D') {
                        d < parseFloat(this.RESULTS[i].split('-')[0]) ? d = parseFloat(this.RESULTS[i].split('-')[0]) : d = d
                    }
                    else if(this.RESULTS[i].split('-')[1].slice(0, 1) == 'R') {
                        r += parseFloat(this.RESULTS[i].split('-')[0])
                    }
                    else if(this.RESULTS[i].split('-')[1].slice(0, 1) == 'Z') {
                        z += parseFloat(this.RESULTS[i].split('-')[0])
                    }
                }
                if(this.RESULTS[21] == '1-Z-5') c += 0.4
                this.persent = (a + b + c + d)  / 38.5 * 100
                console.log(this.persent, a, b, c, d, r, z)
                this.sections.push({value: this.persent, color: '#7175D8'})



                if (this.persent > 70) this.result_two = 'Поздняя легочная фаза'
                else if (this.persent > 45) this.result_two = 'Ранняя легочная фаза'
                else if (this.persent > 35) this.result_two = 'Начальная (гриппоподобная) фаза'
                else if (this.persent > 20) this.result_two = 'Выявлены первичные симптомы'
                else if (this.persent < 5 && z == 1) this.result_two = 'Формирование иммунитета; прохождение репаративных процессов (регенерация) остаточных изменений в легких и других органах'
                else this.result_two = 'Серьезных симптомов не выявлено, вероятность заболевания низкая'


                if(r < 1) this.result_three = 'Вы не находитесь в группе риска'
                else if(r >= 1 && r < 2) this.result_three = 'Вы находитесь в низкой группе риска'
                else if(r >= 2 && r < 2.5) this.result_three = 'Вы находитесь в средней группе риска'
                else if(r >= 2.5) this.result_three = 'Вы находитесь в высокой группе риска'

                if(this.persent > 18) this.result_four = 'Рекомендуется обратиться к врачу'

                window.location = `
                    http://185.113.134.45/getResult?
                    persent=${this.persent}&
                    result_two=${this.result_two}&
                    result_three=${this.result_three}&
                    type=${this.$route.query.type || 'PATIENT'}&
                    id=${this.$route.query.id || 1}&
                    result_four=${this.result_four}
                `

            },
        },
        methods: {
            handleSectionClick(section, event) {
                console.log(`${section.label} clicked.`);
            }
        },
        mounted () {
            this.result;
        },
    }
</script>

<style scoped>
    .result__content {
        display: flex;
        justify-content: space-between;
    }
    .result__content .result__text {
        width: calc(100% - 350px);
    }
    @media (max-width: 991px) {
        .result__content {
            margin-top: 20px;
            flex-direction: column;
        }
        .result__content .result__text {
            width: 100%;
        }
    }
    @media (max-width: 579px) {
        .cdc {
            width: 200px !important;
            height: 200px !important;
        }
    }
</style>
