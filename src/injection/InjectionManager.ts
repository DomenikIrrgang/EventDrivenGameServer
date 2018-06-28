class InjectionManager {
	private functions: any[] = [];

	constructor() {}

	public evaluate

	public addInjectionToFunction(functionName: string, index: number, callback: () => any) {
		if (this.functions[functionName] === undefined) {
			this.functions[functionName] = []
		}
		this.functions[functionName][index] = callback;
	}
}

export let controllerManager: InjectionManager = new InjectionManager();