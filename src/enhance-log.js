"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
class Log {
    static i(message, ...vars) {
        Log.o(Log.color.info, message, ...vars);
    }
    static d(message, ...vars) {
        Log.o(Log.color.debug, message, ...vars);
    }
    static w(message, ...vars) {
        Log.o(Log.color.warn, message, ...vars);
    }
    static c(color = Log.color.debug, message, ...vars) {
        Log.o(color, message, ...vars);
    }
    static e(message, ...vars) {
        Log.o(Log.color.error, message, ...vars);
    }
    static throw(message, errorCode = 0) {
        throw new Error(`Code ${errorCode}: ${message}`);
    }
    static o(color, message, ...vars) {
        const date = new Date;
        const dateFormated = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2) + " " + ("000" + date.getMilliseconds()).slice(-4);
        console.log("%c" + "[" + dateFormated + "] " + message, "color:" + color + "; font-weight:bold", ...vars);
    }
}
exports.Log = Log;
Log.color = {
    info: '#EEEEEE',
    debug: '#6666FF',
    warn: '#FF6633',
    error: '#FF3333'
};
