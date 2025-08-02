import { 
  sub,
  sum,
} from './calculator';

describe('calculator', () => {
  it('sum(1, 2) === 3', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  it('sub(4, 1) === 3', () => {
    const result = sub(4, 1);
    expect(result).toBe(3);
  });
});
