import 'mocha';
import { assert } from 'chai';

import { translate } from '../src';

describe('Translate Function', () => {
  it('should be a function', () => {
    assert.isFunction(translate);
  });

  it('should return the domain: shu.xin', () => {
    const expected = 'shu.xin';
    const actual = translate('舒.心');

    assert.equal(actual, expected);
  });
});
