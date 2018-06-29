
class Injector {
	private instances: any[] = [];

	public getInstance(classDefinition: any): any {
		if (this.instances[classDefinition.name.toLowerCase()] === undefined) {
			this.instances[classDefinition.name.toLowerCase()] = this.createInstance(classDefinition);
		}
		return this.instances[classDefinition.name.toLowerCase()];
	}

	private createInstance(target) {
		let argumentList = this.getConstructorArguments(target["prototype"].constructor);
		let args = [];
		for (let i = 0; i < argumentList.length; i++) {
			if (this.instances[argumentList[i].toString().toLowerCase()] === undefined) {
				throw new Error("Cannot create instance for: " + target.name + ". Dependency: " + argumentList[i] + " is not known.");
			}
			args[i] = this.instances[argumentList[i].toString().toLowerCase()]
		}
		return new target["prototype"].constructor(... args);
	}

	private getConstructorArguments(constructor): string[] {
		let classString = constructor.toString();
		if (classString.indexOf("constructor") === -1) {
			return [];
		}
		let startIndexParamList = classString.indexOf("constructor") + 11
		let endIndexParamList = startIndexParamList;
		while (classString[endIndexParamList] !== ')') {
			endIndexParamList++;
		}
		let args = classString.substring(startIndexParamList + 1, endIndexParamList);
		return args.split(',').map(function(arg) {
		  return arg.replace(/\/\*.*\*\//, '').trim();
		}).filter(function(arg) {
		  return arg;
		});
	  }
	
}

export let injector: Injector = new Injector();