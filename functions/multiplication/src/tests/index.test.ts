import handler from '../index'
describe('Mono Repo - Multiplication', () => {
  it('should returns 4', () => {
    const result = handler(2, 2)
    expect(result).toBe(4)
  })
})
