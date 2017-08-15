'use strict';
module.exports = (input, i, count, insert) => {
	if (!Buffer.isBuffer(input)) {
		throw new TypeError(`Expected a \`Buffer\`, got \`${typeof input}\``);
	}

	const index = i > input.length ? input.length : i;
	const cnt = count > input.length ? input.length : count;
	const insertBuf = Buffer.from(insert);
	const start = input.slice(0, i);
	const end = input.slice(i + cnt);
	const len = index + insertBuf.length + end.length;

	return Buffer.concat([start, insertBuf, end], len);
};
