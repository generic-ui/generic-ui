import { CommandLogger } from '../../../domain/command/command.logger';
import { Command } from '../../../api/command/command';
import { AggregateId } from '../../../api/tactical/aggregate/aggregate-id';
export declare class NoopCommandLogger extends CommandLogger {
    start(): void;
    stop(): void;
    protected print(_command: Command<AggregateId>): void;
}
