import Test from '@/components/Test'

describe('Test.vue unmounted', () => {
  it('should have a data function', () => {
    expect(Test.data).to.be.a('function')
  })
})
