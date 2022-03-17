export declare class Log {
    static color: {
        info: string;
        debug: string;
        warn: string;
        error: string;
    };
    static i(message: string, ...vars: any[]): void;
    static d(message: string, ...vars: any[]): void;
    static w(message: string, ...vars: any[]): void;
    static c(color: string, message: string, ...vars: any[]): void;
    static e(message: string, ...vars: any[]): void;
    static throw(message: string, errorCode?: number): void;
    static o(color: string, message: string, ...vars: any[]): void;
}
