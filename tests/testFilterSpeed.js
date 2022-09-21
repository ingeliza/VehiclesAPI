import {test} from 'uvu';
import * as assert from 'uvu/assert';
import filterSpeed from '../filters/filterBySpeed.js';

test('do not remove position where speed is 10', () => {
    assert.is(filterSpeed({'speed':10}), true);
})

test('do not remove position where speed is 100', () => {
    assert.is(filterSpeed({'speed':100}), true);
})

test('do not remove position where speed is 20', () => {
    assert.is(filterSpeed({'speed':20}), true);
})
test('remove position where speed is 3', () => {
    assert.is(filterSpeed({'speed':3}), false);
})
test('remove position where speed is 150', () => {
    assert.is(filterSpeed({'speed':150}), false);
})

test.run();