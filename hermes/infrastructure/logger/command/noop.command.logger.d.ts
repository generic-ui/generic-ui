import { CommandLogger } from '../../../domain/command/command.logger';
import { Command } from '../../../domain/command/command';
export declare class NoopCommandLogger extends CommandLogger {
    start(): void;
    stop(): void;
    protected print(command: Command): void;
}
