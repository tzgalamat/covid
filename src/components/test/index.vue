<template>
  <div class="question-answer">
    <div class="question__prev">
      <button v-if="PAGE > 1" @click="prev()">Назад</button>
    </div>
    <div v-if="currentTest">
      <!-- <div>{{ANSWERS}} </div> -->
      <div class="question__block" v-for="(item, i) in currentTest.questions" :key="i">
        <h3><span v-if="(!currentTest.group || currentTest.group !== 'D' && i!=0) || (currentTest.group == 'D' && i==0)">{{item.id}})</span> <span v-html="item.title"></span></h3>
        <div class="measure" v-if="item.id == 17">
          <a><small @click="showModal=true">Как измерить пульс?</small></a>
        </div>
        <div class="question__answer" :class="{more: item.values.length > 5}">
          <div
            v-for="(answer, a) in item.values"
            :key="a"
            :class="{
              error: (ANSWERS[PAGE > 1 ? TEST[PAGE-2].count + i : i] == null || ANSWERS[PAGE > 1 ? TEST[PAGE-2].count + i : i] && ANSWERS[PAGE > 1 ? TEST[PAGE-2].count + i : i].split('-')[0] == 'null') && CHECK_TEST
            }"
          >
            <label>
              <input
                :disabled="answer.answer == 'Да' && ANSWERS[PAGE > 1 ? TEST[PAGE-2].count + i : i] && (ANSWERS[PAGE > 1 ? TEST[PAGE-2].count + i : i].split('-')[0] == 'null' || ANSWERS[PAGE > 1 ? TEST[PAGE-2].count + i : i].slice(-4) === 'null')"
                v-model="ANSWERS[PAGE > 1 ? (TEST[PAGE-2].count) + i : i]"
                :name="`test__${i+1}`"
                :value="`${answer.score}-${answer.group}-${a+1}`"
                :type="answer.answer == 'Да' && ANSWERS[PAGE > 1 ? TEST[PAGE-2].count + i : i] && ANSWERS[PAGE > 1 ? TEST[PAGE-2].count + i : i].slice(-4) === 'null' ? 'checkbox' : 'radio'"
                :checked="answer.answer == 'Да' && ANSWERS[PAGE > 1 ? TEST[PAGE-2].count + i : i] && ANSWERS[PAGE > 1 ? TEST[PAGE-2].count + i : i].slice(-4) === 'null'"
              />
              <span></span>
              {{answer.answer}}
            </label>
          </div>
        </div>
        <div class="question__answer others">
          <div
            v-for="(answer, a) in list(item.values)"
            :key="a"
            :class="{
              error: (ANSWERS[PAGE > 1 ? TEST[PAGE-2].count + i : i] == null || ANSWERS[PAGE > 1 ? TEST[PAGE-2].count + i : i] && ANSWERS[PAGE > 1 ? TEST[PAGE-2].count + i : i].split('-')[0] == 'null') && CHECK_TEST
            }"
          >
            <div
              v-show="ANSWERS[PAGE > 1 ? TEST[PAGE-2].count + i : i] && (ANSWERS[PAGE > 1 ? TEST[PAGE-2].count + i : i].split('-')[0] == 'null' || ANSWERS[PAGE > 1 ? TEST[PAGE-2].count + i : i].slice(-4) === 'null')" 
              v-if="answer.type === 2" class="question__other">
              <h3 v-if="answer.title">{{answer.title}}</h3>
              <div class="question__other-values" :class="{more: answer.values.length > 4}">
                <div v-for="(other, o) in answer.values" :key="o">
                  <label>
                    <input
                      v-model="ANSWERS[PAGE > 1 ? TEST[PAGE-2].count + i : i]"
                      :name="`test__${i+1}`"
                      :value="`${other.score}-${answer.group}-${a+1}-${o+1}-${answer.score}`"
                      type="radio"
                    />
                    <span></span>
                    {{other.answer}}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="modal">
        <div class="modal__content">
            <h4>Ниже представлена инструкция «Как измерить пульс», которая поможет Вам
            определить частоту сердцебиения. Если Вы измерили пульс просим выбрать
            опцию «Да» и указать соответствующий Вам показатель. </h4>
            <img src="https://pro-vozrast.ru/upload/medialibrary/024/024ee26ac8a9346d81ca91f85dc981a7.jpg" alt="">
            <p>
                Приложите пальцы к выбранному месту, чтобы прощупать пульс.
                Прижмите пальцы, но не слишком сильно, чтобы четко ощущать пульсацию.
                Посчитайте сколько толчков происходит за 15 секунд, затем умножьте это число на четыре,
                чтобы получить количество ударов в минуту. Варианты для терпеливых: считать число
                сокращений за 30 секунд (затем умножать его на 2) или за минуту — в этом случае
                измерение будет более точным.
            </p>
        </div>
        <div @click="showModal = false" class="close"></div>
    </div>
  </div>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        data() {
            return {
                test: [],
                opens: [],
                before: '',
                count: 0,
                showModal: false,
                oldValue: ''
            };
        },
        computed: {
            ...mapGetters([
                "TEST", 
                "ANSWERS", 
                "PAGE",
                "RESULTS",
                "CHECK_TEST"
            ]),
            currentTest() {
                return this.TEST[this.PAGE - 1];
            },
        },
        methods: {
            change() {},
            prev() {
              if(this.RESULTS[21] && (this.RESULTS[21] == '1-Z-6' || this.RESULTS[21] == '1-Z-5' ) && this.PAGE == 6) {
                this.$store.dispatch('GET_PAGE', this.PAGE-2)
              } else this.$store.dispatch('GET_PAGE', this.PAGE-1)
            },
            list(list) {
              return list.slice(1)
            }
        },
        watch: {
            ANSWERS(newValue, oldValue) {
              this.$store.dispatch('GET_RESULTS', this.ANSWERS)
              // if(this.ANSWERS[16] == '0-B-3') {
              //   this.oldValue = this.ANSWERS[16]
              //   this.showModal = true
              // }
            }
        },
    };
