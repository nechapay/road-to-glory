const app = new Vue({
  el: '#app',
  data() {
    return {
      categories: {
        'СВ': {
          title: '',
          questions: [
            // СВ 1
            {
              id: 1,
              info: true,
              infoText: `<fieldset class="question-container__info">
                          <legend>Тополь М</legend>
                          <div class="question-container__info-grid">
                            <div>Количество ступеней</div>
                            <div>3</div>
                            <div>Длина</div>
                            <div>22,55 м</div>
                            <div>Диаметр</div>
                            <div>1,81 м</div>
                            <div>Стартовая масса</div>
                            <div>~ 46 500 кг</div>
                            <div>Максимальная дальность</div>
                            <div>12 000 км</div>
                            <div>Точность</div>
                            <div>150-200 метров</div>
                          </div>
                        </fieldset> `,
              text: `<div class="question-container g-t-c-55-45">
                        <div class="question-container__text">
                          Найдите неверный ответ. Давление на платформу пусковой  установки 
                          комплекса «Тополь - М» можно уменьшить следующими способами:
                        </div>
                        <div class="question-container__image">
                          <a href="https://ru.wikipedia.org/wiki/%D0%A2%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C-%D0%9C" target="_blank">
                            <img src="img/sv-01.jpg">
                          </a>
                        </div>
                        
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `Сделать шире шины тягача`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 2,
                  text: `Уменьшить число колонн, поддерживающих платформу пусковой установки`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 3,
                  text: `Увеличить площадь нижней части опорных стоек`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 4,
                  text: `Заменить колеса гусеницами`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                             Верно! Чем больше площадь опоры, тем меньше давление, производимое одной и той 
                             же силой на эту опору.                              
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                Чем больше площадь опоры, тем меньше давление, производимое одной и той 
                                же силой на эту опору.
                              </div>
                            </div>`
              }
            },
            // СВ 2
            {
              id: 2,
              info: true,
              infoText: `<fieldset class="question-container__info">
                          <legend>Справка</legend>
                            <div class="question-container__info--image">
                              <a href="https://ru.wikipedia.org/wiki/%D0%AF%D1%80%D1%81" target="_blank">
                                <img src="img/sv-02-2.jpg">
                              </a>
                            </div>
                            <div class="question-container__info--text">
                              PC-24 «Ярс» (Индекс УРА РВСН 15П165М (шахтный) и 15П155М (подвижный) -  российский 
                              стратегический ракетный комплекс с твердотопливной межконтинентальной баллистической 
                              ракетой мобильного и шахтного базирования с разделяющейся головной частью.
                            </div>
                        </fieldset>`,
              text: `<div class="question-container g-t-c-55-45">
                        <div class="question-container__text">
                          В каком случае давление, производимое кирпичом  на стол, будет наименьшим?                          
                        </div>
                        <div class="question-container__image">
                          <img src="img/sv-02-1.jpg"> 
                        </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `А`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 2,
                  text: `Б`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 3,
                  text: `В`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! Чем больше площадь опоры, тем меньше давление, производимое 
                              одной и той же силой на эту опору.                              
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                Чем больше площадь опоры, тем меньше давление, производимое одной и той же 
                                силой на эту опору.
                              </div>
                            </div>`
              }
            },
            // СВ 3
            {
              id: 3,
              info: true,
              infoText: `<fieldset class="question-container__info">
                          <legend>Справка</legend>
                            Греки именовали подобные камнемёты «палинтонами», то есть стреляющими по навесной 
                            траектории, то есть буквально — камень против щита (пронзающий щит камнемёт). 
                            Наиболее широко употребляется римское название данного орудия — «баллиста» (лат. ballista).
                        </fieldset>`,
              text: `<div class="question-container">
                        <div class="question-container__text">
                          Механизмами называют устройства, служащие для преобразования
                        </div>
                        <div class="question-container__image">
                        <a href="https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%BB%D0%BB%D0%B8%D1%81%D1%82%D0%B0" target="_blank">
                        <img src="img/sv-03.jpg"></a></div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `Скорости`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 2,
                  text: `Механической работы`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 3,
                  text: `Мощности`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 4,
                  text: `Силы`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! По определению механизмами называются устройства, служащие для преобразования силы.                             
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                По определению механизмами называются устройства, служащие для преобразования силы.
                              </div>
                            </div>`
              }
            },
            // СВ 4
            {
              id: 4,
              info: true,
              infoText: `<fieldset class="question-container__info">
                          <legend>Справка</legend>
                            <div class="question-container__info--image">
                              <a href="https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D0%BF%D0%BE%D0%B2%D1%8B%D0%B9_%D0%B1%D0%B5%D1%80%D0%B5%D1%82" target="_blank">
                                <img src="img/sv-04.jpg">
                              </a>
                            </div>
                            <div class="question-container__info--text">
                              Краповый берет присваивается в порядке прохождения сложных 
                              квалификационных испытаний.  Марш-бросок 12 км, с преодолением 
                              специальная полоса препятствий в экстремальных условиях, осмотр 
                              подготовки по штурму высотных зданий, акробатику и рукопашный 
                              бой.
                            </div>
                        </fieldset>`,
              text: `<div class="question-container g-t-c-55-45">
                        <div class="question-container__text">
                          В каком случае силы, действующие на опору со стороны кирпича максимальны?                         
                        </div> 
                        <div class="question-container__image">
                          <img src="img/sv-02-1.jpg">
                        </div>                    
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `А`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 2,
                  text: `Б`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 3,
                  text: `В`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 4,
                  text: `одинаковы`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! На опору со стороны кирпича действует только одна сила - это вес. А вес равен 
                              силе тяжести, т.е. произведению массы тела на ускорение свободного падения (P=Fтяж= mg). 
                              Масса кирпичей одинакова и ускорение свободного падения для всех тел так же одинаково и  
                              приблизительно равно 10 Н/кг.                          
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                На опору со стороны кирпича действует только одна сила - это вес. А вес равен силе 
                                тяжести, т.е. произведению массы тела на ускорение свободного падения (P=Fтяж= mg). 
                                Масса кирпичей одинакова и ускорение свободного падения для всех тел так же одинаково 
                                и  приблизительно равно 10 Н/кг.
                              </div>
                            </div>`
              }
            },
            // СВ 5
            {
              id: 5,
              info: true,
              infoText: `<fieldset class="question-container__info">
                          <legend>Справка</legend>
                          <div class="question-container__info--image">
                          <a href="https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%B7%D0%B4%D1%83%D1%88%D0%BD%D0%BE-%D0%B4%D0%B5%D1%81%D0%B0%D0%BD%D1%82%D0%BD%D1%8B%D0%B5_%D0%B2%D0%BE%D0%B9%D1%81%D0%BA%D0%B0" target="_blank">
                            <img src="img/sv-05-2.jpg">
                          </a>
                        </div>
                        <div class="question-container__info--text">
                          Воздушно-десантные войска (ВДВ) — самостоятельный род войск вооруженных сил, предназначенный 
                          для охвата противника по воздуху и выполнения задач в его тылу по нарушению управления 
                          войсками, захвату и уничтожению наземных элементов, а также по прикрытию (обороне).
                        </div>
                        </fieldset>`,
              text: `<div class="question-container g-t-c-55-45">
                        <div class="question-container__text">
                          В каком случае давление, производимое на стол будет наименьшим?
                        </div>   
                        <div class="question-container__image">
                          <img src="img/sv-05-1.jpg">
                        </div>                     
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `1`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 2,
                  text: `2`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 3,
                  text: `3`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 4,
                  text: `4`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 5,
                  text: `5`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! Чем больше площадь опоры, тем меньше давление. Чем меньше вес (P = Fтяж = mg), 
                              тем меньшее давление,  производимое на опору. В 4-ом случае площадь 
                              минимальна и наименьший вес кирпичей.                       
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                Чем больше площадь опоры, тем меньше давление. Чем меньше вес (P = Fтяж = mg), 
                                тем меньшее давление,  производимое на опору. В 4-ом случае площадь 
                                минимальна и наименьший вес кирпичей. 
                              </div>
                            </div>`
              }
            },
            // СВ 6
            {
              id: 6,
              info: true,
              infoText: `<fieldset class="question-container__info">
                          <legend>Справка</legend>
                            Она́гр (от др.-греч. скорпион) — позднеримская метательная машина торсионного типа, 
                            буквально переводится как дикий осёл. Именно онагр чаще всего неправильно именуется 
                            катапультой.
                        </fieldset>`,
              text: `<div class="question-container">
                        <div class="question-container__text">
                          Рычаг применяют для получения выигрыша
                        </div>
                        <div class="question-container__image">
                          <a href="https://ru.wikipedia.org/wiki/%D0%9E%D0%BD%D0%B0%D0%B3%D1%80_(%D0%BC%D0%B5%D1%82%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D0%B0)" target="_blank">
                            <img src="img/sv-06.jpg">
                          </a>
                        </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `в работе`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 2,
                  text: `в силе`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 3,
                  text: `в мощности`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 4,
                  text: `в скорости`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! По определению механизмами называются устройства, служащие для преобразования 
                              силы. К механизмам относятся : рычаг (его разновидности – блок, ворот), и наклонная 
                              плоскость (ее разновидности – клин , винт).                      
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                По определению механизмами называются устройства, служащие для преобразования силы. 
                                К механизмам относятся : рычаг (его разновидности – блок, ворот), и наклонная 
                                плоскость (ее разновидности – клин , винт). 
                              </div>
                            </div>`
              }
            },
            // СВ 7
            {
              id: 7,
              info: true,
              infoText: `<fieldset class="question-container__info">
                          <legend>Справка</legend>
                            2С35 «Коалиция-СВ» — российский 152-мм межвидовой артиллерийский комплекс на базе танка 
                            «Т-90» с максимальной дальностью стрельбы до 80 км, максимальным возимым боезапасом до 
                            70 выстрелов и скорострельностью до 16 выстрелов в минуту.
                        </fieldset>`,
              text: `<div class="question-container g-t-c-55-45">
                        <div class="question-container__text">
                          В каком случае совершается механическая работа?
                        </div>
                        <div class="question-container__image">
                          <a href="https://ru.wikipedia.org/wiki/2%D0%A135" target="_blank">
                          <img src="img/sv-07.jpg"></a>
                        </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `«Коалиция - СВ» стоит на месте на Красной Площади с включенным двигателем`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 2,
                  text: `«Коалиция - СВ» движется по Красной Площади во время парада Победы`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 3,
                  text: `В стволе «Коалиции - СВ» находится боекомплект (выстрела нет)`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 4,
                  text: `«Коалиция-СВ» проехал на стадионе, сделав круг почета`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! Если на тело действует сила, и оно перемещается в направлении действия силы, 
                              то сила совершает механическую работу, равную произведению модуля силы и модуля 
                              перемещения. Если перемещения нет, то работа равна нулю. Работа на замкнутой 
                              траектории (один полный круг стадиона) равна нулю.                      
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                Если на тело действует сила, и оно перемещается в направлении действия силы, 
                                то сила совершает механическую работу, равную произведению модуля силы и модуля 
                                перемещения. Если перемещения нет, то работа равна нулю. Работа на замкнутой 
                                траектории (один полный круг стадиона) равна нулю. 
                              </div>
                            </div>`
              }
            },
            // СВ 8
            {
              id: 8,
              info: false,
              infoText: '',
              text: `<div class="question-container g-t-c-55-45">
                        <div class="question-container__text">
                          Снайпер стреляет  по свободно падающему с дерева яблоку, находящемуся на расстоянии 
                          50м из высокоточной снайперской  винтовки  ОРСИС Т-5000 (от рус. оружейные системы; 
                          также ORSIS T-5000) . Начальная скорость пули  925 м/с. Куда нужно стрелять снайперу 
                          по падающему яблоку?
                        </div>
                        <div class="question-container__image">
                          <a href="https://ru.wikipedia.org/wiki/%D0%A2-5000" target="_blank">
                            <img src="img/sv-08.jpg">
                          </a>
                        </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `Выше яблока`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 2,
                  text: `Ниже яблока`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 3,
                  text: `По яблоку`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 4,
                  text: `Все эти варианты верны`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! Яблоко падает с ускорением  вниз (g≈10 Н/кг ускорение свободного падения, 
                              оно  для всех тел  одинаково). С таким же ускорением Земля притягивает к себе пулю вниз. 
                              Пуля летит по параболе,  перемещаясь одновременно вверх и в бок. Пуля, все больше и 
                              больше отклоняясь вниз от линии прицеливания. За это же время яблоко перемещается вниз. 
                              Вскоре пуля настегает яблоко.                      
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                Яблоко падает с ускорением  вниз (g≈10 Н/кг ускорение свободного падения, оно  для 
                                всех тел  одинаково). С таким же ускорением Земля притягивает к себе пулю вниз. 
                                Пуля летит по параболе,  перемещаясь одновременно вверх и в бок. Пуля, все больше 
                                и больше отклоняясь вниз от линии прицеливания. За это же время яблоко перемещается 
                                вниз. Вскоре пуля настегает яблоко.
                              </div>
                            </div>`
              }
            },
            // СВ 9
            {
              id: 9,
              info: true,
              infoText: `<fieldset class="question-container__info">
                          <legend>Справка</legend>
                            «Вишня» — название боевого ножа, состоящего на вооружении советских и российских 
                            спецподразделений органов безопасности с 1943 года по настоящее время. Сбалансированный 
                            нож - нож, в котором центр тяжести совпадает с геометрическим центром.
                        </fieldset>`,
              text: `<div class="question-container g-t-c-55-45">
                        <div class="question-container__text">
                          Чтобы найти опытным путем центр тяжести плоского тела сложной формы, необходимо
                        </div>
                        <div class="question-container__image">
                          <a href="https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%88%D0%BD%D1%8F_(%D0%BD%D0%BE%D0%B6)" target="_blank">
                            <img src="img/sv-09-1.jpg">
                          </a>
                        </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `Подвесить тело один раз вместе с привязанным к нему грузом`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 2,
                  text: `Подвесить тело не менее двух раз за разные точки`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 3,
                  text: `Подвесить тело один раз произвольным образом`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 4,
                  text: `Определить центр тяжести такого тела невозможно`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! Данный метод осуществляется путем подвешивания тела на нити за разные его точки 
                              (вдоль нити проводят линии, в той точке, где они пересекаются, лежит центр тяжести). 
                              Центр тяжести плоской фигуры лежит в точке пересечения вертикалей, проведённых через 
                              две любые точки подвеса. 
                            </div>
                            <div class="question-container__image">
                              <img src="img/sv-09-2.png">
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                Данный метод осуществляется путем подвешивания тела на нити за разные его точки 
                                (вдоль нити проводят линии, в той точке, где они пересекаются, лежит центр тяжести). 
                                Центр тяжести плоской фигуры лежит в точке пересечения вертикалей, проведённых через 
                                две любые точки подвеса. 
                              </div>
                              <div class="question-container__image">
                                <img src="img/sv-09-2.png">
                              </div>
                            </div>`
              }
            },
            // СВ 10
            {
              id: 10,
              info: true,
              infoText: `<fieldset class="question-container__info">
                          <legend>Справка</legend>
                            Ф-1 - ручная противопехотная оборонительная граната, предназначена для поражения живой 
                            силы в оборонительном бою. Радиус разлёта осколков (до 150 метров) метать её можно 
                            только из-за укрытия, из бронетранспортёра или из танка.  На вооружение с  1940г.
                        </fieldset>`,
              text: `<div class="question-container g-t-c-55-45">
                        <div class="question-container__text">
                          Под каким углом нужно бросить ручную противопехотную гранату Ф-1 для наибольшей 
                          дальности полета. 
                        </div>
                        <div class="question-container__image">
                          <a href="https://ru.wikipedia.org/wiki/%D0%A4-1_(%D0%B3%D1%80%D0%B0%D0%BD%D0%B0%D1%82%D0%B0)" target="_blank">
                            <img src="img/sv-10-1.jpg">
                          </a>
                        </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `90&#176;`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 2,
                  text: `60&#176;`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 3,
                  text: `45&#176;`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                },
                {
                  id: 4,
                  text: `30&#176;`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    sv: true
                  }
                }
              ],
              comment: {
                incorrect: `<div class="comment-container">
                            <div class="comment-container__text">
                              Не пользуясь формулой  для определения дальности полета  и не зная, что такое синус 
                              угла (<img src="img/sv-10-2.png">), будем рассуждать так. Если тело бросить под углом 90&#176; (т.е. вертикально вверх 
                              над головой), то его высота полёта будет максимальна и тело упадет назад, а его дальность 
                              будет равна 0м. 
                              Если  тело бросить под углом 0&#176; (т.е. ровно пред собой), то его высота полёта будет 
                              равна 0 м  и тело, пролетев вперед очень скоро упадет. Значит нужно выбрать 
                              угол между 0&#176; и 90&#176;. Т.е. 45&#176;  
                            </div>
                          </div>`,
                correct: `<div class="comment-container">
                              <div class="comment-container__text">
                                Верно! Не пользуясь формулой  для определения дальности полета  и не зная, что такое синус 
                                угла (<img src="img/sv-10-2.png">), будем рассуждать так. Если тело бросить под углом 90&#176; (т.е. вертикально вверх 
                                над головой), то его высота полёта будет максимальна и тело упадет назад, а его дальность 
                                будет равна 0м. 
                                Если  тело бросить под углом 0&#176 (т.е. ровно пред собой), то его высота полёта будет 
                                равна 0 м  и тело, пролетев вперед очень скоро упадет. Значит нужно выбрать 
                                угол между 0&#176; и 90&#176;. Т.е. 45&#176;
                              </div>
                            </div>`
              }
            }
          ]
        },
        'ВКС': {
          title: '',
          questions: [
            // ВКС 1
            {
              id: 1,
              info: false,
              infoText: '',
              text: `<div class="question-container g-t-c-55-45">
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
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 2,
                  text: `Нет`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
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
              info: false,
              infoText: '',
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
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 2,
                  text: `больше, чем у подножия`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 3,
                  text: `такое же, как у подножия`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 4,
                  text: `невозможно ответить`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
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
              info: true,
              infoText: `<fieldset class="question-container__info">
                          <legend>Справка</legend>
                          Самая быстра ракета в мире – «Циркон» или 3M22 — 
                          российская гиперзвуковая противокорабельная крылатая ракета,  разрабатываемая «НПО машиностроения». 
                          Скоростные характеристики «Циркона» (9800–11025 км/ч или 2700–3062 м/с) делают её недоступной 
                          для существующих систем ПРО противника.
                        </fieldset>`,
              text: `<div class="question-container">
                        <div class="question-container__text">Космическое тело, упавшее на поверхность 
                        Земли, называется...</div>
                        <div class="question-container__image">
                        <a href="https://ru.wikipedia.org/wiki/%D0%A6%D0%B8%D1%80%D0%BA%D0%BE%D0%BD_(%D1%80%D0%B0%D0%BA%D0%B5%D1%82%D0%B0)" target="_blank">
                        <img src="img/vks-03.jpg"></a></div>
                        
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `Метеорит`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 2,
                  text: `Астероид`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 3,
                  text: `Комета`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 4,
                  text: `Болид`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
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
              info: false,
              infoText: '',
              text: `<div class="question-container g-t-c-55-45">
                        <div class="question-container__text">В каком случае сила Архимеда, действующая на Су-57 - 
                        российский многофункциональный истребитель пятого поколения, созданный ОКБ имени П. О. 
                        Сухого, будет больше: у поверхности земли или на высоте 10 км?</div>
                        <div class="question-container__image">
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
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 2,
                  text: `у поверхности земли`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 3,
                  text: `в обоих случаях равна нулю`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 4,
                  text: `в обоих случаях одинакова и отлична от нуля`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
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
              info: false,
              infoText: '',
              text: `<div class="question-container">
                        <div class="question-container__text">
                          Какие изображенные здесь опыты свидетельствуют о действии закона Паскаля?<hr>
                          <div class="question-container__image"">
                            <img src="img/vks-05-2.jpg">
                          </div>
                        </div>                        
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `№ 3 и № 4`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 2,
                  text: `№ 1 и № 3`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 3,
                  text: `№ 1 и № 4`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 4,
                  text: `№ 1 и № 2`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
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
                            <div class="comment-container__image">
                              <a href="https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%BA%D0%BE%D0%BD_%D0%9F%D0%B0%D1%81%D0%BA%D0%B0%D0%BB%D1%8F" target="_blank">
                                <img src="img/vks-05-1.jpg">
                              </a>
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
                             <div class="comment-container__image">
                              <a href="https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%BA%D0%BE%D0%BD_%D0%9F%D0%B0%D1%81%D0%BA%D0%B0%D0%BB%D1%8F" target="_blank">
                                <img src="img/vks-05-1.jpg">
                              </a>
                             </div>
                            </div>`
              }
            },
            // ВКС 6
            {
              id: 6,
              info: true,
              infoText: `<fieldset class="question-container__info">
                          <legend>Справка</legend>
                          ВД-28 (стоит на МИГ-29), Буквы названиях означают «высотомер двухстрелочный», а  28 - 
                          это максимальная высота измерения 28 км.
                        </fieldset>`,
              text: `<div class="question-container g-t-c-55-45">
                        <div class="question-container__text">Каким физическим прибором измеряется атмосферное 
                        давление? На  принципе работы данного прибора был создан высотомер для самолетов.</div>
                        <div class="question-container__image">
                          <a href="http://avia-simply.ru/visotomer-i-visota-poleta-samoleta/" target="_blank">
                            <img src="img/vks-06.jpg">
                          </a>
                        </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `динамометром`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 2,
                  text: `барометром`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 3,
                  text: `манометром`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 4,
                  text: `термометром`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
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
              info: true,
              infoText: `<fieldset class="question-container__info">
                          <legend>Справка</legend>                          
                          <div class="question-container__info--image">
                            <a href="https://ru.wikipedia.org/wiki/%D0%91%D0%A0%D0%AD%D0%9C-1" target="_blank">
                              <img src="img/vks-07-1.jpg">
                            </a>
                          </div>
                          <div class="question-container__info--text">
                            Бронированная ремонтно-эвакуационная машина 1 (БРЭМ-1, «Объект 608») предназначена для 
                            эвакуации застрявшей и повреждённой техники (БТР, БМП, БМД, танков и др.), в том числе и 
                            из-под огня противника. Обеспечивает необходимый ремонт и техническое обслуживание 
                            в полевых условиях.
                          </div>
                        </fieldset>`,
              text: `<div class="question-container">
                        <div class="question-container__text">Каким механизмом легче поднять груз?
                        </div>
                        <div class="question-container__image"">
                          <img src="img/vks-07-2.jpg">
                        </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `А`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 2,
                  text: `Б`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 3,
                  text: `Одинаково`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
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
              info: true,
              infoText: `<fieldset class="question-container__info">
                          <legend>Справка</legend>                          
                          <div class="question-container__info--image"">
                            <a href="https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D1%81%D0%B0%D1%81%D1%8B%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D0%BA%D0%BE%D1%80%D0%B0%D0%B1%D0%BB%D0%B5%D0%B9" target="_blank">
                              <img src="img/vks-08-3.jpg">
                            </a>
                         </fieldset>`,
              text: `<div class="question-container">
                        <div class="question-container__text">
                          Положите одинаковые книги на стол на расстоянии около 
                          10 см одна от другой. Положите лист бумаги на края обеих книг, чтобы он мостиком лег 
                          между ними. Изо всех сил подуть под лист бумаги.  Вопрос: куда полетит этот листочек?
                        </div>
                        <div class="question-container__image">
                          <img src="img/vks-08-1.jpg">
                        </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `Вверх`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 2,
                  text: `Вниз`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 3,
                  text: `От нас`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 4,
                  text: `К нам`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! До того как вы начали дуть, на лист бумаги действует давление воздуха в равной 
                              степени как сверху, так и снизу. По мере того как скорость потока воздуха под листом 
                              бумаги увеличивается, давление воздуха с другой стороны листа возрастает, а снизу 
                              уменьшается. Таким образом, возрастающее давление воздуха на лист сверху прогибает 
                              его вниз.                      
                            </div>                            
                            <div class="comment-container__image"">
                                <img src="img/vks-08-2.jpg">    
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                            <div class="comment-container__text">
                              До того как вы начали дуть, на лист бумаги действует давление воздуха в равной 
                              степени как сверху, так и снизу. По мере того как скорость потока воздуха под листом 
                              бумаги увеличивается, давление воздуха с другой стороны листа возрастает, а снизу 
                              уменьшается. Таким образом, возрастающее давление воздуха на лист сверху прогибает 
                              его вниз.                      
                            </div>                            
                            <div class="comment-container__image"">
                                <img src="img/vks-08-2.jpg">    
                            </div>
                          </div>`
              }
            },
            // ВКС 9
            {
              id: 9,
              info: false,
              infoText: '',
              text: `<div class="question-container">
                        <div class="question-container__text">
                          Представьте, что воздушный шар уносится непрерывным ветром на юг. Тогда в какую сторону 
                          развиваются флаги на его гондоле?
                        </div>
                        <div class="question-container__image">
                          <a href="https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%B7%D0%B4%D1%83%D1%88%D0%BD%D1%8B%D0%B9_%D1%88%D0%B0%D1%80" target="_blank">
                          <img src="img/vks-09.jpg"></a>
                        </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `В сторону севера`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 2,
                  text: `В сторону юга`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 3,
                  text: `В сторону востока`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 4,
                  text: `Не будут развеваться`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Если шар уносится воздушным течением, значит, по отношению к окружающему его воздуху 
                              он находится в покое. Флаги не станут развиваться на ветру: они будут свисать вниз, 
                              как при безветрии.                      
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                Верно! Если шар уносится воздушным течением, значит, по отношению к окружающему 
                                его воздуху он находится в покое. Флаги не станут развиваться на ветру: они будут 
                                свисать вниз, как при безветрии. 
                              </div>
                            </div>`
              }
            },
            // ВКС 10
            {
              id: 10,
              info: true,
              infoText: `<fieldset class="question-container__info">
                          <legend>Справка</legend>                          
                          <div class="question-container__info--image"">
                            <a href="https://ru.wikipedia.org/wiki/%D0%A4%D0%BB%D0%B5%D1%82%D1%82%D0%BD%D0%B5%D1%80,_%D0%90%D0%BD%D1%82%D0%BE%D0%BD" target="_blank">
                              <img src="img/vks-10-4.jpg">
                            </a></div>
                          </div>
                            <div class="question-container__info--text">
                              Первый "ветроход" - трехмачтовая шхуна "Букау", 
                              созданная Антоном  Флеттнером - немецким авиационным инженером  и изобретателем.
                              Флеттнер заменил парус на судне вращающимся цилиндром.
                            </div>
                         </fieldset>`,
              text: `<div class="question-container">
                        <div class="question-container__text">
                          Возьмите воронку из бумаги или картона и через нее изо всех сил задуйте 
                          свечку как на рисунке.  В какую сторону будет направлено пламя свечи?
                        </div>
                        <div class="question-container__image">
                          <img src="img/vks-10-1.jpg">
                        </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `От наблюдателя (вперед)`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 2,
                  text: `К наблюдатель (назад)`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 3,
                  text: `Верх`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                },
                {
                  id: 4,
                  text: `Погаснет`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    af: true
                  }
                }
              ],
              comment: {
                incorrect: `<div class="comment-container">
                            <div class="comment-container__text">
                              Пламя свечи не только не погаснет, а наоборот, будет поворачиваться в сторону, 
                              наиболее сильного потока. Поскольку плотность газов в пламени свечи меньше, чем 
                              плотность воздуха, то сила, действующая на пламя, меньше, чем сила, действующая 
                              на объем воздуха такой же формы. Следовательно, пламя свечи будет двигаться в 
                              сторону, противоположную направлению силы, т. е.  оно будет отклоняться к  воронке. 
                              А для того чтобы погасить свечу, нужно воронку расположить так, чтобы пламя пришлось 
                              на продолжении линии широкого края воронки, то свечу теперь можно будет задуть очень 
                              легко. Пламя при этом отклонится вперед и загаснет. Опыт показывает, что воздушная струя 
                              в воронке растекается вдоль ее стенок.  
                            </div>
                            <div class="comment-container__image">
                              <img src="img/vks-10-2.jpg">
                            </div>
                          </div>`,
                correct: `<div class="comment-container">
                              <div class="comment-container__text">
                                Верно! Пламя свечи не только не погаснет, а наоборот, будет поворачиваться в сторону, 
                                наиболее сильного потока. Поскольку плотность газов в пламени свечи меньше, чем 
                                плотность воздуха, то сила, действующая на пламя, меньше, чем сила, действующая 
                                на объем воздуха такой же формы. Следовательно, пламя свечи будет двигаться в 
                                сторону, противоположную направлению силы, т. е.  оно будет отклоняться к  воронке. 
                                А для того чтобы погасить свечу, нужно воронку расположить так, чтобы пламя пришлось 
                                на продолжении линии широкого края воронки, то свечу теперь можно будет задуть очень 
                                легко. Пламя при этом отклонится вперед и загаснет. Опыт показывает, что воздушная струя 
                                в воронке растекается вдоль ее стенок.
                              </div>
                              <div class="comment-container__image">
                                <img src="img/vks-10-2.jpg">
                              </div>
                            </div>`
              }
            }
          ]
        },
        'ВМФ': {
          title: '',
          questions: [
            // ВМФ 1
            {
              id: 1,
              info: true,
              infoText: `<fieldset class="question-container__info flex-wrapper--col">
                          <legend>Справка</legend>
                            В 2020-ом году в рамках Военно-Технического форума 
                            "Армия-2020" Концерн Калашников представил обновлённую версию АК-12.
                            <div class="question-container__info-grid">
                              <div>Калибр, мм</div>
                              <div>5,45</div>
                              <div>Скорострельность, выстрелов/мин</div>
                              <div>650</div>
                              <div>Начальная скорость пули, м/с</div>
                              <div>900</div>
                              <div>Прицельная дальность, м</div>
                              <div>1000</div>
                              <div>Вид боепитания</div>
                              <div>магазины: коробчатые на 30 или 60 (6Л31), барабанный на 96 патронов.</div>
                              <div>Прицел</div>
                              <div>съёмный комбинированный секторный, длина прицельной линии — 414 / 583 мм 
                              (открытый / диоптрический)</div>
                            </div>
                        </fieldset>`,
              text: `<div class="question-container">
                        <div class="question-container__text">
                          На одной чаше весов лежит камень, масса которого равна 
                          3,5 кг, на другой – автомат АК-12 без патронов  той же массы. Представим, что весы 
                          опустили под воду. Остались ли чаши в равновесии?
                        </div>
                        <div class="question-container__image">
                          <a href="https://ru.wikipedia.org/wiki/%D0%90%D0%9A-12" target="_blank">
                            <img src="img/vmf-01.jpg">
                          </a>
                        </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `Да`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 2,
                  text: `Нет`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 3,
                  text: `Сначала перевесит автомат, а через минуту перевисит камень`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 4,
                  text: `Сначала перевесит камень, а через минуту перевисит автомат`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                             Верно! Сила Архимеда зависит  от ускорения свободного падения (g≈10 Н/кг, оно  
                             для всех тел одинаково), от  плотности жидкости или газа (во всех случаях вода, значит, 
                             плотность одинакова) и от объема погруженной в жидкость или газ части тела. Камень  имеет 
                             больший объем  (но меньшую плотность),  поэтому на него действует большая выталкивающая 
                             сила. Значит, автомат опустится вниз.                              
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                Сила Архимеда зависит  от ускорения свободного падения (g≈10 Н/кг, оно  для всех 
                                тел одинаково), от  плотности жидкости или газа (во всех случаях вода, значит, 
                                плотность одинакова) и от объема погруженной в жидкость или газ части тела. Камень  
                                имеет больший объем  (но меньшую плотность),  поэтому на него действует большая 
                                выталкивающая сила. Значит, автомат опустится вниз.
                              </div>
                            </div>`
              }
            },
            // ВМФ 2
            {
              id: 2,
              info: false,
              infoText: '',
              text: `<div class="question-container">
                        <div class="question-container__text">
                          Какие изображенные здесь опыты свидетельствуют о действии закона Паскаля?
                        </div>
                        <div class="question-container__image"">
                        <a href="https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%BA%D0%BE%D0%BD_%D0%9F%D0%B0%D1%81%D0%BA%D0%B0%D0%BB%D1%8F" target="_blank">
                        <img src="img/vmf-02.jpg"></a></div> 
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `№ 3 и № 4`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 2,
                  text: `№ 1 и № 3`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 3,
                  text: `№ 1 и № 4`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 4,
                  text: `№ 1 и № 2`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! Закон сформулирован французским учёным Блезом Паскалем в 1653 году. Закон 
                              гласит: Давление, производимое на жидкость или газ, передается в любую точку 
                              без изменений во всех направлениях.<br>
                              Установка №1 и №3 показывают действие закона Паскаля.<br>
                              Установка №2 показывает зависимость давления твердых тел от силы и площади опоры.<br>
                              Установка №4 показывает поверхностное натяжение жидкости.                              
                            </div>
                            <div class="comment-container__image">
                              <a href="https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%BA%D0%BE%D0%BD_%D0%9F%D0%B0%D1%81%D0%BA%D0%B0%D0%BB%D1%8F" target="_blank">
                                <img src="img/vks-05-1.jpg">
                              </a>
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                Закон сформулирован французским учёным Блезом Паскалем в 1653 году. Закон 
                                гласит: Давление, производимое на жидкость или газ, передается в любую точку 
                                без изменений во всех направлениях.<br>
                                Установка №1 и №3 показывают действие закона Паскаля.<br>
                                Установка №2 показывает зависимость давления твердых тел от силы и площади опоры.<br>
                                Установка №4 показывает поверхностное натяжение жидкости. 
                              </div>
                              <div class="comment-container__image">
                                <a href="https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%BA%D0%BE%D0%BD_%D0%9F%D0%B0%D1%81%D0%BA%D0%B0%D0%BB%D1%8F" target="_blank">
                                  <img src="img/vks-05-1.jpg">
                                </a>
                              </div>
                            </div>`
              }
            },
            // ВМФ 3
            {
              id: 3,
              info: true,
              infoText: `<fieldset class="question-container__info">
                          <legend>Справка</legend>
                          <div class="question-container__info--image">
                            <a href="https://ru.wikipedia.org/wiki/%D0%90%D0%A1-12#:~:text=%D0%90%D0%A1%2D12%20(%D0%BF%D0%BE%20%D0%BD%D0%B5%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D0%BC%20%D0%B8%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%B8%D0%BA%D0%B0%D0%BC,%D0%BD%D0%B0%20%D0%B3%D0%BB%D1%83%D0%B1%D0%B8%D0%BD%D1%83%20%D0%B4%D0%BE%206000%20%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%B2%20(" target="_blank">
                              <img src="img/vmf-03-2.jpg">
                            </a>
                          </div>
                          <div class="question-container__info--text">
                            АС-12, известная также как «Лошарик» - российская сверхсекретная глубоководная атомная 
                            подводная лодка , не несущая вооружения и способная погружаться, по некоторым данным, 
                            на глубину до 6000 метров (практически было продемонстрировано погружение аппарата на 
                            глубину до 3000 метров).
                          </div>
                        </fieldset>`,
              text: `<div class="question-container">
                        <div class="question-container__text">
                          В два сосуда, показанные на рисунке, налили по 1 л воды. В каком из 
                          них резиновое дно прогнется больше?
                        </div>
                        <div class="question-container__image">
                          <img src="img/vmf-03-1.jpg">
                        </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `№ 1`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 2,
                  text: `№ 2`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 3,
                  text: `Прогиб будет одинаков`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 4,
                  text: `Сначала больше прогнется №1, а через минуту №2`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 5,
                  text: `Сначала больше прогнется №2, а через минуту №1`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! Давление жидкости зависит от плотности жидкости в сосуде (в обоих сосудах вода), 
                              от ускорения свободного падения (g≈10 Н/кг, оно для всех тел на планете одинаково) 
                              и от высоты уровня жидкости в сосуде. На картинке видно, что уровень жидкости выше во 
                              втором рисунке, следовательно, давление выше в нем и резиновое дно там прогнется сильнее.                              
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                Давление жидкости зависит от плотности жидкости в сосуде (в обоих сосудах вода), 
                                от ускорения свободного падения (g≈10 Н/кг, оно для всех тел на планете одинаково) 
                                и от высоты уровня жидкости в сосуде. На картинке видно, что уровень жидкости выше 
                                во втором рисунке, следовательно, давление выше в нем и резиновое дно там прогнется 
                                сильнее.
                              </div>
                            </div>`
              }
            },
            // ВМФ 4
            {
              id: 4,
              info: true,
              infoText: `<fieldset class="question-container__info flex-wrapper--col">
                          <legend>Справка</legend>
                            <div class="question-container__info--image">
                              <a href="https://ru.wikipedia.org/wiki/%D0%9A-329_%C2%AB%D0%91%D0%B5%D0%BB%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%C2%BB" target="_blank">
                                <img src="img/vmf-04-2.jpg">
                              </a>
                            </div>
                        </fieldset>`,
              text: `<div class="question-container">
                        <div class="question-container__text">
                          К-329 «Белгород» - российская атомная подводная лодка (АПЛ), единственный представитель 
                          проекта 09852, носитель беспилотных подводных аппаратов типа «Посейдон». Подводная лодка 
                          (условно брусок) опускается  в Тихом океане (условно аквариум). В каком из положений 
                          действующая на него сила Архимеда будет наибольшей?
                        </div>
                        <div class="question-container__image">
                          <img src="img/vmf-04-1.jpg">
                        </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `1`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 2,
                  text: `2`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 3,
                  text: `3`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 4,
                  text: `Везде одинаково`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! Сила Архимеда зависит  от ускорения свободного падения (g≈10 Н/кг, оно  для 
                              всех тел одинаково), от объема погруженной в жидкость или газ части тела и от  
                              плотности жидкости или газа,  в котором находится тело (во всех случаях морская вода 
                              с одинаковой плотностью). Так вот, во всех случаях объем погруженной части одинаков 
                              (т.е. подводная лодка полностью находится под водой), следовательно, сила Архимеда 
                              одинакова.                           
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                Сила Архимеда зависит  от ускорения свободного падения (g≈10 Н/кг, оно  для всех 
                                тел одинаково), от объема погруженной в жидкость или газ части тела и от  плотности 
                                жидкости или газа,  в котором находится тело (во всех случаях морская вода с 
                                одинаковой плотностью). Так вот, во всех случаях объем погруженной части одинаков 
                                (т.е. подводная лодка полностью находится под водой), следовательно, сила Архимеда 
                                одинакова.
                              </div>
                            </div>`
              }
            },
            // ВМФ 5
            {
              id: 5,
              info: false,
              infoText: '',
              text: `<div class="question-container g-t-c-55-45">
                        <div class="question-container__text">
                          Четыре российских подводных лодки  изготовленные из одинакового материала, 
                          полностью опускаются на дно Белого моря (340 м.) На какую из них действует 
                          наименьшая сила Архимеда?
                        </div>
                        <div class="question-container__image">
                          <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%A1-411_%C2%AB%D0%9E%D1%80%D0%B5%D0%BD%D0%B1%D1%83%D1%80%D0%B3%C2%BB" target="_blank">
                            <img src="img/vmf-05.jpg">
                          </a>
                        </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `КС - 329 «Белгород»`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 2,
                  text: `БС – 64 «Подмосковье»`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 3,
                  text: `БС – 136 «Оренбург»`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 4,
                  text: `БС – 411 «Оренбург»`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! Сила Архимеда зависит  от ускорения свободного падения (g≈10 Н/кг, оно  для 
                              всех тел  одинаково), от  плотности жидкости или газа в котором находится тело 
                              (во всех случаях морская вода, т.е. одинаковая плотность)  и от объема погруженной в 
                              жидкость или газ части тела. Так вот, во всех случаях подводные лодки полностью 
                              погружены, и наименьший объем имеет подводная лодка  БС – 411 «Оренбург».  
                              Следовательно, сила Архимеда наименьшая именно у нее.                      
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                Сила Архимеда зависит  от ускорения свободного падения (g≈10 Н/кг, оно  для всех 
                                тел  одинаково), от  плотности жидкости или газа в котором находится тело (во 
                                всех случаях морская вода, т.е. одинаковая плотность)  и от объема погруженной в 
                                жидкость или газ части тела. Так вот, во всех случаях подводные лодки полностью 
                                погружены, и наименьший объем имеет подводная лодка  БС – 411 «Оренбург».  
                                Следовательно, сила Архимеда наименьшая именно у нее. 
                              </div>
                            </div>`
              }
            },
            // ВМФ 6
            {
              id: 6,
              info: true,
              infoText: `<fieldset class="question-container__info">
                          <legend>Справка</legend>
                            <div class="question-container__info--image">
                              <a href="https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B4%D0%B2%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5_%D0%BB%D0%BE%D0%B4%D0%BA%D0%B8_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0_908_%C2%AB%D0%A2%D1%80%D0%B8%D1%82%D0%BE%D0%BD-2%C2%BB" target="_blank">
                                <img src="img/vmf-06-2.jpg">
                              </a>
                            </div>
                            <div class="question-container__info--text">
                              Сверхмалые подводные лодки проекта 908 «Тритон-2». Состояли на вооружении флота с 
                              1975 года по 1990-е годы. Предназначены для патрулирования акватории портов и рейдов, 
                              доставки и эвакуации водолазов-разведчиков, минирования причалов, кораблей противника, 
                              исследования морского дна.
                            </div>
                        </fieldset>`,
              text: `<div class="question-container">
                        <div class="question-container__text">
                          В каких точках, обозначенных на рисунке, давления  жидкости на сверхмалую 
                          подводную лодку «Тритон -2» будут равными?
                        </div>
                        <div class="question-container__image">
                            <img src="img/vmf-06-1.jpg">
                        </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `С и D`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 2,
                  text: `А и С`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 3,
                  text: `Во всех точках давления будут разными`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 4,
                  text: `В и D`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! Давление жидкости зависит от плотности жидкости в сосуде (плотность одинакова, 
                              т.к. в сосуде вода), от ускорения свободного падения (g≈10 Н/кг, оно для всех тел 
                              одинаково) и от высоты уровня жидкости в сосуде. На рисунке видно, что уровень жидкости 
                              одинаков в т. С и т.D, следовательно, давление в этих точках одинаково.                      
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                Давление жидкости зависит от плотности жидкости в сосуде (плотность одинакова, 
                                т.к. в сосуде вода), от ускорения свободного падения (g≈10 Н/кг, оно для всех тел 
                                одинаково) и от высоты уровня жидкости в сосуде. На рисунке видно, что уровень 
                                жидкости одинаков в т. С и т.D, следовательно, давление в этих точках одинаково. 
                              </div>
                            </div>`
              }
            },
            // ВМФ 7
            {
              id: 7,
              info: false,
              infoText: '',
              text: `<div class="question-container">
                        <div class="question-container__text">
                          Новейший патрульный катер проекта 03160 "Раптор" 
                          (в переводе с английского - "хищник") во время преследования  вражеского судна переплывает 
                          реку Неву, которая впадает в Невскую губу Финского залива, относящегося к Балтийскому морю. 
                          Как при этом преследовании меняется сила Архимеда, действующая на катер?
                        </div>
                        <div class="question-container__image">
                          <a href="https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D1%82%D1%80%D1%83%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5_%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B0_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0_03160" target="_blank">
                          <img src="img/vmf-07.jpg"></a>
                        </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `Увеличивается`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 2,
                  text: `Уменьшается`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 3,
                  text: `Не меняется`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 4,
                  text: `Может увеличиваться или уменьшатся`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! Сила Архимеда зависит  от ускорения свободного падения (g≈10 Н/кг, оно  
                              для всех тел  одинаково), от  плотности жидкости или газа в котором находится тело 
                              (плотность морской воды выше плотности речной воды)  и от объема погруженной в 
                              жидкость или газ части тела (в речной воде объем погруженной части катера будет 
                              больше, чем в морской).  Увеличение плотности компенсируется уменьшением объема 
                              погруженной части катера.  При этом выталкивающая сила в обоих случаях будет 
                              неизменной.                      
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                Сила Архимеда зависит  от ускорения свободного падения (g≈10 Н/кг, оно  
                                для всех тел  одинаково), от  плотности жидкости или газа в котором находится тело 
                                (плотность морской воды выше плотности речной воды)  и от объема погруженной в 
                                жидкость или газ части тела (в речной воде объем погруженной части катера будет 
                                больше, чем в морской).  Увеличение плотности компенсируется уменьшением объема 
                                погруженной части катера.  При этом выталкивающая сила в обоих случаях будет 
                                неизменной. 
                              </div>
                            </div>`
              }
            },
            // ВМФ 8
            {
              id: 8,
              info: true,
              infoText: `<fieldset class="question-container__info flex-wrapper--col">
                          <legend>Справка</legend>
                          <div class="question-container__info--image">
                            <a href="https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B4%D0%B2%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5_%D0%BB%D0%BE%D0%B4%D0%BA%D0%B8_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0_955_%C2%AB%D0%91%D0%BE%D1%80%D0%B5%D0%B9%C2%BB" target="_blank">
                              <img src="img/vmf-08-2.jpg">
                            </a>
                          </div>
                        </fieldset>`,
              text: `<div class="question-container">
                        <div class="question-container__text">
                          Представим себе, что Вы командир стратегической атомной  подводной  
                          лодки проекта 955 «Борей» 4-го поколения, вооружённой 16 БРПЛ Р-30 «Булава».  
                          Перед Вами подлодка врага и у Вас осталась только одна торпеда. Вы с большой 
                          вероятностью (100%) попадаете во врага. Куда Вы выстрелите?
                        </div>
                        <div class="question-container__image">
                          <img src="img/vmf-08-1.jpg">
                        </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `В носовую часть`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true,
                    navy: true
                  }
                },
                {
                  id: 2,
                  text: `В кормовую часть`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 3,
                  text: `В балластные цистерны в средней части`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 4,
                  text: `В надстройку`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! Торпедный отсек находится  в носовой части подводной 
                              лодки и правильней всего будет выстрелить именно туда. От первого же попадания 
                              сдетонирует   боевой запас и подводную лодку  разорвет на части.                      
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                Торпедный отсек находится  в носовой части подводной 
                                лодки и правильней всего будет выстрелить именно туда. От первого же попадания 
                                сдетонирует   боевой запас и подводную лодку  разорвет на части.
                              </div>
                            </div>`
              }
            },
            // ВМФ 9
            {
              id: 9,
              info: true,
              infoText: `<fieldset class="question-container__info flex-wrapper--col">
                          <legend>Справка</legend>
                            Тяжёлый авианесущий крейсер проекта 1143.5 «Адмирал Флота 
                            Советского Союза Кузнецов». В 2017 году крейсер вернулся из похода в Сирию.
                            <div class="question-container__info-grid">
                              <div>Наибольшее Водоизмещение</div>
                              <div>61 390 т</div>
                              <div>Наибольшая Длина</div>
                              <div>306,45 м</div>
                              <div>Наибольшая Ширина</div>
                              <div>71,96 м</div>
                              <div>Габаритная Высота</div>
                              <div>64,49 м</div>
                            </div>
                        </fieldset>`,
              text: `<div class="question-container">
                        <div class="question-container__text">
                          В бассейне плавает лодка. Как изменится уровень воды в бассейне, если из лодки в 
                          бассейн бросить тяжелый камень?
                        </div>
                        <div class="question-container__image">
                          <a href="https://ru.wikipedia.org/wiki/%D0%90%D0%B4%D0%BC%D0%B8%D1%80%D0%B0%D0%BB_%D0%A4%D0%BB%D0%BE%D1%82%D0%B0_%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%A1%D0%BE%D1%8E%D0%B7%D0%B0_%D0%9A%D1%83%D0%B7%D0%BD%D0%B5%D1%86%D0%BE%D0%B2" target="_blank">
                          <img src="img/vmf-09.jpg"></a>
                        </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `Увеличится`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 2,
                  text: `Уменьшится`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 3,
                  text: `Не изменится`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 4,
                  text: `Может и увеличиться и уменьшится`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                }
              ],
              comment: {
                correct: `<div class="comment-container">
                            <div class="comment-container__text">
                              Верно! Если камень из лодки выбросить в бассейн, то уровень воды в бассейне понизится. 
                              Это происходит потому, что лодка становится легче, она всплывает и объем вытесняемой 
                              ею воды уменьшается. Объем камня не повлияет на уровень воды, т.к. его объем меньше, 
                              чем объем погруженной части лодки.                      
                            </div>
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">
                                При погружении лодки с камнем в воду, уровень воды в бассейне повышается прямо 
                                пропорционально этому объёму. При выбрасывании камня из лодки, лодка слегка всплывает, 
                                то есть уменьшается объём на который она погружена, но при этом камень, теперь 
                                находящийся в воде будет вытеснять из бассейна дополнительный объём воды. Но камень 
                                занимает меньший объем, чем объем погруженной части лодки. Поэтому при выбрасывании 
                                камня из лодки уровень воды в бассейне понижается. 
                              </div>
                            </div>`
              }
            },
            // ВМФ 10
            {
              id: 10,
              info: false,
              infoText: '',
              text: `<div class="question-container">
                        <div class="question-container__text">
                          При создании тяжёлого ракетного подводного крейсера стратегического назначения 
                          проекта 941 «Акула» , были изготовлены три модели одинакового объема. Их полностью 
                          погружают  в морскую воду. Первая модель стальная, вторая - алюминиевая, третья - 
                          деревянная. На какую из моделей действует большая Архимедова сила?
                        </div>
                        <div class="question-container__image">
                          <a href="https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B4%D0%B2%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5_%D0%BB%D0%BE%D0%B4%D0%BA%D0%B8_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0_941_%C2%AB%D0%90%D0%BA%D1%83%D0%BB%D0%B0%C2%BB" target="_blank">
                            <img src="img/vmf-10.png">
                          </a>
                        </div>
                     </div>`,
              answers: [
                {
                  id: 1,
                  text: `на деревянную`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 2,
                  text: `на алюминиевую`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 3,
                  text: `на стальную`,
                  correct: false,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                },
                {
                  id: 4,
                  text: `на все три тела архимедова сила действует одинаково`,
                  correct: true,
                  style: {
                    correct: false,
                    incorrect: false,
                    navy: true
                  }
                }
              ],
              comment: {
                incorrect: `<div class="comment-container">
                            <div class="comment-container__text">
                              Сила Архимеда зависит  от ускорения свободного падения (g≈10 Н/кг, оно  для 
                              всех тел  одинаково), от  плотности жидкости или газа в котором находится тело 
                              (плотность морской воды одинакова)  и от объема погруженной в жидкость или газ 
                              части тела (все три модели полностью погружены в воду и имеют одинаковый объем 
                              по условию). Масса тела не влияет на выталкивающую силу, от нее зависит условие 
                              плавания тела. Поэтому  выталкивающая сила во всех случаях будет неизменной.  
                            </div>
                          </div>`,
                correct: `<div class="comment-container">
                              <div class="comment-container__text">
                                Верно! Сила Архимеда зависит  от ускорения свободного падения (g≈10 Н/кг, оно  
                                для всех тел  одинаково), от  плотности жидкости или газа в котором находится 
                                тело (плотность морской воды одинакова)  и от объема погруженной в жидкость или 
                                газ части тела (все три модели полностью погружены в воду и имеют одинаковый объем 
                                по условию). Масса тела не влияет на выталкивающую силу, от нее зависит условие 
                                плавания тела. Поэтому  выталкивающая сила во всех случаях будет неизменной.
                              </div>
                            </div>`
              }
            }
          ]
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
        {name: 'Сухопутные войска', id: 1, short: 'СВ', style: { sv: true }},
        {name: 'Воздушно-космические силы', id: 2, short: 'ВКС', style: { af: true }},
        {name: 'Военно-морской флот', id: 3, short: 'ВМФ', style: { navy: true }}
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
          hide: false,
          leave: false
        },
        levelSelect: {
          hide: true
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
        },
        viewer: {
          slide: false
        },
        button: {
          navy: false,
          sv: false,
          af: false
        }
      },
      started: false,
      index: 0,
      points: 0,
      viewerContent: '',
      shoulderStraps: {
        'ВКС': [
          {
            name: 'Рядовой',
            img: 'img/svg/vks-0.svg'
          },
          {
            name: 'Мл. лейтенант',
            img: 'img/svg/vks-1.svg'
          },
          {
            name: 'Лейтенант',
            img: 'img/svg/vks-2.svg'
          },
          {
            name: 'Ст. лейтенант',
            img: 'img/svg/vks-3.svg'
          },
          {
            name: 'Капитан',
            img: 'img/svg/vks-4.svg'
          },
          {
            name: 'Майор',
            img: 'img/svg/vks-5.svg'
          },
          {
            name: 'Подполковник',
            img: 'img/svg/vks-6.svg'
          },
          {
            name: 'Полковник',
            img: 'img/svg/vks-7.svg'
          },
          {
            name: 'Генерал-майор',
            img: 'img/svg/vks-8.svg'
          },
          {
            name: 'Генерал-лейтенант',
            img: 'img/svg/vks-9.svg'
          },
          {
            name: 'Генерал-полковник',
            img: 'img/svg/vks-10.svg'
          }
        ],
        'СВ': [
          {
            name: 'Рядовой',
            img: 'img/svg/sv-0.svg'
          },
          {
            name: 'Мл. лейтенант',
            img: 'img/svg/sv-1.svg'
          },
          {
            name: 'Лейтенант',
            img: 'img/svg/sv-2.svg'
          },
          {
            name: 'Ст. лейтенант',
            img: 'img/svg/sv-3.svg'
          },
          {
            name: 'Капитан',
            img: 'img/svg/sv-4.svg'
          },
          {
            name: 'Майор',
            img: 'img/svg/sv-5.svg'
          },
          {
            name: 'Подполковник',
            img: 'img/svg/sv-6.svg'
          },
          {
            name: 'Полковник',
            img: 'img/svg/sv-7.svg'
          },
          {
            name: 'Генерал-майор',
            img: 'img/svg/sv-8.svg'
          },
          {
            name: 'Генерал-лейтенант',
            img: 'img/svg/sv-9.svg'
          },
          {
            name: 'Генерал-полковник',
            img: 'img/svg/sv-10.svg'
          }
        ],
        'ВМФ': [
          {
            name: 'Матрос',
            img: 'img/svg/vmf-0.svg'
          },
          {
            name: 'Мл. лейтенант',
            img: 'img/svg/vmf-1.svg'
          },
          {
            name: 'Лейтенант',
            img: 'img/svg/vmf-2.svg'
          },
          {
            name: 'Ст. лейтенант',
            img: 'img/svg/vmf-3.svg'
          },
          {
            name: 'Капитан-лейтенант',
            img: 'img/svg/vmf-4.svg'
          },
          {
            name: 'Капитан 3-го ранга',
            img: 'img/svg/vmf-5.svg'
          },
          {
            name: 'Капитан 2-го ранга',
            img: 'img/svg/vmf-6.svg'
          },
          {
            name: 'Капитан 1-го ранга',
            img: 'img/svg/vmf-7.svg'
          },
          {
            name: 'Контр-адмирал',
            img: 'img/svg/vmf-8.svg'
          },
          {
            name: 'Вице-адмирал',
            img: 'img/svg/vmf-9.svg'
          },
          {
            name: 'Адмирал',
            img: 'img/svg/vmf-10.svg'
          }
        ]
      },
      usernameControlsVisible: true,
      levelSelectControlsVisible: false,
      strapVisible: false,
      commentPrevent: false,
      finalStageVisible: false,
      finalStage: ''
    }
  },
  watch: {
    index: function (val, oldVal) {
      if (val === this.questions.length) {
        this.index = this.questions.length - 1
      }
      this.commentPrevent = false
      this.questions[this.index].task.answers = _.shuffle(this.questions[this.index].task.answers)
    },
    points: function (val, oldVal) {
      this.strapVisible = false
      let that = this
      setTimeout(function () {
        that.strapVisible = true
      }, 10)
    },
    currentCategory: function (val, oldVal) {
      if(val === 'СВ') {
        this.classes.button.sv = true
      }
      if(val === 'ВКС') {
        this.classes.button.af = true
      }
      if(val === 'ВМФ') {
        this.classes.button.navy = true
      }
    }
  },
  computed: {
    isStarted() {
      return this.started
    },
    isCommentVisible() {
      return !_.isNil(this.questions[this.index].task.comment) && this.questions[this.index].prevent && !this.commentPrevent
    },
    isUsernameControlsVisible() {
      return this.usernameControlsVisible
    },
    isLevelSelectControlsVisible() {
      return this.levelSelectControlsVisible
    },
    isInfoVisible() {
      return this.questions[this.index].task.info && this.questions[this.index].prevent
    },
    shoulderStrap() {
      return `<div class="strap-title">${this.shoulderStraps[this.currentCategory][this.points].name}</div>
              <div><img src="${this.shoulderStraps[this.currentCategory][this.points].img}"></div>`
    },
    isStrapVisible() {
      return this.strapVisible
    },
    isFinalStageVisible() {
      return this.finalStageVisible
    }
  },
  mounted() {
  },
  methods: {
    start() {
      this.usernameControlsVisible = false
      this.levelSelectControlsVisible = true
    },
    startClick() {
      if (this.username !== '') {
        this.start()
      }
    },
    handleStartKeyPressed(val) {
      if(val.key === 'Enter' && this.username !== '') {
        this.start()
      }
    },
    handleClickLevelSelect(val) {
      this.levelSelectControlsVisible = false
      this.classes.startPage.leave = true
      this.started = true
      let that = this
      setTimeout(function () {
        that.classes.startPage['hide'] = true
        that.strapVisible = true
      }, 1000)
      if (val) {
        this.currentCategory = val.short
      }
      this.loadQuestions(this.currentCategory)
    },
    loadQuestions(cat) {
      for (let i = 0; i < this.questions.length; i++) {
        this.questions[i].task = _.cloneDeep(this.categories[cat].questions[i])
      }
    },
    handleStarClick(val) {
      if (!this.questions[this.index].prevent) {
        let item = this.questions[this.questions.findIndex(i => i.id === val)]
        this.loadQuestion(item)
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
          this.points++
        }
        let cat = this.currentCategory
        this.questions[this.index].task.answers.forEach(function (item) {
          if(cat === 'СВ') {
            item.style.sv = false
          }
          if(cat === 'ВКС') {
            item.style.af = false
          }
          if(cat === 'ВМФ') {
            item.style.navy = false
          }
          if (item.correct) {
            item.style.correct = true
          } else {
            item.style.incorrect = true
          }
          if (item.id === id) {
            item.style['selected'] = true
          }
        })
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
      this.questions[this.index].disabled = true
      this.currentPage = 'main'
      this.index++
      if (!_.isNil(this.questions[this.index])) {
        this.questions[this.index].disabled = false
      } else {
        this.final()
      }
    },
    showComment() {
      if( !this.commentPrevent) {
        this.classes.rotation.rotate = true
      }
      this.commentPrevent = true
    },
    handleInfoClick() {
      this.viewerContent = this.questions[this.index].task.infoText
      this.classes.viewer.slide = true
    },
    final() {
      let stars = ''
      for(let i = 0; i < this.questions.length; i++) {
        if (i < this.points) {
          stars += '&#9733;'
        } else {
          stars += '&#9734;'
        }
      }
      this.finalStage = `<div class="final-stage__header">${this.username},<br> поздравляем с прохождением дороги славы!</div>
                          <div class="final-stage__stars">${stars}</div>
                          <div class="final-stage__text">
                            Вам присвоено звание ${this.shoulderStraps[this.currentCategory][this.points].name}
                          </div>
                          <div class="final-stage__straps">
                            <img src="${this.shoulderStraps[this.currentCategory][this.points].img}" 
                            class="final-stage__strap final-stage__strap--left">
                            <img src="${this.shoulderStraps[this.currentCategory][this.points].img}" 
                            class="final-stage__strap final-stage__strap--right">
                          </div>`
      this.finalStageVisible = true
    }
  }
})
