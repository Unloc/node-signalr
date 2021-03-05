interface Client {
    new (url: string, hubs: string[])
}

export declare const client: Client
export declare const error: any
export declare const connectionState: any