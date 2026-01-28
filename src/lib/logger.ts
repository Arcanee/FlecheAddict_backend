import winston, { Logger } from 'winston';

let currentInstance: Logger | null = null;

const levels = {
  debug: 4,
  error: 0,
  http: 3,
  info: 2,
  warn: 1,
};

const level = (): string => {
  const env: string = process.env.NODE_ENV ?? 'development';
  const isDevelopment: boolean = env === 'development';
  return isDevelopment ? 'debug' : 'info';
};

const colors = {
  debug: 'white',
  error: 'bold red',
  http: 'magenta',
  info: 'green',
  warn: 'yellow',
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.json(),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (log) =>
      `${log.timestamp as string} | ${log.level.toUpperCase()} | ${log.message as string}`,
  ),
);

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
  }),
  new winston.transports.File({ filename: 'logs/all.log' }),
];

export function getLogger(): Logger {
  currentInstance ??= winston.createLogger({
    format,
    level: level(),
    levels,
    transports,
  });
  return currentInstance;
}