</script>

<style scoped>
    .question-answer {
        text-align: center;
    }
    .question-answer h2 {
        font-size: 23px;
        margin-bottom: 7%;
    }
    .question__block:not(:last-child) {
        border-bottom: 1px solid rgba(224, 224, 224, 0.8);
    }
    .question__block .measure {
      margin-bottom: 20px;
    }
    .question__block .measure a {
      color: #7175D8;
      cursor: pointer;
    }
    .question__answer {
        display: flex;
        justify-content: space-around;
        padding-bottom: 0px;
        width: 650px;
        margin: 0 auto;
        position: relative;
    }
    .question__answer.more {
      width: 900px;
      margin-left: 150px;
    }
    .others {
      width: 650px;
      justify-content: space-between;
      padding-bottom: 10px;
      flex-direction: column;
    }
    .question__answer > .type2 {
        margin-bottom: 40px;
        transition: all 0.3s;
    }
    .question__answer > .type3 {
        margin-bottom: 135px;
        transition: all 0.3s;
    }
    .question__answer > .type3 h3 {
        margin-top: 10px;
    }
    .question-answer h3 {
        font-size: 21px;
        font-weight: normal;
    }
    .question__answer > div:first-child {
        margin-right: 20px;
    }
    .others > div {
      width: 650px;
    }
    .others > div:first-child {
      width: 100%;
    }

    .question__answer label {
        cursor: pointer;
        font-size: 14px;
        position: relative;
        color: #050c42;
    }
    .question__answer input {
        opacity: 0;
    }
    .question__answer span {
        position: absolute;
        width: 26px;
        height: 26px;
        border-radius: 50% 50%;
        border: 1px solid #94a2ab;
        left: -20px;
        top: -8px;
    }
    .question__answer span::before {
        position: absolute;
        content: " ";
        top: 50%;
        color: #fff;
        left: 50%;
        transform: translate(-50%, -50%);
    }    
    .question__answer .error span {
      border: 1px solid red;
    }
    .question__answer input:checked + span::before {
        content: "✓";
    }
    .question__answer input:checked + span {
      background: var(--purple-color);
    }
    .question__answer .error input:checked + span {
      background: red;
    }
    .question__other {
        width: 650px;
        margin-top: 20px;
        /* position: absolute; */
        left: 0;
    }
    .question__other-values {
        display: flex;
        justify-content: space-between;
    }
    .question__other-values.more {
      width: 900px;
      margin-left: -150px;
    }
    .question__other-values > div {
        margin-left: 10px;
    }
    .question__answer .question__other span {
        width: 22px;
        height: 22px;
        top: -6px;
    }
    .question__prev {
      margin-top: 20px;
      text-align: left;
    }
    .question__prev button {
      background: #94a2ab;
      color: #FFF;
      border: none;
      padding: 10px 30px;
      border-radius: 4px;
    }
    
    .modal {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: fixed;
        background: rgba(0, 0, 0, .3);
    }
    .modal > .modal__content {
        position: absolute;
        background: #FFF;
        top: 50%;
        left: 50%;
        z-index: 3;
        border-radius: 5px;
        max-width: 90%;
        width: 600px;
        padding: 20px 30px;
        max-height: 80vh;
        overflow-y: auto;
        transform: translate(-50%, -50%);
    }
    .modal img {
      width: 300px;
    }
    .modal .close {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    @media (max-width: 1200px) {
      .question__answer.more {
        width: 100%;
        margin-left: 0;
      }
      .question__answer.more > div {
        width: 15%;
        margin-right: 5px;
      }
      .question__other-values.more {
        width: 100%;
        margin-left: 0;
      }
    }
    @media (max-width: 991px) {
      .question__answer {
        width: 100%;
      }
      .question__other, .others > div {
        width: 100%;
      }
      .modal > .modal__content {
        width: 400px;
        text-align: center;
      }
    }
    @media (max-width: 579px) {
      .question-answer {
        text-align: left;
      }
      .question__answer {
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
        text-align: left;
      }
      .question__other-values {
        flex-direction: column;
        align-items: flex-start;
        margin-left: -5px;
      }
      .question__other-values > div {
        margin-bottom: 15px;
      }
      .question__answer > .type2 {
        margin-bottom: 120px;
      }
      .question-answer h3 {
        font-size: 18px;
      }
      .question__answer > .type3{
          margin-bottom: 210px;
      }
      .modal > .modal__content {
        width: 400px;
        box-sizing: border-box;
        padding: 20px 10px;
      }
      .modal img {
        width: 250px;
      }
      
    }
    @media (max-width: 579px) {
      .question__answer {
        flex-direction: column;
      }
      .question__answer > div {
        margin-bottom: 20px;
      }
      .others > div {
        margin-bottom: 10px;
      }
      .question__answer label {
        display: flex;
      }
      .question__answer .question__other span {
        top: 50%;
        transform: translateY(-50%);
      }
      .question__answer.more > div {
        width: 90%;
        margin-left: 20px;
      }
    }

    @media (max-width: 357px) {
      .question__answer > .type3 {
        margin-bottom: 220px;
      }
      .question-answer h3 {
        font-size: 16px;
      }
      .question__answer label {
        font-size: 12px;
      }
      .question__answer > div {
        margin-top: 10px;
      }
      .question__other label {
        margin-left: 10px;
      }
    }
    
</style>