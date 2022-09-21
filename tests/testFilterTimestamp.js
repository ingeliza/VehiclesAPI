import {test} from 'uvu';
import * as assert from 'uvu/assert';
import filterTimestamp from '../filters/filterByTimestamp.js';

test('do not remove position where the latest position is less than 12 hours ', () => {
    assert.is(filterTimestamp({'timestamp':new Date()}), true);
})

test('remove position where the latest position is more than 12 hours', () => {
    assert.is(filterTimestamp({'timestamp':'2015-03-02T09:17:21.291Z'}), false);
})

test.run();