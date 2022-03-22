import handler from '../index'
describe('Mono Repo - Sum', () => {
  it('should returns 4', () => {
    const result = handler(2, 2)
    expect(result).toBe(1)
  })
})
