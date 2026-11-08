import {test} from 'node:test';import assert from 'node:assert/strict';import {updateCart,total} from './cart.js';
test('quantity changes are immutable and zero removes an item',()=>{const c={1:2};assert.deepEqual(updateCart(c,1,0),{});assert.deepEqual(c,{1:2});assert.deepEqual(updateCart(c,1,-1),c);});
test('totals use integer paise',()=>{assert.equal(total({1:3},[{id:1,price:19999}]),59997);});
