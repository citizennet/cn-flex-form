import test from 'tape';
import cnFlexFormServiceProvider from '../src/cn-flex-form.service';

const ff = cnFlexFormServiceProvider().$get();

test('getKey', (t) => {
  t.equal(ff.getKey('foo.bar'), 'foo.bar', 'string arg');
  t.equal(ff.getKey(['foo', 'bar']), 'foo.bar', 'array arg');
  t.equal(ff.getKey(['foo', '0', 'bar']), 'foo[0].bar', 'complex array arg');
  t.equal(ff.getKey(['foo', '-1', 'bar']), 'foo[-1].bar', 'negative array arg');
  t.end();
});

test('parseExpression', (t) => {
  const parse = (exp, scope) => ff.parseExpression(exp, scope).get();
  t.equal(parse(), undefined, 'no value');
  t.equal(parse('null'), null, 'null value');
  t.equal(parse('11'), 11, 'numerical value');
  t.equal(parse('foo.bar', { foo: { bar: 'baz' } }), 'baz', 'simple expression');
  t.equal(parse('foo[0].bar', { foo: [{ bar: 'baz' }] }), 'baz', 'complex expression');
  t.equal(parse('foo.bar[1]', { foo: { bar: ['hello', 'world'] } }), 'world', 'complex expression 2');
  t.equal(parse('foo.bar["baz"]', { foo: { bar: { baz: 'hello' } } }), 'hello', 'complex expression 3');
  t.equal(parse('foo.bar[fiz.baz]', { foo: { bar: { a: 'hello', b: 'world' } }, fiz: { baz: 'b' } }),
    'world', 'nested complex expresion');
  t.equal(parse('foo.bar[fiz.baz[0].foz].boz', 
    { foo: { bar: { a: { boz: 'world' } } }, fiz: { baz: [{ foz: 'a' }] } }),
    'world', 'deeply nested complex expresion');
  const foo = [];
  foo[-1] = 'bar';
  t.equal(parse('foo[-1]', { foo }), 'bar', 'negative index');
  t.end();
});

test('getWatchables', (t) => {
  t.looseEqual(ff.getWatchables('schema.data'), ['schema.data'], 'single watchable');
  t.looseEqual(ff.getWatchables('schema.data[model.foo]'), ['model.foo', 'schema.data'],
    'nested watchables');
  t.looseEqual(ff.getWatchables('schema.data[model.foo].boz'), ['model.foo', 'schema.data'],
    'nested watchables variant');
  t.looseEqual(ff.getWatchables('schema.data[0].boz'), ['schema.data[0].boz'], 'array watchable');
  t.looseEqual(ff.getWatchables('schema.data[model.foo[0]].boz'), ['model.foo[0]', 'schema.data'],
    'nested array watchables');
  t.looseEqual(ff.getWatchables('schema.data[model.foo[model.bar[0].biz]].boz'),
    ['model.bar[0].biz', 'model.foo', 'schema.data'],
    'deeply nested array watchables');
  t.looseEqual(ff.getWatchables('schema.data[model.foo[model.bar[-1].biz]].boz'),
    ['model.bar[-1].biz', 'model.foo', 'schema.data'],
    'deeply nested array watchables with negative index');
  t.end();
});

test('replaceArrayIndex', (t) => {
  t.equal(ff.replaceArrayIndex('foo.bar', 'foo.fiz'), 'foo.bar', 'no arrayIndex');
  t.equal(ff.replaceArrayIndex('foo[arrayIndex].bar', 'foo[1].fiz'), 'foo[1].bar', 'standard index');
  t.equal(ff.replaceArrayIndex('foo[arrayIndex].bar', 'foo[-1].fiz'), 'foo[-1].bar', 'negative index');
  t.equal(ff.replaceArrayIndex('fiz.baz[foo[arrayIndex]].bar', 'foo[1].fiz'), 'fiz.baz[foo[1]].bar',
    'nested index');
  // question: is this desired error behavior?
  t.equal(ff.replaceArrayIndex('foo[arrayIndex].bar', 'foo[].fiz'), 'foo[arrayIndex].bar', 'no key index');
  t.end();
});

// don't need this
//test('isInArray', (t) => {
  //t.false(ff.isInArray({ key: 'foo' }), 'is not array item');
  //t.true(ff.isInArray({ key: 'foo[]' }), 'is array item');
  //t.true(ff.isInArray({ key: 'foo[].bar' }), 'is array item prop');
  //t.false(ff.isInArray({ items: [{ key: 'foo' }] }), 'is not array nested item');
  //t.true(ff.isInArray({ items: [{ key: 'foo[].bar' }] }), 'is array nested item');
  //t.true(ff.isInArray({ items: [{ items: [] }, { key: 'foo[].bar' }] }), 'is array nested sibling item');
  //t.true(ff.isInArray({ items: [{ items: [{ key: 'foo[].bar' }] }] }), 'is array deeply nested item');
//});
