class AjaxAdapter extends Adapter {
    constructor() {
        super();
    }

    // ...
}

class NodeAdapter extends Adapter {
    constructor() {
        super();
    }

    // ...
}

class HttpRequester {
    constructor(private readonly adapter: Adapter) {
    }

    async fetch<T>(url: string): Promise<T> {
        if (this.adapter instanceof AjaxAdapter) {
            const response = await makeAjaxCall<T>(url);
            // transform response and return
        } else if (this.adapter instanceof NodeAdapter) {
            const response = await makeHttpCall<T>(url);
            // transform response and return
        }
    }
}

function makeAjaxCall<T>(url: string): Promise<T> {
    // request and return promise
}

function makeHttpCall<T>(url: string): Promise<T> {
    // request and return promise
}