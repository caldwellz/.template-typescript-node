import { expect } from 'chai';
import app from './app';

describe('app example', () => {
  it('has a pending test');
  it('should do math correctly', () => {
    expect(app()).to.equal(0);
    expect(app(1)).to.equal(1);
    expect(app(1, 1)).to.equal(2);
  });
  it('has the testing environment set correctly', () => {
    expect(process.env.NODE_ENV).to.equal('testing');
  });
});
