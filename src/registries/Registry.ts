export class Registry<T> {
	private items: T[] = [];

	constructor() {}

	public getRegisteredItems(): T[] {
		return this.items;
	}

	public registerItem(item: T) {
		this.items.push(item);
	}
}