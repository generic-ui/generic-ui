import { CommandLogger } from '../../../domain/command/command.logger';
import { Command } from '../../../domain/command/command';
import { AggregateId } from '../../../domain/tactical/aggregate/aggregate-id';
export declare class NoopCommandLogger extends CommandLogger {
    start(): void;
    stop(): void;
    protected print(command: Command<AggregateId>): void;
}
//# sourceMappingURL=noop.command.logger.d.ts.map