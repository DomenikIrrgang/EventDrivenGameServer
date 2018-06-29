export function createInstance(constructor, args) {
    let newInstance : any = () => {
      return constructor.apply(this, args);
    }
    newInstance.prototype = constructor.prototype;
    return new newInstance();
}

export function mixClass(source, target) {
	for (let property in source) {
		if (source.hasOwnProperty(property)) {
		  target[property] = source[property];
		}
	}
}