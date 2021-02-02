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
          questions: []
        },
        'ВМФ': {
          title: '',
          questions: []
        }
      },
      username: '',
      currentCategory: '',
      currentPage: 'question',
      leave: {
        'leave': false
      },
      startPage: {
        'hide': false
      },
      questions: [
        {
          id: 1,
          disabled: false,
          text: `&#9734;`
        },
        {
          id: 2,
          disabled: false,
          text: `&#9734;`
        },
        {
          id: 3,
          disabled: false,
          text: `&#9734;`
        },
        {
          id: 4,
          disabled: false,
          text: `&#9734;`
        },
        {
          id: 5,
          disabled: true,
          text: `&#9734;`
        },
        {
          id: 6,
          disabled: true,
          text: `&#9734;`
        },
        {
          id: 7,
          disabled: true,
          text: `&#9734;`
        },
        {
          id: 8,
          disabled: true,
          text: `&#9734;`
        },
        {
          id: 9,
          disabled: true,
          text: `&#9734;`
        },
        {
          id: 10,
          disabled: true,
          text: `&#9734;`
        },
      ],
      header: '11111',
      level: 5,
      pageActive: {
        main: {
          'active': true
        },
        question: {
          'active': false
        }
      }
    }
  },
  computed: {
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
      this.leave['leave'] = true
      let that = this
      setTimeout(function () {
        that.startPage['hide'] = true
      },500)
    }
  }
})
