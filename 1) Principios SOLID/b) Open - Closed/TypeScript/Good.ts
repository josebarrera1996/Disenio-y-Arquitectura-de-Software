abstract class Adapter {
    abstract async request<T>(url: string): Promise<T>;

    // code shared to subclasses ...
}

class AjaxAdapter extends Adapter {
    constructor() {
        super();
    }

    async request<T>(url: string): Promise<T> {
        // request and return promise
    }

    // ...
}

class NodeAdapter extends Adapter {
    constructor() {
        super();
    }

    async request<T>(url: string): Promise<T> {
        // request and return promise
    }

    // ...
}

class HttpRequester {
    constructor(private readonly adapter: Adapter) {
    }

    async fetch<T>(url: string): Promise<T> {
        const response = await this.adapter.request<T>(url);
        // transform response and return
    }
}