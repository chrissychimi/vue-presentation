import StoreState from '@/components/StoreState'

describe('StoreState.vue unmounted', () => {
  it('should have a data function', () => {
    expect(StoreState.data).to.be.a('function')
  })
})
