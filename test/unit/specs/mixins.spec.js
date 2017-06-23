import Vue from 'vue'
import { mixinsMethods } from '@/mixins/mixins'

const { delay,
        getWindowWidth,
        getWindowHeight
      } = mixinsMethods

describe('mixins.js', () => {
  it('delay should return a promise', done => {
    let ret = delay(10)

    Vue.nextTick(() => {
      expect(ret).to.be.a('promise')
      done()
    })
  })
  it('getWindowWidth should return a number', () => {
    expect(getWindowWidth()).to.be.a('number')
  })
  it('getWindowHeight should return a number', () => {
    expect(getWindowHeight()).to.be.a('number')
  })
  it('getWindowWidth should return correct value', () => {
    let wid = window.innerWidth
    expect(getWindowWidth()).to.equal(wid)
  })
  it('getWindowWidth should fallback in null scenarios', () => {
    let ht = window.innerHeight
    expect(getWindowHeight()).to.equal(ht)
  })
})
