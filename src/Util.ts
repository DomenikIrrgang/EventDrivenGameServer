
export function mixClass(source, target) {
	for (let property in source) {
		if (source.hasOwnProperty(property)) {
		  target[property] = source[property];
		}
	}
}