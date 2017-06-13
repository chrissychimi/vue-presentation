import mixins from '@/mixins/mixins'

describe('mixins.js', () => {
  it('getWindowWidth should return a number', () => {
    expect(mixins.methods.getWindowWidth()).to.be.a('number')
  })
  it('getWindowHeight should return a number', () => {
    expect(mixins.methods.getWindowHeight()).to.be.a('number')
  })
  it('getWindowWidth should return correct value', () => {
    let wid = window.innerWidth
    expect(mixins.methods.getWindowWidth()).to.equal(wid)
  })
  it('getWindowWidth should fallback in null scenarios', () => {
    let ht = window.innerHeight
    expect(mixins.methods.getWindowHeight()).to.equal(ht)
  })
})
