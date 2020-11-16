<template>
    <div class="progress">
        <div class="container">
            <div class="progress__persent">
                <p>{{parseInt(count / TEST_LENGTH * 100)}}%</p>
            </div>
            <div class="progress__bar">
                <div class="answered" :style="{width: parseInt(count / TEST_LENGTH * 100) + '%'}"></div>
            </div>
            <div class="progress__count">
                <!-- <p>{{count}}/{{TEST_LENGTH}} отвечено</p> -->
            </div>
        </div>
        <!-- {{RESULTS}} -->
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters([
                'TEST_LENGTH',
                'ANSWERS',
                'PAGE',
                'RESULTS'
            ]),
            count() {
                let count = 0
                this.RESULTS.forEach(element => {
                    if(element) count++
                });
                return count
            }
        },
        watch: {
            PAGE() {
                // if(this.PAGE === 5) {
                //     let max = 0, count = 0
                //     for (let i = 29; i < this.ANSWERS.length; i++) {
                //         if(this.ANSWERS[i] && this.ANSWERS[i].slice(0, 1) > max) max = this.ANSWERS[i]
                //         count++
                //     }
                //     this.ANSWERS.splice(28, count)
                //     this.ANSWERS[28] = `${max}-D-1`
                //     this.ANSWERS.length = 29
                // }
            }
        },
    }
</script>

<style scoped>
    .progress {
        margin-top: 2.6%;
        height: 64px;
        background: #F8F8FB;
    }
    .progress .container {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--gray-color);
    }
    .progress__bar {
        width: 800px;
        max-width: 80%;
        border-radius: 20px;
        background: #F2F2F2;
        height: 12px;
        position: relative;
        margin-left: 20px;
    }
    .answered {
        position: absolute;
        height: 100%;
        left: 0;
        top: 0;
        background: #5ECBA1;
        border-radius: 20px;
    }
</style>