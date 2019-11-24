import { Command } from './command';
export declare abstract class CommandLogger {
    abstract start(): void;
    abstract stop(): void;
    abstract log(command: Command): void;
}
