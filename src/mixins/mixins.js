export default {
  methods: {
    delay (interval) {
      return new Promise(function (resolve) {
        setTimeout(resolve, interval * 1000)
      })
    },
    getWindowWidth () {
      return window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    },
    getWindowHeight () {
      return window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight
    },
    getRandomNumberMinMax (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + max)
    }
  }
}
