import test from 'ava';
import m from '.';

const buf = (input, ...args) => m(Buffer.from(input), ...args).toString();

test('main', t => {
	t.is(buf('foobar', 3, 3, 'foo'), 'foofoo');
	t.is(buf('foobar', 5, 3, '1'), 'fooba1');
	t.is(buf('unicorn', 3, 4, 'verse'), 'universe');
	t.is(buf('unicorn', 3, 4, 'verse'), 'universe');
	t.is(buf('example', 0, 0, 'a'), 'aexample');
	t.is(buf('exam\nple', null, null, 'a'), 'aexam\nple');
	t.is(buf('example', 2, 0, 'a'), 'exaample');
	t.is(buf('\u0024example', 3, 1, ''), '$exmple');
	t.is(buf('foobar', 0, 999, 'unicorn'), 'unicorn');
	t.is(buf('foobar', 999, 1, 'foo'), 'foobarfoo');
});

test('throws on wrong input', t => {
	t.throws(m.bind(null, 'foo'), 'Expected a `Buffer`, got `string`');
});
