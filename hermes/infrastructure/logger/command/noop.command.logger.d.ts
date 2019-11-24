import { Command } from '../../../domain/command/command';
import { CommandLogger } from '../../../domain/command/command.logger';
export declare class NoopCommandLogger extends CommandLogger {
    start(): void;
    stop(): void;
    log(command: Command): void;
}
