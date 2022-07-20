
const LoggerType = {
    INFO: 'INFO',
    ERROR: 'ERROR',
    WRANING: 'WRANING',
}

// class LoggerRequest {
//     /**
//      * 日志保存接口
//      * @param data
//      */
//     static save(data) {
//
//     }
// }
/**
 * 日志处理
 */
export class Logger {

    constructor() {
        this.showLevel = LoggerType.INFO
    }

    static setLevel(type) {
        this.showLevel = type
    }

    static Info() {
    }
}

