import winston from "winston"
import winstonDaily from "winston-daily-rotate-file"

/** logs 디렉토리에 로그파일 저장 */
const DIR = "logs";

type LOG_TYPE = "info" | "error" | "warn" | "http" | "verbose" | "debug" | "silly";

class Daily {
    type : LOG_TYPE;
    datePattern : string;
    format : winston.Logform.Format;
    dirname : string;
    filename : string;
    maxFiles : number;
    zippedArchive : boolean;

    constructor(type : LOG_TYPE) {
        this.type = type;
        this.datePattern = 'YYYY-MM-DD';
        this.format = this.Format();        
        this.dirname = `${DIR}/${type}`; /** error.log 파일은 /logs/{{type}} 하위에 저장 */
        this.filename = `%DATE%.log`; /** YYYY-MM-DD.log 형식으로 생성 */
        this.maxFiles = 30; /** 30일치 로그 파일 저장 (30일 이 지나면 맨앞의 로그부터 자동으로 지움) */
        this.zippedArchive = true; /** 오래된 로그 파일을 .gz(gzip) 형식으로 압축해서 보관할지 여부 */
    }

    Format() {
        
        return winston.format(info => { return info.level === this.type ? info : false })()
    }
}

const Logger = winston.createLogger({
    level : "debug",
    // silent : false, /** Logger의 모든 로그 출력 및 저장을 비활성화할지 여부 */
    format : winston.format.combine(
        winston.format.timestamp({format : "YYYY.MM.DD HH:mm:ss"}),
        winston.format.printf(info => {
        const { timestamp, level, message, ...meta } = info;

        const metaString = Object.keys(meta).length ? `${JSON.stringify(meta)}`: "";

        return `${timestamp} ${level}: ${message} ${metaString}`;    
    })),
    transports : [
        new winstonDaily(new Daily("info")),
        new winstonDaily(new Daily("error")),
        new winstonDaily(new Daily("warn")),
        new winstonDaily(new Daily("http"))
    ]
})

Logger.add(
    new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(), /** 터미널 에 출력시 색상 적용 */
            winston.format.simple()
        ),
    })
);

// Logger.info(`info 찍음`, {name : "111", job : "222"})
// Logger.warn("주의 상황")
// Logger.http("http log222")
// Logger.error(`logger error222`)