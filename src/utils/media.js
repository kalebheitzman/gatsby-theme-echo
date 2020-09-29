/**
 * Media Query Breakpoints
 */

// breakpoints
export const bp = {
	tablet_up: 576,
	tablet_side: 770,
	desktop: 992,
	large_desktop: 1200
};

// map the breakpoints
const mq = n => {
	const bpArray = Object.keys(bp).map(key => [key, bp[key]]);

	const [result] = bpArray.reduce((acc, [name, size]) => {
			if (n === name) return [...acc, `@media (min-width: ${size}px)`];
			return acc;
	}, []);

	return result;
};

// export the breakpoints
export default mq;