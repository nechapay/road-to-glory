window.addEventListener("load", function () {
  // console.log('successful launch')
  // app.stat()
})
const app = new Vue({
  el: '#app',
  data() {
    return {
      categories: {
        'СВ': {
          title: '',
          questions: []
        },
        'ВКС': {
          title: '',
          questions: [
            // ВКС 1
            {
              id: 1,
              text: `<div class="question-container">
                        <div class="question-container__text">Если в 12 часов ночи идет дождь, то есть ли вероятность, 
                        что через 72 часа будет солнечная погода?</div>
                        <div class="question-container__image""><a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B8%D1%80%D1%81%D0%BA%D0%B8%D0%B5#:~:text=%C2%AB%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B8%D1%80%D1%81%D0%BA%D0%B8%D0%B5%C2%BB%20%E2%80%94%20%D0%BC%D0%B0%D1%80%D0%BA%D0%B0%20%D0%B2%D0%BE%D0%B5%D0%BD%D0%BD%D1%8B%D1%85%20%D1%87%D0%B0%D1%81%D0%BE%D0%B2,%D1%87%D0%B0%D1%81%D0%BE%D0%B2%D0%BE%D0%BC%20%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4%D0%B5%20%D1%81%201965%20%D0%B3%D0%BE%D0%B4%D0%B0." target="_blank"><img src="img/vks-01.jpg"></a></div> 
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `Да`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 2,
                  text: `Нет`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! Дело в том, что через 72 часа снова будет полночь.<br>                              
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">Нет. Дело в том, что через 72 часа снова будет полночь.</div>
                            </div>`
              }
            },
            // ВКС 2
            {
              id: 2,
              text: `<div class="question-container">
                        <div class="question-container__text">Отряд разведчиков был направлен в горы. 
                        Один из бойцов измерил атмосферное давление у подножия и на вершине горы. 
                        Оказалось, что давление на вершине:</div>
                        <div class="question-container__image"">
                        <a href="https://iz.ru/633180/aleksei-ramm/spetcnazovtcy-razvedchiki-idut-v-gory" target="_blank">
                        <img src="img/vks-02.jpg"></a></div> 
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `меньше, чем у подножия`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 2,
                  text: `больше, чем у подножия`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 3,
                  text: `такое же, как у подножия`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 4,
                  text: `невозможно ответить`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! Дело в том, что на все, что находится на Земле, действует шар воздуха, 
                              а значит, создается давление атмосферы. При увеличении высоты, толщина атмосферы 
                              уменьшается, соответственно уменьшиться атмосферное давление. Поэтому, с высотой 
                              давление атмосферы уменьшается.<br>                              
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">Дело в том, что на все, что находится на 
                              Земле, действует шар воздуха, а значит, создается давление атмосферы. При увеличении 
                              высоты, толщина атмосферы уменьшается, соответственно уменьшиться атмосферное давление. 
                              Поэтому, с высотой давление атмосферы уменьшается.</div>
                            </div>`
              }
            },
            // ВКС 3
            {
              id: 3,
              text: `<div class="question-container">
                        <div class="question-container__text">Космическое тело, упавшее на поверхность 
                        Земли, называется...</div>
                        <div class="question-container__image"">
                        <a href="https://ru.wikipedia.org/wiki/%D0%A6%D0%B8%D1%80%D0%BA%D0%BE%D0%BD_(%D1%80%D0%B0%D0%BA%D0%B5%D1%82%D0%B0)" target="_blank">
                        <img src="img/vks-03.jpg"></a></div>
                        <div class="question-container__info">Самая быстра ракета в мире – «Циркон» или 3M22 — 
                        российская гиперзвуковая противокорабельная крылатая ракета,  разрабатываемая «НПО машиностроения». 
                        Скоростные характеристики «Циркона» (9800–11025 км/ч или 2700–3062 м/с) делают её недоступной 
                        для существующих систем ПРО противника. </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `Метеорит`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 2,
                  text: `Астероид`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 3,
                  text: `Комета`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 4,
                  text: `Болид`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! Метеорит – это тело космического происхождения, достигшее поверхности Земли, 
                              или другого крупного небесного тела.<br>
                              Астероид - одна из малых планет (диаметром до 1 тыс. км), пояс которых обращается вокруг 
                              Солнца между орбитами Марса и Юпитера.<br>
                              Комета - небесное тело, имеющее вид туманного светящегося пятна и световой полосы в 
                              форме хвоста.<br>
                              Болид – очень яркий метеор (полностью сгоревший в атмосфере Земли и не 
                              достигший ее поверхности).<br>                              
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                Метеорит – это тело космического происхождения, 
                                достигшее поверхности Земли, или другого крупного небесного тела.<br>
                                Астероид - одна из малых планет (диаметром до 1 тыс. км), пояс которых обращается 
                                вокруг Солнца между орбитами Марса и Юпитера.<br>
                                Комета - небесное тело, имеющее вид туманного светящегося пятна и световой полосы в 
                                форме хвоста.<br>
                                Болид – очень яркий метеор (полностью сгоревший в атмосфере Земли и не достигший 
                                ее поверхности).<br>
                              </div>
                            </div>`
              }
            },
            // ВКС 4
            {
              id: 4,
              text: `<div class="question-container">
                        <div class="question-container__text">В каком случае сила Архимеда, действующая на Су-57 - 
                        российский многофункциональный истребитель пятого поколения, созданный ОКБ имени П. О. 
                        Сухого, будет больше: у поверхности земли или на высоте 10 км?</div>
                        <div class="question-container__image"">
                        <a href="https://ru.wikipedia.org/wiki/%D0%A1%D1%83-57" target="_blank">
                        <img src="img/vks-04.jpg"></a></div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `на высоте 10 км`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 2,
                  text: `у поверхности земли`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 3,
                  text: `в обоих случаях равна нулю`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 4,
                  text: `в обоих случаях одинакова и отлична от нуля`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! Сила Архимеда зависит  от ускорения свободного падения (g≈10Н/кг), от 
                              объема погруженной в жидкость или газ части тела и от  плотности жидкости или 
                              газа, в котором находится тело. Так вот, с увеличение высоты над землей, плотность 
                              воздуха уменьшается,  следовательно, уменьшается сила Архимеда.                           
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                Сила Архимеда зависит  от ускорения свободного падения (g≈10 Н/кг), от объема 
                                погруженной в жидкость или газ части тела и от  плотности жидкости или газа, в 
                                котором находится тело. Так вот, с увеличение высоты над землей, плотность воздуха 
                                уменьшается, следовательно, уменьшается сила Архимеда.
                              </div>
                            </div>`
              }
            },
            // ВКС 5
            {
              id: 5,
              text: `<div class="question-container">
                        <div class="question-container__text">Какие изображенные здесь опыты свидетельствуют о 
                        действии закона Паскаля?<hr><div class="question-container__image""><img src="img/vks-05-2.jpg"></div></div>
                        <div class="question-container__image"">
                        <a href="https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%BA%D0%BE%D0%BD_%D0%9F%D0%B0%D1%81%D0%BA%D0%B0%D0%BB%D1%8F" target="_blank">
                        <img src="img/vks-05-1.jpg"></a></div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `№ 3 и № 4`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 2,
                  text: `№ 1 и № 3`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 3,
                  text: `№ 1 и № 4`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 4,
                  text: `№ 1 и № 2`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! Закон сформулирован французским учёным Блезом Паскалем в 1653 году. 
                              Закон гласит: Давление, производимое на жидкость или газ, передается в любую точку 
                              без изменений во всех направлениях. <br><br> 
                              Установка №1 и №3 показывают действие закона Паскаля.<br>
                              Установка №2 показывает зависимость давления твердых тел от силы, действующей 
                              на опору и площади опоры.<br>
                              Установка №4 показывает поверхностное натяжение жидкости.                      
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                Закон сформулирован французским учёным Блезом Паскалем в 1653 году. Закон гласит: 
                                Давление, производимое на жидкость или газ, передается в любую точку без изменений 
                                во всех направлениях.<br><br> 
                                Установка №1 и №3 показывают действие закона Паскаля.<br>
                                Установка №2 показывает зависимость давления твердых тел от силы, действующей на 
                                опору и площади опоры.<br>
                                Установка №4 показывает поверхностное натяжение жидкости. 
                              </div>
                            </div>`
              }
            },
            // ВКС 6
            {
              id: 6,
              text: `<div class="question-container">
                        <div class="question-container__text">Каким физическим прибором измеряется атмосферное 
                        давление? На  принципе работы данного прибора был создан высотомер для самолетов.</div>
                        <div class="question-container__image"">
                        <a href="http://avia-simply.ru/visotomer-i-visota-poleta-samoleta/" target="_blank">
                        <img src="img/vks-06.jpg"></a></div>
                        <div class="question-container__info">ВД-28 (стоит на МИГ-29), Буквы названиях означают 
                        «высотомер двухстрелочный», а  28 - это максимальная высота измерения 28 км.</div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `динамометром`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 2,
                  text: `барометром`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 3,
                  text: `манометром`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 4,
                  text: `термометром`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! Дело в том, что на все, что находится на Земле, действует шар воздуха, 
                              а значит, создается давление атмосферы. При увеличении высоты, толщина атмосферы 
                              уменьшается, соответственно уменьшиться атмосферное давление. Атмосферное давление 
                              измеряется барометром.                      
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                Дело в том, что на все, что находится на Земле, действует шар воздуха, а значит, 
                                создается давление атмосферы. При увеличении высоты, толщина атмосферы уменьшается, 
                                соответственно уменьшиться атмосферное давление. Атмосферное давление измеряется 
                                барометром. 
                              </div>
                            </div>`
              }
            },
            // ВКС 7
            {
              id: 7,
              text: `<div class="question-container">
                        <div class="question-container__text">Какие изображенные здесь опыты свидетельствуют о 
                          действии закона Паскаля?<hr>
                          <div class="question-container__image""><img src="img/vks-07-2.jpg"></div>
                        </div>
                        <div class="question-container__image"">
                          <a href="https://ru.wikipedia.org/wiki/%D0%91%D0%A0%D0%AD%D0%9C-1" target="_blank">
                          <img src="img/vks-07-1.jpg"></a>
                        </div>
                        <div class="question-container__info">Бронированная ремонтно-эвакуационная машина 1 
                          (БРЭМ-1, «Объект 608») предназначена для эвакуации застрявшей и повреждённой техники 
                          (БТР, БМП, БМД, танков и др.), в том числе и из-под огня противника. Обеспечивает необходимый 
                          ремонт и техническое обслуживание в полевых условиях.
                        </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `А`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 2,
                  text: `Б`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 3,
                  text: `Одинаково`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! У неподвижного блока ось диска закреплена, в связи с чем, во время подъёма 
                              груза диск только крутится вокруг своей оси. Выигрыш в силе (экономия силы) при таком 
                              виде блока отсутствует, но такой блок позволяет изменить направление действия силы, что 
                              часто необходимо для удобства. У подвижного блока диск перемещается вместе с грузом, 
                              поэтому  достигается двукратная экономия силы.                      
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                У неподвижного блока ось диска закреплена, в связи с чем, во время подъёма груза 
                                диск только крутится вокруг своей оси. Выигрыш в силе (экономия силы) при таком 
                                виде блока отсутствует, но такой блок позволяет изменить направление действия силы, 
                                что часто необходимо для удобства. У подвижного блока диск перемещается вместе с 
                                грузом, поэтому  достигается двукратная экономия силы. 
                              </div>
                            </div>`
              }
            },
            // ВКС 8
            {
              id: 8,
              text: `<div class="question-container">
                        <div class="question-container__text">
                          Положите одинаковые книги на стол на расстоянии около 
                          10 см одна от другой. Положите лист бумаги на края обеих книг, чтобы он мостиком лег 
                          между ними. Изо всех сил подуть под лист бумаги.  Вопрос: куда полетит этот листочек?
                        </div>
                        <div class="question-container__image"">
                          <a href="https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D1%81%D0%B0%D1%81%D1%8B%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D0%BA%D0%BE%D1%80%D0%B0%D0%B1%D0%BB%D0%B5%D0%B9" target="_blank">
                          <img src="img/vks-08-1.jpg"></a>
                        </div>
                        <div class="question-container__info">Бронированная ремонтно-эвакуационная машина 1 
                          (БРЭМ-1, «Объект 608») предназначена для эвакуации застрявшей и повреждённой техники 
                          (БТР, БМП, БМД, танков и др.), в том числе и из-под огня противника. Обеспечивает необходимый 
                          ремонт и техническое обслуживание в полевых условиях.
                        </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `Вверх`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 2,
                  text: `Вниз`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 3,
                  text: `От нас`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 4,
                  text: `К нам`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              <a href="https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D1%81%D0%B0%D1%81%D1%8B%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D0%BA%D0%BE%D1%80%D0%B0%D0%B1%D0%BB%D0%B5%D0%B9" target="_blank">
                              <img src="img/vks-08-3.jpg"></a>
                              Верно! У неподвижного блока ось диска закреплена, в связи с чем, во время подъёма 
                              груза диск только крутится вокруг своей оси. Выигрыш в силе (экономия силы) при таком 
                              виде блока отсутствует, но такой блок позволяет изменить направление действия силы, что 
                              часто необходимо для удобства. У подвижного блока диск перемещается вместе с грузом, 
                              поэтому  достигается двукратная экономия силы.                      
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                У неподвижного блока ось диска закреплена, в связи с чем, во время подъёма груза 
                                диск только крутится вокруг своей оси. Выигрыш в силе (экономия силы) при таком 
                                виде блока отсутствует, но такой блок позволяет изменить направление действия силы, 
                                что часто необходимо для удобства. У подвижного блока диск перемещается вместе с 
                                грузом, поэтому  достигается двукратная экономия силы. 
                              </div>
                            </div>`
              }
            }
          ]
        },
        'ВМФ': {
          title: '',
          questions: []
        }
      },
      username: '',
      currentCategory: '',
      currentPage: 'main',
      leave: {
        'leave': false
      },

      questions: [
        {
          id: 1,
          disabled: false,
          completed: false,
          prevent: false,
          text: function () {
            return this.completed ? `&#9733;` : `&#9734;`
          },
          task: {}
        },
        {
          id: 2,
          disabled: true,
          completed: false,
          prevent: false,
          text: function () {
            return this.completed ? `&#9733;` : `&#9734;`
          },
          task: {}
        },
        {
          id: 3,
          disabled: true,
          completed: false,
          prevent: false,
          text: function () {
            return this.completed ? `&#9733;` : `&#9734;`
          },
          task: {}
        },
        {
          id: 4,
          disabled: true,
          completed: false,
          prevent: false,
          text: function () {
            return this.completed ? `&#9733;` : `&#9734;`
          },
          task: {}
        },
        {
          id: 5,
          disabled: true,
          completed: false,
          prevent: false,
          text: function () {
            return this.completed ? `&#9733;` : `&#9734;`
          },
          task: {}
        },
        {
          id: 6,
          disabled: true,
          completed: false,
          prevent: false,
          text: function () {
            return this.completed ? `&#9733;` : `&#9734;`
          },
          task: {}
        },
        {
          id: 7,
          disabled: true,
          completed: false,
          prevent: false,
          text: function () {
            return this.completed ? `&#9733;` : `&#9734;`
          },
          task: {}
        },
        {
          id: 8,
          disabled: true,
          completed: false,
          prevent: false,
          text: function () {
            return this.completed ? `&#9733;` : `&#9734;`
          },
          task: {}
        },
        {
          id: 9,
          disabled: true,
          completed: false,
          prevent: false,
          text: function () {
            return this.completed ? `&#9733;` : `&#9734;`
          },
          task: {}
        },
        {
          id: 10,
          disabled: true,
          completed: false,
          prevent: false,
          text: function () {
            return this.completed ? `&#9733;` : `&#9734;`
          },
          task: {}
        },
      ],
      header: '11111',
      chevron: '',
      types: [
        {name: 'Сухопутные войска', id: 1, short: 'СВ'},
        {name: 'Воздушно-космические силы', id: 2, short: 'ВКС'},
        {name: 'Военно-морской флот', id: 3, short: 'ВМФ'}
      ],
      level: 1,
      classes: {
        top: {
          leave: false
        },
        bottom: {
          leave: false
        },
        left: {
          leave: false
        },
        right: {
          leave: false
        },
        startPage: {
          hide: false
        },
        levelSelect: {
          hide: false
        },
        startControls: {
          hide: false
        },
        levelControls: {
          hide: false
        },
        pageActive: {
          main: {
            'active': true
          },
          question: {
            'active': false
          }
        },
        rotation: {
          rotate: false
        }
      },
      started: false,
      index: 0,
      shoulderStraps: [
        {
          'ВКС': '',
          'СВ': '',
          'ВМФ': ''
        }
      ]
    }
  },
  watch: {
    index: function (val, oldVal) {
      if (val === this.questions.length) {
        this.index = this.questions.length - 1
      }
    }
  },
  computed: {
    isStarted() {
      return this.started
    },
    isCommentVisible() {
      return !_.isNil(this.questions[this.index].task.comment) && this.questions[this.index].prevent
    }
  },
  mounted() {
    this.start()
  },
  methods: {
    start() {
      this.header = '2222'
    },
    startClick() {
      console.log(this.username)
      if (this.username !== '') {
        this.classes.right.leave = true
        this.classes.left.leave = true
        this.classes.startControls.hide = true
        let that = this
        setTimeout(function () {
          that.classes.startPage['hide'] = true
        }, 1000)
      }
    },
    handleClickLevelSelect(val) {
      this.classes.top.leave = true
      this.classes.bottom.leave = true
      this.classes.levelControls.hide = true
      this.started = true
      let that = this
      setTimeout(function () {
        that.classes.levelSelect['hide'] = true
      }, 1000)
      if (val) {
        this.currentCategory = val
      }
      /* TODO set variable to function */
      this.loadQuestions('ВКС')
    },
    loadQuestions(cat) {
      for (let i = 0; i < this.questions.length; i++) {
        this.questions[i].task = _.cloneDeep(this.categories[cat].questions[i])
      }
      console.table(this.questions)
    },
    handleStarClick(val) {
      if (!this.questions[this.index].prevent) {
        let item = this.questions[this.questions.findIndex(i => i.id === val)]
        this.loadQuestion(item)
        console.log(item)
      }
    },
    loadQuestion(question) {
      this.currentPage = 'question'
    },
    getComment() {
      return this.questions[this.index].completed ?
        this.questions[this.index].task.comment.correct : this.questions[this.index].task.comment.incorrect
    },
    handleAnswerClick(val, id) {
      if (!this.questions[this.index].prevent) {
        if (val) {
          this.questions[this.index].completed = true
        }
        this.questions[this.index].task.answers.forEach(function (item) {
          if (item.correct) {
            item.style.correct = true
          } else {
            item.style.incorrect = true
          }
          if (item.id === id) {
            item.style['selected'] = true
          }
        })

        // let that = this
        // setTimeout(function () {
        //   that.classes.rotation.rotate = true
        // }, 1000)
      }
      this.questions[this.index].prevent = true
    },
    handleCommentClose() {
      this.classes.rotation.rotate = false
      let that = this
      setTimeout(function () {
        that.nextStage()
      }, 1000)
    },
    nextStage() {
      // this.questions[this.index].disabled = true
      this.currentPage = 'main'
      this.index++
      this.questions[this.index].disabled = false
      console.log(this.questions)
    },
    showComment() {
      this.classes.rotation.rotate = true
    }
  }
})
