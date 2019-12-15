import { catchProbability } from './pokemon-item'

describe('Catch Probability', () => {

  /**
   * test catchProbability with value between 50.xxxx and 100
   */
  it('return catch probability true', () => {
    const value = 50.2222
    expect(catchProbability(value)).toBe(true)
  })
  
  /**
   * test catchProbability with value under 50 (between 0 and 50)
   */
  it('return catch probability false', () => {
    const value = 43
    expect(catchProbability(value)).toBe(false)
  })
})


