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
            {
              id: 1,
              text: `<div class="question-container">
                        <div class="question-container__text">Если в 12 часов ночи идет дождь, то есть ли вероятность, 
                        что через 72 часа будет солнечная погода?</div>
                        <div class="question-container__image""><img src="img/vks-01.jpg"></div> 
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
                              <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B8%D1%80%D1%81%D0%BA%D0%B8%D0%B5#:~:text=%C2%AB%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B8%D1%80%D1%81%D0%BA%D0%B8%D0%B5%C2%BB%20%E2%80%94%20%D0%BC%D0%B0%D1%80%D0%BA%D0%B0%20%D0%B2%D0%BE%D0%B5%D0%BD%D0%BD%D1%8B%D1%85%20%D1%87%D0%B0%D1%81%D0%BE%D0%B2,%D1%87%D0%B0%D1%81%D0%BE%D0%B2%D0%BE%D0%BC%20%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4%D0%B5%20%D1%81%201965%20%D0%B3%D0%BE%D0%B4%D0%B0." target="_blank">Ссылка</a>
                            </div>
                            
                          </div>`,
                incorrect: `<div class="comment-container">
                              <div class="comment-container__text">Нет. Дело в том, что через 72 часа снова будет полночь.</div>
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
          text: function () {
            return this.completed ? `&#9733;` : `&#9734;`
          },
          task: {
            id: 0,
            text: ``,
            answers: [],
            comment: {}
          }
        },
        {
          id: 2,
          disabled: true,
          completed: false,
          text: function () {
            return this.completed ? `&#9733;` : `&#9734;`
          },
          task: {
            id: 0,
            text: ``,
            answers: [],
            comment: {}
          }
        },
        {
          id: 3,
          disabled: true,
          completed: false,
          text: function () {
            return this.completed ? `&#9733;` : `&#9734;`
          },
          task: {
            id: 0,
            text: ``,
            answers: [],
            comment: {}
          }
        },
        {
          id: 4,
          disabled: true,
          completed: false,
          text: function () {
            return this.completed ? `&#9733;` : `&#9734;`
          },
          task: {
            id: 0,
            text: ``,
            answers: [],
            comment: {}
          }
        },
        {
          id: 5,
          disabled: true,
          completed: false,
          text: function () {
            return this.completed ? `&#9733;` : `&#9734;`
          },
          task: {
            id: 0,
            text: ``,
            answers: [],
            comment: {}
          }
        },
        {
          id: 6,
          disabled: true,
          completed: false,
          text: function () {
            return this.completed ? `&#9733;` : `&#9734;`
          },
          task: {
            id: 0,
            text: ``,
            answers: [],
            comment: {}
          }
        },
        {
          id: 7,
          disabled: true,
          completed: false,
          text: function () {
            return this.completed ? `&#9733;` : `&#9734;`
          },
          task: {
            id: 0,
            text: ``,
            answers: [],
            comment: {}
          }
        },
        {
          id: 8,
          disabled: true,
          completed: false,
          text: function () {
            return this.completed ? `&#9733;` : `&#9734;`
          },
          task: {
            id: 0,
            text: ``,
            answers: [],
            comment: {}
          }
        },
        {
          id: 9,
          disabled: true,
          completed: false,
          text: function () {
            return this.completed ? `&#9733;` : `&#9734;`
          },
          task: {
            id: 0,
            text: ``,
            answers: [],
            comment: {}
          }
        },
        {
          id: 10,
          disabled: true,
          completed: false,
          text: function () {
            return this.completed ? `&#9733;` : `&#9734;`
          },
          task: {
            id: 0,
            text: ``,
            answers: [],
            comment: {}
          }
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
      index: 0
    }
  },
  computed: {
    isStarted() {
      return this.started
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
      this.loadQuestions('ВКС')
    },
    loadQuestions(cat) {
      for (let i = 0; i < this.questions.length; i++) {
        this.questions[i].task = _.cloneDeep(this.categories[cat].questions[i])
      }
      console.table(this.questions)
    },
    handleStarClick(val) {
      let item = this.questions[this.questions.findIndex(i => i.id === val)]
      this.loadQuestion(item)
      console.log(item)
    },
    loadQuestion(question) {
      this.currentPage = 'question'
    },
    getComment() {
      return this.questions[this.index].completed ?
        this.questions[this.index].task.comment.correct : this.questions[this.index].task.comment.incorrect
    },
    handleAnswerClick(val) {
      if(val) {

        this.questions[this.index].completed = true
      }
      let that = this
      setTimeout(function () {
        that.classes.rotation.rotate = true
      }, 1000)
    },
    handleCommentClose() {
      this.classes.rotation.rotate = false
      let that = this
      setTimeout(function () {
        that.nextStage()
      }, 1000)
    },
    nextStage() {
      this.currentPage = 'main'
      this.index++
      this.questions[this.index].disabled = false
    }
  }
})
