export function addNewRequestCallback(target, method: string, path: string, callback: (request, response) => void) {
    target.requestCallbacks.push({
        method,
        path,
        callback
    })
}

export function checkRequestCallbackArrayExists(target) {
    if (target.requestCallbacks === undefined) {
        target.requestCallbacks = [];
    }
}

export interface RequestCallback {
    path: string;
    method: string;
    callback: (request, response) => void;
}