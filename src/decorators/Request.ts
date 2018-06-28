/**
 * Injects the request object into that variable.
 * 
 */
export function ExpressRequest(target: any, key: string, index: number) {
	target[key + "ExpressRequest"] = index;
}