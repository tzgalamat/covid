import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    testLength: 37,
    finish: false,
    page: 1,
    answers:  [
      // "0.7-A-2-3-null", "1-A-2", "0.3-A-2", "1-A-2", "0.3-A-2", "0.2-A-2", "2-A-2", "12-A-2", "0.2-A-2", "0.2-A-2", "3-B-2-3-null", "7-B-2", "2.5-B-1-5-null", "2.5-C-4", "0.2-B-2", "1-B-2", "2-B-1-5-null", "0.3-B-2", "0.2-B-2", "0.3-B-2", "0.2-B-2", "1-Z-5", "0-D-1", "0-D-1", "0-D-1", "0-D-1", "2-R-5", "0.5-R-2", "1-R-2", "1-R-2", "1-R-2", "1-R-2", "1-R-2", "1-R-2", "1-R-2", "1-R-2", "1-R-2"
    ]  ,
    results:  [
      // "0.7-A-2-3-null", "1-A-2", "0.3-A-2", "1-A-2", "0.3-A-2", "0.2-A-2", "2-A-2", "12-A-2", "0.2-A-2", "0.2-A-2", "3-B-2-3-null", "7-B-2", "2.5-B-1-5-null", "2.5-C-4", "0.2-B-2", "1-B-2", "2-B-1-5-null", "0.3-B-2", "0.2-B-2", "0.3-B-2", "0.2-B-2", "1-Z-5", "0-D-1", "0-D-1", "0-D-1", "0-D-1", "2-R-5", "0.5-R-2", "1-R-2", "1-R-2", "1-R-2", "1-R-2", "1-R-2", "1-R-2", "1-R-2", "1-R-2", "1-R-2"
    ] ,
    test: [
      {
        id: 1,
        title: "Начальный (гриппоподобный) период (1-7 дни болезни)",
        count: 8,
        questions: [
          {
            title: "Испытываете ли Вы повышенную температуру тела?",
            id: 1,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'A',
              },
              {
                answer: "Да",
                checked: false,
                title: "",
                type: 2,
                score: null,
                group: 'A',
                values: [
                  {
                    answer: "Менее 37°С",
                    checked: true,
                    score: 0,
                  },
                  {
                    answer: "37 - 38°С",
                    checked: true,
                    score: 0.7,
                  },
                  {
                    answer: "38,1 - 39°С ",
                    checked: true,
                    score: 0.7,
                  },
                  {
                    answer: "более 39°С ",
                    checked: true,
                    score: 0.3,
                  },
                ],
              },
            ],
          },
          {
            title: "Испытываете ли Вы слабость и недомогание?",
            id: 2,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'A'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 1,
                values: [],
                group: 'A'
              },
            ],
          },
          {
            title: "Испытываете ли Вы повышенную потливость?",
            id: 3,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'A'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 0.3,
                values: [],
                group: 'A'
              },
            ],
          },
          {
            title: "Испытываете ли Вы боль или ломку в суставах?",
            id: 4,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'A'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 1,
                values: [],
                group: 'A'
              },
            ],
          },
          {
            title: "Испытываете ли Вы мышечную боль?",
            id: 5,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'A'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 0.3,
                values: [],
                group: 'A'
              },
            ],
          },
          {
            title: "Испытываете ли Вы периодическую головную боль?",
            id: 6,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'A'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 0.2,
                values: [],
                group: 'A'
              },
            ],
          },
          {
            title: "Испытываете ли Вы боль или першение в горле?",
            id: 7,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'A'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 2,
                values: [],
                group: 'A'
              },
            ],
          },
          {
            title: " Испытываете ли Вы нарушение или потерю вкуса и обоняния?",
            id: 8,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'A'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 12,
                values: [],
                group: 'A'
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Ранняя легочная фаза (8-14 дни болезни)",
        count: 14,
        questions: [
          {
            title: "Присутствует ли у Вас диарея (жидкий стул минимум 2 раза в день)?",
            id: 9,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'A'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 0.2,
                values: [],
                group: 'A'
              },
            ],
          },
          {
            title: "Испытываете ли Вы тошноту?",
            id: 10,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'A'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 0.2,
                values: [],
                group: 'A'
              },
            ],
          },
          {
            title: "Есть ли у Вас кашель?",
            id: 11,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                group: 'B'
              },
              {
                answer: "Да",
                checked: false,
                type: 2,
                score: null,
                title:
                  "Подходит ли данное описание полностью или частично под Ваш тип кашля “сухой, продолжительный с трудноотделяемой мокротой”?",
                values: [
                  {
                    answer: "Не подходит",
                    checked: true,
                    score: 0,
                  },
                  {
                    answer: "Подходит частично",
                    checked: true,
                    score: 2,
                  },
                  {
                    answer: "Полностью подходит",
                    checked: true,
                    score: 3,
                  },
                ],
                group: 'B'
              },
            ],
          },
          {
            title: "Испытываете ли Вы стеснение, сдавливание в грудной клетке (невозможность вдохнуть полной грудью)?",
            id: 12,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'B'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 7,
                values: [],
                group: 'B'
              },
            ],
          },
          {
            title: "Испытываете ли Вы одышку (затруднённое дыхание с ощущением явной нехватки воздуха)?",
            id: 13,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'B'
              },
              {
                answer: "Да",
                checked: false,
                type: 2,
                score: null,
                title: "При каких условиях ощущается одышка (степень нагрузки является индивидуальным показателем для каждого)?",
                values: [
                  {
                    answer: "При больших физических нагрузках (например, продолжительный и активный бег)",
                    checked: true,
                    score: 0,
                  },
                  {
                    answer: "При небольших физических нагрузках (например, подъем по лестнице на пару этажей вверх; при условии, что до проявления первых симптомов это не вызывало затруднений)",
                    checked: true,
                    score: 1.8,
                  },
                  {
                    answer: "При обычных/бытовых нагрузках (например, уборка дома)",
                    checked: true,
                    score: 2,
                  },
                  {
                    answer: "При незначительной нагрузке (например, ходьба на 5 метров)",
                    checked: true,
                    score: 2.2,
                  },
                  {
                    answer: "В состоянии покоя",
                    checked: true,
                    score: 2.5,
                  },
                ],
                group: 'B'
              },
            ],
          },
          {
            title: "Выберите соответствующий Вам показатель вдохов в минуту в спокойном состоянии",
            id: 14,
            values: [
              {
                answer: "Менее 20",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'C'
              },
              {
                answer: "20-24",
                checked: true,
                title: "",
                type: 1,
                score: 1.5,
                values: [],
                group: 'C'
              },
              {
                answer: "24-30",
                checked: true,
                title: "",
                type: 1,
                score: 2,
                values: [],
                group: 'C'
              },
              {
                answer: "Более 30",
                checked: true,
                title: "",
                type: 1,
                score: 2.5,
                values: [],
                group: 'C'
              },
            ],
          },
        ],
      },
      {
        id: 3,
        title: "Ранняя легочная фаза (8-14 дни болезни)",
        count: 18,
        questions: [
          {
            title: "Испытываете ли Вы задержки мочеиспускания?",
            id: 15,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                group: 'B'
              },
              {
                answer: "Да",
                checked: false,
                type: 1,
                score: 0.2,
                title: "При каких условиях ощущается одышка?",
                group: 'B'
              },
            ],
          },
          {
            title: "Фиксировали ли Вы нестабильность в показателях артериального давления в сравнении с нормальным для Вас значением?",
            id: 16,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'B'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 1,
                values: [],
                group: 'B'
              },
              {
                answer: "Затрудняюсь ответить",
                checked: true,
                title: "",
                type: 1,
                score: 0,
                values: [],
                group: 'B'
              },
            ],
          },
          {
            title: "Фиксировали ли Вы повышение частоты сердцебиения в сравнении с нормальным для Вас показателем?",
            id: 17,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                group: 'B'
              },
              {
                answer: "Да",
                checked: false,
                type: 2,
                score: null,
                title: "Выберите соответствующий Вам показатель сердцебиение в минуту",
                values: [
                  {
                    answer: "Менее 60 уд.",
                    checked: true,
                    score: 0
                  },
                  {
                    answer: "60-80 уд.",
                    checked: true,
                    score: 0.5
                  },
                  {
                    answer: "80–100 уд.",
                    checked: true,
                    score: 1
                  },
                  {
                    answer: "100-120 уд.",
                    checked: true,
                    score: 1.5
                  },
                  {
                    answer: "Более 120 уд.",
                    checked: true,
                    score: 2
                  },
                ],
                group: 'B'
              },
              {
                answer: "Затрудняюсь ответить",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: "Ниже представлена инструкция «Как измерить пульс», которая поможет Вам определить частоту сердцебиения. Если Вы измерили пульс просим выбрать опцию «Да» и указать соответствующий Вам показатель.",
                group: 'B'
              },
            ],
          },
          {
            title: "Замечали ли Вы 3 или более симптомов из перечисленных далее: приступ резкой, нестерпимой головной боли; изменение походки; онемение мышц конечностей или лица; замедление и нечеткость речи; «туман» перед глазами; трудности с формулировкой мыслей?",
            id: 18,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'B'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 0.3,
                values: [],
                group: 'B'
              },
              {
                answer: "Затрудняюсь ответить",
                checked: true,
                title: "",
                type: 1,
                score: 0,
                values: [],
                group: 'B'
              },
            ],
          },
        ],
      },
      {
        id: 4,
        title: "Ранняя легочная фаза (8-14 дни болезни)",
        count: 22,
        questions: [
          {
            title: "Испытываете ли Вы бессонницу?",
            id: 19,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'B'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 0.2,
                values: [],
                group: 'B'
              },
            ],
          },
          {
            title: "Замечали ли Вы изменение цвета кожи (например появление красных пятен или посинение пальцев рук и ног, кончика носа, губ и ушных раковин)?",
            id: 20,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'B'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 0.3,
                values: [],
                group: 'B'
              },
            ],
          },
          {
            title: "Присутствуют ли у Вас симптомы конъюнктивита?",
            id: 21,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'B'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 0.2,
                values: [],
                group: 'B'
              },
            ],
          },
          {
            title: "Сколько времени прошло после проявления первых симптомов если таковые имеются?",
            id: 22,
            values: [
              {
                answer: "Симптомов не обнаружено",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'C'
              },
              {
                answer: "Менее 3-х дней",
                checked: true,
                title: "",
                type: 1,
                score: 0,
                values: [],
                group: 'C'
              },
              {
                answer: "4-7 дней ",
                checked: true,
                title: "",
                type: 1,
                score: 0.4,
                values: [],
                group: 'C'
              },
              {
                answer: "8-14 дней",
                checked: true,
                title: "",
                type: 1,
                score: 0.4,
                values: [],
                group: 'C'
              },
              {
                answer: "15-28 дней",
                checked: true,
                title: "",
                type: 1,
                score: 1,
                values: [],
                group: 'Z'
              },
              {
                answer: "1-6 месяцев",
                checked: true,
                title: "",
                type: 1,
                score: 1,
                values: [],
                group: 'Z'
              },
            ],
          },
        ],
      },
      {
        id: 5,
        title: "Поздняя легочная фаза (15-28 дни болезни)",
        count: 26,
        questions: [
          {
            title: "Проживали ли Вы совместно с лицом имеющий подтвержденный случай COVID-19 в одном жилище за последние 14 дней?",
            id: 23,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'D'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 1,
                values: [],
                group: 'D'
              },
            ],
          },
          {
            title: "Имели ли Вы незащищенный прямой контакт, на расстоянии менее 1,5 метров, с больным с повышенной температурой и респираторными симптомами (кашель, затрудненное дыхание, одышка) за последние 14 дней?",
            id: 24,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                group: 'D'
              },
              {
                answer: "Да",
                checked: true,
                type: 1,
                score: 1,
                title: "",
                values: [],
                group: 'D'
              },
              {
                answer: "Затрудняюсь ответить",
                checked: true,
                type: 1,
                score: 0,
                title: "",
                values: [],
                group: 'D'
              },
            ],
          },
          {
            title: "Находились ли Вы в закрытом помещении в течение 15 и более минут (например, в классе, комнате для совещаний, автобусе, самолете и т.д.) вместе с лицом имеющий подтвержденный случай COVID-19 за последние 14 дней?",
            id: 25,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'D'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 0.5,
                values: [],
                group: 'D'
              },
              {
                answer: "Затрудняюсь ответить",
                checked: true,
                title: "",
                type: 1,
                score: 0,
                values: [],
                group: 'D'
              },
            ],
            group: 'D',
          },
          {
            title: "Находились ли Вы в общественных местах (торговые центры, кинотеатры, магазины, парикмахерские, кафе и т.д.) за последние 14 дней?",
            id: 26,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 3,
                values: [],
                title: null,
                group: 'D'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 3,
                score: 0.5,
                values: [],
                group: 'D'
              },
              {
                answer: "Затрудняюсь ответить",
                checked: true,
                title: "",
                type: 3,
                score: 0,
                values: [],
                group: 'D'
              },
            ],
            group: 'D',
          },
        ],
      },
      {
        id: 6,
        count: 37,
        title: "Анамнез жизни",
        questions: [
          {
            title: "Выберите подходящий для Вас возрастной промежуток?",
            id: 27,
            values: [
              {
                answer: "менее 30 лет",
                checked: true,
                title: "",
                type: 1,
                score: 0,
                values: [],
                group: 'R'
              },
              {
                answer: "30-40 лет",
                checked: true,
                title: "",
                type: 1,
                score: 0.2,
                values: [],
                group: 'R'
              },
              {
                answer: "40-64 лет ",
                checked: true,
                title: "",
                type: 1,
                score: 1,
                values: [],
                group: 'R'
              },
              {
                answer: "65-74 лет ",
                checked: true,
                title: "",
                type: 1,
                score: 1.5,
                values: [],
                group: 'R'
              },
              {
                answer: "75+ лет",
                checked: true,
                title: "",
                type: 1,
                score: 2,
                values: [],
                group: 'R'
              },
            ],
          },
          {
            title: "Имеете или имели ли Вы продолжительный период времени пристрастие к курению?",
            id: 28,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'R'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 0.5,
                values: [],
                group: 'R'
              },
            ],
          },
          {
            title: "Производили ли Вам операцию за последний месяц?",
            id: 29,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'R'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 1,
                values: [],
                group: 'R'
              },
            ],
          },
          {
            title: "Свойственно ли для Вам повышенное артериальное давление выше 140/90 мм.рт.ст. (артериальная гипертензия)?",
            id: 30,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'R'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 1,
                values: [],
                group: 'R'
              },
              {
                answer: "Затрудняюсь ответить",
                checked: true,
                title: "",
                type: 1,
                score: 0,
                values: [],
                group: 'R'
              },
            ],
          },
          {
            title: "Имеются ли у Вас сердечно-сосудистые заболевания?",
            id: 31,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'R'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 1,
                values: [],
                group: 'R'
              },
              {
                answer: "Затрудняюсь ответить",
                checked: true,
                title: "",
                type: 1,
                score: 0,
                values: [],
                group: 'R'
              },
            ],
          },
          {
            title: "Имеется ли у Вас диабет?",
            id: 32,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'R'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 1,
                values: [],
                group: 'R'
              },
              {
                answer: "Затрудняюсь ответить",
                checked: true,
                title: "",
                type: 1,
                score: 0,
                values: [],
                group: 'R'
              },
            ],
          },
          {
            title: "Имеются ли у Вас хронические респираторные заболевания (поражения дыхательных путей, включая носовые ходы, бронхи и легкие)?",
            id: 33,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'R'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 1,
                values: [],
                group: 'R'
              },
              {
                answer: "Затрудняюсь ответить",
                checked: true,
                title: "",
                type: 1,
                score: 0,
                values: [],
                group: 'R'
              },
            ],
          },
          {
            title: "Имеется ли у Вас хроническое заболевание почек?",
            id: 34,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'R'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 1,
                values: [],
                group: 'R'
              },
              {
                answer: "Затрудняюсь ответить",
                checked: true,
                title: "",
                type: 1,
                score: 0,
                values: [],
                group: 'R'
              },
            ],
          },
          {
            title: "Переносили ли Вы инсульт?",
            id: 35,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'R'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 1,
                values: [],
                group: 'R'
              },
              {
                answer: "Затрудняюсь ответить",
                checked: true,
                title: "",
                type: 1,
                score: 0,
                values: [],
                group: 'R'
              },
            ],
          },
          {
            title: "Имеется ли у Вас ожирение?",
            id: 36,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'R'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 1,
                values: [],
                group: 'R'
              },
              {
                answer: "Затрудняюсь ответить",
                checked: true,
                title: "",
                type: 1,
                score: 0,
                values: [],
                group: 'R'
              },
            ],
          },
          {
            title: "Имеются ли у Вас заболевания печени?",
            id: 37,
            values: [
              {
                answer: "Нет",
                score: 0,
                checked: true,
                type: 1,
                values: [],
                title: null,
                group: 'R'
              },
              {
                answer: "Да",
                checked: true,
                title: "",
                type: 1,
                score: 1,
                values: [],
                group: 'R'
              },
              {
                answer: "Затрудняюсь ответить",
                checked: true,
                title: "",
                type: 1,
                score: 0,
                values: [],
                group: 'R'
              },
            ],
          }
        ]
      }
    ],
    checkTest: false
  },
  mutations: {
    SET_PAGE(state, payload) {
      state.page = payload;
    },
    SET_FINISH(state, payload) {
      state.finish = payload;
    },
    SET_RESULTS(state, payload) {
      state.results = payload
    },
    SET_CHECK_TEST(state, payload) {
      state.checkTest = payload
    }
  },
  actions: {
    GET_PAGE({ commit }, payload) {
      commit("SET_PAGE", payload);
    },
    GET_FINISH({ commit }, payload) {
      commit("SET_FINISH", payload);
    },
    GET_RESULTS({ commit }, payload) {
      commit("SET_RESULTS", payload);
    },
    GET_CHECK_TEST({ commit }, payload) {
      commit("SET_CHECK_TEST", payload);
    },
  },
  getters: {
    TEST: (state) => state.test,
    ANSWERS: (state) => state.answers,
    TEST_LENGTH: (state) => state.testLength,
    PAGE: (state) => state.page,
    FINISH: (state) => state.finish,
    RESULTS: (state) => state.results,
    CHECK_TEST: (state) => state.checkTest,
  },
  modules: {},
});
