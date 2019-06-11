import { Logger } from 'util/cdk/logger/logger';
export declare class ConsoleLogger extends Logger {
    warn(text: string): void;
    error(text: string): void;
}
